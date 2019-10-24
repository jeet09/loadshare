import React, { Component } from 'react';
import Element from '../../components/Element/Element';

class ArraySchema extends Component {
    state = {
        editing: false
    }
    toggleEditing = () => {
		this.setState({editing: !this.state.editing});
	}
    render() {
        const keys = Object.keys(this.props.data);
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
            </div>
        )
        return (<span>
            <span onClick={this.toggleEditing}>Array [{keys.length}]</span>
            {arrayText}
        </span>)
    }
}

export default ArraySchema;