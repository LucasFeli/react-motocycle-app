import React from "react";
import { getUser } from "../../service/auth.service";
import { Link, useHistory, useParams } from "react-router-dom";
import { deleteMotocycle } from "../../service/motocycle.service";
import { useAuth } from "../../context/AuthContext.utils";

const MyMotocycles = () => {
  const [motoId, setMotoId] = React.useState([]);
  const [userId, setUserId] = React.useState([]);
  const { user } = useAuth();
  const { push } = useHistory();

  const handleDelete = async (motoid) => {
    await deleteMotocycle(motoid);
    push("/motocycles");
  };
  React.useEffect(() => {
    getUser()
      .then((result) => {
        console.log("result", result);
        setMotoId(result.data.myMotocycles);
        setUserId(result.data.username);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      {motoId.map((myMoto) => (
        <div key={myMoto._id}>
          <div className="container mt-5">
            <div className="card">
              <div className="row">
                <div className="col-md-4">
                  <img
                    src={myMoto.image}
                    className="img-fluid"
                    alt="this is a moto "
                  />
                </div>
                <div className="col-md-8">
                  <h2 className="card-title">{myMoto.marca}</h2>
                  <p>{myMoto.description}</p>
                  <button className="btn btn-outline-primary btn-sm">
                    <Link to={`/motocycles/${myMoto._id}`}> Mas Detalles</Link>
                  </button>

                  <Link
                    className="btn btn-outline-primary btn-sm"
                    to={`/motocycles/${myMoto._id}/update`}
                  >
                    Modificar
                  </Link>
                  <button
                    className="btn btn btn-outline-danger btn-sm"
                    onClick={() => handleDelete(myMoto._id)}
                  >
                    Eliminar
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

export default MyMotocycles;

