import React,{Fragment,useState} from 'react';
import Error from './Error'

function Pregunta(props){
    let{guardarPresupuesto,guardarPreguntaPresupuesto,guardarRestante}=props
    //definir el state
    let [cantidad, guardarCantidad]=useState(0)
    let [error, guardarError]=useState(false)

    //validar el presupuesto
    let agregarPresupuesto =(e)=>{
        e.preventDefault()

        console.log(typeof cantidad)
        //validar
        if (cantidad<=1||isNaN(cantidad)){
            guardarError(true);
            return;
        }
        //si  se pasa la validacion
        guardarError(false)
        guardarPresupuesto(cantidad)
        guardarPreguntaPresupuesto(false)
        guardarRestante(cantidad)
    }
return(
    <Fragment>
        <h2 className=''>Coloca tu presupuesto</h2>
            {error?<Error mensaje='Presupuesto Incorrecto'/>:null}
        <form 
            onSubmit={agregarPresupuesto}
        >
            <input type='numbrer'
                className='u-full-width'
                placeholder='agrega tu presupuesto'
                onChange={e=>guardarCantidad(parseInt(e.target.value,10))}
                />
            <input type='submit'
                className='button-primary u-full-width'
                value='Definir Presupuesto'
                />
        </form>
    </Fragment>
)
}
export default Pregunta