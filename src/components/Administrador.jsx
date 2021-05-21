import React, {useState, useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import { admin } from '../Utilities/Utils'

let urlAnt = null

function Administrador(props) {

    const { getAlumnosTodos, listadoAlumnos, patchNota } = props
    const [mostrarPop, setMostrarPop] = useState(false)

    const [idSel, setIdSel] = useState('')
    const [nomSel, setNomSel] = useState('')
    const rowClick = (id, name) => {
        setIdSel(id)
        setNomSel(name)
        setMostrarPop(true)
    }

    const [nota, setNota] = useState('')
    const notaObt = (e) => {
        setNota(e.target.value)
    }

    const enviar = async (e) => {
        e.preventDefault()
        const res = await patchNota(idSel, nota, admin)
        if (res.message === null) {
            getAlumnosTodos(admin)
            alert('se cambio con exito')
        }else{
            alert(res.message)
        }
    }

    let history = useHistory()
    const volver = () => {
        history.push(`/`)
    }

    const cerrar = () => {
        setMostrarPop(false)
    }

    useEffect(() => {
        let urlSearch = window.location.search
  		if(urlSearch !== urlAnt){
    		getAlumnosTodos(admin)
    		urlAnt = urlSearch
    	}
    	return () => {
    		setMostrarPop(false)
	    }
  	}, [getAlumnosTodos])

  return (
      <div className="row justify-content-center Estudiante">
          <h1>Lista de alumnos</h1>
          <table className='w-100 mb-2 border' >
              <thead>
                  <tr>
                      <th>Document</th>
                      <th>Name</th>
                      <th>Age</th>
                      <th>Gender</th>
                      <th>Note</th>
                      <th>Autoevaluation</th>
                  </tr>
              </thead>
              <tbody>
                {
                    listadoAlumnos.map((item, index) => (
                        <tr onClick={() => rowClick(item.document, item.complete_name)} key={index}>
                            <td>{item.document}</td>
                            <td>{item.complete_name}</td>
                            <td>{item.age}</td>
                            <td>{item.gender}</td>
                            <td>{item.note}</td>
                            <td>{item.autoevaluation}</td>
                        </tr>
                    ))
                }
                </tbody>
          </table>
          {
              mostrarPop &&
              (
                  <div className='bg-secondary w-50'>
                      <h4>Asignar nota a: {nomSel}</h4>
                      <form onSubmit={enviar} className='mb-2'>
                          <div>
                              <input type='number' required onChange={notaObt} className='mr-2' />
                          </div>
                          <input type='submit' className='btn btn-success mt-2' value='enviar'/>
                      </form>
                      <button onClick={cerrar} className='btn btn-danger'>x</button>
                  </div>
              )
          }
          <div className='row justify-content-center'>
              <button onClick={volver} className='mt-3 col-auto btn btn-primary'>Volver a inicio</button>
          </div>
      </div>
  );
}

export default Administrador;
