import React, {Component} from 'react';
import NoteItem from "./Note-item/note-item";
import './Actual/actual-page.scss'
import {Link} from "react-router-dom";
class Archive extends Component {
    state={
        archive:[]
    };
    componentDidMount() {
        fetch( "http://localhost:3001/notes").then(item => item.json()).then(item => this.setState({archive: item}));
    }
    render() {
        return (
            <div className={"notes-page"}>
                {
                    this.state.archive.map(item => item.isCompleted ?
                        <Link className={"link-style"} to={`/notes/${item.id}`}>
                            <NoteItem key={item.id} title={item.title} context={item.text} color={item.color}/>
                        </Link>
                        : null)
                }
            </div>

        );
    };
}

export default Archive;
