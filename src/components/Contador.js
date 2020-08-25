//con imr me autocompleta el import 
import React,{useState} from 'react';

/*
si quiero que no me aparesca el div, podria
invocar el fragment en el {useState, fragment} y fragment
seria la etiqueta padre
*/

//creando un componente sfc
const Contador = () => {

     const[numero, setNumero]=useState(0);
     const aumentar=()=>{
         console.log('me diste un click');
         setNumero(numero + 1)
     }
     
    return ( 
    <div>
        <h3> mi primer componente, jullian eres genial {numero}</h3>  
        <button onClick={aumentar}>Aumentar</button>
        <ul>
            <li>ingresar</li>
            <li>send</li>
            <li>work</li>
        </ul>
    </div>
     );
}
 
export default Contador;
