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

    download = () => {
        let filename = "export.json";
        let contentType = "application/json;charset=utf-8;";
        if (window.navigator && window.navigator.msSaveOrOpenBlob) {
            var blob = new Blob([decodeURIComponent(encodeURI(JSON.stringify(this.state.data)))], { type: contentType });            
            navigator.msSaveOrOpenBlob(blob, filename);
        } else {
            var a = document.createElement('a');
            a.download = filename;
            a.href = 'data:' + contentType + ',' + encodeURIComponent(JSON.stringify(this.state.data));
            a.target = '_blank';
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
        }
    }
    render() {        

        return (
            <div className='tree'>
                
                <pre>
                    { JSON.stringify( this.state.data, null, 2)}
                </pre>                    
                
                <button onClick={this.download} className='download-btn button-success'>Download</button>      
                <RootObject data={this.state.value} />
            </div>
        )
    }
}

export default Editor;