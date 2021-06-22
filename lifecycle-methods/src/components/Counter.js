import React from "react";

export default class Counter extends React.Component {
    constructor(props) {
        super(props)
        console.log('Constructor')
        this.state = {
            counter: 0,
        }
        this.increment = () => this.setState({counter: this.state.counter + 1})
        this.decrement = () => this.setState({counter: this.state.counter - 1})
    }

    static getDerivedStateFromProps(props, state) {
        if(props.seed && state.seed !== props.seed) {
            return {
                seed: props.seed,
                counter: props.seed
            }
        }
        return null
    }

    componentDidMount() {
        console.log('Component Did Mount')
        console.log('-----------------------')
    }

    shouldComponentUpdate(nextProps, nextState) {
        if(nextProps.ignoreProp &&
            this.props.ignoreProp !== nextProps.ignoreProp) {
                console.log("Should Component Update - DO NOT RENDER")

                return false
            }
        console.log("Should Component Update- RENDER")
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState, snapshot) {
        return null
    }

    render() {
        console.log('Render', this.state.error)

        if(this.state.error) {
            return <div>We have encountered an error! {this.state.error.messsage}</div>
        }

        return (
            <div>
                <button onClick={this.increment}>Increment</button>
                <button onClick={this.decrement}>Decrement</button>
                <div className="counter">
                    Counter: {this.state.counter}
                </div>
            </div>
        )
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("Component Did Update")
    }

    componentWillUnmount() {
        console.log("Component Will Unmount")
        console.log("----------------------")
    }

    componentDidCatch(error, info) {
        console.log("Component Did Catch")
    }
}