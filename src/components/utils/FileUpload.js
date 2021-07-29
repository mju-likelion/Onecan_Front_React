import React, {useState, useEffect, useRef} from 'react';
import {Button} from 'antd';

  function FileUpload() {
    

    const [file, setFile] = useState('');
    const [previewURL, setPreviewURL] = useState('');
    const [preview,setPreview] = useState(null);
    const fileRef= useRef();

    useEffect(() => {
      if(file !== '') //처음 파일 등록하지 않았을 때를 방지
        setPreview(<img className='img_preview' src={previewURL}></img>);
      return () => {
      }
    }, [previewURL])

    const handleFileOnChange = (event) => {//파일 불러오기
      event.preventDefault();
      let file = event.target.files[0];
      let reader = new FileReader();
  
      reader.onloadend = (e) => {
        setFile(file);
        setPreviewURL(reader.result);
      }
      if(file)
        reader.readAsDataURL(file);
    }
    
  const handleFileButtonClick = (e) => {//버튼 대신 클릭하기
      e.preventDefault();
      fileRef.current.click(); // file 불러오는 버튼을 대신 클릭함
    }


    return (
      <>
        <div className = "priveiw-rapping">
          {preview}	
        </div>
        <aside className = "side">
          <input ref = {fileRef} hidden = {true} id = "file" type='file' onChange={handleFileOnChange}></input>
          <header className = "side-header">
          </header>
          <div style = {{padding : 10}}>
            <Button onClick = {handleFileButtonClick} style={{ borderRadius: 9}}>
              대표 사진 올리기
              </Button>
          </div>
        </aside>
      </>
    )
  }
export default FileUpload;