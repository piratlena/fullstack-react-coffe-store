import React, { useContext } from "react";
import TypeBar from '../typeBar/TypeBar';
import './sortProducts.module.scss';
import Card from '../cards/Cards';
import { observer } from 'mobx-react-lite';
import { Context } from '../../index';


const SortProducts = observer(() => {
       const { product } =  useContext(Context)    
    return (
        <div className='container'>
            <div className='sort'>
                <div className="sort__block">
                    <div className="sort__block-name">Looking for</div>
                    <div className="sort__block-box">
                        <input 
                        className='sort__block-search'
                        type="text"
                        placeholder='start typing here...'/>
                     <svg 
           // onClick = {onClickClear}
            className='sort__block-clear'
            data-name="Layer 1" height="200" id="Layer_1" viewBox="0 0 200 200" width="200" xmlns="http://www.w3.org/2000/svg"><title/><path d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z"/></svg>
                    </div>
                </div>
                <div className="sort__filter">
                    <div className="sort__filter-text">Or filter</div>
                <TypeBar />
                </div>
            </div>
            <div className="results">
                {product.products.map(product => 
                    <Card
                    key={product.id}
                    product={product}/>
                    )}
              
            </div>
        </div>
    )
}
)
export default SortProducts;