const express = require('express');
const path = require('path');
const app = express();
const publicPath = path.join(__dirname, '../public');

/* rutas */
const rutas_index = require('./routes/index.js');
const rutas_detalle = require('./routes/detalle.js');

app.set('view engine', 'ejs');
/* seteo donde esta el directorio "views" */
app.set('views', __dirname + '/views');

app.use(express.static(publicPath));

/* configuracion para poder capturar la informacion de los formularios */
app.use(express.urlencoded({extended: false}));
app.use(express.json());

/* puntos de entrada */
app.use('/', rutas_index);
app.use('/index', rutas_index);
app.use('/detalle', rutas_detalle);

/* se monta el servidor */
app.listen(process.env.PORT || 3000, () => {
    console.log('Servidor corriendo en el puerto 3000');
});