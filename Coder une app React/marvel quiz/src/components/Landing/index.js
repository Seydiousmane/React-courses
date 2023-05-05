import React, {useRef, useEffect, useState, Fragment} from 'react'
import {Link} from 'react-router-dom'

const Landing = () => {
  const refWolvering = useRef(null)
  console.log(refWolvering)

  const [btn, setBtn] = useState(false)

  useEffect(()=> {
    refWolvering.current.classList.add('startingImg')

    setTimeout(() => {
      refWolvering.current.classList.remove('startingImg')
      setBtn(true)
    }, 1000)
  }, [])

  const setLeftImage = () =>{
    refWolvering.current.classList.add('leftImg')
  }

  const setRightImg = () =>{
    refWolvering.current.classList.add('rightImg')
  }

  const clearImg = () => {
    if (refWolvering.current.classList.contains('rightImg')) {
      refWolvering.current.classList.remove('rightImg')
    } else if(refWolvering.current.classList.contains('leftImg')) {
      refWolvering.current.classList.remove('leftImg')
    }
  }
  
  const displayBtn = btn && (
    <Fragment>
        <div className='leftBox' onMouseOver={setLeftImage} onMouseOut={clearImg}>
          <Link className='btn-welcome' to='/signup'>Inscription</Link>
        </div>

        <div className='rightBox' onMouseOver={setRightImg} onMouseOut={clearImg}>
          <Link to="/login" className='btn-welcome'>Connexion</Link>
        </div>
    </Fragment>
  )
  return (
    <main ref={refWolvering} className='welcomePage'>
        {displayBtn}
    </main>
  )
}

export default Landing