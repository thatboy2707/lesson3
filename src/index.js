// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';
// ReactDOM.render(<App />, document.getElementById('root'));
// serviceWorker.unregister();
//import React from 'react';
//import ReactDOM from 'react-dom';

// function Room() {
//     return (
//         <div className={'room'}> the room is lit</div>
//     )
// }
// ReactDOM.render(<Room />, document.getElementById('root'));

import React from 'react';
import ReactDOM from 'react-dom';
// class Room extends React.Component {
//     state = {isLit: true}
//     render() {
//         return (
//             <div className={"room"}>the room is lit</div>
//         );
//     }
// }
// ReactDOM.render(<Room />, document.getElementById('root'));

class Room extends React.Component {
    state = {isLit: true}
    flipLight= () => {
        this.setState({
            isLit: !this.state.isLit
        });
    };
    render() {
        return (
            <div className="room"> the room is {this.state.isLit ? "lit" : "dark"}
            <br />
            <button onClick={this.flipLight}>flip</button>
            </div>

        );
    }
}
ReactDOM.render(<Room />, document.getElementById('root'));

