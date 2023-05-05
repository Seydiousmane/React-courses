import React, { useState, useEffect, useContext } from 'react'
import { FirebaseContext } from '../Firebase/context'
import { getAuth, signOut } from "firebase/auth";

const Logout= () => {
    const firebase = useContext(FirebaseContext)
    const [checked, setChecked] = useState(false)
    console.log(checked)
    const auth = getAuth()
    useEffect(()=>{
        if (checked) {
            console.log('Deconnexion')
            signOut(auth)

        }
    }, [checked, firebase])

    const handleChange = (e) => {
        setChecked(e.target.checked)
    }
    return (
        <div className='logoutContainer'>
            <label className="switch">
                <input type="checkbox" checked={checked} onChange={handleChange}/>
                <span className='slider round'></span>
            </label>
            
        </div>
    )
}

export default Logout