import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import KakaoLogin from 'react-kakao-login';
import { useNavigate } from 'react-router-dom';
const KakaoSignUp = () => {
    const [userInfo, setUserInfo] = useState(null);
    const navigate = useNavigate();
    const responseKaKao = (res) => {
        setUserInfo({ data: res });
    }

    useEffect(() => {
        if (userInfo) {
            let user = userInfo.data.profile.kakao_account;
            console.log("access_token", userInfo.data.response.access_token);
            console.log("email", user.email)
            console.log("nickname", user.profile.nickname);
            navigate(`/1`);
        }
    }, [userInfo]);



    return (
        <KaKaoBtn
            token={'38ad1e428f5cf6b50057ec5a3a4ad3ac'}
            onSuccess={responseKaKao}
            getProfile={true}
            render={(props) => <div onClick={props.onClick}><button type="button" class="style_wrapper__IgK7U social-login-button kakao-login"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="21" viewBox="0 0 22 21"><path fill="#000" fill-rule="nonzero" d="M11 0C5.242 0 0 3.823 0 8.539c0 2.932 1.904 5.519 4.804 7.056l-1.22 4.479c-.107.397.343.712.69.483l5.348-3.548c.452.044.91.069 1.377.069 6.076 0 11-3.823 11-8.54 0-4.715-4.924-8.538-11-8.538"></path></svg>
            <div class="InputPanel_socialTitle__77isU isKR">Kakao</div>
        </button></div>}
        />
    )
}

const KaKaoBtn = styled(KakaoLogin)`
padding: 0;
width: 190px;
height: 44px;
line-height: 44px;
color: #783c00;
background-color: #FFEB00;
border: 1px solid transparent;
border-radius: 3px;
font-size: 16px;
font-weight: bold;
text-align: center;
cursor: pointer;
`

export default KakaoSignUp;