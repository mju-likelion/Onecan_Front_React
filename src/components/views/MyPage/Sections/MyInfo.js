import React from "react";
import Name from "../../MyPage/MyPage";
import Phone from "../../MyPage/MyPage";
import Address from "../../MyPage/MyPage";

function MyInfo() {
  return (
    //아직 수정 중
    <div className="MyText">
      <p className="MyName">이름 : {Name} </p>
      <p className="MyPhone">전화번호 : {Phone}</p>
      <p className="MyAddress">주소 : {Address}</p>
    </div>
  );
}

export default MyInfo;
