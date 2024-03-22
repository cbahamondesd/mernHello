const express = require('express');
const cors = require("cors");
const app = express();
require('./src/config/mongoose.config'); // This is new

// Configuración de CORS
app.use(cors());
app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 

require('./src/routes/usuario.routes')(app); // This is new
require('./src/routes/producto.routes')(app); // This is new

app.listen(8000, () => {
    console.log("Listening at Port 8000")
})
