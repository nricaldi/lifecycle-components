import React from 'react';

class Lifecycles extends React.Component {
    constructor(){
        super(); // pull in all methods from parent
        console.log('Constructor!');
    }

    componentDidMount() {
        console.log('componentDidMount!');
    }

    componentDidUpdate() {
        console.log('componentDidUpdate');
    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate', nextProps);
        // if the props are the same as before then there is no reason to re-render
        return nextProps.text !== this.props.text;
    }

    render() {
        console.log('render!');

        return(
            <div className="lifecycles">
                <h3>LIFECYCLES COMPONENT</h3>
                {this.props.text}
            </div>
        )
    }

}

export default Lifecycles;