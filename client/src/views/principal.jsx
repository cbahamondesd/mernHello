import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Principal = () => {
const [productos, setProductos] = useState([]);
const navigate = useNavigate();

    useEffect(() => {
        axios
        .get("http://localhost:8000/api/productos")
        .then((res) => setProductos(res.data.producto))
        .catch((err) => console.log("Error al obtener productos: ", err));
    }, []);

    const editProducto = (productoId) => {
        navigate("/edit/" + productoId)
    };

    return (
        <>
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
        </>
    );
};

export default Principal;
