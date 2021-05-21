import React, {useState, useEffect} from 'react'
import { admin } from '../Utilities/Utils'

function Administrador(props) {

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

                </tbody>
          </table>

      </div>
  );
}

export default Administrador;
