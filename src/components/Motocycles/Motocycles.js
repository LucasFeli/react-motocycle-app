import React from "react";
import BMW from "../Home/assets/bmw.jpg";
import { Link } from "react-router-dom";
import * as ReactBootCard from 'react-bootstrap'
import { useMotocycle } from "../../context/motocycleContext";

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
          <ReactBootCard.CardDeck>
    <ReactBootCard.Card>
      <ReactBootCard.Card.Img variant="top" src={motocycle.image} />
      <ReactBootCard.Card.Body>
        <ReactBootCard.Card.Title>{motocycle.marca}</ReactBootCard.Card.Title>
        <ReactBootCard.Card.Text>
        {motocycle.description}
        </ReactBootCard.Card.Text>
      </ReactBootCard.Card.Body>
      <ReactBootCard.Card.Footer>
      <ReactBootCard.Nav.Link  variant="primary" href={`/motocycles/${motocycle._id}`}>More details</ReactBootCard.Nav.Link>
      </ReactBootCard.Card.Footer>
    </ReactBootCard.Card>
    
  </ReactBootCard.CardDeck>
         
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
          */