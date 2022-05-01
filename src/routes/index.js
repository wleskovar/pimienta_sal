/* Sistema de Ruteo */

const path = require('path');
const express = require('express');
const router = express.Router(); /* Router permiete crear rutas montables y desmontables */
/* el metodo HTTP es llamado desde Router */

const index_controllers = require('../controllers/index_controller.js');

/* rutas con controladores */
router.get('/', index_controllers.index_home);
router.get('#about', index_controllers.index_about);

module.exports = router; /* exporto el modulo para hacerlo visible */