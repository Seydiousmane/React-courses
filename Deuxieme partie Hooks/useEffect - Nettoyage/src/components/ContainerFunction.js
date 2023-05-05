import React, {useState} from 'react'
import FunctionDisplayKey from './FunctionDisplayKey'


function ContainerFunction() {

  const [show, setShow] = useState(true)

  const btnDisplay = show ? 'Cacher' : 'Afficher'

  return (
    <div>
      <button className='btn btn-primary m-3' onClick={()=> setShow(!show)}>{btnDisplay}</button>
      
      {
        show && <FunctionDisplayKey />
      }
    </div>
  )
}

export default ContainerFunction