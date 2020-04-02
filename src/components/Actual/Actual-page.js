import React, {Component} from 'react';
import './actual-page.scss'
import NoteItem from "../Note-item/note-item";
const ActualPage=props=> {
        return (
            <div className={"notes-page"}>
                {
                    props.datas.map(item=>item.place==="actual"?<NoteItem key={item.id} title={item.title} context={item.text} color={item.color}/>:null)
                }
            </div>
        );
}

export default ActualPage;


/*
{
                    this.state.actual.map(item=><NoteItem key={item.id} title={item.title} context={item.text} color={item.color}/>)
                }
 */