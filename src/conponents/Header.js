import React from 'react';
import '../styles/Header.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faShoppingBasket} from '@fortawesome/free-solid-svg-icons'
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
const Header = () => {
    const cart = useSelector(state => state.cart);
    let count = cart.reduce((sum, el) => el.count + sum, 0);
    return (
        <header className={'Header'}>
            <div className="Header__logo"><Link to={"/shop"}>MaxiShop</Link></div>
            <nav className="Header__menu">
                <ul className="Header__list">
                    <li><Link to="/shop" className="Header__link">shop</Link></li>
                    <li className={"Header__icon"}><span className={"Header__count"}>{count}</span><Link className="Header__link " to="/cart" ><FontAwesomeIcon className={'Header__basket'} icon={faShoppingBasket}></FontAwesomeIcon></Link></li>

                </ul>

            </nav>
        </header>
    );
};

export default Header;