import React from "react";
import {getUser} from "../../service/auth.service"



const MyMotocycles = () => {
  const [UserId, setUserId] = React.useState({})
  
  React.useEffect(() => {
    getUser().then((result) => {
      setUserId(result)
    }).catch((err) => {
      console.log(err)
    });
    
  }, []);

  return <> 
  my motocycles

  </>;
};

export default MyMotocycles;
