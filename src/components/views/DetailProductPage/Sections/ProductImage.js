import React, { useEffect, useState } from 'react'
import ImageGallery from 'react-image-gallery'
import  './Detail.css'

function ProductImage(props) {

  const [Images, setImages] = useState([])

  useEffect(() => {

      if (props.detail.images && props.detail.images.length > 0) {
        let images = []

        props.detail.images.map(item => {
            images.push({
                original: 'http://localhost:3000/${item}',
                thumbnail: 'http://localhost:3000/${item}'
            })
        })
        setImages(images)
      }
  }, [props.detail]) //props.detail 이 있어야 사진을 가지고 옴 = 위가 랜더링되고 props.detail.images 부분에 이미지 없어서 저 부분이 없으면 사진 안 뜸
                      // props.detail이 있음으로써 바뀔 때 다시 한 번 이미지 전달
  const images = [
    {
      original: 'https://picsum.photos/id/1018/1000/600/',
      thumbnail: 'https://picsum.photos/id/1018/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1015/1000/600/',
      thumbnail: 'https://picsum.photos/id/1015/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1019/1000/600/',
      thumbnail: 'https://picsum.photos/id/1019/250/150/',
    },
  ];

  return (
    <div style={{marginTop:400, marginLeft:350}}>
      <ImageGallery items={images} />
    </div>
  )
}

export default ProductImage
