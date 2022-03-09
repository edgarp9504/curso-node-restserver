const {response, request} = require('express');

const usariosGet = (req = request, res = response) => {

    const {q, nombre, page,limit} = req.query;

    res.json({
        msg: "GET api - Controlador",
        q, 
        nombre, 
        page,
        limit
    })
  }

  const usariosPost = (req, res = response) => {

    const {nombre, edad} = req.body;

    res.json({
        msg: "Post api - Controlador",
        nombre,
        edad
    })
  }
  const usariosPut = (req, res = response) => {
    
    const id = req.params.id;
    
    res.json({
        msg: "Put api - Controlador",
        id
    })
  }
  const usariosPatch = (req, res = response) => {
    res.json({
        msg: "Pathc api - Controlador",
    })
  }
  const usariosDelete = (req, res = response) => {
    res.json({
        msg: "Delete api - Controlador",
    })
  }

module.exports = {
    usariosGet,
    usariosPost,
    usariosPut,
    usariosPatch,
    usariosDelete,
}