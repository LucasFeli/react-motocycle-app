import React from "react";
import { Link } from "react-router-dom";
import { useMotocycle } from "../../context/motocycleContext";
import {SearchBar} from "../Search/Search"
import * as ReactBootStrap from "react-bootstrap";
import "./Motocycles.css";



const Motocycles = () => {
  const { motocycles, getMotocycles } = useMotocycle();
  const [query, setQuery] = React.useState("")
  const handleQuery = ({target}) => setQuery(target.value)

  React.useEffect(() => {
    getMotocycles();
  }, []);
  return (
    <>
      <h3>Motos</h3>
    <SearchBar query={query} onChange={handleQuery}/>
    
      {motocycles.filter(motocycle => motocycle.marca.toLowerCase().includes(query.toLowerCase())).map((motocycle) => (
       
       <div  key={motocycle._id}>
         <div className="container">
          <ReactBootStrap.Col>
            <ReactBootStrap.Card style={{ width: "60rem" }}>
              <ReactBootStrap.Card.Img variant="top" src={motocycle.image} />
              <ReactBootStrap.Card.Body>
                <ReactBootStrap.Card.Title>
                 {motocycle.marca}
                </ReactBootStrap.Card.Title>
                <ReactBootStrap.Card.Text>
                <p>Description: {motocycle.description}</p>
                </ReactBootStrap.Card.Text>
                <ReactBootStrap.Button variant="outline-dark">
                <Link to={`/motocycles/${motocycle._id}`}>More details</Link>
                </ReactBootStrap.Button>
              </ReactBootStrap.Card.Body>
            </ReactBootStrap.Card>
            </ReactBootStrap.Col>
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
