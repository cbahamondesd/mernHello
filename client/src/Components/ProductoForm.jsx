import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

export default () => {
    // mantener el control de lo que se escribe a través del gancho useState
    const [titulo, setTitulo] = useState(""); 
    const [precio, setPrecio] = useState("");
    const [descripcion, setDescripcion] = useState("");
  
    const [productos, setProductos] = useState([]);
    const navigate = useNavigate();
    
        useEffect(() => {
            axios
            .get("http://localhost:8000/api/productos")
            .then((res) => setProductos(res.data.producto))
            .catch((err) => console.log("Error al obtener productos: ", err));
        }, []);
    

    //gestor cuando se envía el formulario
    const onSubmitHandler = e => {
        //evitar el comportamiento por defecto de submit
        e.preventDefault();
  
        //hacer una petición POST para crear una nueva persona
        axios.post('http://localhost:8000/api/productos/new', {
            titulo,
            precio,
            descripcion
        })
            .then(res=>console.log(res))
            .catch(err=>console.log(err))
    }

    const editProducto = (productoId) => {
        navigate("/edit/" + productoId)
    };


    return (
        <form onSubmit={onSubmitHandler}>
            <div>
            <h1>Administrador de Productos</h1>
            <p>
                <label>Titulo</label><br/>
                <input type="text" onChange = {(e)=>setTitulo(e.target.value)} value={titulo}/>
            </p>
            <p>
                <label>Precio</label><br/>
                <input type="text" onChange = {(e)=>setPrecio(e.target.value)} value={precio}/>
            </p>
            <p>
                <label>Descripción</label><br/>
                <input type="text" onChange = {(e)=>setDescripcion(e.target.value)} value={descripcion}/>
            </p>
            <input type="submit"/>
            </div>

            <div>
                <h4>Todos los Productos</h4>
                <table border="1">
                <tbody>
                {productos.map((producto) => (
                    <tr>
                        <td><a href="" onClick={(e) => {
                        editProducto(producto._id);
                        }}>{producto.titulo}</a></td>
                    </tr>
                ))}
                </tbody>
                </table>
            </div>
        </form>
    )
}
