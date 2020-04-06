import React from 'react';

const CreateEdit = (props) => {


    return (
        <form onSubmit={props.submitHandler} className={props.className}>
            <h1>
               {props.header}
            </h1>

            <input className={'note-title'} type={'text'} placeholder={'Title'} defaultValue={props.defaultTitle}
                   onChange={props.getTitle}/>
            <textarea className={'note-text'} id="" cols="30" rows="10" defaultValue={props.defaultText}
                      onChange={props.getText}></textarea>

        <div className={'colors-container'}>
            <p>Color:</p>
            <div className={'green circle'} onClick={()=>props.setColor("green")}></div>
            <div className={'blue circle'} onClick={()=>props.setColor("blue")}></div>
            <div className={'yellow circle'} onClick={()=>props.setColor("yellow")}></div>
            <div className={'red circle'} onClick={()=>props.setColor("red")}></div>
        </div>

            <input className={'create-btn'} type={'submit'} value={props.btnValue}/>
        </form>

    )
};


    export default CreateEdit;