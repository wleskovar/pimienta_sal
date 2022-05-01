/* Este controlador "index_controllers" implementa todos los metodos para
manejar los index */

/* cargo el manejador de los paquetes del modelo */
const data_platos = require('../model/data_platos.js');
const data_about = require('../model/data_about.js');

const index_controllers = {
    index_home: (req, res) => {
        res.render('../views/index', {data_platos: data_platos, data_about: data_about});
    },
    index_about: (req, res) => {
        res.render('../views/index', {data_platos: data_platos, data_about: data_about});
    }
};

module.exports = index_controllers; /* exporto el modulo para hacerlo visible */