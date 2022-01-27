import React from 'react';
import "../styles/Cart.scss";
import {useDispatch, useSelector} from "react-redux";
import CartItem from "./CartItem";
import {CLEAR_CART, TOTAL_COUNT} from "../utils/utils";


const Cart = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart);
    const totalPrice = useSelector(state => state.total);
    const clearCart = (e) => {
        dispatch({type: CLEAR_CART});
        dispatch({type: TOTAL_COUNT});
        e.preventDefault();
    }
    return (
        <div className={"Cart"}>
            <div className="container">
                <h2 className={"Cart__title"}>Time for shopping</h2>
                <div className="Cart__items">
                    {cartItems.length ?
                        cartItems.map(item =>  <CartItem price={item.price} id={item.id} img={item.img} name={item.name} count={item.count} key={item.id}></CartItem>) : <div className={"Cart__condition--clear"}>The cart is empty</div>
                    }
                </div>
                <div className="Cart__buy">
                    <a className="btn" onClick={e => clearCart(e)} href={"#"}>clear cart</a>
                    <div className="Cart__total">total: {totalPrice}$</div>
                    <a className="btn Cart__btn" href="#" >Buy</a>
                </div>
        </div>
        </div>
    );
};

export default Cart;