const UsuarioController = require('../controllers/usuario.controller');
module.exports = function(app){
    app.get('/api', UsuarioController.index);
    app.post("/api/usuarios/new", UsuarioController.createNewUsuario);
    app.get("/api/usuarios", UsuarioController.findAllUsuarios);

    // app.post('/api/newperson', PersonController.createPerson);
   
}
