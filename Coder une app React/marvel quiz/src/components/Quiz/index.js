import React, { Component } from 'react'
import Levels from '../Levels'
import ProgressBar from '../ProgressBar'
import {QuizMarvel} from '../quizMarvel'
import QuizOver from '../QuizOver'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import {FaChevronRight} from 'react-icons/fa'

class Quizz extends Component {
  constructor(props) {
    super(props)

    this.initialState = {
      levelNames : ["debutant", "confirme", "expert"],
      quizLevel: 0,
      maxQuestions: 10,
      storedQuestions: [],
      question: null,
      options: [],
      idQuestion: 0,
      btnDisabled: true,
      userAnswer: null,
      score: 0,
      quizEnd: false,
      percent: 0,
      answerNotes: 50
    }
    this.state = this.initialState
  }

  
  storeDataRef = React.createRef();

  loadQuestions = quizz => {
    console.log(quizz)
    const fetchedArrayQuiz = QuizMarvel[0].quizz[quizz]
    console.log(fetchedArrayQuiz)
    if (fetchedArrayQuiz.length >= 10){
      this.storeDataRef.current = fetchedArrayQuiz
      console.log(this.storeDataRef.current)
      const newArray = fetchedArrayQuiz.map(({answer, ...keepRest}) => keepRest)
      this.setState({storedQuestions: newArray})
      
    } else {
      console.log("Pas assez de questions !!")
    }
  }

  componentDidMount(){
    this.loadQuestions(this.state.levelNames[this.state.quizLevel])
  }

  componentDidUpdate(prevProps, prevState) { 
    if ((this.state.storedQuestions !== prevState.storedQuestions) && this.state.storedQuestions.length){

      this.setState({
        question: this.state.storedQuestions[this.state.idQuestion].question, 
        options: this.state.storedQuestions[this.state.idQuestion].options
      })
    }

    if (this.state.quizEnd !== prevState.quizEnd){
      const gradepercent = this.getPercentage(this.state.maxQuestions, this.state.score)
      this.gameOver(gradepercent)

    }

    if ((this.state.idQuestion !== prevState.idQuestion) && this.state.storedQuestions.length){
      this.setState({
        question: this.state.storedQuestions[this.state.idQuestion].question, 
        options: this.state.storedQuestions[this.state.idQuestion].options,
        userAnswer: null,
        btnDisabled: true,
      })
    }
  }
  submitAnswer = (selectedAnswer) => {
    this.setState({
      userAnswer: selectedAnswer,
      btnDisabled:false
    })
  }
  nextQuestion = () => {
    if (this.state.idQuestion === this.state.maxQuestions -1){
      this.setState({
        quizEnd: true
      })
    } else {
      this.setState(prevState => ({
        idQuestion : prevState.idQuestion +1
      }))
    }

    const goodAnswer = this.storeDataRef.current[this.state.idQuestion].answer;
    if (this.state.userAnswer === goodAnswer){
      this.setState(prevState => ({
        score: prevState.score + 1
      }))
    }

  }

  getPercentage = (maxQuest, ourScore) => (ourScore / maxQuest) * 100
  gameOver = percent=> {
    //const gradepercent = this.getPercentage(this.state.maxQuestions, this.state.score)
    if (percent > this.state.answerNotes){
      this.setState({
        quizLevel: this.state.quizLevel + 1,
        percent: percent,
      })
    } else {
      this.setState({
        percent: percent,
        
      })
    }
   
  }

  loadLevelQuestions = param => {
    this.setState({...this.initialState, quizLevel: param})
    this.loadQuestions(this.state.levelNames[param])
  }
  render() {
    /* const = this.props.userData */
    const displayOptions = this.state.options.map((option, index) => {
      return (
        <p 
          className={`answerOptions ${this.state.userAnswer === option ? "selected": null }`}
          key={index}
          onClick={()=> this.submitAnswer(option)}
        >
          <FaChevronRight /> {option}
        </p>
      )
    })

    return this.state.quizEnd ? (
      <QuizOver
       ref={this.storeDataRef}
       levelNames={this.state.levelNames}
       score={this.state.score}
       maxQuestions={this.state.maxQuestions}
       quizLevel={this.state.quizLevel}
       percent={this.state.percent}
       loadLevelQuestions={this.loadLevelQuestions}
       />
    )
    :
    (
      <div>
        <Levels levelNames={this.state.levelNames} quizLevel={this.state.quizLevel}/>
        <ProgressBar idQuestion={this.state.idQuestion} maxQuestions={this.state.maxQuestions}/>
        <h2>{this.state.question}</h2>
        {displayOptions}
        <button
          disabled={this.state.btnDisabled}
          className='btnSubmit'
          onClick={this.nextQuestion}
        >
        {this.state.idQuestion < this.state.maxQuestions - 1 ? "Suivant" : "Terminer"}
        </button>
      </div>
    )
    
  }
  
}

export default Quizz