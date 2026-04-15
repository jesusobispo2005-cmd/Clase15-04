import express from 'express';
const rutasMatematicas = express.Router();


//suma
rutasMatematicas.post('/suma', (req, res) => {
    const { num1, num2 } = req.body;

    if (num1 == null || num2 == null) {
        return res.status(400).json({ error: 'Faltan números' });
    }

    const resultado = Number(num1) + Number(num2);

    res.json({ resultado });
});

//resta 
rutasMatematicas.post('/resta', (req, res) => {
    const { num1, num2 } = req.body;
    const resultado = num1 - num2;
    res.json({ resultado });
});

//multiplicacion
rutasMatematicas.post('/multiplicacion', (req, res) => {
    const { num1, num2 } = req.body;
    const resultado = num1 * num2;
    res.json({ resultado });
});

//division
rutasMatematicas.post('/division', (req, res) => {
    const { num1, num2 } = req.body;
    if (num2 === 0) {
        return res.status(400).json({ error: 'No se puede dividir por cero' });
    }
    const resultado = num1 / num2;
    res.json({ resultado });
});

//mayor, menor y medio
rutasMatematicas.post('/ordenar', (req, res) => {
    const { num1, num2, num3 } = req.body;
    if (num1 !== 'null' && typeof num2 === 'number' && typeof num3 === 'number') {
        const numeros = [num1, num2, num3].sort((a, b) => a - b);
        return res.json({ mayor: numeros[2], menor: numeros[0], medio: numeros[1] });
    } else {
        return res.status(400).json({ error: 'Datos inválidos' });
    }
});

//modulo
rutasMatematicas.post('/modulo', (req, res) => {
    const { num1, num2 } = req.body;
    if(num1 !== 'null' && num2 !== 'null') {
        const resultado = num1 % num2;
        return res.status(200).json({ resultado : num1 % num2 });
    } else {
        return res.status(400).json({ error: 'Faltan numeros' });
    }
});

//fizzbuzz
rutasMatematicas.post('/fizzbuzz', (req, res) => {
    const { numero } = req.body;
    if (numero !== 'null') {
        let resultado = '';
        if (numero % 3 === 0) resultado += 'fizz';
        if (numero % 5 === 0) resultado += 'buzz';
        if (resultado === '') resultado = numero.toString();
        return res.status(200).json({ resultado });
    } else {
        return res.status(400).json({ error: 'Falta el numero' });
    }
});

export default rutasMatematicas;