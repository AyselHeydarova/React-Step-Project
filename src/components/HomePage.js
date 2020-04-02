import React, {Component} from 'react';
import NoteItem from "./Note-item/note-item";
import './Actual/actual-page.scss'
class HomePage extends Component {
    render() {
        return (
            <div className={"notes-page"}>
                {
                    this.props.datas.map(item=><NoteItem key={item.id} title={item.title} context={item.text} color={item.color}/>)
                }
            </div>
        );
    }
}

export default HomePage;