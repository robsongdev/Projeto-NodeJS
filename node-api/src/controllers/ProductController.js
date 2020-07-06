const mongoose = require('mongoose');

const Product = mongoose.model('Product')

module.exports = {
    async index (req, res){//rota de listagem
        const {page = 1} = req.query; //escolher pagina de arquivos
        const products = await Product.paginate({},{page, limit: 10});

        return res.json(products);
    },

    async show (req,res){//rota de detalhes
        const product = await Product.findById(req.params.id);

        return res.json(product);
    },
    async store (req, res){ //rota de criação
        const product = await Product.create(req.body);

        return res.json(product);
    },

    async update (req,res){ //rota de atualização
        const product = await Product.findByIdAndUpdate(req.params.id, req.body,{new: true}) //{new: true} retorna atualizado

        return res.json(product);
    },
    async destroy (req,res){//rota de delete
        await Product.findByIdAndRemove(req.params.id);

        return res.send();
    }
}