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
       <li className="cards-item">
            <Link className="cards_item_link">
              <figure className="cards_item_pic-wrap">
                <img src="/" alt="Motocycle Image" className="cards_item_img"/>
              </figure>
              <div className="cards_item_info">
               <h5 className="cards_item_text"></h5>
              </div>
            </Link>
            </li>
      <p>Marca: {motocycle.marca}</p>
      <p>Modelo : {motocycle.modelo}</p>
      <p>Motor : {motocycle.motor}</p>
      <p>{motocycle.description}</p>
      <Link to={`/motocycles/${motocycleId}/update`}>Update Moto</Link>
      <button onClick={handleDelete}>Delete</button>
      
    </div>
  );
};

export default MotocycleDetail;
