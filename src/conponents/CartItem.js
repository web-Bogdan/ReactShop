import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {faTimesCircle} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {DELETE_ITEM, PLUS_CART, REMOVE_CART, TOTAL_COUNT} from "../utils/utils";

const CartItem = ({name, img, price, count, id}) => {
    const dispatch = useDispatch();
    function onPlus(id, e){
        dispatch({type: PLUS_CART, payload: id});
        dispatch({type: TOTAL_COUNT});
        e.preventDefault();

    }
    const onMinus = (id, e) => {
        dispatch({type: REMOVE_CART, payload: id});
        dispatch({type: TOTAL_COUNT});
        e.preventDefault();
    }
    const onRemoveItem = (id, e) => {
        dispatch({type: DELETE_ITEM, payload: id});
        dispatch({type: TOTAL_COUNT});
        e.preventDefault();
    }
    return (
        <div>
            <div className="Cart__item">
                <div className="Cart__info">
                    <div className="Cart__name">{name}</div>
                    <div className="Cart__name"><img className={"Cart__image"} src={img} alt="lading..."/></div>
                </div>
                <div className="Cart__buttons">
                    <a className={"Cart__button Cart__button--add"} href="#" onClick={(e) => onPlus(id, e)}>+</a>
                    <a className={"Cart__button Cart__button--remove"} href="#"onClick={(e) => onMinus(id, e)} >–</a>
                </div>
                <div className="Cart__quantity">{count}</div>
                <div className="Cart__price">{price * count}$</div>
                <a onClick={(e) => onRemoveItem(id, e)} className={"Cart__removeItem"} href={"#"}><FontAwesomeIcon icon={faTimesCircle}></FontAwesomeIcon></a>
            </div>
        </div>
    );
};

export default CartItem;