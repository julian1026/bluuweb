import React, {Fragment, useState} from 'react';

const Formulario = () => {
    
    const[datos, SetDatos]=useState({
        nombre:'',
        apellido:''
    })
    const hanledInputChange=(event)=>{
        // mepermite obtener los valores de los input   event.target.value
       // console.log(event.target.value)
        SetDatos({
            ...datos,
            [event.target.name]:event.target.value,
           // [event.target.apellido]:event.target.value
        })
    }

    const enviarFormulario=(event)=>{
        event.preventDefault();
        console.log(datos.nombre +"  "+ datos.apellido);
    }

    return ( 
        <Fragment >
           <form  onSubmit={enviarFormulario}>
                <div className="form-group col-6">
                     <h4>FORMULARIO</h4>
                </div>
                <div className="form-group col-6">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="ingresar nombre"
                        name="nombre"
                        onChange={hanledInputChange}
                        >       
                    </input>
                </div>

                <div className="form-group col-6">
                    <input 
                        type="text"
                        className="form-control"
                        placeholder="ingresar apellido"
                        name="apellido"
                        onChange={hanledInputChange}
                        >
                    </input>
                </div>
        
                <div className="form-group col-6"> 
                 <button type="submit" className="btn btn-primary btn-lg btn-block">Registrarse</button>
                </div>
          </form> 
            <h4>{datos.nombre}  -  {datos.apellido}</h4>
        </Fragment>     
     );
}
 
export default Formulario;