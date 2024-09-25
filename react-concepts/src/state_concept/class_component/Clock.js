import React from 'react'
import ReactDOM from 'react-dom'

export class Clock extends React.Component {
    //concept of ES6 classes and constructors
    componentDidMount() {
        this.timerId = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnount() {
        clearInterval(this.timerId);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    //adding a class constructor that assigns initial state
    constructor(props) {
        super(props);
        this.state = { date: new Date() };
    }
    //single empty method 'render'
    render() {
        return (
            <div>
                <h1> Hello! World </h1>
                <h2> It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        )
    }
}

export default Clock


ReactDOM.render(
    <Clock />,
    document.getElementById('root')
);

//after that adding lifecycle method of the class
//first render callecd "mounting" then removed -> "unmounting"
