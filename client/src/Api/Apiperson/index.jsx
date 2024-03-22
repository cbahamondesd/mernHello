import React, { useState, useEffect } from "react";
import axios from "axios";


function PersonApiComponent() {
  const [data, setData] = useState({});

  useEffect(() => {
    const apiUrl = `http://localhost:8000/api`;
    console.log("entro");

    axios.get(apiUrl).then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error al obtener api persona :", error);
      });
  }, []);

return (

  <div>
    <p>{data.message}</p>
  </div>

);
}

export default PersonApiComponent;
