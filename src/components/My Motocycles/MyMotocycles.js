import React from "react";
import {getUser} from "../../service/auth.service"
import { Link,useHistory,useParams } from "react-router-dom";
import * as ReactBootStrap from "react-bootstrap";
import{ deleteMotocycle}from  "../../service/motocycle.service"



const MyMotocycles = () => {
  const [motoId, setMotoId] = React.useState([])
  const [userId, setUserId] = React.useState([])
   const { push } = useHistory();
   const { motocycleId } = useParams();
   const handleDelete = async () => {
    await deleteMotocycle();
    push("/motocycles");
  };
  React.useEffect(() => {
    getUser().then((result) => {
      setMotoId(result.data.myMotocycles)
      setUserId(result.data.username)
      
      
    }).catch((err) => {
      console.log(err)
    });
    
  }, []);
  
  return (
    
    <> 
   {motoId.map((myMoto)=> 
   <div  key={myMoto._id}>
     <div className="container mt-5">
              <div className="card">
                <div className="row">
                  <div className="col-md-4">
                    <img src={myMoto.image} className="img-fluid" />
                  </div>
                  <div className="col-md-8">
                    <h2 className="card-title">{myMoto.marca}</h2>
                    <p>{myMoto.description}</p>
                    <button className="btn btn-outline-primary">
                      <Link to={`/motocycles/${myMoto._id}`}>More details</Link>
                       
                      </button>
                  </div>
                </div>
              </div>
              <button onClick={handleDelete}>Delete</button>
            <Link to={`/motocycles/${myMoto._id}/update`}>Update Moto</Link>
       </div>  
   </div>)}
    
  
    </>

    
  )
  
};

export default MyMotocycles;


/*
  <div className="container mt-5">
              <div className="card">
                <div className="row">
                  <div className="col-md-4">
                    <img src={myMoto.image} className="img-fluid" />
                  </div>
                  <div className="col-md-8">
                    <h2 className="card-title">{myMoto.marca}</h2>
                    <p>{myMoto.description}</p>
                    <button className="btn btn-outline-primary">
                      <Link to={`/motocycles/${myMoto._id}`}>More details</Link>
                        More details
                      </Link>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <button onClick={handleDelete}>Delete</button>
            <Link to={`/motocycles/${myMoto._id}/update`}>Update Moto</Link>
*/