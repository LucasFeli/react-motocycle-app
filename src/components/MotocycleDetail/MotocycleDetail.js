import React from "react";
import * as ReactBootForm from 'react-bootstrap'
import { useParams, Link } from "react-router-dom";
import { deleteMotocycle, getMotocycle } from "../../service/motocycle.service";
const MotocycleDetail = () => {
  const [motocycle, setMotocycle] = React.useState({});
  const { motocycleId } = useParams();
  React.useEffect(() => {
    getMotocycle(motocycleId).then(({data: motocycle} ) => setMotocycle(motocycle));
  }, []);

  
  return (  
    <div key={motocycle._id}>
      <p>Marca: {motocycle.marca}</p>
      <p>Modelo : {motocycle.modelo}</p>
      <p>Motor : {motocycle.motor}</p>
      <Link to="/motocycles/update">Update Moto</Link> 
      <button onClick={async()=> deleteMotocycle(motocycle._id)}>Delete</button>
    </div>
  );
};

export default MotocycleDetail;
