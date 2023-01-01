import React, { useContext } from "react";
import { observer } from "mobx-react-lite";
import { Context } from "../../index";
import "./typeBar.module.scss"


const TypeBar = observer(() => {
const { product } = useContext(Context)
    return (
        <div className="sort__filter-categories">
        <ul>
        {product.countries.map(country => (
        <li key={country.id} >
        {country.name}</li>
))}
        </ul>
    </div>
    )
}
)
export default TypeBar