import React, { Component } from 'react';
import Element from '../Element/Element';
class RootObject extends Component {
    state = {
        editing: false
    }
    render() {        
        const keys = Object.keys(this.props.data);
        let element = [];
        for(let el in this.props.data) {
            element.push(
                <Element
                    parent={this.props.data}
                    data={this.props.data[el]}
                    key={el}
                    elKey={el}
                />
            )
        };

        const elements = (<div className="elChildren">
         { element }
        
         </div>);
        return (
            <span>
            <span onClick={ this.toggleEditing } className="hashToggle">Object [{ keys.length }]</span>
				{elements}
            </span>
        )
    }
}

export default RootObject;