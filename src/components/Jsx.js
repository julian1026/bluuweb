import React, {Fragment} from 'react';

const Jsx = () => {

     const temperatura=21
    return ( 
    <Fragment>
        <h1>la temperatura registrada es de :</h1>
        <h2>
            {
                temperatura>20?'calor':'frio'
            }
        </h2>
    </Fragment>
        
     );
}
 
export default Jsx;