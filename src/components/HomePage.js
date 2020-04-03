import React, {Component} from 'react';
import NoteItem from "./Note-item/note-item";
import './Actual/actual-page.scss'
import {Link} from "react-router-dom";

class HomePage extends Component {

    render() {
        return (
            <div className={"notes-page"}>
                {
                    this.props.datas.map(item =>
                        <Link className={"link-style"} to={`/notes/${item.id}`}>
                            <NoteItem key={item.id} title={item.title} context={item.text} color={item.color}/>
                        </Link>
                    )
                }
            </div>
        );
    }
}

export default HomePage;