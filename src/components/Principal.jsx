import React, {useState, useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import { student } from '../Utilities/Utils'

function Principal(props) {

    const { patchAutoevaluacion } = props

    // handlers de botones
    const [mostrarPop, setMostrarPop] = useState(false)
    const cerrar = () => {
        setMostrarPop(false)
    }
    const Estudiante = () => {
        setMostrarPop(true)
    }

    let history = useHistory()
    const Administrador = () => {
        history.push(`/administrador`)
    }

    const [doc, setDoc] = useState('')
    const docObt = (e) => {
        setDoc(e.target.value)
    }
    const [auto, setAuto] = useState('')
    const autoObt = (e) => {
        setAuto(e.target.value)
    }

    const enviar = async (e) => {
        e.preventDefault()
        const res = await patchAutoevaluacion(doc, auto, student)
        if (res.message === null) {
            alert('se cambio con exito')
        }else{
            alert(res.message)
        }
    }

    useEffect(() => {
    	return () => {
    		setMostrarPop(false)
	    }
  	}, [])

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

        {
            mostrarPop &&
            (
                <div className='bg-secondary w-50'>
                    <form onSubmit={enviar} className='my-2'>
                        <div className='mb-2'>
                            <label htmlFor='Documento'>Documento</label>
                            <input type='text' id='Documento' required onChange={docObt} className='mr-2' />
                        </div>
                        <div className='mb-2'>
                            <label htmlFor='Autoevaluacion'>Autoevaluacion</label>
                            <input type='number' id='Autoevaluacion' required onChange={autoObt} className='mr-2' />
                        </div>
                        <input type='submit' className='btn btn-success' value='enviar'/>
                    </form>
                    <button onClick={cerrar} className='btn btn-danger'>x</button>
                </div>
            )
        }
    </div>
  );
}

export default Principal;
