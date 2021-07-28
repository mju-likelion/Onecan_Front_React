import React, {useState} from 'react';
import Dropzone from 'react-dropzone';
import axios from 'axios';

  function FileUpload() {

    const [images, setImages] = useState([])

    const dropHandler = (files) => {
      let formData = new FormData();
      const config = {
        header: {'content-type':'multipart/fomr-data'}
      }
      formData.append("file", files[0])

      axios.post('/api/product/image',formData ,config )
        .then(response => {
          if (response.data.success) {
            
            setImages([...images, response.data.filePath])
        } else {
              alert('파일 저장을 실패했습니다.')
        }

    })

    return (
      <div style={{display: 'flex', justfyContent: 'space-between'}}>
        <Dropzone onDrop={dropHandler}>        
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

        <div style= {{ display: 'flex',width: '350px', height:'240px', overflowX: 'scroll'}}>

          {images.map((image, index) => (
            <div key = {index}>
              <img style={{minWidth: '300px', width: '300px', height: '240px'}}
                      src= {'http://localhost:3000/${image}'}
                      />
            </div>
          ))}
        </div>
      </div>
    )
  }
}
export default FileUpload;
