import React, { useState, useEffect, useContext } from 'react'
import { FirebaseContext } from '../Firebase/context'
import { getAuth, signOut } from "firebase/auth";
import ReactToolTip from 'react-tooltip';

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
                <span className='slider round' data-tip="Déconnexion"></span>
            </label>

            {/* <ReactToolTip place="left" effect="solid"/> */}
            
        </div>
    )
}

export default Logout