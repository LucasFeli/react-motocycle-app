import React from "react";
import {useMotocycle} from "../../context/motocycleContext"


const MotocycleUpdate = () => {
    const initialState = {marca:"", modelo:""}
    const[update, setUpdate] = React.useState(initialState)
   
    const {updateMotocycle} = useMotocycle()
 
    return ( 
        <form onSubmit={async (e)=>{
            e.preventDefault();
            await updateMotocycle(update)
            setUpdate(initialState)
        }}>
          <label>Marca:</label>
          <input type="text"  name="marca" value={update.marca}  onChange={({target}) => setUpdate({...update,[target.name]: target.value})}/>
          <label>Modelo:</label>
          <input type="number"  name="modelo" value={update.modelo} onChange={({target}) =>setUpdate ({...update,[target.name]: target.value})} />
          <button type ="submit"> update </button>
        </form>
      );
    };

 
export default MotocycleUpdate;