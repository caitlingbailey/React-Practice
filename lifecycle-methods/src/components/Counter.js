import React from "react";

export default class Counter extends React.Component {
    constructor(props) {
        super(props)
        console.log('Constructor')
        this.state = {
            counter: 0
        }
        this.increment = () => this.setState({counter: this.state.counter + 1})
        this.decrement = () => this.setState({counter: this.state.counter + 1})

    }

    render() {
        return (
            <div>
                but
                <div className="counter">
                    Counter: {0}
                </div>
            </div>
        )
    }
}