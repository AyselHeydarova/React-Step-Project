import React from 'react';
import './Modal-style.scss';
import {Link} from "react-router-dom";
const Modal = props=> {
    return (
        <div style={{display:props.hidden}} className={"delete"}>
            <h3 className={"confirmation"}>delete this note?</h3>
            <div className={"flexible"}>
                <p className={"cancel"} onClick={props.toggle}>cancel</p>
                <Link className={"yes"} to={"/"} onClick={props.delete}>yes</Link>
            </div>
        </div>
    );
};

export default Modal;