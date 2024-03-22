import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const Detalle = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [titulo, setTitulo] = useState("");
  const [precio, setPrecio] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [errors, setErrors] = useState([]); // Agregar estado para errores

  useEffect(() => {
    axios.get("http://localhost:8000/api/productos/" + id).then((res) => {
        setTitulo(res.data.producto.titulo);
        setPrecio(res.data.producto.precio);
        setDescripcion(res.data.producto.descripcion);
    });
  }, [id]);

  return (
    <>
      <div>
        <h4>Titulo: {titulo}</h4>
        <h4>Precio: {precio}</h4>
        <h4>Descripción: {descripcion}</h4>
      </div>
      
    </>
  );
};

export default Detalle;
