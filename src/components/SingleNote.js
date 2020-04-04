import React, {useEffect, useState} from 'react';
import './SingleNoteStyle.scss'
import {Link} from "react-router-dom";
import Modal from "./modal/Modal";


const SingleNote = ({match}) => {

    const [note, setNote] = useState('');

    useEffect(() => {
        fetch(`http://localhost:3001/notes?id=${match.params.id}`)
            .then(note => note.json())
            .then(note => setNote(note[0]))
    }, [match]);


    const {title, text, color, isCompleted} = note;


    const [newTitle, setNewTitle] = useState(title);
    const [newText, setNewText] = useState(text);
    const [newColor, setNewColor] = useState(color);
    const [modal, setModal] = useState("none");


    const getTitle = (event) => {
        setNewTitle(event.target.value)
    };

    const getText = (event) => {
        setNewText(event.target.value);
    };

    const colorGreen = () => {
        setNewColor('rgb(64, 191, 125)');
    };

    const colorBlue = () => {
        setNewColor('rgb(77, 195, 255)');
    };

    const colorYellow = () => {
        setNewColor('rgb(255, 255, 128)');
    };

    const colorRed = () => {
        setNewColor('rgb(251, 132, 205)');
    };

    const editedData = {
        title: newTitle,
        text: newText,
        color: newColor,
    };

    const ToggleDelete = () => {
        modal === "none" ?
            setModal("flex") :
            setModal("none");
    };

    const Delete = () => {

        fetch(`http://localhost:3001/notes/${match.params.id}`, {
            method: 'DELETE'
        }).then(item => item.json())
            .then(item => console.log(item));
    };

    const Archive = () => {

        fetch(`http://localhost:3001/notes/${match.params.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({isCompleted: true}),
        })
            .then((response) => response.json())
            .then((data) => console.log(data));
    };

    const [visibility, setVisibility] = useState("none");
    const ToggleVisibility = () => visibility === "none" ? setVisibility("flex") : setVisibility("none");

    const saveSubmitHandler = () => {
        fetch(`http://localhost:3001/notes/${match.params.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(editedData),
        })
            .then((response) => response.json())
            .then((data) => console.log(data))
    };

    const editForm =
        <form onSubmit={saveSubmitHandler} className={'edit-container'}>
            <h1>
                Edit Data
            </h1>

            <input className={'note-title'} type={'text'} placeholder={'Title'} defaultValue={title}
                   onChange={getTitle}/>
            <textarea className={'note-text'} id="" cols="30" rows="10" defaultValue={text}
                      onChange={getText}></textarea>

            <div className={'colors-container'}>
                <p>Color:</p>
                <div className={'green circle'} onClick={colorGreen}></div>
                <div className={'blue circle'} onClick={colorBlue}></div>
                <div className={'yellow circle'} onClick={colorYellow}></div>
                <div className={'red circle'} onClick={colorRed}></div>
            </div>

            <input className={'create-btn'} type={'submit'} value={'Save'}/>
        </form>
    ;
    return (
        <div>
            <div className={"single-note-container"}>
                <div className={"single-note"}
                     style={{background: `linear-gradient(to left bottom, transparent 50%, rgba(0,0,0,.4) 0) no-repeat 99% 0 / 4em 4em,linear-gradient(-135deg, transparent 3em, ${color} 0)`}}>
                    <div className={"title"}>
                        <h2>{title}</h2>
                    </div>
                    <div className={"paragraph"}>
                        <p>{text}</p>
                    </div>
                </div>
                <div className={"buttons"}>
                    <button className={"btn"} onClick={ToggleVisibility}>edit</button>

                    <Link to={'/archive'} className={"btn"} onClick={Archive}>Archive</Link>
                    <button className={"btn"} onClick={ToggleDelete}>delete</button>
                </div>

                <Modal delete={Delete} hidden={modal} toggle={ToggleDelete}/>
                <div style={{display: visibility}} className={"edit"}>
                    {editForm}
                </div>
            </div>

        </div>
    );
};

export default SingleNote;