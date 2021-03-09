import React from "react";
import { getMotocycles as getMotocycleService,createMotocycle as createMotocycleService} from "../service/motocycle.service";

export const MotocycleContext = React.createContext({});

function MotocycleProvider({ children }) {
  const [motocycle, setMotocycle] = React.useState([]);
  const getMotocycles = async () => {
    const { data } = await getMotocycleService();
    console.log("data", data)
    setMotocycle(data);
  };

const createMotocycle = async (motocycle) =>{
  const {newMotocycle} = await createMotocycleService(motocycle);
  setMotocycle((state) => state.concat(newMotocycle))
}

  return (
    <MotocycleContext.Provider value={{ getMotocycles, motocycle, createMotocycle  }}>
      {children}
    </MotocycleContext.Provider>
  );
}

export function useMotocycle(){
  return React.useContext(MotocycleContext)
}

export default MotocycleProvider;
