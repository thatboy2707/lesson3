// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';
// ReactDOM.render(<App />, document.getElementById('root'));
// serviceWorker.unregister();

import React from 'react';
import ReactDOM from 'react-dom'

//
// function Room() {
//     return (
//         <div className= "room"> the room is lit </div>);
// }
// ReactDOM.render (<Room />, document.getElementById('root'));


// class Room extends React.Component {
//     state = {
//         isLit: true
//     }
//     render() {
//         return (
//             <div className="room">the room is lit</div>
//         );
//     }
// }
// ReactDOM.render (<Room />, document.getElementById('root'));

//*****new piece to render several items******
//     function MediaCard(title, body, imageURL) {
//     return (
//         <div > <h2>title</h2>
//             <p>Here is information within the body in paragraph form I suppose</p>
//         </div>
//     );
// }
// ReactDOM.render (<MediaCard/>, document.querySelector('#root'));

//***new piece adding props****
    function MediaStuff(props) {    //props= logo, description, imageURL
        return (
            <div> Below are Title, brief description and logo
                <h2>Logo: {props.logo} </h2>
                <p> {props.description}</p>
                <h3>
                    THIS IS MY IMAGE
                    {props.image}
                </h3>
            </div>
        )
    }
    ReactDOM.render(<MediaStuff logo="EPC" description="a whole bunch of stuff up in here" image={<img src="https://f4.bcbits.com/img/a1227523682_16.jpg"/>} /> , document.querySelector('#root'));
    //ReactDOM.render(<MediaStuff logo="EPC" description="a whole bunch of stuff up in here" imageURL="https://f4.bcbits.com/img/a1227523682_16.jpg"/> , document.querySelector('#root'));

