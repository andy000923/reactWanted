import React from 'react';
import styled from 'styled-components';

function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        <InnerContainer>
          <FooterContent>
            <InnerHeader>
              <img src="/Images/Footer/cuted_full.png" alt="cutedImg" width="200px" />
              <ul>
                <li>기업소개</li>
                <li>이용약관</li>
                <li>개인정보 처리방침</li>
                <li>고객센터</li>
              </ul>
            </InnerHeader>
            <IconWrap>
              <a href="https://www.instagram.com/wantedjobs.kr/" class="" aria-label="" target="_blank" rel="noopener noreferrer">
                <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Fsocial_instagram.png&amp;w=20&amp;q=100" alt="instagram"></img>
              </a>&nbsp;&nbsp;&nbsp;
              <a href="https://www.youtube.com/channel/UC0tGZ6MqieGG2m5lA5PeQsw" class="" aria-label="" target="_blank" rel="noopener noreferrer">
                <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Fsocial_youtube.png&amp;w=25&amp;q=100" alt="youtube"></img>
              </a>&nbsp;&nbsp;&nbsp;
              <a href="https://www.facebook.com/wantedkr" class="" aria-label="" target="_blank" rel="noopener noreferrer">
                <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Fsocial_facebook.png&amp;w=20&amp;q=100" alt="facebook"></img>
              </a>&nbsp;&nbsp;&nbsp;
              <a href="https://blog.naver.com/wantedlab" class="" aria-label="" target="_blank" rel="noopener noreferrer">
                <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Fsocial_blog.png&amp;w=20&amp;q=100" alt="blog"></img>
              </a>&nbsp;&nbsp;&nbsp;
              <a href="https://pf.kakao.com/_XqCIxl" class="" aria-label="" target="_blank" rel="noopener noreferrer">
                <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Fsocial_kakao.png&amp;w=19&amp;q=100" alt="kakao"></img>
              </a>&nbsp;&nbsp;&nbsp;
              <a href="https://post.naver.com/my.nhn?memberNo=18284175" class="" aria-label="" target="_blank" rel="noopener noreferrer">
                <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Fsocial_post.png&amp;w=20&amp;q=100" alt="post"></img>
              </a>&nbsp;&nbsp;&nbsp;
              <a href="https://apps.apple.com/kr/app/id1074569961" class="" aria-label="" target="_blank" rel="noopener noreferrer">
                <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Fsocial_apple.png&amp;w=17&amp;q=100" alt="apple"></img>
              </a>&nbsp;&nbsp;&nbsp;
              <a href="https://play.google.com/store/apps/details?id=com.wanted.android.wanted" class="" aria-label="" target="_blank" rel="noopener noreferrer">
                <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Fsocial_google.png&amp;w=17&amp;q=100" alt="google"></img>
              </a>
            </IconWrap>
          </FooterContent>

          <FooterContent2>
            <InnerText>
              <p>
                (주)원티드랩 (대표이사:이복기) | 서울특별시 송파구 올림픽로
                300 롯데월드타워 35층 | 통신판매번호 : 2020-서울송파-3147 <br />
                유료직업소개사업등록번호 : (국내) 제2020-3230259-14-5-00018호 |
                (국외) 서울동부-유-2020-2 | 사업자등록번호 : 299-86-00021 | 02-539-7118 <br />©
                Wantedlab, Inc.
              </p>
            </InnerText>
            <SelectWrapper>
            <KoreaImg src="/Images/Footer/korea.png" alt="koreaLogo" />
              <CountrySelector>
                {COUNTRY_WRAPPER.map((el, idx) => (
                  <option key={idx} value={el}>
                    {el}
                  </option>
                ))}
              </CountrySelector>
            </SelectWrapper>
          </FooterContent2>
        </InnerContainer>       
      </FooterContent>
    </FooterContainer>
  );
}

export default Footer;

const FooterContainer = styled.div`
  display: flex;
  padding: 30px 0 70px;
  background-color: #fff;
  color: rgba(0, 0, 0, 0.8);
  font-size: 14px;
  border-top: 1px solid #ececec;
  position: bottom 0px;
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  width: 1060px;
  margin: 0 auto;
`;
const FooterContent2 = styled.div`
  display: flex;
  justify-content: space-between;
  width: 1060px;
  margin: 0 auto;
  border-top: 1px solid #ececec;
`;

const InnerContainer = styled.div`
  max-width: 1060px;
`;

const InnerHeader = styled.header`
  display: flex;
  margin-bottom: 20px;
  width: 100%;
  
  img {
    width: 110px;
    height: 39px;
    margin-right: 45px;
  }

  ul {
    display: flex;

    li {
      line-height: 2.6;
      margin-right: 45px;
    }
  }
`;

const IconWrap = styled.div`
  
  display: flex;
  line-height: 2.6;
  margin-bottom: 10px;
`;


const InnerText = styled.div`
  width: 100%;
  line-height: 1.66667em;
  font-size: 12px;
  margin-top: 25px;
  
`;

const SelectWrapper = styled.div`
  position: relative;
  margin-top: 30px;
  margin-left: 50px;
`;

const KoreaImg = styled.img`
  width: 20px;
  height: 14px;
  position: absolute;
  top: 12px;
  left: 18px;
`;

const CountrySelector = styled.select`
  width: 250px;
  height: 36px;
  padding: 8px 45px;
  background-color:  #f8f8fa;
  color: #333333;
  border: none;
  outline: none;
`;

const FOOTER_INFO = ['이용약관', '개인정보 처리방침', '고객센터'];

const COUNTRY_WRAPPER = [
  '한국(한국어)',
  '日本 (日本語)',
  '台灣 (繁體中文)',
  'Worldwide (English)',
  'Hong Kong (English)',
  'Singapore (English)',
];
