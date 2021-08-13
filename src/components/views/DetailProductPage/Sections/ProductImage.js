import axios from "axios";
import React, { useEffect, useState } from "react";
import ImageGallery from "react-image-gallery";
import "./Detail.css";

function ProductImage(props) {
  const [Images, setImages] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/product/").then((response) => {
      console.log(response);
      setImages(response.data);
    });

    if (props.detail.images && props.detail.images.length > 0) {
      let images = [];

      props.detail.images.map((item) => {
        images.push({
          original: "http://localhost:3000/${item}",
          thumbnail: "http://localhost:3000/${item}",
        });
      });
      setImages(images);
    }
  }, [props.detail]); //props.detail 이 있어야 사진을 가지고 옴 = 위가 랜더링되고 props.detail.images 부분에 이미지 없어서 저 부분이 없으면 사진 안 뜸
  // props.detail이 있음으로써 바뀔 때 다시 한 번 이미지 전달

  return (
    <div>
      <ImageGallery>
        {Images.map((item) => (
          <img src={item.image} alt="이미지" />
        ))}
      </ImageGallery>
    </div>
  );
}

export default ProductImage;
