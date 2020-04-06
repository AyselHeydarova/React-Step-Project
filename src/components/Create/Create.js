import React, { useState} from 'react';
import uuid from 'react-uuid'
import './Create.scss';
import { Redirect} from "react-router-dom";
import CreateEdit from "../Create-Edit";



const Create = () => {

    const [redirect,setRedirect] = useState(false);

    const colors=['rgb(64, 191, 125)','rgb(77, 195, 255)','rgb(255, 255, 128)','rgb(251, 132, 205)'];
    const [newTitle, setTitle] = useState('');
    const [newText, setText] = useState('');
    const [newColor, setColor] = useState(colors[Math.floor(Math.random()*4)]);
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

        setRedirect(true);

        fetch("http://localhost:3001/notes", {
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



    const setNewColor=(colorName)=>{
        switch (colorName) {
            case "green":setNewColor('rgb(64, 191, 125)');
                break;
            case "blue":setNewColor('rgb(77, 195, 255)');
                break;
            case "yellow":setNewColor('rgb(255, 255, 128)');
                break;
            case "red":setNewColor('rgb(251, 132, 205)');
                break;
        }
    };

    return (
        <>
            <CreateEdit submitHandler={submitHandler}
                        className={"container"}
                        header={'Fill data'}
                        getText={getText}
                        getTitle={getTitle}
                        btnValue={'Create'}
                        setColor={setNewColor}/>

            {
                redirect ? <Redirect to={'/'}/> : null
            }

        </>
    )
};

export default Create;