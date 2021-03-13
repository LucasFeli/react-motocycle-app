import React from "react";
import { getMotocycles as getMotocyclesService,createMotocycle as createMotocycleService, updateMotocycle as updateMotocycleService, deleteMotocycle as deleteMotocycleService} from "../service/motocycle.service";

export const MotocycleContext = React.createContext({});

function MotocycleProvider({ children }) {
  const [motocycle, setMotocycle] = React.useState([]);
  const getMotocycles = async () => {
    const { data } = await getMotocyclesService();
    console.log("data", data)
    setMotocycle(data);
  };

 

const createMotocycle = async (motocycle) =>{
  const {newMotocycle} = await createMotocycleService(motocycle);
  setMotocycle((state) => state.concat(newMotocycle))
};

//const updateMotocycle = async (motocycleId) =>{
  //const {updateMotocycle} = await updateMotocycleService(motocycle);
 // setMotocycle()
//};

const deleteMotocycle = async (motocycleId) =>{
 await deleteMotocycleService(motocycle._id);

  setMotocycle((state) => state.filter((moto) => moto._id !== motocycleId))
}


  return (
    <MotocycleContext.Provider value={{ getMotocycles, motocycle, createMotocycle,  deleteMotocycle  }}>
      {children}
    </MotocycleContext.Provider>
  );
}

export function useMotocycle(){
  return React.useContext(MotocycleContext)
}

export default MotocycleProvider;
