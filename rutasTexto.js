import express from 'express';
const rutasTexto = express.Router();


// 1️⃣ saludo con nombre y apellido
rutasTexto.post('/saludo', (req, res) => {
    const { nombre, apellido } = req.body;

    if (!nombre || !apellido) {
        return res.status(400).json({
            error: "Faltan nombre o apellido"
        });
    }

    return res.json({
        mensaje: `Hola ${nombre} ${apellido}, ¿qué tal tu día?`
    });
});


// 2️⃣ dato aleatorio
rutasTexto.post('/dato-aleatorio', (req, res) => {
    const { datos } = req.body;

    if (!Array.isArray(datos) || datos.length === 0) {
        return res.status(400).json({
            error: "Debes enviar un array de datos"
        });
    }

    const random = datos[Math.floor(Math.random() * datos.length)];

    return res.json({
        mensaje: `El dato aleatorio es: ${random}`
    });
});


// 3️⃣ ordenar arreglo
rutasTexto.post('/ordenar', (req, res) => {
    const { array, orden } = req.body;

    if (!Array.isArray(array)) {
        return res.status(400).json({
            error: "Array no válido"
        });
    }

    const ordenado = [...array].sort((a, b) => a - b);

    if (orden === 'desc') {
        ordenado.reverse();
    }

    return res.json({
        resultado: ordenado
    });
});


// 4️⃣ longitud de texto
rutasTexto.post('/longitud', (req, res) => {
    const { texto } = req.body;

    if (!texto) {
        return res.status(400).json({
            error: "Falta el texto"
        });
    }

    return res.json({
        longitud: texto.length
    });
});


// 5️⃣ palindromo
rutasTexto.post('/palindromo', (req, res) => {
    const { palabra } = req.body;

    if (!palabra) {
        return res.status(400).json({
            error: "Falta la palabra"
        });
    }

    const limpia = palabra.toLowerCase().replace(/\s/g, '');
    const invertida = limpia.split('').reverse().join('');

    const esPalindromo = limpia === invertida;

    return res.json({
        palabra,
        esPalindromo
    });
});


export default rutasTexto;