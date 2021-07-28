import React, {useState} from 'react'
import {Typography, Button, Form, Input} from 'antd';
import FileUpload from '../../utils/FileUpload';
import Header from '../../../components/views/Header/Header';
import Footer from '../../../components/views/Footer/Footer';

const {TextArea} = Input;
function UploadRecipePage() {

      const [Title, setTitle] = useState("")
      const [Hashtag, setHashtag] = useState("")
      const [Description, setDescription] = useState("")
      const [Images, setImages] = useState([])

      const titleChangeHandler = (event) => {
        setTitle(event.currentTarget.value)
      }
      const hashtagChangeHandler = (event) => {
        setHashtag(event.currentTarget.value)
      }
      const descriptionChangeHandler = (event) => {
        setDescription(event.currentTarget.value)
      }
      const imagesChangeHandler =(event) => {
        setImages(event.currentTarget.value)
      }

      return (
        <>
          <Header />
            <div style= {{ marginTop:300, marginBottom: 300}}>
              <div style={{ maxWidth: '700px', margin: '2rem auto'}}>
              <div style={{textAlign: 'center', marginBottom: '2rem'}}>
                <h2 style ={{display:'flex', justifyContent:'start'}}>레시피 업로드</h2>
              </div>
              <Form style ={{}}>
                  <FileUpload style={{ borderRadius: 9}} onChange={imagesChangeHandler} value={Images}/>
                  <br />
                  <br />
                  <label>글 제목</label>
                  <Input style={{ borderRadius: 9}} onChange={titleChangeHandler} value={Title}/>
                  <br />
                  <br />
                  <label>해시태그</label>
                  <Input style={{ borderRadius: 9}} onChange={hashtagChangeHandler} value= {Hashtag}/>
                  <br />
                  <br />
                  <label>글 작성</label>
                  <Input style={{ borderRadius: 9, height: 400}} onChange={descriptionChangeHandler} value={Description}/>
                  <br />
                  <br />
                  <Button style={{ borderRadius: 9}}>
                    작성 완료
                  </Button>
              </Form>
              </div>
            </div>
          <Footer />
        </>
      )
    }

export default UploadRecipePage