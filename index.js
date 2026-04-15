import db from 'mongoose';
import express from 'express';

const app = express();
app.use(express.json())
const port = 3000;

app.get('/', (req, res)=> {
    res.send("hola mundo")
});


app.post('/holi',(req, res)=>{
    console.log(req.body)
    const {nombre}=req.body
    res.send(`hola ${nombre}`)
})

app.listen(port, ()=>{
    console.log(`el servidor aranco en la url http://localhost:${port}`)
})