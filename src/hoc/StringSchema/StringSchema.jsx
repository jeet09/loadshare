import React, { Component } from 'react';

class StringSchema extends Component {
   

	constructor(props) {
		super(props);
		this.state = {
			editing: !this.props.data,
			data: this.props.data,
			modified: false
		}

		this.toggleEditing = this.toggleEditing.bind(this);
		this.setEditMode = this.setEditMode.bind(this);
		this.updateValue = this.updateValue.bind(this);
		this.handleKeyDown = this.handleKeyDown.bind(this);
		this.setValue = this.setValue.bind(this);

		
	}
    
    componentDidUpdate(prevProps, prevState) {
		console.log(this)
        if( this.state.editing && ! prevState.editing ){
			var node = this.refs.input;
			// node.focus();
			node = node;
		}
    }

    componentDidMount() {
		if( this.state.editing ){
			
			var node = this.refs.input;
			
			node = node;
		}
	}
    
    setEditMode() {
		this.setState({editing: true});
    }
    
    setValue() {
		if( this.state.modified )
			this.props.parent.set( this.props.elKey, this.state.data );
		console.log(this.props.parent)
		this.setState({editing: false});
	}

	updateValue(e) {
		this.setState({data: e.target.value, modified: e.target.value != this.props.data });
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
            return <span onClick={ this.setEditMode } className="stringSchema" >{ this.props.data }</span>;
        }

        return <input value={ this.state.data } onChange={ this.updateValue } onBlur={ this.setValue } ref={(ref) => this.input = ref} onKeyDown={this.handleKeyDown} />;
	    
    }
}

export default StringSchema;
