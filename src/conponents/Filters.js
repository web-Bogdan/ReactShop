import React from 'react';
import "../styles/Filters.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
const Filters = ({radios, changeActiveRadio, activeRadio}) => {
    return (
        <div className={"Filters"}>
            <div className={"Filters__radios"}>
                <a className={activeRadio === -1 ? "Filters__radio Filters__radio--active" : "Filters__radio"} onClick={() => changeActiveRadio(-1)} href={"#"}>all</a>
                {radios && radios.map((icon, index)  => <a key={index} href={"#"} className={activeRadio === index ? "Filters__radio Filters__radio--active" : "Filters__radio"} onClick={() => changeActiveRadio(index)}><FontAwesomeIcon icon={icon}></FontAwesomeIcon></a>)}
            </div>
        </div>
    );
};

export default Filters;