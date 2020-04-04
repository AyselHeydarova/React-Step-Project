import React, {Component} from 'react';
import './actual-page.scss'
import NoteItem from "../Note-item/note-item";
import {Link} from "react-router-dom";


class ActualPage extends Component {
    state={
        actual:[]
    };
    componentDidMount() {
        fetch( "http://localhost:3001/notes").then(item => item.json()).then(item => this.setState({actual: item}));
    }
    render() {
        return (
            <div className={"notes-page"}>
                {
                    this.state.actual.map(item => (item.isCompleted===false) ?
                        <Link className={"link-style"} to={`/notes/${item.id}`}>
                            <NoteItem key={item.id} title={item.title} context={item.text} color={item.color}/>
                        </Link>
                        : null)
                }
            </div>
        );
    };
}

export default ActualPage;

/*
{
                    this.state.actual.map(item=><NoteItem key={item.id} title={item.title} context={item.text} color={item.color}/>)
                }
 */

