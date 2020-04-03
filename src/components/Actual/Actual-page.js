import React from 'react';
import './actual-page.scss'
import NoteItem from "../Note-item/note-item";
import {Link} from "react-router-dom";


const ActualPage=props=> {
        return (
            <div className={"notes-page"}>
                {
                    props.datas.map(item=>!item.isCompleted?
                        <Link className={"link-style"} to={`/notes/${item.id}`}>
                            <NoteItem key={item.id} title={item.title} context={item.text} color={item.color}/>
                        </Link>
                        :null)
                }
            </div>
        );
};

export default ActualPage;

/*
{
                    this.state.actual.map(item=><NoteItem key={item.id} title={item.title} context={item.text} color={item.color}/>)
                }
 */

