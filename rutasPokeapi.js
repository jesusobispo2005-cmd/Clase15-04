import express from 'express';
const rutasPokeapi = express.Router();

// GET /pokeapi/:id
rutasPokeapi.get('/:id', async (req, res) => {
    const { id } = req.params;

    // Validar que esté en el rango correcto
    if (id < 1 || id > 1025) {
        return res.status(400).json({
            error: 'El número debe estar entre 1 y 1025'
        });
    }

    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const data = await response.json();

        // Obtener sprite
        const sprite = data.sprites.front_default;

        res.json({
            pokemon: data.name,
            sprite: sprite
        });

    } catch (error) {
        res.status(500).json({
            error: 'Error al consultar la PokeAPI'
        });
    }
});

export default rutasPokeapi;