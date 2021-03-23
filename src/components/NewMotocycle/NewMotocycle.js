import React from "react";
import { useMotocycle } from "../../context/motocycleContext";
import {uploadFileService} from "../../service/motocycle.service"
const NewMotocycle = () => {
  const initialState = { marca: "", modelo: "", picture: "" };
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
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        await createMotocycle(state);
        setState(initialState);
      }}
    >
      <label htmlFor="marca">Marca:</label>
      <input
        type="text"
        name="marca"
        value={state.marca}
        onChange={({ target }) =>
          setState({ ...state, [target.name]: target.value })
        }
      />
      <label htmlFor="modelo">Modelo:</label>
      <input
        type="number"
        name="modelo"
        value={state.modelo}
        onChange={({ target }) =>
          setState({ ...state, [target.name]: target.value })
        }
      />
       <label htmlFor="modelo">Motor:</label>
      <input
        type="text"
        name="motor"
        value={state.motor}
        onChange={({ target }) =>
          setState({ ...state, [target.name]: target.value })
        }
      />
       <label htmlFor="modelo">Descripcion:</label>
      <textarea
        type="text"
        name="description"
        value={state.modelo}
        onChange={({ target }) =>
          setState({ ...state, [target.name]: target.value })
        }
      />
      <label htmlFor="picture">Image:</label>
      <input
        type="file"
        name="picture"
        value={state.picture}
        onChange={handleUpload}
      />
      <button type="submit"> create </button>
    </form>
  );
};

export default NewMotocycle;
