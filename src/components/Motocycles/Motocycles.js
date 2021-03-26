import React from "react";
import { Link } from "react-router-dom";
import { useMotocycle } from "../../context/motocycleContext";
import { SearchBar } from "../Search/Search";
import * as ReactBootStrap from "react-bootstrap";
import "./Motocycles.css";

const Motocycles = () => {
  const { motocycles, getMotocycles } = useMotocycle();
  const [query, setQuery] = React.useState("");
  const handleQuery = ({ target }) => setQuery(target.value);

  React.useEffect(() => {
    getMotocycles();
  }, []);
  return (
    <>
      <h3>Motos</h3>
      <SearchBar query={query} onChange={handleQuery} />

      {motocycles
        .filter((motocycle) =>
          motocycle.marca.toLowerCase().includes(query.toLowerCase())
        )
        .map((motocycle) => (
          <div key={motocycle._id}>
            <div className="container mt-5">
              <div className="card">
                <div className="row">
                  <div className="col-md-4">
                    <img src={motocycle.image} className="img-fluid" />
                  </div>
                  <div className="col-md-8">
                    <h2 className="card-title">{motocycle.marca}</h2>
                    <p>{motocycle.description}</p>
                    <button className="btn btn-outline-primary">
                      <Link to={`/motocycles/${motocycle._id}`}>
                        More details
                      </Link>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
    </>
  );
};

export default Motocycles;

