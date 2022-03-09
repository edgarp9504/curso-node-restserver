const express = require('express')
const cors = require('cors');



class Server{
    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/usuarios';

        //Midelwares
        this.Middlewares();

        //Parseo y lectura del body
        this.app.use(express.json());

        //Rutas de mi aplicación
        this.routes();

    }

    Middlewares(){

        //Cors
        this.app.use(cors());

        //Directorio publico
        this.app.use(express.static('public'));
    }

    routes(){
        this.app.use(this.usuariosPath, require('../routes/usuarios'));
    }

    lister(){
        this.app.listen(process.env.PORT, () => {
            console.log('Corriendo el servidor en puerta' + process.env.PORT)
        });
    }

}

module.exports = Server;