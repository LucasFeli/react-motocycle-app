import React from "react";
import {Link } from "react-router-dom";
import { useMotocycle } from "../../context/motocycleContext";


const Motocycles = () => {
  const { motocycles, getMotocycles } = useMotocycle();
 
  React.useEffect(() => {
    getMotocycles();
  }, []);
  return (
    <>
      <h3>Motos</h3>

      {motocycles.map((motocycle) => (
        
          <div className="column" key={motocycle._id}>
            <div className="card">
              <img src={motocycle.image} alt="motocycle" width="70" height="230" />
              <h1>{motocycle.marca}</h1>
              <h3 className="tagline">{motocycle.modelo}</h3>
              <Link to={`/motocycles/${motocycle._id}`}>More details</Link>
            </div>
            
          </div>
        
      ))}
    </>
  );
};

export default Motocycles;

/*
<p>Marca: {motocycle.marca}</p>
          <p>Modelo : {motocycle.modelo}</p>
          <p>Motor : {motocycle.motor}</p>
          <p>Description: {motocycle.description}</p>
           <Link to={`/motocycles/${motocycle._id}`}>More details</Link>

            <div className="column" key={beer._id}>
                <div className = "card" >
                    <img src={beer.image_url} width="70" height="230" />
                     <h1>{beer.name}</h1>
                    <h3 className="tagline">{beer.tagline}</h3>
                    <p ><b>Create By:</b> {beer.contributed_by}</p>
                </div>
                </div>
          */
