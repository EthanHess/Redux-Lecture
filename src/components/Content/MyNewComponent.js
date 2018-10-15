import React, { Component } from 'react'; 

function higherOrderComponent(Component) {
    const message = 'this message came from an HOC'
    return function(props) {
        return <Component {...props} message={message}/> 
    }
}

class MyNewComponent extends Component {
    render() {
        return (
            <div>
                <h1>This is my new component</h1>
                <p>{this.props.message}</p>
            </div>
        );  
    }
}

export default higherOrderComponent(MyNewComponent)