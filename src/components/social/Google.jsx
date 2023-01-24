import React, { useEffect, useState } from 'react';
import GoogleLogin from 'react-google-login';
import { useNavigate } from 'react-router-dom';
const GoogleSignUp = () => {
    const [userInfo, setUserInfo] = useState(null);
    const navigate = useNavigate();
    const clientId = "730064098693-rre0cg7njr0ej2c1u8vsku66cd7u6833.apps.googleusercontent.com";

    useEffect(() => {
        if (userInfo) {
            console.log("access_token", userInfo.data.Zb.access_token);
            console.log("email", userInfo.data.profileObj.email);
            console.log("name", userInfo.data.profileObj.name);
            navigate(`/1`);
        }
    }, [userInfo]);

    const onSuccess = (res) => {
        setUserInfo({ data: res });
    }

    return (
        <GoogleLogin
            clientId={clientId}
            responseType={"id_token"}
            onSuccess={onSuccess}
            render={(props) => <div onClick={props.onClick}><button type="button" class="style_wrapper__IgK7U social-login-button google-login"><svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23"><g fill="none" fill-rule="nonzero"><path fill="#EA4335" d="M11.5 4.574c1.688 0 3.204.58 4.396 1.72l3.299-3.299C17.203 1.14 14.6 0 11.5 0 7.005 0 3.115 2.577 1.223 6.335l3.842 2.98c.905-2.718 3.44-4.741 6.435-4.741z"></path><path fill="#4285F4" d="M22.54 11.761c0-.815-.073-1.6-.21-2.352H11.5v4.448h6.19c-.268 1.438-1.078 2.656-2.296 3.471v2.886h3.717c2.174-2.002 3.429-4.95 3.429-8.453z"></path><path fill="#FBBC05" d="M5.065 13.685c-.23-.69-.36-1.427-.36-2.185s.13-1.495.36-2.185v-2.98H1.223C.444 7.888 0 9.645 0 11.5c0 1.856.444 3.612 1.223 5.165l3.842-2.98z"></path><path fill="#34A853" d="M11.5 23c3.105 0 5.708-1.03 7.61-2.786l-3.716-2.886c-1.03.69-2.347 1.098-3.894 1.098-2.995 0-5.53-2.023-6.435-4.741H1.223v2.98C3.115 20.423 7.005 23 11.5 23z"></path><path d="M0 0L23 0 23 23 0 23z"></path></g></svg>
            <div class="InputPanel_socialTitle__77isU isKR">Google</div>
        </button></div>}
        />
    );
};

export default GoogleSignUp;