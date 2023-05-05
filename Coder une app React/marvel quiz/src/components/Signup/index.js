import React, {useState, useContext} from 'react'
import { FirebaseContext } from '../Firebase/context'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

import {Link} from 'react-router-dom'


function Signup(props) {

  const firebase = useContext(FirebaseContext)

  const data = {
    pseudo: '',
    email: '',
    password: '',
    confirmPassword: ''
  }

  const [loginData, setLoginData] = useState(data)
  const [error, setError] = useState('')

  console.log({props})

  const handleChange = e => {
      setLoginData({...loginData, [e.target.id]: e.target.value})
      console.log(error)
  }

  const handleSubmit = e => {
    
    e.preventDefault()
  
    const {email, password} = loginData

    const auth = getAuth()
    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
          console.log(res.user)
          props.history.push('/welcome')
      })
      .catch(err => {
          setError(err)
      })
    
  }
  
  const {pseudo, email, password, confirmPassword} = loginData

  const btn = pseudo === '' || email === '' || password === '' || confirmPassword !== password ? 
  <button disabled>Inscription</button> : <button>Inscription</button>

  //Gestion des erreurs
  const errorMsg = error !== ''  && <span>{error.message}</span>

  return (
    <div className='signUpLoginBox'>
        <div className='slContainer'>
            <div className='formBoxLeftSignup'>

            </div>
            <div className='formBoxRight'>
                <div className='formContent'>
                      {errorMsg }
                      <h2>Inscription</h2>
                      <form onSubmit={handleSubmit}>
                        
                        <div className='inputBox'>
                          <input type='text' id='pseudo' required autoComplete='off' onChange={handleChange} value={pseudo} />
                          <label htmlFor='pseudo'>Pseudo</label>
                        </div>

                        <div className='inputBox'>
                          <input type='emailt' id='email' required autoComplete='off' onChange={handleChange} value={email} />
                          <label htmlFor='email'>Email</label>
                        </div>

                        <div className='inputBox'>
                          <input type='password' id='password' required autoComplete='off' onChange={handleChange} value={password} />
                          <label htmlFor='password'>Mot de passe</label>
                        </div>

                        <div className='inputBox'>
                          <input type='password' id='confirmPassword' required autoComplete='off' onChange={handleChange} value={confirmPassword} />
                          <label htmlFor='confirmPassword'>Confirmer le mot de passe</label>
                        </div>
                        {btn}
                      </form>
                      <div className='linkContainer'><Link className='simpleLink' to='/login'>Déjà inscrit ? Connectez-vous</Link></div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Signup