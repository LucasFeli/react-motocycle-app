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
      
      console.log("tarea", result.data)
    }).catch((err) => {
      console.log(err)
    });
    
  }, []);
  console.log("username", userId)
  console.log("moto", motoId )

  return (
    
    <> 
   {motoId.map((myMoto)=> 
   <div  key={myMoto._id}>
     <ReactBootStrap.Col>
            <ReactBootStrap.Card style={{ width: "60rem" }}>
              <ReactBootStrap.Card.Img variant="top" src={myMoto.image} />
              <ReactBootStrap.Card.Body>
                <ReactBootStrap.Card.Title>
                 {myMoto.marca}
                </ReactBootStrap.Card.Title>
                <ReactBootStrap.Card.Text>
                <p>Description: {myMoto.description}</p>
                </ReactBootStrap.Card.Text>
                <ReactBootStrap.Button variant="primary">
                <Link to={`/motocycles/${myMoto._id}`}>More details</Link>
                </ReactBootStrap.Button>
              </ReactBootStrap.Card.Body>
            </ReactBootStrap.Card>
            </ReactBootStrap.Col>
            <button onClick={handleDelete}>Delete</button>
            <Link to={`/motocycles/${myMoto._id}/update`}>Update Moto</Link>
         
   </div>)}
    
  
    </>

    
  )
  
};

export default MyMotocycles;
