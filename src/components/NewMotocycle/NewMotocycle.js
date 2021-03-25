import React from "react";
import { useMotocycle } from "../../context/motocycleContext";
import {uploadFileService} from "../../service/motocycle.service"
import "./NewMotocycle.css"

const NewMotocycle = () => {
  const initialState = { marca: "", modelo: "",motor:"",descripcion:"", picture: "" };
  const [state, setState] = React.useState(initialState);
  //const [takeImage, settakeImage] = React.useState(initialState)
  const { createMotocycle } = useMotocycle();

  const handleUpload = async (e) => {
    console.log("e.target", e.target.files[0]);

    const uploadData = new FormData();
    uploadData.append("image", e.target.files[0]);
    const{data : cloudinaryUrl} =  await uploadFileService(uploadData);
    console.log("data", cloudinaryUrl)
    setState({...state, image : cloudinaryUrl});
  };

  return (
    <section className="fondo-new">
    <div className="container-new">
    <h1>Create Your Motocycle</h1>
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        await createMotocycle(state);
        setState(initialState);
      }}
    >
      <div className="control">
      <label htmlFor="marca"><h3>Marca:</h3></label>
      <input
        type="text"
        name="marca"
        value={state.marca}
        onChange={({ target }) =>
          setState({ ...state, [target.name]: target.value })
        }
      />
      </div>
       <div className="control">
      <label htmlFor="modelo"><h3>Modelo:</h3></label>
      <input
        type="number"
        name="modelo"
        value={state.modelo}
        onChange={({ target }) =>
          setState({ ...state, [target.name]: target.value })
        }
      />
      </div>
       <div className="control">
       <label htmlFor="motor"><h3>Motor:</h3></label>
      <input
        type="text"
        name="motor"
        value={state.motor}
        onChange={({ target }) =>
          setState({ ...state, [target.name]: target.value })
        }
      />
      </div>

       <div className="control">
       <label htmlFor="descripcion"><h3>Descripcion:</h3></label>
      <textarea rows="4" cols="48"
        type="text"
        name="description"
        value={state.modelo}
        onChange={({ target }) =>
          setState({ ...state, [target.name]: target.value })
        }
      />
      </div>
       <div className="control">
      <label htmlFor="picture"><h3>Image:</h3></label>
      <input
        type="file"
        name="picture"
        value={state.picture}
        onChange={handleUpload}
      />
      </div>
      <div className="control">
      <input type="submit" value="Add" />
      </div>
    </form>
    </div>
    </section>
  );
};

export default NewMotocycle;
