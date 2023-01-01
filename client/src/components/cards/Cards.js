import './cards.module.scss';
import { observe } from 'mobx-react-lite';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PRODUCT_ROUTE } from '../../utils/consts';

const Card = ({product}) => {
    const navigate = useNavigate()
   return (
    <div className="product__item"
        onClick={() => navigate(PRODUCT_ROUTE + "/" + product.id)}>
        <img src={product.img} alt="product" className="product__img" />
        <div className="product__descr">{product.name}</div>
        <div className="product__origin">{product.rating}</div>
        <div className="product__price">{product.price}$</div>
    </div>
   )
}
export default Card;