import React, {Component} from 'react';


class App extends Component {



    render() {
        function showAlert() {
            alert('Welcome to Step Project!');
        }

        showAlert();
        return (
            <>
                <h1>React Step Project</h1>

                <p>Note items will be shown here</p>

                <h1>please work</h1>
            </>
        );
    }
}
export default App;
