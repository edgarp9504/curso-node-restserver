const {Router} = require('express');
const {usariosGet, usariosPost, usariosPut, usariosPatch, usariosDelete} = require('../controllers/usuarios');

const router = Router();

router.get('/', usariosGet);
router.post('/', usariosPost);
router.put('/:id', usariosPut);
router.post('/', usariosPatch);
router.delete('/', usariosDelete);

  module.exports = router;