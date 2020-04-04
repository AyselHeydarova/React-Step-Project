import React, {Component} from 'react';
import NavBar from "./components/NavBar/NavBar";
import {Route} from 'react-router-dom';
import ActualPage from "./components/Actual/Actual-page";
import Archive from "./components/Archive";
import HomePage from "./components/HomePage";
import Create from "./components/Create/Create";
import SingleNote from "./components/SingleNote";


class App extends Component {
    render(){

        return (
            <>
                <NavBar/>
                <Route exact path={'/'} component={HomePage}/>
                <Route path={'/actual'} component={ActualPage}/>
                <Route path={'/archive'} component={Archive}/>
                <Route path={'/create'} >
                    <Create {...this.props}/>
                </Route>
                <Route path="/notes/:id" component={SingleNote}/>
            </>
        );
    }
}
export default App;