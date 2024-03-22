const ProductoController = require('../controllers/producto.controller');

module.exports = function(app){
    app.post("/api/productos/new", ProductoController.createNewProducto);
    app.get("/api/productos", ProductoController.findAllProductos);
    app.get("/api/productos/:id", ProductoController.findOneSingleProducto);
}
