import React, { useEffect, useState } from 'react'
import axios from "axios";
import { Col, Card} from 'antd';
//import {QuestionOutlined} from '@ant-design/icons'; //아이콘 import 오류 해결
import Meta from 'antd/lib/card/Meta';
import ImageSlider from '../../utils/ImageSlider';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Link } from "react-router-dom";


function ListRecipePage(props) {
  const style ={
      width: "20%",
      height: "300px",
      marginLeft: "20%",
      cursor: 'pointer',
      borderRadius: '10px'
  }
  const [Products, setProducts] = useState([])
  const [Skip, setSkip] = useState(0)
  const [Limit, setLimit] = useState(8) //화면에 보일 카드의 최대 개수
  const [PostSize, setPostSize] = useState(0)
  const [Filters, setFilters] = useState({
     // continents: [], 체크 박스 틀 만들어 둔 건 주석 처리해둠
     // price: []
 })
  const [SearchTerm, setSearchTerm] = useState("")



  //url props number 바뀌는 거
  console.log(props)
    
  const listId = props.match.params.listId 

  const [List, setList] = useState({})

  
  useEffect(() => {
      axios.get(`/api/list/lists_by_id?id=${listId}&type=single`)
          .then(response => {
              setList(response.data[0])
          })
          .catch(err => alert(err))
  }, []) 


  useEffect(() => { //상품 길이

      let body = {
          skip: Skip,
          limit: Limit
      }

      getProducts(body)

  }, [])

  const getProducts = (body) => {
      axios.post('/api/product/products', body)
          .then(response => {
              if (response.data.success) {
                  if (body.loadMore) {
                      setProducts([...Products, ...response.data.productInfo])
                  } else {
                      setProducts(response.data.productInfo)
                  }
                  setPostSize(response.data.postSize)
              } else {
                  alert(" 상품들을 가져오는데 실패 했습니다.")  //sever-routes-product.js 적어주기
              }
          })
  }

  const loadMoreHanlder = () => {

      let skip = Skip + Limit
      let body = {
          skip: skip,
          limit: Limit,
          loadMore: true,
          filters: Filters
      }
      getProducts(body)
      setSkip(skip)
  }

  const renderCards = Products.map((product, index) => {
      

      return <Col lg={6} md={8} xs={24} key={index}>4
          <Card
              cover={<a href={`/product/${product._id}`} ><ImageSlider images={product.images} /></a>}
          >
              <Meta
                  title={product.title}
                  description={`$${product.price}`}
              />
          </Card>
      </Col>
  })



  return (
      <>
      <Header />
      <div style={{ }}>
          <div style={{ textAlign: 'center', marginTop:'20%', marginBotton:'5%' }}>
          <h1>레시피</h1>
          <Link to ="/uploadrecipe">
              <button
                    className="ToCart"
                    style={{marginLeft:'50%', cursor: 'pointer'}}>
                    <p className="ToCartText">작성하기</p>
              </button>
         </Link>
          </div>

      

          {/* Cards */}

              {renderCards}

          <br />
          <div>
            <Link to="recipeplus">
                <img style={style}
                    src="https://cdn.pixabay.com/photo/2016/09/29/08/33/apple-1702316_960_720.jpg"
                    alt="광고" /></Link>
           </div>

          <div>
            <h3 style={{
                textAlign: 'center',
                margin: '30px',
                marginTop: '10%',
            }}>현재 1 건 외 올라온 레시피가 없습니다 :)</h3>
            <p
                style={{
                textAlign: 'center',
                fontFamily: 'Montserrat',
                fontSize: '15px',
                cursor: 'pointer',
                }}>One can do it! 메인 홈 이동</p>
        </div>

          {PostSize >= Limit &&
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <button onClick={loadMoreHanlder}>상품더보기</button>
              </div>
          }
      </div>
      <Footer />
      </>
  )
}

export default ListRecipePage

