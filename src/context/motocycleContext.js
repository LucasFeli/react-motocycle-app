import React from "react";
import {
  getMotocycles as getMotocyclesService,
  createMotocycle as createMotocycleService,
  deleteMotocycle as deleteMotocycleService,
  updateMotocycle as updateMotocycleService
} from "../service/motocycle.service";

export const MotocycleContext = React.createContext({});

function MotocycleProvider({ children }) {
  const [motocycles, setMotocycles] = React.useState([]);

  const getMotocycles = async () => {
    const { data } = await getMotocyclesService();
    setMotocycles(data);
  };

  const createMotocycle = async (motocycle) => {
    const { data: newMotocycle } = await createMotocycleService(motocycle);
    setMotocycles((state) => state.concat(newMotocycle));
  };

  const updateMotocycle = async(motocycleId, motocycle )=> {
    const {data:updatedMotocycle} = await updateMotocycleService (motocycleId, motocycle )
    setMotocycles((updatedMotocycle))

  }

  const deleteMotocycle = async (motocycleId) => {
    await deleteMotocycleService(motocycleId);
    setMotocycles((state) => state.filter((moto) => moto._id !== motocycleId));
  };

  return (
    <MotocycleContext.Provider
      value={{ getMotocycles, motocycles, createMotocycle,updateMotocycle, deleteMotocycle }}
    >
      {children}
    </MotocycleContext.Provider>
  );
}

export function useMotocycle() {
  return React.useContext(MotocycleContext);
}

export default MotocycleProvider;
