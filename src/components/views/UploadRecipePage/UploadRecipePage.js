import React, {useState} from 'react'
import {Form, Input} from 'antd';
import FileUpload from '../../utils/FileUpload';
import Header from '../../../components/views/Header/Header';
import Footer from '../../../components/views/Footer/Footer';
import  '../../../components/views/UploadRecipePage/UploadRecipe.css';
import Editor from '../../../components/utils/Editor';

const {} = Input;
function UploadRecipePage() {

      const [Title, setTitle] = useState("")
      const [Description, setDescription] = useState("")
      const [Images, setImages] = useState([])

      const titleChangeHandler = (event) => {
        setTitle(event.currentTarget.value)
      }
      const descriptionChangeHandler = (event) => {
        setDescription(event.currentTarget.value)
      }
      const imagesChangeHandler =(event) => {
        setImages(event.currentTarget.value)
      }

      const [body, setBody] = useState('');  // Quill 에디터의 innerHTML을 담는 state
      const [mountBody, setMountBody] = useState(false); // 리렌더링 용도 state

      /* 외부에서 body의 수정이 일어난 경우 body에 자동으로 적용되지 않습니다!
        이 함수를 호출했을 때 컴포넌트 내의 useEffect가 실행되어 body의 수정 사항이 적용됩니다.*/
      function rerenderBody() {
        setMountBody(mb => !mb);
  }


      return (
        <div className="UploadRecipeContainer">
          <Header />
            <div 
            style= {{ marginTop:300, marginBottom: 300}}>
              <div 
              style={{ maxWidth: '700px', margin: '2rem auto'}}>
              <div 
              style={{textAlign: 'center', marginBottom: '2rem'}}>
                <h1 
                style ={{display:'flex', justifyContent:'start'}}>레시피 작성</h1>
              </div>
              <Form style ={{}}>
                      <FileUpload 
                      style={{ borderRadius: 9}} 
                      onChange={imagesChangeHandler} 
                      value={Images}/>
                  <br />
                  <br />
                  <label>글 제목</label>
                      <Input 
                      placeholder="글 제목을 작성해주세요"
                      style={{ borderRadius: 9}} 
                      onChange={titleChangeHandler} 
                      value={Title}/>
                  <br />
                  <br />
                  <label>글 작성</label>
                  <Editor
                      body={body}
                      handleQuillChange={descriptionChangeHandler}
                      mountBody={mountBody}
                      value={Description}>
                      </Editor>
                  <br />
                  <br />
              </Form>
              <button 
              className="recipePostButton"
              style={{ borderRadius: 9, marginTop: 20, marginLeft:580}}>
                    <p className="recipepostText">작성 완료</p>
                  </button>
      <>
      </>
              </div>
            </div>
          <Footer />
        </div>
      )
    }

export default UploadRecipePage
