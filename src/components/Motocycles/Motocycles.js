import React from "react";
import { Link } from "react-router-dom";
import * as ReactBootCard from "react-bootstrap";
import { useMotocycle } from "../../context/motocycleContext";

const Motocycles = () => {
  const { motocycles, getMotocycles } = useMotocycle();
  console.log("motocycles", motocycles);
  React.useEffect(() => {
    getMotocycles();
  }, []);
  return (
    <>
      <h3>Motos</h3>

      {motocycles.map((motocycle) => (
        <div key={motocycle._id}>
          <ReactBootCard.CardDeck>
            <ReactBootCard.Card>
              <ReactBootCard.Card.Img variant="top" src={motocycle.image} />
              <ReactBootCard.Card.Body>
                <ReactBootCard.Card.Title>
                  {motocycle.marca}
                </ReactBootCard.Card.Title>
                <ReactBootCard.Card.Text>
                  {motocycle.description}
                </ReactBootCard.Card.Text>
              </ReactBootCard.Card.Body>
              <ReactBootCard.Card.Footer>
                <ReactBootCard.Nav.Link variant="primary">
                  <Link to={`/motocycles/${motocycle._id}`}>More details</Link>
                </ReactBootCard.Nav.Link>
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
