import React from "react";
import { useMotocycle } from "../../context/motocycleContext";

const NewMotocycle = () => {
  const initialState = { marca: "", modelo: "", image: "" };
  const [state, setState] = React.useState(initialState);
  const { createMotocycle } = useMotocycle();

  const handleUpload = async (e) => {
    console.log("e.target", e.target.files[0]);

    const uploadData = new FormData();
    uploadData.append("imageUrl", e.target.files[0]);
    await createMotocycle(state);
    setState(initialState);
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
      <label htmlFor="image">Image:</label>
      <input
        type="file"
        name="image"
        value={state.image}
        onChange={handleUpload}
      />
      <button type="submit"> create </button>
    </form>
  );
};

export default NewMotocycle;
