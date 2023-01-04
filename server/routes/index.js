const Router = require('express')
const router = new Router()
const countryRouter = require('./countryRouter')
const productRouter = require('./productRouter')
const typeRouter = require('./typeRouter')
const userRouter = require('./userRouter')

router.use('/user', userRouter)
router.use('/type', typeRouter)
router.use('/country', countryRouter)
router.use('/product', productRouter)

module.exports = router