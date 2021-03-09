import React from "react";
import {useMotocycle} from "../../context/motocycleContext"

const NewMotocycle = () => {
    const initialState = {marca:"", modelo:""}
    const[state, setState] = React.useState(initialState)
    const {createMotocycle} = useMotocycle()
  return (
    <form onSubmit={async (e)=>{
        e.preventDefault();
        await createMotocycle(state)
        setState(initialState)
    }}>
      <label>Marca:</label>
      <input type="text"  name="marca" value={state.marca} onChange={({target}) => setState({...state,[target.name]: target.value})}/>
      <label>Modelo:</label>
      <input type="number"  name="modelo" value={state.modelo} onChange={({target}) =>setState ({...state,[target.name]: target.value})} />
      <button type ="submit"> create </button>
    </form>
  );
};

export default NewMotocycle;
