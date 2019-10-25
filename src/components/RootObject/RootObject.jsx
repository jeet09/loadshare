import React, { Component } from 'react';
import Element from '../Element/Element';
import SchemaCreate from '../../hoc/SchemaCreate/SchemaCreate';

class RootObject extends Component {
    state = {
        editing: false
    }

    toggleEditing = () => {
        this.setState({ editing: !this.state.editing });
    }
    render() {        
        const keys = Object.keys(this.props.data);
        const className = this.state.editing ? 'expand objectSchema Objelement' : 'objectSchema Objelement';
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
         <SchemaCreate elType="element" parent={ this.props.data } attrkey={ keys.length }/>
        
         </div>);
        return (
            <span className={className}>
                <span onClick={ this.toggleEditing } className="toggleObject">Object [{ keys.length }]</span>
                    {elements}
            </span>
        )
    }
}

export default RootObject;