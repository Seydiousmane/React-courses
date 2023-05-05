import React, {useState, useEffect, Fragment, useContext} from 'react'
import Logout from '../Logout'
import Quizz from '../Quiz'
import { FirebaseContext } from '../Firebase/context'

const Welcome = (props) => {
  const firebase = useContext(FirebaseContext)
  /* const [userSession, setUserSession] = useState(null)

  useEffect(() => {
    let listener = firebase.auth.onAuthStateChanged(user => {
      if(user) {
        setUserSession(user)
      } else {
        props.history.push('/')
      }
    })
  
    return () => {
      listener()
    }
  }, []) */
  
  /* return userSession === null ? (
    <Fragment>
      <div className='loader'>
          <p>Loading...</p>
      </div>
    </Fragment>
  ) : (
    <div className='quiz-bg'>
        <div className='container'>
            Welcome
            <Logout />
            <Quizz />

        </div>
    </div>
  ) */

  return (
    <div className='quiz-bg'>
        <div className='container'>
            Welcome
            {/* <Logout /> */}
            <Quizz />
        </div>
    </div>
  )
  
}

export default Welcome