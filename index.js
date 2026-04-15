import db from 'mongoose';
import express from 'express';

const app = express();
app.use(express.json())
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

app.listen(port, ()=>{
    console.log(`el servidor aranco en la url http://localhost:${port}`)
})