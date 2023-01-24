import React, {useState} from "react";
import  Modal  from "../components/Modal";
import Signup from "../components/Signup";
import "./css/signupModal.css";
import GoogleSignUp from "./social/Google"
import KakaoSignUp from "./social/Kakao"
import NaverSignUp from "./social/Naver"
import axios from "axios";
import { useNavigate } from "react-router-dom";
    const SignupModal = (props) => {
    const { modalStatus, closeModal, width } = props;
    const navigate = useNavigate();
    
    const [text, setText] = useState('');
    const onChange = (e) => {
        setText(e.target.value);
    };
        const checkUser=()=>{
            axios.get('https://sohee.shop/users/check',{
                params:{ email: (text)} 
            }).then(response=>{
                console.log(response.data);
                console.log(text);
                if (response.data.result === "회원") {
                    alert("로그인 성공!");
                    navigate("/1");
                } else {
                    alert("가입한 회원이 아닙니다.");
                    navigate("/signup");
                }
            },
            (error)=>{
                console.log(error);   
            });
    }
    return (
        <Modal modalStatus={modalStatus} closeModal={closeModal} width={width}>
            <div style={{ width: "100%" }}>
                <div className="x-btn" onClick={closeModal}>
                    <svg
                        viewBox="0 0 32 32"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        role="presentation"
                        focusable="false"
                        style={{
                            display: "block",
                            fill: "none",
                            height: 24,
                            width: 24,
                            stroke: "currentcolor",
                            strokeWidth: 3,
                            overflow: "visible",
                            color: "#999",
                        }}>
                        <path d="m6 6 20 20"></path>
                        <path d="m26 6-20 20"></path>
                    </svg>
                </div>
                <header className="signup-modal-header">
                    <h1 style={{ fontSize: 20 }}>wanted</h1>
                </header>
                <div className="signup-main">
                    <div>                        
                        <div id="MODAL_BODY" class="ModalBody Body_body__KI0OY SignUpOrLogin_modal__VDGVH">
                            <div class="TextPanel_className__J3J2W">
                                <h1>직장인을 위한<br/>커리어 플랫폼, 원티드!</h1><h2>커리어 성장과 행복을 위한 여정<br/> 지금 원티드에서 시작하세요.</h2>
                            </div>
                            <div class="InputPanel_wrapper__RXp1k">
                                <input class="InputPanel_password__my_BO" type="password" autocomplete="password"></input>
                                <div class="style_wrapper__6RiUK InputPanel_email__aEAmZ">
                                    <label for="email" class="style_label__BKYHB">이메일</label>
                                    <div class="style_body__A6XnO">
                                        <input type="email" onChange={onChange} placeholder="이메일을 입력해 주세요." id="email" value={text}></input>
                                    </div>
                                    <div class="style_guidance__FT8Qs input-group-guidance"></div>
                                </div>
                                <div class="InputPanel_buttons__w391m">
                                    <button type="button" class="style_wrapper__IgK7U email-login-button"
                                     onClick={checkUser}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd" stroke="#FFF" stroke-width="2"><rect width="17.2" height="14" x="3.4" y="5" rx="3"></rect><path d="M3.2 5.6L12 12l8.8-6.4"></path></g></svg>이메일로 계속하기
                                    </button>
                                    <div class="InputPanel_divider__WEgZ3"></div>
                                    <div class="InputPanel_socialLogins__j0wq7">다음 계정으로 계속하기</div>
                                    <div class="InputPanel_socialWrapper__Dhaxo isKR">
                                        <div class="InputPanel_socialButton__Hggw2 isKR">
                                            <KakaoSignUp/>
                                        </div>
                                        <div class="InputPanel_socialButton__Hggw2 isKR">
                                            <button type="button" class="style_wrapper__IgK7U social-login-button facebook-login"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="23" viewBox="0 0 12 23"><path fill="#fff" fill-rule="nonzero" d="M11.214 12.603l.622-4.055h-3.89V5.917c0-1.11.543-2.191 2.285-2.191H12V.274S10.395 0 8.86 0C5.656 0 3.562 1.942 3.562 5.458v3.09H0v4.055h3.562v9.802c.714.112 1.446.17 2.191.17.746 0 1.478-.058 2.192-.17v-9.802h3.269"></path></svg>
                                                <div class="InputPanel_socialTitle__77isU isKR">Facebook</div>
                                            </button>
                                        </div>
                                        <div class="InputPanel_socialButton__Hggw2 isKR">
                                            <GoogleSignUp/>
                                        </div>
                                        <div class="InputPanel_socialButton__Hggw2 isKR">
                                            <NaverSignUp/>
                                        </div>
                                    </div>
                                </div>
                                <p class="style_wrapper__MbwMv">걱정마세요! 여러분의 지원 활동은 SNS에 노출되지 않습니다.<br/>회원가입 시 <a class="loginModalAnchor" href="https://help.wanted.co.kr/hc/ko/articles/360035484292" target="_blank">개인정보 처리방침</a>과 <a class="loginModalAnchor" href="https://help.wanted.co.kr/hc/ko/articles/360035844551" target="_blank">이용약관</a>을 확인하였으며, 동의합니다.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Modal>
    );
};

export default SignupModal;
