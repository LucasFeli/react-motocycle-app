import React from "react";

import { useParams, useHistory } from "react-router-dom";
import { getMotocycle } from "../../service/motocycle.service";

const MotocycleDetail = () => {
  const [motocycle, setMotocycle] = React.useState({});

  const { motocycleId } = useParams();

  React.useEffect(() => {
    getMotocycle(motocycleId).then(({ data: motocycle }) =>
      setMotocycle(motocycle)
    );
  }, [motocycleId]);

  return (
    <div key={motocycle._id}>
      <div className="container mt-5">
        <div className="card">
          <img
            src={motocycle.image}
            className="img-fluid"
            alt="this is a moto "
          />
          <div className="card-body">
            <h3 className="card-title">{motocycle.marca}</h3>
            <p className="card-text">{motocycle.description} </p>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Modelo: {motocycle.modelo}</li>
              <li className="list-group-item">Motor: {motocycle.motor}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MotocycleDetail;
