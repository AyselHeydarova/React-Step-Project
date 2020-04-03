import React from 'react';
import './note-item-style.scss';
import {Link} from "react-router-dom";
import {Route} from 'react-router-dom';
import SingleNote from "../SingleNote";


const NoteItem = props => {
    const colors=[
             "rgb(251, 132, 205)",
             "rgb(64, 191, 125)",
            "rgb(77, 195, 255)",
            "rgb(255, 255, 128)"
    ];
    let color = {};
    let defineColor = () => {
        switch (props.color) {
            case "red": {
                color = colors[0];
                break;
            }
            case "green": {
                color = colors[1];
                break;
            }
            case "blue": {
                color = colors[2];
                break;
            }
            case "yellow": {
                color = colors[3];
                break;
            }
            default: {
                color = colors[Math.random() * 4];
                break;
            }
        }
    };

    defineColor();


    return (

        <div className={"folded_corner"} style={{background: `linear-gradient(to left bottom, transparent 50%, rgba(0,0,0,.4) 0) no-repeat 99% 0 / 2em 2em,linear-gradient(-135deg, transparent 1.5em, ${color} 0)`}}>
            <div >
                <h3>{props.title}</h3>
            </div>
            <div >
                <p>{props.context}</p>
            </div>
        </div>
    );
};

export default NoteItem;