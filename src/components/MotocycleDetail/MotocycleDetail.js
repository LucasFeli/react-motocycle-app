import React from "react";
import * as ReactBootStrap from "react-bootstrap";
import { useParams, Link, useHistory } from "react-router-dom";
import { deleteMotocycle, getMotocycle } from "../../service/motocycle.service";

const MotocycleDetail = () => {
  const [motocycle, setMotocycle] = React.useState({});
  const { push } = useHistory();
  const { motocycleId } = useParams();
  const handleDelete = async () => {
    await deleteMotocycle(motocycle._id);
    push("/motocycles");
  };
  React.useEffect(() => {
    getMotocycle(motocycleId).then(({ data: motocycle }) =>
      setMotocycle(motocycle)
    );
  }, [motocycleId]);

  return (
    <div key={motocycle._id}>
      <div className = "container mt-5">
      <div className = "card">
 
 <img src ={motocycle.image} className="img-fluid" />
 <div className="card-body">
 <h3 className="card-title">{motocycle.marca}</h3>
 <p className="card-text">{motocycle.description} </p>
  <ul className="list-group list-group-flush">
    <li className="list-group-item">Modelo: {motocycle.modelo}</li>
    <li className="list-group-item">Motor: {motocycle.motor}</li>
  </ul>
  <button className="btn btn-danger" onClick={handleDelete}>Delete</button>
 </div>
 </div>
 </div>
</div>
    
  );
};



export default MotocycleDetail;

/*

<div className = "container mt-5">
 <div className = "card">
 
 <img src ="{motocycle.image}" className="img-fluid">
 <div className="card-body">
 <h3 className="card-title">{motocycle.marca}</h3>
  <ul className="list-group list-group-flush">
    <li className="list-group-item">Modelo: {motocycle.modelo}</li>
    <li className="list-group-item">Motor: {motocycle.motor}</li>
  </ul>
  <p className="card-text">{motocycle.description} </p>

 <button className="btn btn-btn-danger" onClick={handleDelete}>Delete</button>
 </div>
 </div>

</div>


*/