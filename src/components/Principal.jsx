import React, {useState, useEffect} from 'react'
import { student } from '../Utilities/Utils'

function Principal(props) {



  return (
    <div className="row justify-content-center Principal">
        <h1>Que usuario eres</h1>
        <div className='row justify-content-center'>
            <button className='btn col-auto btn-secondary mb-2' onClick={Estudiante} >Student</button>
        </div>
        <br/>
        <div className='row justify-content-center'>
            <button className='btn col-auto btn-secondary mb-2' onClick={Administrador} >Admin</button>
        </div>
    </div>
  );
}

export default Principal;
