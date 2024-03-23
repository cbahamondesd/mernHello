const Producto = require('../models/producto.model');

module.exports.createNewProducto = (req, res) => {
  Producto.create(req.body)
    .then(newlyCreatedProducto => res.json({ producto: newlyCreatedProducto }))
    .catch(err => res.json({ message: "Error al crear producto", error: err }));
}

module.exports.findAllProductos = (req, res) => {
  Producto.find()
    .then(allDaProducto => res.json({ producto: allDaProducto }))
    .catch(err => res.json({ message: "Error al consultar todos los productos", error: err }));
};

module.exports.findOneSingleProducto = (req, res) => {
  Producto.findOne({ _id: req.params.id })
    .then((oneSingleProducto) => res.json({ producto: oneSingleProducto }))
    .catch((err) => res.json({ message: "Error al consultar producto particular ", error: err }));
};

module.exports.deleteProducto = (req, res) => {
  Producto.findByIdAndDelete({ _id: req.params.id })
    .then((oneSingleProducto) => res.json({ producto: oneSingleProducto }))
    .catch((err) => res.json({ message: "Error al eliminar producto particular ", error: err }));
};
