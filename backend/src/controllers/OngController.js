const crypto = require('crypto');
const connection = require('../database/connection');

module.exports = {

    async index(request, response) {
        const ongs = await connection('ongs').select('*');
    
        return response.json(ongs);
    },

    async create(request, response) {
        const { name, email, whatsapp, city, uf } = request.body;
    
        // 4Bytes de caracteres aleatórios, hexadecimais (vide documentação do node)
        const id = crypto.randomBytes(4).toString('HEX');

        // Como o insert pode demorar, é preciso que o node aguarde a execução dele, antes de seguir adiante
        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
        });

        return response.json({ id });
    }
}