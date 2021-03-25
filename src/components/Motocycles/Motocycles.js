import React from "react";
import { Link } from "react-router-dom";
import { useMotocycle } from "../../context/motocycleContext";
import * as ReactBootStrap from "react-bootstrap";
import "./Motocycles.css";



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
        
            <ReactBootStrap.Col>
            <ReactBootStrap.Card style={{ width: "40rem" }}>
              <ReactBootStrap.Card.Img variant="top" src={motocycle.image} />
              <ReactBootStrap.Card.Body>
                <ReactBootStrap.Card.Title>
                  Card Title
                </ReactBootStrap.Card.Title>
                <ReactBootStrap.Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </ReactBootStrap.Card.Text>
                <ReactBootStrap.Button variant="primary">
                <Link to={`/motocycles/${motocycle._id}`}>More details</Link>
                </ReactBootStrap.Button>
              </ReactBootStrap.Card.Body>
            </ReactBootStrap.Card>
            </ReactBootStrap.Col>
         
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
