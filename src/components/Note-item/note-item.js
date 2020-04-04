import React from 'react';
import './note-item-style.scss';

const NoteItem = props => {

    return (

        <div className={"folded_corner"} style={{background: `linear-gradient(to left bottom, transparent 50%, rgba(0,0,0,.4) 0) no-repeat 99% 0 / 2em 2em,linear-gradient(-135deg, transparent 1.5em, ${props.color} 0)`}}>
            <div className={"title"}>
                <h3>{props.title}</h3>
            </div>
            <div className={"paragraph-item"}>
                <p >{props.context}</p>
            </div>
        </div>
    );
};

export default NoteItem;