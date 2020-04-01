import React from 'react';
import './Create.css';

const Create = () => {
    return (
        <div className={'container'}>
            <h1>
                Fill Data
            </h1>

            <input className={'note-title'} type={'text'} placeholder={'Title'}/>
            <textarea className={'note-text'} id="" cols="30" rows="10" placeholder={'NoteText'}> </textarea>

            <div className={'colors-container'}>
                <p>Color:</p>
                <div className={'green circle'}> </div>
                <div className={'blue circle'}> </div>
                <div className={'yellow circle'}> </div>
                <div className={'red circle'}> </div>
            </div>

            <input className={'create-btn'} type={'submit'} value={'Create'}/>
        </div>
    );
};

export default Create;