import React, {Component} from 'react';
import NavBar from "./components/NavBar/NavBar";
import {Route} from 'react-router-dom';
import ActualPage from "./components/Actual/Actual-page";
import Archive from "./components/Archive";
import HomePage from "./components/HomePage";
import Create from "./components/Create/Create";


class App extends Component {
    state={
        all:[],
        actual:[],
        archive:[]
    };
    componentDidMount() {
        fetch("http://localhost:3000/notes" || "http://localhost:3001/notes").then(item => item.json()).then(item => this.setState({all: item}));
    }

    render(){

        return (
            <>
                <NavBar/>
                <Route exact path={'/'}>
                    <HomePage datas={this.state.all}/>
                </Route>
                <Route path={'/actual'}>
                    <ActualPage datas={this.state.all}/>
                </Route>
                <Route path={'/archive'} >
                    <Archive datas={this.state.all}/>
                </Route>
                <Route path={'/create'}>
                    <Create/>
                </Route>

            </>
        );
    }
}
export default App;