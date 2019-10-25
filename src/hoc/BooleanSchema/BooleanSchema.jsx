import React, { Component } from 'react';

class BooleanSchema extends Component {
   

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
		// this.handleKeyDown = this.handleKeyDown.bind(this);
		// this.setValue = this.setValue.bind(this);


	}
    
    componentDidUpdate(prevProps, prevState) {
		
        if( this.state.editing && ! prevState.editing ){
			var node = this.refs.input;
			// node.focus();
			node = node;
		}
    }

    componentDidMount() {
		if( this.state.editing ){
			
			var node = this.refs.input.getDOMNode();
			node.focus();
			node.value = node.value;
		}
	}
    
    setEditMode() {
		this.setState({editing: true});
    }
    
   

	updateValue(e) {
        console.log(e.target.checked)
        this.setState({data: e.target.checked});
        
        // this.setState({data: e.target.value, modified: e.target.value != this.props.data });
        this.props.parent.set( this.props.elKey, e.target.checked);
	}

	
	toggleEditing() {
		this.setState({ editing: !this.state.editing });
	}

    render() {      

        return (
            <>
                <input 
                    type="checkbox" 
                    name={this.props.elKey} 
                    value={ this.state.data } 
                    checked={this.state.data} 
                    onChange={ this.updateValue } 
                    ref={(ref) => this.input = ref}
                    style={{cursor: 'pointer'}}
                /> 
                {this.state.data.toString()}
            </>
        )

	    
    }

}

export default BooleanSchema;
