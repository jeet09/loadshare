import React, { Component } from 'react';
import Schema from '../../hoc/Schema/Schema';
import './Element.css';
class Element extends Component {
    render() {
        const valType = Schema(this.props.data, this.props.parent, this.props.elKey);
        const keyType = Schema(this.props.elKey, this.props.parent, this.props.elKey, 'key');
        
        return (
            
            <dl className='els'>                
                {/* <span className="elValue">{this.props.elKey }</span> */}
                <dt className="elName">{this.props.elKey }:</dt>
                <dd className="elValue">{ valType }</dd>
                
            </dl>
            
            
        );
        
    }
}

export default Element;