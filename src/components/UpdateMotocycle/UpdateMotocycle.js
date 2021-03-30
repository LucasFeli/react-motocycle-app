import React from "react";
import { useMotocycle } from "../../context/motocycleContext";
import { useParams,useHistory} from "react-router-dom";
import { uploadFileService } from "../../service/motocycle.service";

import "./UpdateMotocycle.css"

const MotocycleUpdate = () => {
  const initialState = { marca: "", modelo: "",motor:"",descripcion:"", picture: "" };
  const [update, setUpdate] = React.useState(initialState);
  const [takeImage, settakeImage] = React.useState(false)

  const { updateMotocycle } = useMotocycle();
  const { motocycleId } = useParams();
  const {push} = useHistory()
  const handleUpload = async (e) => {
    settakeImage(false)
    const uploadData = new FormData();
   uploadData.append("image", e.target.files[0]);
   console.log("image", e.target.files[0])
   const{data : cloudinaryUrl} =  await uploadFileService(uploadData);
   setUpdate({...update, image : cloudinaryUrl});
   settakeImage(true)
 };

 


  return (
    <section className="fondo-update">
    <div className="container-update">
    <h1>Modifique su Moto</h1>

    <form
      onSubmit={async (e) => {
        e.preventDefault();
        await updateMotocycle(motocycleId,update);
        
        push(`/myMotocicles`);
      }}
    >
      <div className="control">
     <label htmlFor="marca"><h3>Marca:</h3></label>
      <input
        type="text"
        name="marca"
        value={update.marca}
        onChange={({ target }) =>
          setUpdate({ ...update, [target.name]: target.value })
        }
      />
      </div>
      <div className="control">
      <label htmlFor="modelo"><h3>Modelo:</h3></label>
      <input
        type="number"
        name="modelo"
        min = "1900"
        max = "2023"
        value={update.modelo}
        onChange={({ target }) =>
          setUpdate({ ...update, [target.name]: target.value })
        }
      />
      </div>
      <div className="control">
       <label htmlFor="motor"><h3>Motor:</h3></label>
      <input
        type="text"
        name="motor"
        value={update.motor}
        onChange={({ target }) =>
        setUpdate({ ...update, [target.name]: target.value })
      }
      />
      </div>
      <div className="control">
       <label htmlFor="descripcion"><h3>Descripcion:</h3></label>
      <textarea rows="4" cols="60"
        type="text"
        name="description"
        value={update.description}
        onChange={({ target }) =>
        setUpdate({ ...update, [target.name]: target.value })
        }
      />
      <div className="control">
      <label htmlFor="picture"><h3>Imagen:</h3></label>
      <input
        type="file"
        name="picture"
        value={update.picture}
        onChange={handleUpload}
      />
      </div>


        </div>
        <div className="control">
        <button type="submit" value="Add" disabled= {!takeImage} >Modificar</button>
      </div>
   
    </form>
    </div>
    </section>
  );
};

export default MotocycleUpdate;
