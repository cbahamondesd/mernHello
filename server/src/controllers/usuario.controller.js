const Usuario = require('../models/usuario.model');

module.exports.index = (req, res) => {
    res.json({
        message: "Hello World"
    });
}

module.exports.createNewUsuario = (req, res) => {
  Usuario.create(req.body)
    .then(newlyCreatedUsuario => res.json({ usuario: newlyCreatedUsuario }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
}

module.exports.findAllUsuarios = (req, res) => {
  Usuario.find()
    .then(allDaUsuario => res.json({ usuario: allDaUsuario }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};