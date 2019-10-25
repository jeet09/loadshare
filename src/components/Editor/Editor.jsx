import React, { Component } from 'react';
import RootObject from '../RootObject/RootObject';
import './Editor.css';

class Editor extends Component {

    state = {
        data:this.props.data.json,
        value: this.props.data.json
    }
    
    componentDidMount() {
        const subscriber = this.props.data.getListener();
        subscriber.on('update', (newData) => {
            
            this.setState({data: newData.json, value: newData.json})
        })
    }
    render() {        

        return (
            <div className='tree'>
                <pre>{ JSON.stringify( this.state.data, null, 2)}</pre>
                <RootObject data={this.state.value} />
            </div>
        )
    }
}

export default Editor;