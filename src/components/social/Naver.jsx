import React, { useEffect, useState } from 'react';
import NaverLogin from 'react-naver-login';
import { useNavigate } from 'react-router-dom';
const NaverSignUp = () => {
    const [userInfo, setUserInfo] = useState(null);
    const navigate = useNavigate();
    useEffect(() => {
        if (userInfo) {
            const token = localStorage.getItem('com.naver.nid.access_token');
            console.log("access_token", token.slice(7));
            console.log("email", userInfo.data.email);
            console.log("nickname", userInfo.data.nickname);
            navigate(`/1`);
        }
    }, [userInfo]);

    const responseNaver = (res) => {
        setUserInfo({ data: res });
    }

    return (
        <NaverLogin
            clientId="Be0H41UjdU2Ybiw8K8Ld"
            callbackUrl="http://localhost:3000"
            onSuccess={responseNaver}
            render={(props) => <div onClick={props.onClick}><button type="button" class="style_wrapper__IgK7U social-login-button apple-login"><svg xmlns="http://www.w3.org/2000/svg" width="19" height="24" viewBox="0 0 19 24"><path fill="#fff" fill-rule="nonzero" d="M15.868 12.55c.033 3.574 3.098 4.764 3.132 4.779-.026.084-.49 1.695-1.615 3.36-.972 1.439-1.982 2.872-3.572 2.902-1.562.03-2.065-.938-3.851-.938s-2.344.908-3.823.967c-1.535.059-2.704-1.556-3.684-2.99C.45 17.698-1.08 12.343.975 8.73c1.022-1.795 2.848-2.932 4.83-2.96 1.506-.03 2.929 1.026 3.85 1.026.921 0 2.65-1.27 4.467-1.083.761.032 2.897.31 4.268 2.343-.11.07-2.548 1.506-2.522 4.494m-2.936-8.777c.815-.999 1.363-2.389 1.213-3.772-1.174.048-2.594.792-3.437 1.79-.755.884-1.416 2.298-1.238 3.654 1.31.103 2.647-.673 3.462-1.672"></path></svg>
            <div class="InputPanel_socialTitle__77isU isKR">Apple</div>
        </button></div>}
        />
    );
};

export default NaverSignUp;