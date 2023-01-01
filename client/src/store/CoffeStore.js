import {makeAutoObservable} from 'mobx'

export default class CoffeStore {
    constructor () {
       this._types = [
        {id: 1, name: 'Single Origin Coffees'},
        {id: 2, name: 'Blended Coffee'},
        {id: 3, name: 'Decaffeinated Coffee'},
        {id: 4, name: 'Green coffee'}
       ]
       this._countries = [
        {id: 1, name: 'Brazil'},
        {id: 2, name: 'Kenya'},
        {id: 3, name: 'Columbia'},
        {id: 4, name: 'Italy'},
       ]
       this._products = [
        {id: 1, name: 'Nepalese Mount Everest Supreme', price: '109000', rating: '5', img: 'https://cdn.spbdnevnik.ru/uploads/block/image/711558/__medium_%D0%B8%D0%B7%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5_2022-10-24_022947443.png.jpg'},
        {id: 2, name: 'Peruvian Tunki', price: '109000', rating: '5', img: 'https://cdn.spbdnevnik.ru/uploads/block/image/711558/__medium_%D0%B8%D0%B7%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5_2022-10-24_022947443.png.jpg'},
        {id: 3, name: 'Costa Rican Tarrazu Valley', price: '109000', rating: '5', img: 'https://cdn.spbdnevnik.ru/uploads/block/image/711558/__medium_%D0%B8%D0%B7%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5_2022-10-24_022947443.png.jpg'},
        {id: 4, name: 'San Cristobal Hacienda', price: '109000', rating: '5', img: 'https://cdn.spbdnevnik.ru/uploads/block/image/711558/__medium_%D0%B8%D0%B7%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5_2022-10-24_022947443.png.jpg'},
        {id: 5, name: 'Breakfast Favourite', price: '109000', rating: '5', img: 'https://cdn.spbdnevnik.ru/uploads/block/image/711558/__medium_%D0%B8%D0%B7%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5_2022-10-24_022947443.png.jpg'},
        {id: 6, name: 'Everyday Espresso', price: '109000', rating: '5', img: 'https://cdn.spbdnevnik.ru/uploads/block/image/711558/__medium_%D0%B8%D0%B7%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5_2022-10-24_022947443.png.jpg'},
        {id: 7, name: 'Brazilian Swiss Water', price: '109000', rating: '5', img: 'https://cdn.spbdnevnik.ru/uploads/block/image/711558/__medium_%D0%B8%D0%B7%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5_2022-10-24_022947443.png.jpg'},
        {id: 8, name: 'Roaster Choice', price: '109000', rating: '5', img: 'https://cdn.spbdnevnik.ru/uploads/block/image/711558/__medium_%D0%B8%D0%B7%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5_2022-10-24_022947443.png.jpg'}
       ]
       this._selectedType = {}
       this._selectedCountry = {}
        makeAutoObservable(this)
    }

    setTypes(types) {
        this._types = types
    }
    setCountries(countries) {
        this._countries = countries
    }
    setDevices(products) {
        this._products = products
    }
    setSelectedType(type) {
        this._selectedType = type
    }
    setSelectedCountry(country) {
        this._selectedCountry = country
    }
    get types() {
        return this._types
    }
    get countries() {
        return this._countries
    }
    get products() {
        return this._products
    }
    get selectedType() {
        return this._selectedType
    }
    get selectedCountry() {
        return this._selectedCountry
    }
}