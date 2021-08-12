import React, { useEffect, useState } from 'react'
import axios from "axios";
import { Col, Card} from 'antd';
//import {QuestionOutlined} from '@ant-design/icons'; //아이콘 import 오류 해결
import Meta from 'antd/lib/card/Meta';
import ImageSlider from '../../utils/ImageSlider';
//import CheckBox from '../../views/ListObjPage/Sections/CheckBox';
//import {Continents} from './Sections/Datas'; //price 주석 처리 상태, 체크박스
//import Checkbox from './Sections/CheckBox';
//import Radiobox from './Sections/RadioBox';
//import SearchFeature from './Sections/SearchFeature';
import Header from '../../../components/views/Header/Header';
import Footer from '../../../components/views/Footer/Footer';

function ListObjBestPage() {

  const [Products, setProducts] = useState([])
  const [Skip, setSkip] = useState(0)
  const [Limit, setLimit] = useState(8) //화면에 보일 카드의 최대 개수
  const [PostSize, setPostSize] = useState(0)
  const [Filters, setFilters] = useState({
     // continents: [], 체크 박스 틀 만들어 둔 건 주석 처리해둠
     // price: []
 })
  const [SearchTerm, setSearchTerm] = useState("")

  const onClickMain = (e) => {
    document.location.href = "/";
  };


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

  

  const showFilteredResults = (filters) => {

      let body = {
          skip: 0,
          limit: Limit,
          filters: filters
      }

      getProducts(body)
      setSkip(0)

  }

  {/*
  const handlePrice = (value) => {
      const data = price;
      let array = [];

      for (let key in data) {
          if (data[key]._id === parseInt(value, 10)) {
              array = data[key].array;
          }
      }
      return array;
  }      */}

  {/*
  const handleFilters = (filters, category) => {

      const newFilters = { ...Filters }

      newFilters[category] = filters

      console.log('filters', filters)

      if (category === "price") {
          let priceValues = handlePrice(filters)
          newFilters[category] = priceValues
      }
      showFilteredResults(newFilters)
      setFilters(newFilters)
  } */}
 
  const updateSearchTerm = (newSearchTerm) => { //검색 기능

      let body = {
          skip: 0,
          limit: Limit,
          filters: Filters,
          searchTerm: newSearchTerm
      }

      setSkip(0)
      setSearchTerm(newSearchTerm)
      getProducts(body)

  }

  return (
      <>
      <Header />
      <div style={{  }}>
          <div style={{ textAlign: 'center', marginTop:'20%', marginBotton:'5%' }}>
              <h1>--에 대한 검색 결과입니다.</h1>
          </div>

          {/* Filter */}
          {/* 
            <Row gutter={[16, 16]}>
                <Col lg={12} xs={24}>
                  //CheckBox 
                    <Checkbox list={continents} handleFilters={filters => handleFilters(filters, "Continents")} />
                </Col>
              </Row>
                <Col lg={12} xs={24}>
                    //RadioBox
                    </div><Radiobox list={price} handleFilters={filters => handleFilters(filters, "price")} />
                </Col>  
           */}

          {/* Search */}
          {/* 검색 박스
          <div style={{ display: 'flex', justifyContent: 'flex-end', margin: '1rem auto' }}>
              <SearchFeature
                  refreshFunction={updateSearchTerm} //검색 기능을 부모 컴포넌트에 가지고 오기
              />
          </div> 
          */}

          {/* Cards */}

              {renderCards}


          <br />

          <div>
          <h3 style={{
            textAlign: 'center',
            margin: '30px'
          }}>현재 검색된 상품이 없습니다 :)</h3>
          <p
            onClick={onClickMain}
            style={{
              textAlign: 'center',
              fontFamily: 'Montserrat',
              fontSize: '15px',
              cursor: 'pointer'
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

export default ListObjBestPage
