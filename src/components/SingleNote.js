import React, {useEffect, useState} from 'react';
import './SingleNoteStyle.scss'
const SingleNote = ({match}) => {

    const [note, setNote] = useState('');

    useEffect( () => {
        fetch( `http://localhost:3001/notes?id=${match.params.id}`)
            .then(note=> note.json())
            .then(note => setNote(note[0]))
        }, []);

    const {title, text, color} = note;

    return (
        <div className={"single-note-container"}>
            <div className={"single-note"} style={{background: `linear-gradient(to left bottom, transparent 50%, rgba(0,0,0,.4) 0) no-repeat 99% 0 / 4em 4em,linear-gradient(-135deg, transparent 3em, ${color} 0)`}} >
                <div className={"title"}>
                    <h2>{title}</h2>
                </div>
                <div className={"paragraph"}>
                    <p>{text}</p>
                </div>
            </div>
            <div className={"buttons"}>
                <div className={"btn"}><p>edit</p></div>
                <div className={"btn"}><p>archive</p></div>
                <div className={"btn"}><p>delete</p></div>
            </div>
        </div>
    );
};

export default SingleNote;