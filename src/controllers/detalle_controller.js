/* Este controlador "detalle_controllers" implementa todos los metodos para
manejar los detalle */
/* cargo el manejador de los paquetes del modelo */
const data_platos = require('../model/data_platos.js');

const detalle_controllers = {
    detalle_home: (req, res) => {
        res.render('../views/detalleMenu');
    },
    detalle_plato: (req, res) => {
        let indice_plato= parseInt(req.params.id, 10) - 1;
        let plato= (data_platos[indice_plato]);
        res.render('../views/detalleMenu', {plato: plato});
    }
};

module.exports = detalle_controllers; /* exporto el modulo para hacerlo visible */