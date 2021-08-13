import React from 'react'

function RegisterTermsPage() {
  return (
      <div className="service_wrap">
            <div className="market" style={{marginTop:'5%'}}>
                <div className="service_name">
                    <h2>개인정보 수집 및 이용 동의</h2>
                </div>
                <div className="market_service">
                   <p style={{marginTop: '2%', marginLeft:'3%'}}> *이용자가 제공한 모든 정보는 다음의 목적을 위해 활용하며, 하기 목적 이외의 용도로는 사용되지 않습니다.</p>
                    <p className="market_content">
                    ① 개인정보 수집 항목 및 수집·이용 목적 < br />
                    가) 수집 항목 (필수항목)
                    - 성명(국문), 주소, 전화번호(휴대전화), 사진, 이메일.
                     혹은 회원가입에 기재된 정보 또는 서비스 이용자가 마켓 및 커뮤니티 서비스를 이용할 때 당사에 보내는 정보 등. <br />
                    나) 수집 및 이용 목적<br />
                    - 서비스 회원가입 정보 수집 <br />
                    - One can 마켓 정보 수집 및 이용 <br />
                    - One can 커뮤니티 정보 수집 및 이용 <br />
                    ② 개인정보 보유 및 이용기간 <br />
                    - 수집·이용 동의일로부터 회원 탈퇴 시일까지 <br />
                    ③ 동의 거부 관리 <br />
                    - 귀하께서는 본 안내에 따른 개인정보 수집, 이용에 대하여 동의를 거부하실 권리가 있습니다. 다만,
                    귀하가 개인정보의 수집/이용에 동의를 거부하시는 경우에 서비스 이용에 불이익이 발생할 수 있습니다.
                      
                    </p>

                </div>
            </div>
      
    </div>
  )
}

export default RegisterTermsPage
