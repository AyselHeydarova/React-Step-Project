import React, {Component} from 'react';
import NavBar from "./components/NavBar/NavBar";
import {Route} from "react-router-dom";
import Actual from "./components/Actual";
import Archive from "./components/Archive";
import HomePage from "./components/HomePage";
import Create from "./components/Create/Create";


class App extends Component {

    render() {

        return (
            <>
                <NavBar/>

                <Route exact path={'/'} component={HomePage}/>
                <Route path={'/actual'} component={Actual}/>
                <Route path={'/archive'} component={Archive}/>
                <Route path={'/create'} component={Create}/>

            </>
        );
    }
}
export default App;
