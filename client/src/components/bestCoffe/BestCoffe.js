import './bestCoffe.module.scss';
import React, {useContext} from 'react'
import { observer} from 'mobx-react-lite';
import { Context } from '../../index';
import Card from '../cards/Cards'


const BestCoffe = observer(() => {
    const {product} = useContext(Context)
    return (
        <div className="cards">
            <div className="container">
                <div className="cards__title">Our best</div>
                <div className="cards__block">
                    {product.products.map(product => {
                        <Card
                        key={product.id}
                        {...product}/>
                    })}
                    {/* <div className="card__item">
                        <img src={CardFirst} alt="card" className="card__img" />
                        <div className="card__descr">Solimo Coffee Beans 2 kg</div>
                        <div className="card__price">10.73$</div>
                    </div>
                    <div className="card__item">
                        <img src={CardSecond} alt="card" className="card__img" />
                        <div className="card__descr">Solimo Coffee Beans 2 kg</div>
                        <div className="card__price">10.73$</div>
                    </div>
                    <div className="card__item">
                        <img src={CardThird} alt="card" className="card__img" />
                        <div className="card__descr">Solimo Coffee Beans 2 kg</div>
                        <div className="card__price">10.73$</div>
                    </div> */}
             
                </div>
            </div>
        </div>
    )
}
)
export default BestCoffe;