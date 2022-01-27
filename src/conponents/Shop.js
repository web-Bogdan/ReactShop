import React from 'react';
import '../styles/Shop.scss';
import Filters from "./Filters";
import {faMobileAlt, faTimesCircle} from "@fortawesome/free-solid-svg-icons";
import {faTabletAlt} from "@fortawesome/free-solid-svg-icons";
import {faHeadphones} from "@fortawesome/free-solid-svg-icons";
import {faShoppingCart} from "@fortawesome/free-solid-svg-icons";
import {faCheck} from "@fortawesome/free-solid-svg-icons";
import {useDispatch, useSelector} from "react-redux";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {ADD_TO_CART, TOTAL_COUNT} from "../utils/utils";
const Shop = () => {
    const [activeRadio, setActiveRadio] = React.useState(-1);
    const cartItems = useSelector(state => state);
    const items =  useSelector(state => state.items);
    const cart =  useSelector(state => state.cart);
    const dispatch = useDispatch();
    const changeActiveRadio = (index) => {
        setActiveRadio(index);
    }
    const addToCart = (item, e) => {
        e.target.classList.add('btn-added')
        dispatch({type: ADD_TO_CART, payload: item.id});
        dispatch({type: TOTAL_COUNT});
        e.preventDefault();
    }
    return (
        <main className={"Shop"}>
            <div className="container">
                <Filters radios={[faMobileAlt, faTabletAlt, faHeadphones]} activeRadio={activeRadio} changeActiveRadio={changeActiveRadio}></Filters>
            <div className="Shop__cards">
                {items.length &&
                    activeRadio === -1 ?
                    items.map((item, index) =>
                        <div className="card" key={index}>
                            <div className="card__title">{item.name}</div>
                            <div className="card__image"><img src={item.img} alt="lading..."/></div>
                            <div className="card__footer">
                                <div className="card__price">{item.price}$</div>
                                <a href={"#"} className={item.isInCart ? "btn btn--added" : "btn"} onClick={(e) => addToCart(item, e)}>{item.isInCart ? <span className={"Shop__added"}><p>added</p><FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon><FontAwesomeIcon className={"Shop__check"} icon={faCheck}></FontAwesomeIcon></span> : "add to cart"}</a>
                            </div>
                        </div>
                    )
                    :
                    items
                        .filter(item => item.code == activeRadio)
                        .map((item, index) =>
                            <div className="card" key={index}>
                                <div className="card__title">{item.name}</div>
                                <div className="card__image"><img src={item.img} alt="lading..."/></div>
                                <div className="card__footer">
                                    <div className="card__price">{item.price}$</div>
                                    <a href={"#"} className={item.isInCart ? "btn btn--added" : "btn"} onClick={(e) => addToCart(item, e)}>{item.isInCart ? <span className={"Shop__added"}><p>added</p><FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon><FontAwesomeIcon className={"Shop__check"} icon={faCheck}></FontAwesomeIcon></span> : "add to cart"}</a>
                                </div>
                            </div>)
                }
                    </div>
                    </div>
             </main>
    );
};

export default Shop;