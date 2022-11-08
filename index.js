const express = require('express');
const port = 4000;
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('port', port);

app.use('/country', require('./routes/country.route'));


app.listen(app.get('port'), (error) => {
    if (error) {
        console.log('Error al iniciar el servidor ' + error)
    }
    else {
        console.log('Servidor iniciado correctamente' + port)
    }
});
