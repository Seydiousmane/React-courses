import React, {useState, useEffect, useMemo} from 'react';
import Profile from './components/Profile';
import axios from 'axios'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


function App() {
    const [count, setCount] = useState(1)
    const [profile, setProfile] = useState({})
    const [dark, setDark] = useState(false)

    useEffect(()=>{
      axios.get(`https://jsonplaceholder.typicode.com/users/${count}`)
      .then(response=> {
          setProfile(response.data)
        }
      )
      .catch(error=> {
        console.log(error)
      })
    }, [count])

    const memorizedValue = useMemo(() => {
      console.log("Je suis dans overten")
      return count > 10
    }, [count])

    console.log(memorizedValue)
    

    const goDark = () => {
      setDark(!dark)
      if (!dark){
        document.body.classList.add('bg-secondary')
      } else {
        document.body.classList.remove('bg-secondary')
      }
    }

    const classBtnTheme = dark ? 'btn-light' : 'btn-dark'
    const textBtnTheme = dark ? 'Rendre clair' : 'Rendre sombre'
    
    return(
      
      <div className='container'>
        <h1 className='text-center'>Use Memo()</h1>
        {memorizedValue && <div className='alert alert-danger' role="alert">Stop</div>}
        <button className='btn btn-info mb-3' onClick={()=> setCount(count+1)}>Increment {count}</button>
        <button className={`btn ${classBtnTheme} mb-3 float-right`} onClick={goDark}>{textBtnTheme}</button>
        <Profile profile={profile} count={count}/>
      </div>
    )
    
}

export default App;