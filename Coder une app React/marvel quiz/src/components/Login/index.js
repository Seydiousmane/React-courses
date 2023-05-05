import React, {useState, useEffect, useContext} from 'react'
import {Link} from 'react-router-dom'
import { FirebaseContext } from '../Firebase/context'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

function Login(props) {
  const firebase = useContext(FirebaseContext)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [btn, setBtn] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    if (password.length > 5 && email !== ''){
      setBtn(true)
    } else if (btn) {
      setBtn(false)
    }
  }, [password, email, btn])


  const handleEmail = e => {
    setEmail(e.target.value)
  }

  const handlePassword = e => {
    setPassword(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()
    console.log(email, password)
    const auth = getAuth()
    signInWithEmailAndPassword(auth, email, password)
    .then(user => {
      setEmail('')
      setPassword('')
      props.history.push('/welcome')
    })
    .catch(err => {
      console.log(err)
      setError(err)
      setEmail('')
      setPassword('')
    })
  }

  return (
    <div className='signUpLoginBox'>
        <div className='slContainer'>
        <div className='formBoxLeftLogin'>

      </div>
        <div className='formBoxRight'>
            <div className='formContent'>
                  {error !== '' && <span>{error.message}</span>}
                  <h2>Connexion</h2>
                  <form onSubmit={handleSubmit}>

                    <div className='inputBox'>
                      <input type='email' id='email' required autoComplete='off' onChange={handleEmail} value={email} />
                      <label htmlFor='email'>Email</label>
                    </div>

                    <div className='inputBox'>
                      <input type='password' id='password' required autoComplete='off' onChange={handlePassword} value={password} />
                      <label htmlFor='password'>Mot de passe</label>
                    </div>
                    {btn ? <button>Connexion</button> : <button disabled>Connexion</button>}
                  </form>
                  <div className='linkContainer'><Link className='simpleLink' to='/signup'>Nouveau sur MarvelQuiz ? Inscrivez-vous maintenant</Link></div>
            </div>
        </div>
            
        </div>
    </div>
  )
}

export default Login