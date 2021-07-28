import React from 'react';
import Dropzone from 'react-dropzone';

  function FileUpload() {
    
    return (
      <div style={{display: 'flex', justfyContent: 'space-between'}}>
        <Dropzone onDrop={acceptedFiles => console.log(acceptedFiles)}>        
           {/*console.log 사진 업로드 */}
          {({getRootProps, getInputProps}) => (
              <div 
                  style={{width: 300, height: 240, border: '1px solid lightgray',
                  display: 'flex', alignItems: 'center', justifyContent: 'center'}}
                {...getRootProps()}>
                <input {...getInputProps()} />
                <p type="plus" style={{fontSize: '1rem'}}>이미지 업로드</p>
              </div>

          )}
        </Dropzone>
      </div>
    )
  }
export default FileUpload;