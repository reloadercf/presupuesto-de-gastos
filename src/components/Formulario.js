import React,{useState} from 'react';
import Error from './Error'
import shortid from 'shortid'

function Formulario(props){
    //destructurar
    let {guardarGasto,guardarCrearGasto}=props
    //definir el state
    let [nombreGasto,guardarNombreGasto]=useState('')
    let [cantidadGasto,guardarCantidadGasto]=useState(0)
    let [error,guardarError]=useState(false)
    
    let agregarGasto=e=>{
        e.preventDefault()
        //cuado se agrega el gasto
        //primero validar
        if (cantidadGasto<1||isNaN(cantidadGasto)||nombreGasto===''){
            guardarError(true);
            return;
        }
        //previo al segundo debo de construir un objeto
        let gasto={
            nombreGasto,
            cantidadGasto,
            id:shortid.generate()
        }
        //segundo pasar al componente principal despues de validar
        guardarGasto(gasto)
        guardarCrearGasto(true)
          //Eliminar alerta
        guardarError(false)
          //resetear el form
        guardarNombreGasto('')
        guardarCantidadGasto('')
    }
    return(
        <form
        onSubmit={agregarGasto}
        >
            <h2>Agrega tus gastos</h2>
            {error?<Error mensaje='Todos los campos son obligatorios'/>:null}
            <div className='campo'>
                <label>Nombre Gasto</label>
                <input 
                    type='text'
                    className='u-full-width'
                    placeholder='Eje. Transporte'
                    onChange={e=>guardarNombreGasto(e.target.value)}
                    value={nombreGasto}
                />
            </div>
            <div className='campo'>
                <label>Cantidad Gasto</label>
                <input 
                    type='number'
                    className='u-full-width'
                    placeholder='Eje. 300'
                    onChange={e=>guardarCantidadGasto(parseInt(e.target.value,10) )}
                    value={cantidadGasto}
                />
            </div>
            <input type='submit' className='button-primary u-full-width' value='agregar' />
        </form>
    )
}
export default Formulario