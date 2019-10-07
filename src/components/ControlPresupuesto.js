import React,{Fragment} from 'react';
import {revisarPresupuesto} from './helpers'

const ConstrolPresupuesto = ({presupuesto,restante}) => (
    <Fragment>
        <div className='alert alert-primary'>
            Presupuesto Inicial: $ {presupuesto}
        </div>
        <div className={revisarPresupuesto(presupuesto,restante)}>
            Presupuesto disponible:  $ {restante}
        </div>
    </Fragment>
)
 
export default ConstrolPresupuesto;