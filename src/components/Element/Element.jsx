import React, { Component } from 'react';
import Schema from '../../hoc/Schema/Schema';
import './Element.css';
class Element extends Component {

    handleRemove = (e) => {
        e.preventDefault();
		if( this.props.parent.constructor == Array )
			this.props.parent.splice( this.props.elKey, 1 );
		else
			this.props.parent.remove( this.props.elKey );
    }

    render() {
        const valType = Schema(this.props.data, this.props.parent, this.props.elKey);
        // const keyType = Schema(this.props.data, this.props.parent, this.props.elKey, 'key');
        
        return (
            
            <dl className='els'>                
                {/* <span className="elName">{keyType }</span> */}
                
                <dt className="elName">{this.props.elKey }:</dt>
                <dd className="elValue">{ valType }</dd>
                <dd><a href="#" className="elRemove" onClick={ this.handleRemove }>[x]</a></dd>
                
            </dl>
            
            
        );
        
    }
}

export default Element;