import React, { Component } from 'react';

class FancyBorder extends Component {
    render() {

        return (
            <div className="border">
               {this.props.children}
            </div>
        );
    }
}

export default FancyBorder;

