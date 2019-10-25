import React, { Component } from 'react';
import Element from '../../components/Element/Element';
import SchemaCreate from '../SchemaCreate/SchemaCreate';


class ArraySchema extends Component {
    state = {
        editing: false
    }
    toggleEditing = () => {
		this.setState({editing: !this.state.editing});
	}
    render() {
        const keys = Object.keys(this.props.data);
        const className = this.state.editing ? 'expand ArraySchema Objelement' : 'ArraySchema Objelement';
        let el = [];
        for(let i = 0; i<this.props.data.length; i++) {
            el.push(
                <Element
                    parent={this.props.data}
                    data={this.props.data[i]}
                    key={i}
                    elKey={i}
                />
            )
        }

        let arrayText = (
            <div className="elChildren">
                {el}
                <SchemaCreate elType="element" parent={ this.props.data } attrkey={ keys.length }/>
            </div>
        )
        return (
        <span className={className}>
            <span onClick={this.toggleEditing} className="toggleObject">Array [{keys.length}]</span>
            {arrayText}
        </span>)
    }
}

export default ArraySchema;