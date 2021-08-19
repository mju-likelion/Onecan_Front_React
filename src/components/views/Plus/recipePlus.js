import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Carousel } from "react-carousel-minimal";

function recipeplus() {
  const data = [
    {
      image:
        "https://cdn.pixabay.com/photo/2016/09/29/08/33/apple-1702316_960_720.jpg",
      caption: "사과의 얼굴",
    },
    {
      image:
        "https://cdn.pixabay.com/photo/2017/09/26/13/21/apples-2788599_960_720.jpg",
      caption: "더 좋은 발표를 하지 못해 사과합니다",
    },
    {
      image:
        "https://cdn.pixabay.com/photo/2017/09/26/13/42/apple-2788662_960_720.jpg",
      caption: "사과 받아주세용",
    },
    
  ];

  const captionStyle = {
    fontSize: "2em",
    fontWeight: "bold",
  };
  const slideNumberStyle = {
    fontSize: "20px",
    fontWeight: "bold",
  };

  return (
    <>
      <Header />
      <div style={{}}>
        <div
          style={{ textAlign: "center", marginTop: "20%", marginBotton: "5%" }}
        ></div>
        <div className="App">
          <div style={{ textAlign: "center" }}>
            <div
              style={{
                padding: "0 20px",
              }}
            >
              <Carousel
                data={data}
                time={2000}
                width="850px"
                height="500px"
                captionStyle={captionStyle}
                radius="10px"
                slideNumber={true}
                slideNumberStyle={slideNumberStyle}
                captionPosition="bottom"
                automatic={true}
                dots={true}
                pauseIconColor="white"
                pauseIconSize="40px"
                slideBackgroundColor="darkgrey"
                slideImageFit="cover"
                thumbnails={true}
                thumbnailWidth="100px"
                style={{
                  textAlign: "center",
                  maxWidth: "850px",
                  maxHeight: "500px",
                  margin: "40px auto",
                }}
              />
            </div>
          </div>
        </div>
        <div style={{ marginLeft: "27%", marginTop: "8%", marginBotton: "5%" }}>
          <h1>DetailRecipe.title : 사과의 방법 레시피</h1>
        </div>
        <div
          style={{
            marginLeft: "27%",
            marginTop: "3%",
            marginRight: "27%",
            marginBottom: "3%",
          }}
        >
          <h2>
            오늘은 건강하게 사과에 대해 알아보자! <br />
            사과나무의 원산지는 발칸반도로 알려져 있으며 B.C. 20세기 경의 스위스
            토굴 주거지에서 탄화된 사과가 발굴된 것으로 보아 서양사과는 4,000년
            이상의 재배 역사를 가진 것으로 추정된다. 그리스 시대에는 재배종,
            야생종을 구분한 기록이 있고 접목 번식법이 이미 소개 되어 있을 정도로
            재배 기술이 진보되었다. 로마시대에는 Malus 또는 Malum이란 명칭으로
            재배가 성향하였고 그 후 16-17세기에 걸쳐 유럽각지에 전파되었다.
            17세기에는 미국에 전파되었고 20세기에는 칠레 등 남미 각국에
            전파되었다. 한국에서는 예로부터 재래종인 능금나무(Malus asiatica)를
            재배했다. 가장 오래된 기록으로 《계림유사》(12세기)에 ‘林樆은
            (고려말로) 悶子訃라 한다(林樆曰 悶子訃)’는 언급이 있고,
            《고려도경》(1123)에는 고려에 來檎이 자란다고 기록하고 있다. 여기서
            임금(林樆)과 내금(來檎)이 능금과 사과 중 어떤 것을 가리키는 말인지는
            확실하지 않다. 조선 숙종 때 쓰여진 홍만선의 《산림경제》(18세기
            초)에는 사과(楂果)와 임금(林檎)의 재배법이 각각 실려 있다. 1884년
            무렵에는 선교사들이 서양 품종을 들여와 관상수로 심었다.[1] 대구·경북
            지방의 사과의 경우는 1899년 선교사로 왔던 우드브릿지 존슨이 대구에
            있는 그의 사택에 심은 72그루의 사과나무로부터 널리 퍼졌다.[2]
          </h2>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default recipeplus;
