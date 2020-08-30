import React,{ Fragment, useState} from 'react';
import {useForm} from 'react-hook-form'

const Hookform=()=>{
  const {register, errors, handleSubmit}=useForm();
  const [lista, SetLista]=useState([])
  const onSubmit=(data, e)=>{
      console.log(data);
      SetLista([...lista,data])
      e.target.reset();
  }
    return(
        <Fragment>
            <h1>Formulario con Hookform</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    type="text"
                    className="form-control mb-2"
                    placeholder="ingresar nombrer"
                    name="usuario"
                    ref={
                        register({
                            required:{value:true,message:'titulo obligatorio'}
                        })
                    }                 
                 />
                 <span className="text-danger text-small d-block mb-2">
                         {errors?.usuario?.message}
                 </span>

                  <input
                    type="text"
                    className="form-control mb-2"
                    placeholder="ingresar apellido"
                    name="apellido"
                    ref={
                        register({
                            required:{value:true,message:'titulo obligatorio'}
                        })
                    }                 
                 />
                  <span className="text-danger text-small d-block mb-2">
                 {errors?.apellido?.message}
                 </span>

                 <label className="label my-2">Gender</label><br />
                 <div className="radio">
                     <input
                      type="radio"
                      className="radio mt-2"
                      name="sexo"
                      value="M"
                      ref={
                        register({
                            required:{value:true,message:'titulo obligatorio'}
                        })
                    }     
                     />
                       Male
                </div>

                <div className="radio">
                    <input
                      type="radio"
                      className="radio mt-2"
                      name="sexo"
                      
                      value="F"
                      ref={
                        register({
                            required:{value:true,message:'titulo obligatorio'}
                        })
                    }     
                    / >
                       Female
                </div>
                 <button className="btn btn-success mt-3">Send</button>
            
            </form>
        </Fragment>
        
    );
}

export default Hookform;