import db from 'mongoose';
import express from 'express';
import rutas from './rutasMatematicas.js';
import { palindromo } from './texto.js';

const app = express();
app.use(express.json())

app.use('/rutasMatematicas', rutas);
const port = 3000;

app.get('/', (req, res)=> {
    res.send("hola mundo")
});


app.post('/holi', (req, res) => {
    const { nombre, apellido } = req.body;
    
    if (nombre !="") {
        res.send(`hola ${nombre}`);
    } else if (apellido != "") {
        res.send(`hola ${apellido}`);
    } else {
        res.send("Faltan nombre o apellido");
    }
});

app.post('/palindromo', (req, res) => {
        const { palabra } = req.body;

        const resultado = palindromo(palabra);
    //palindromo();
    res.status(200).json({palindromo: resultado});
});


app.listen(port, ()=>{
    console.log(`el servidor aranco en la url http://localhost:${port}`)
})