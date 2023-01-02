import React from "react";
import './productCard.module.scss';
import LogoDark from "../logoDark/LogoDark";

const ProductCard = () => {
    const product =  {id: 1, name: 'Nepalese Mount Everest Supreme', price: '109000', rating: '5', img: 'https://cdn.spbdnevnik.ru/uploads/block/image/711558/__medium_%D0%B8%D0%B7%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5_2022-10-24_022947443.png.jpg'}
    const description = [
        {id: 1, title: 'CUP CHARACTERISTICS', description: 'This coffee has a light acidity, soft and smooth body and floral flavors as well as cinnamon, ginger, and citrus.'},
        {id: 2, title: 'Tasting Notes:', notes: [{Strength: 3}, {Flavour: 3}, {Acidity: 2}, {Aroma: 5}, {Body: 3}]}
    ]
    const country = {id: 1, name: 'Brazil'}
    return (
        <div className="about">
        <div className="container">
            <div className="about__inner">
            <div className="about__image">
                    <img src={product.img} alt="" />
            </div>
            <div className="about__info">
                <div className="about__title">About it</div>
                <LogoDark/>
                <div className="about__descr-first">{product.name}</div>
                <div className="about__flex">
                <div className="about__subtitle">Country:</div> <div className="about__subtitle-name">{country.name}</div> 
                </div>
                
                <div className="about__subtitle">Description:</div>
            <ul>
            {description.map((info, index) => <li key={index} className={index % 2=== 0 ? "about__color-dark" : "about__color-light" }>{info.title}{info.description}</li>)}
            </ul>
            <div className="about__flex">
            <div className="about__subtitle">Price:</div> <div className="about__subtitle-price">{product.price}</div> 
            </div>
            
            </div>
           <button className="btn__cart btn">Add To Cart</button>
            
            </div>
        </div>
    </div>
    )
 }
 export default ProductCard;