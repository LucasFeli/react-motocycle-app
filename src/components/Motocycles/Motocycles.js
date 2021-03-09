import React from 'react';
import {useMotocycle} from "../../context/motocycleContext"

const Motocycles = () => {
   const {motocycle, getMotocycles} = useMotocycle()
   console.log("motocycles", motocycle)
    React.useEffect(( ) =>{
        getMotocycles()
    },[])
    return ( <> 
    <h3>Motos</h3>

    {motocycle.map((motocycle) => 
             <div key={motocycle._id}>
                 <p>Marca: {motocycle.marca}</p>
                 <p>Modelo : {motocycle.modelo}</p>
                 <p>Motor : {motocycle.motor}</p>
             </div>
             
    )}
        
    </> );
}
 
export default Motocycles;