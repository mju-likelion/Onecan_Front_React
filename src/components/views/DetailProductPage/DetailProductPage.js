import React, { useEffect, useState } from 'react'
import axios from "axios";
import ProductImage from './Sections/ProductImage';
import ProductInfo from './Sections/ProductInfo';
import { Row, Col } from 'antd';
import '../../views/DetailProductPage/Sections/Detail.css';
import Header from '../../../components/views/Header/Header';
import Footer from '../../../components/views/Footer/Footer';

function DetailProductPage(props) {

    //const productId = props.match.params.productId

    const [Product, setProduct] = useState({})

   {/*  useEffect(() => {
        axios.get(`/api/product/products_by_id?id=${productId}&type=single`)
            .then(response => {
                setProduct(response.data[0])
            })
            .catch(err => alert(err))
    }, [])  */}

    return (
        <>
        <Header />
        <div style={{ width: '100%', padding: '3rem 6rem' }}>

            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <h1>{Product.title}</h1>
            </div>
            <br />
                    
                    {/* ProductImage */}
                    <div style={{width:'40%', marginTop:'20%', marginLeft:'100px'}}>
                    <ProductImage detail={Product} />
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems:'flex-start', marginTop:'-28%', marginLeft:'10%' }}>
                    {/* ProductInfo */}
                    <ProductInfo detail={Product} />
                    </div>
        </div>
        <Footer />
        </>
        
    )
}

export default DetailProductPage
