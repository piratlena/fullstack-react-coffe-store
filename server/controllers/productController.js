const uuid = require('uuid')
const path  = require('path')
const {Product} = require('../models/models')
const ApiError = require('../error/ApiError')

class ProductController {
    async create(req, res, next) {
        try {
            const {name, price, countryId, typeId, info} = req.body
            const {img} = req.files
            let fileName = uuid.v4() + ".jpg"
            img.mv(path.resolve(__dirname, '..', 'static', fileName))

            const product = await Product.create({name, price, countryId, typeId, img: fileName})

            return res.json(product)
        } catch (e){
            next(ApiError.badRequest(e.message))
        }
    }
    async getAll(req, res) {
       let { countryId, typeId } = req.query
        let products;

        if (!countryId && !typeId) {
            products = await Product.findAll()
        }
        if (countryId && !typeId) {
            products = await Product.findAll({where: {countryId}})
        }
        if (!countryId && typeId) {
            products = await Product.findAll({where: {typeId}})
        }
        if (countryId && typeId) {
            products = await Product.findAll({where: {countryId, typeId}})
        }
        return res.json(products)
    }

    
    async getOne(req, res) {
        
    }
}

module.exports = new ProductController()