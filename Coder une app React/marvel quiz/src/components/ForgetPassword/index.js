import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { FirebaseContext } from '../Firebase/context'
const ForgetPassword = () => {

  const [email, setEmail] = useState("")
  const handleSubmit = e => {
    e.preventDefault()

  }

  const disabled = email === ""

  return (
    <div className='signUpLoginBox'>
        <div className='slContainer'>
        <div className='formBoxLeftForget'>

      </div>
        <div className='formBoxRight'>
            <div className='formContent'>
                 
                  <h2>Mot de passe oublié ?</h2>
                  <form onSubmit={handleSubmit}>

                    <div className='inputBox'>
                      <input type='email' id='email' onChange={e => setEmail(e.target.value)} autoComplete='off' value={email} />
                      <label htmlFor='email'>Email</label>
                    </div>
                    <button disabled={disabled}>Récupérer le mot de passe</button>

                  </form>
                  <div className='linkContainer'>
                    <Link className='simpleLink' to='/login'>Déjà inscrit ? connectez-vous.</Link>
                  </div>
            </div>
        </div>
            
        </div>
    </div>
  )
}

export default ForgetPassword