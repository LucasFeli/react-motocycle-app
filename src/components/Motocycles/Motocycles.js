import React from "react";
import { Link } from "react-router-dom";
import { useMotocycle } from "../../context/motocycleContext";
import MotocycleCSS from "./Motocycles.module.css";
import Honda from "../Home/assets/Honda.jpg"



const Motocycles = () => {
  const { motocycle, getMotocycles } = useMotocycle();
  console.log("motocycles", motocycle);
  React.useEffect(() => {
    getMotocycles();
  }, []);
  return (
    <>
      <h3>Motos</h3>

      {motocycle.map((motocycle) => (
       
            <div key={motocycle._id}>
                <p>Marca: {motocycle.marca}</p>
              <p>Modelo : {motocycle.modelo}</p>
              <p>Motor : {motocycle.motor}</p>
              <Link to={`/motocycles/${motocycle._id}`}>More details</Link>
            </div>
         
      ))}



      
    </>
  );
};

export default Motocycles;
