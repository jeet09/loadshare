import React, { Component } from 'react';

class FileUpload extends Component {
    
    constructor(props) {
        super(props);
        this.fileRef = React.createRef();
        
    }

    uploadHandler = () => {
        this.fileRef.current.click();
    }

    onChangeHandler = (e) => {
        console.log(e.target.files[0])
        const file = e.target.files[0];
        var reader = new FileReader();
        reader.onload = (event) => {
            // The file's text will be printed here
            const json = JSON.parse(event.target.result)
            
            this.props.updateData(json);
        };
        
         reader.readAsText(file);
        // console.log(JSON.stringify(json))
        // const data = new FormData() 
        // data.append('file', e.target.files[0])
        // console.log(data)
    }

    render() {        
        return (
            <div className="fileUpload">
                <button onClick={this.uploadHandler}>Upload File</button>
                <input hidden ref={this.fileRef}  type="file" name="file" onChange={this.onChangeHandler}/>
                
            </div>
        )
    }
}

export default FileUpload;