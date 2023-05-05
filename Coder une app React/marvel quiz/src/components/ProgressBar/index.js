import React from 'react'

const ProgressBar = ({idQuestion, maxQuestions}) => {
  const actualQuestion = idQuestion + 1
  const getWidth = (totalQuestions, questionId) => {
    return (questionId / totalQuestions) * 100
  }
  const progressPercent = getWidth(maxQuestions, actualQuestion)
  console.log(progressPercent)
  return (
    <>
    <div className='percentage'>
        <div className='progressPercent'>{`Question: ${idQuestion +1}/${maxQuestions}`}</div>
        <div className='progressPercent'>{`Progression: ${progressPercent}% `}</div>
    </div>
    <div className='progressBar'>
        <div className='progressBarChange' style={{width:`${progressPercent}%`}}></div>
    </div>
    </>
  )
}

export default React.memo(ProgressBar)