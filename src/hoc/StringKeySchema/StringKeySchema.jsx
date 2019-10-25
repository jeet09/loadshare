import React, { Component } from 'react';

class StringKeySchema extends Component {
   

	constructor(props) {
		super(props);
		this.state = {
			editing: !this.props.elKey,
			data: this.props.data,
			modified: false,
			elKey: this.props.elKey
		}

		this.toggleEditing = this.toggleEditing.bind(this);
		this.setEditMode = this.setEditMode.bind(this);
		this.updateValue = this.updateValue.bind(this);
		this.handleKeyDown = this.handleKeyDown.bind(this);
		this.setValue = this.setValue.bind(this);

        console.log(this.state)
		
	}
    
    componentDidUpdate(prevProps, prevState) {
		console.log(this)
        if( this.state.editing && ! prevState.editing ){
			let node = this.refs.labelInput;
			// node.focus();
			node = node;
		}
    }

    componentDidMount() {
		if( this.state.editing ){
			
			let node = this.refs.labelInput;
			
			node = node;
		}
	}
    
    setEditMode() {
		this.setState({editing: true});
    }
    
    setValue() {
		if( this.state.modified ) {
			console.log("elkey", this.props.elKey)			
			this.props.parent.set( this.state.elKey, this.props.data );
			this.props.parent.remove(this.props.elKey);
		}
            
            // this.props.parent.set( this.state.data, this.props.elKey );
        
		this.setState({editing: false});
	}

	updateValue(e) {
		console.log("ekey", e.target.value);
		console.log("modified", e.target.value != this.props.elKey);
		this.setState({elKey: e.target.value, modified: e.target.value != this.props.elKey });
	}

	handleKeyDown(e) {
		if( e.which == 13 )
			this.setValue();
	}
	toggleEditing() {
		this.setState({ editing: !this.state.editing });
	}

    render() {
        if(!this.state.editing) {
            return <span onClick={ this.setEditMode } >{ this.props.elKey }</span>;
        }

        return <input value={ this.state.elKey } onChange={ this.updateValue } onBlur={ this.setValue } ref={(ref) => this.labelInput = ref} onKeyDown={this.handleKeyDown} />;
	    
    }
}

export default StringKeySchema;
