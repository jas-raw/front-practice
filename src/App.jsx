import React, {useState} from 'react'
import axios from 'axios'
import{
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom'
import './App.css';
import Principal from './components/Principal'
import Administrador from './components/Administrador'

const URLBASE = '/api/v1/students'

function App() {

    axios.defaults.headers.common['Content-type'] = 'application/json; charset=utf-8'
    axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*'
    axios.defaults.headers.common['Access-Control-Allow-Methods'] = '*'
    axios.defaults.headers.common['Access-Control-Allow-Headers'] = '*'

    const [listadoAlumnos, setListadoAlumnos] = useState([])
    const getAlumnosTodos = async (config) => {
        const {data} = await axios.get(URLBASE, config)
        setListadoAlumnos(data.results)
    }

    const patchAutoevaluacion = async (id, autoevaluation, config) => {
        const {data} = await axios.patch(URLBASE+`/auto/${id}?autoevaluation=${autoevaluation}`, {}, config)
        return data
    }

    const patchNota = async (id, nota, config) => {
        const {data} = await axios.patch(URLBASE+`/nota/${id}?nota=${nota}`, {}, config)
        return data
    }

  return (
    <div className="container-fluid App">
        <Router>
          <div className='row'>

            <div className='col'>
              <Switch>
                <Route path='/administrador/'>
                    <Administrador
                        getAlumnosTodos={getAlumnosTodos}
                        listadoAlumnos={listadoAlumnos}
                        patchNota={patchNota}
                        />
                </Route>

                <Route exact path='/'>
                    <Principal
                        patchAutoevaluacion={patchAutoevaluacion}
                        />
                </Route>

              </Switch>
            </div>
          </div>
        </Router>
    </div>
  );
}

export default App;
