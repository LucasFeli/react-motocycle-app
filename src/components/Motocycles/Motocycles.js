import React from "react";
import { Link } from "react-router-dom";
import { useMotocycle } from "../../context/motocycleContext";
import { SearchBar } from "../Search/Search";

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
     <div className="container">
      <SearchBar query={query} onChange={handleQuery} />
      </div>
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
                    <img src={motocycle.image} className="img-fluid" alt="this is a moto "/>
                  </div>
                  <div className="col-md-8">
                    <h2 className="card-title">{motocycle.marca}</h2>
                    <p>{motocycle.description}</p>
                    <button className="btn btn-outline-primary">
                      <Link to={`/motocycles/${motocycle._id}`}>
                        Mas Detalles
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

