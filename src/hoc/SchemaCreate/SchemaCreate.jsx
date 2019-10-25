import React, { Component } from 'react';

const DEFAULT_VALUES = {
    string: '',
	object: {},
    array: [],
    number: 0,
    boolean: false
}

class SchemaCreate extends Component {

    constructor(props) {
        super(props);
        this.state = {
            create: false,
            elKey: this.props.elKey,
            elType: 'string'
        }
    }

    componentWillReceiveProps(newProps) {
        this.setState({elKey: newProps.elKey});
    }

    handleCreate = (e) => {
        e.preventDefault();
		this.setState({create: true});
    }

    handleCancel = (e) => {
        e.preventDefault();
		this.setState({create: false});
    }

    changeType = (e) => {
        this.setState({elType: e.target.value});
    }

    changeKey = (e) => {
        this.setState({elKey: e.target.value});
    }

    createAttribute = () => {
        this.setState({create: false});
        let parent = this.props.parent;
        let val = DEFAULT_VALUES[ this.state.elType ]

        if( parent.constructor == Array )
			parent.push( val )
		else
			parent.set(this.state.elKey, val );
    }

    render() {
        if( !this.state.create )
            return <a href="#" onClick={this.handleCreate}>+ Add {this.props.elType}</a>;

        let elName;
        if( typeof this.props.elKey != 'undefined' )
        elName =  <span className="elName">{this.props.elKey}:</span>;
        else {
            elName = [
                <input ref="keyInput" type="text" value={this.state.value} onChange={this.changeKey}/>,
                <span>:</span>
            ];
        }

        return (<div className="element">
				{ elName }
				<select value={this.state.elType} onChange={ this.changeType } ref="typeSelector">
					<option value="string" key={elName+"string"}>String</option>
                    <option value="number" key={elName+"number"}>Number</option>
                    <option value="boolean" key={elName+"boolean"}>Boolean</option>
					<option value="array" key={elName+"array"}>Array</option>
					<option value="object" key={elName+"object"}>Object</option>
				</select>
				<button onClick={ this.createAttribute }>OK</button>,
				<a href="#" className="canElement" onClick={ this.handleCancel }>Cancel</a>
		</div>);
    }
}

export default SchemaCreate;