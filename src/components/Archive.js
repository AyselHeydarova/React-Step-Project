import React from 'react';

import NoteItem from "./Note-item/note-item";
import './Actual/actual-page.scss'
const Archive = props => {
    return (
        <div className={"notes-page"}>
            {
                props.datas.map(item=>item.isComplited?<NoteItem key={item.id} title={item.title} context={item.text} color={item.color}/>:null)
            }
        </div>

    );
};

export default Archive;