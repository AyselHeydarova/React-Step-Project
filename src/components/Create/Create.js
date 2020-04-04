import React, {useEffect, useState} from 'react';
import uuid from 'react-uuid'
import './Create.scss';
import { Redirect} from "react-router-dom";

const Create = () => {

    const [redirect,setRedirect] = useState(false);

    // Creating new note
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

    const setNewColor=(index)=>{
        switch (index) {
            case 0: setColor(colors[index]);
                break;
            case 1:setColor(colors[index]);
                break;
            case 2:setColor(colors[index]);
                break;
            case 3:setColor(colors[index]);
                break;
        }
    };

    return (
        <form onSubmit={submitHandler} className={"container"}>
            <h1>
                Fill Data
            </h1>

            <input className={'note-title'} type={'text'} placeholder={'Title'} onChange={getTitle}></input>
            <textarea className={'note-text'} id="" cols="30" rows="10" onChange={getText}></textarea>

            <div className={'colors-container'}>
                <p>Color:</p>
                <div className={'green circle'} onClick={()=>setNewColor(0)}></div>
                <div className={'blue circle'} onClick={()=>setNewColor(1)}></div>
                <div className={'yellow circle'} onClick={()=>setNewColor(2)}></div>
                <div className={'red circle'} onClick={()=>setNewColor(3)}></div>
            </div>


                <input className={'create-btn'} type={'submit'} value={'Create'}/>

            {
                redirect ? <Redirect to={'/'}/> : null
            }


        </form>
    );
};

export default Create;