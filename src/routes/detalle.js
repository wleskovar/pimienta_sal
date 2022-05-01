/* Sistema de Ruteo */

const path = require('path');
const express = require('express');
const router = express.Router(); /* Router permiete crear rutas montables y desmontables */
/* el metodo HTTP es llamado desde Router */

const detalle_controllers = require('../controllers/detalle_controller.js');

/* rutas con controladores */
router.get('/', detalle_controllers.detalle_home);
router.get('/', detalle_controllers.detalle_home);
router.get('/:id', detalle_controllers.detalle_plato);

module.exports = router; /* exporto el modulo para hacerlo visible */