import React, {useEffect, useState} from 'react';
import uuid from 'react-uuid'
import './Create.css';

const Create = () => {

    // Creating new note

    const [newTitle, setTitle] = useState('');
    const [newText, setText] = useState('');
    const [newColor, setColor] = useState('');
    const id = uuid();

    const newNote = {

        title: newTitle,
        text: newText,
        color: newColor,
        id: id,
        isCompleted: false

    };


    const getTitle = (event) => {
        setTitle(event.target.value)
    };

    const getText = (event) => {
        setText(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();

        fetch( "http://localhost:3001/notes", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newNote),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('Success:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });

    };

    const colorGreen = () => {
        setColor('rgb(64, 191, 125)');
    };

    const colorBlue = () => {
        setColor('rgb(77, 195, 255)');
    };

    const colorYellow = () => {
        setColor('rgb(255, 255, 128)');
    };

    const colorRed = () => {
        setColor('rgb(251, 132, 205)');
    };


    return (
        <form onSubmit={submitHandler} className={'container'}>
            <h1>
                Fill Data
            </h1>

            <input className={'note-title'} type={'text'} placeholder={'Title'} onChange={getTitle}></input>
            <textarea className={'note-text'} id="" cols="30" rows="10" onChange={getText}></textarea>

            <div className={'colors-container'}>
                <p>Color:</p>
                <div className={'green circle'} onClick={colorGreen}></div>
                <div className={'blue circle'} onClick={colorBlue}></div>
                <div className={'yellow circle'} onClick={colorYellow}></div>
                <div className={'red circle'} onClick={colorRed}></div>
            </div>

            <input className={'create-btn'} type={'submit'} value={'Create'}/>
        </form>
    );
};

export default Create;