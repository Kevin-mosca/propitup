import React, { Component } from 'react';

class MyNewComponent extends Component{
    render(){
        const {firstName, lastName, age, color} = this.props;
        return(
            <div>
                <h1>{lastName}, {firstName}</h1>
                <p>Age: {age}</p>
                <p>Hair Color: {color}</p>
            </div>
        );
    }
}
export default MyNewComponent;