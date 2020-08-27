import React,{useState,Fragment} from 'react';

const Lista = () => {
    
 const [arrayNumeros, SetArray]= useState([1,2,3,4,5,6]);
 const [naturales, SetPares]= useState([10,11,12,13,14,15]);
 const [num, SetNumc]= useState(6);

 const aumentarArray=()=>{
    SetNumc(num + 1)
     SetArray([...arrayNumeros, num])

 }

 const mayores=()=>{
     SetPares([...naturales,22])
     console.log(naturales)
 }

    return (
        <Fragment>
          <h2>mostrando lista</h2>
          <button onClick={aumentarArray}>arreglo ++</button>
            {
             arrayNumeros.map((items, index)=>
                <p key={index}>{items} - {index}</p>
                )
            }
            <h4>llamando a otra lista</h4>
            <button onClick={mayores}>arreglo2</button>
            {
              naturales.map((item ,idex)=>
            <p key={idex}> {item} ---  {idex}</p>
              )
            }
          
        </Fragment>

     );
}
 
export default Lista;
