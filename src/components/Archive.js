import React from 'react';
import NoteItem from "./Note-item/note-item";
import './Actual/actual-page.scss'
import {Link} from "react-router-dom";
const Archive = props => {
    return (
        <div className={"notes-page"}>
            {
                props.datas.map(item=>item.isCompleted ?
                    <Link className={"link-style"} to={`/notes/${item.id}`}>
                        <NoteItem key={item.id} title={item.title} context={item.text} color={item.color}/>
                    </Link>
                    :null)
            }
        </div>

    );
};

export default Archive;
