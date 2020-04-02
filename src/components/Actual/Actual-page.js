import React, {Component} from 'react';
import './actual-page.scss'
import NoteItem from "../Note-item/note-item";
class ActualPage extends Component {
    state={
        actual:[]
    };
    componentDidMount() {
      fetch("http://localhost:3000/notes").then(item=>item.json()).then(item=>this.setState({actual:item}));
    };
    render() {
        return (
            <div className={"actual-page"}>
                {
                    this.state.actual.map(item=><NoteItem key={item.id} title={item.title} context={item.text} color={item.color}/>)
                }
            </div>
        );
    }
}

export default ActualPage;