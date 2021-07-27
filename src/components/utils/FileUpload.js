import React from 'react';
import Dropzone from 'react-dropzone';
import {PlusOutlined} from 'antd';

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
                <p type="plus" style={{fontSize: '3rem'}}/>
                          {/* 원래 여기p태그에 antd로 아이콘을 넣어야 하는데 !!! antd가 안 넣어짐!! */}
              </div>

          )}
        </Dropzone>
      </div>
    )
  }
export default FileUpload;
