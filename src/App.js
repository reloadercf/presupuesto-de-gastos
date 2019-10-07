import React,{useState,useEffect} from 'react';
import Pregunta from './components/Pregunta'
import Formulario from './components/Formulario'
import Listado from './components/Listado'
import ControlPresupuesto from './components/ControlPresupuesto'

function App() {
  let [presupuesto,guardarPresupuesto]=useState(0)
  let [preguntaPresupuesto,guardarPreguntaPresupuesto]=useState(true)
  let [gasto,guardarGasto]=useState({})
  let [gastos,guardarGastos]=useState([])
  let [crearGasto,guardarCrearGasto]=useState(false)
  let [restante,guardarRestante]=useState(0)
  
  //la siguiente funcion solo se utiliza cuando se agrega un nuevo gasto
  useEffect(()=>{
    if(crearGasto)
    {
      let listadoGastos=[...gastos, gasto]
      guardarGastos(listadoGastos)
      // restar el presupuesto
      let presupuestoRestante=restante-gasto.cantidadGasto
      guardarRestante(presupuestoRestante)
      //una vez que se agrega, lo ponemos como false para que despues se vuelva a ejecutar
      guardarCrearGasto(false);
    }
  },[crearGasto,gastos,gasto,restante])

  return (
    <div className="App container">
      <header>
        <h1>Gasto semanal del dia con dia</h1>
        <div className='contenido-principal contenido'>
        {preguntaPresupuesto?
        <Pregunta
        guardarPresupuesto={guardarPresupuesto}
        guardarPreguntaPresupuesto={guardarPreguntaPresupuesto}
        guardarRestante={guardarRestante}
        />:
        <div className='row'>
          <div className='one-half column'>
            <Formulario
            guardarGasto={guardarGasto}
            guardarCrearGasto={guardarCrearGasto}
            />
          </div>
          <div className='one-half column'>
            <Listado
              gastos={gastos}
            />
            <ControlPresupuesto
              presupuesto={presupuesto}
              restante={restante}
            />
          </div>
        </div>
        }
        </div>
      </header>
    </div>
  );
}

export default App;
