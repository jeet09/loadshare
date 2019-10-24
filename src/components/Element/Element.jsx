import React, { Component } from 'react';
import Schema from '../../hoc/Schema/Schema';

class Element extends Component {
    render() {
        const valType = Schema(this.props.data, this.props.parent, this.props.elKey);
        const keyType = Schema(this.props.elKey, this.props.parent, this.props.elKey, 'key');
        
        return (
            <div className='some'>                
                {/* <span className="elValue">{this.props.elKey }</span> */}
                <span className="elName">{this.props.elKey }:</span>
                <span className="elValue">{ valType }</span>
                
            </div>
        );
        
    }
}

export default Element;