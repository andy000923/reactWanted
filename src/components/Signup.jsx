import React, {useState} from "react";
import "./css/signup.css";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
const Signup = (props) => {
    const [userName, setuserName] = useState('');
    const [phoneNum, setphoneNum] = useState('');
    const [userEmail, setuserEmail] = useState('');
    const [userPassword, setuserPassword] = useState('');
    const [event, setevent] = useState('');
    const navigate = useNavigate();
    const onChange = (e) => {
        setuserName(e.target.value);
    };
    const onChange2 = (e) => {
        setphoneNum(e.target.value);
    };
    const onChange3 = (e) => {
        setuserEmail(e.target.value);
    };
    const onChange4 = (e) => {
        setuserPassword(e.target.value);
    };
    const onChange5 = (e) => {
        setevent(e.target.value);
    };
   
    const checkUser=()=>{
        axios.post('https://sohee.shop/users',{ 
                userName:(userName),
                phoneNum:(phoneNum),
                userEmail:(userEmail),
                userPassword:(userPassword),
                event:(event)
        }).then(response=>{
            console.log(response.data);
            console.log(userName, phoneNum, userEmail, userPassword, event);
            if (response.data.code === 1000) {
                alert("회원가입 성공!");
                navigate(`/`);
            } else if (response.data.code === 2015) {
                alert(response.data.message);
            } else if (response.data.code === 2016) {
                alert(response.data.message);
            } else if (response.data.code === 2017) {
                alert(response.data.message);
            } else if (response.data.code === 2018) {
                alert(response.data.message);
            } else if (response.data.code === 2026) {
                alert(response.data.message);   
            } else if (response.data.code === 2027) {
                alert(response.data.message);   
            } else if (response.data.code === 2028) {
                alert(response.data.message);   
            } else if (response.data.code === 2029) {
                alert(response.data.message);   
            } else if (response.data.code === 4000) {
                alert(response.data.message);   
            } else if (response.data.code === 4011) {
                alert(response.data.message);   
            }
        },
        (error)=>{
            console.log(error);   
        });
        
    }

    return (
        <div className="Modal_modalContent__0zuTn style_wrapper__SO1vd border-none">
            <div class="ModalHeader Header_Header__0d6dF">회원가입<a href="/" type="button"><svg width="24" height="24" viewBox="0 0 24 24" color="#999"><path fill="currentColor" d="M17.97 19.03a.75.75 0 001.06-1.06l-6.5-6.5a.75.75 0 00-1.06 0l-6.5 6.5a.75.75 0 001.06 1.06L12 13.06l5.97 5.97zM12 10.94L6.03 4.97a.75.75 0 00-1.06 1.06l6.5 6.5a.75.75 0 001.06 0l6.5-6.5a.75.75 0 00-1.06-1.06L12 10.94z"></path></svg></a></div>
            <div id="MODAL_BODY" class="ModalBody Body_body__KI0OY SetPassword_SetPassword_modal__0P9SA">
                <div class="SetPassword_SetPassword_form__WK9NO">
                    <div class="style_wrapper__6RiUK">
                        <label for="userName" class="style_label__BKYHB">이름</label>
                        <div class="style_body__A6XnO">
                            <input type="text" onChange={onChange} placeholder="이름을 입력해 주세요." id="userName" value={userName} ></input>
                        </div>
                        <div class="style_guidance__FT8Qs input-group-guidance"></div>
                    </div>
                    <div class="MobileInput_MobileInput__K9xQB">
                        <div class="style_wrapper__6RiUK userPhoneNumber">
                            <label for="userPhoneNumber" class="style_label__BKYHB">휴대폰 번호</label>
                            <div class="style_body__A6XnO">
                                <div id="userPhoneNumber">
                                    <div class="MobileInput_MobileInput_select__61tfM">
                                        <span>대한민국 +82</span>
                                        <select><option value="+82">+82 South Korea</option><option value="+81">+81 Japan</option><option value="+886">+886 Taiwan</option><option value="+852">+852 Hong Kong</option><option value="+65">+65 Singapore</option><option value="+93">+93 Afghanistan</option><option value="+355">+355 Albania</option><option value="+213">+213 Algeria</option><option value="+244">+244 Angola</option><option value="+54">+54 Argentina</option><option value="+374">+374 Armenia</option><option value="+297">+297 Aruba</option><option value="+61">+61 Australia</option><option value="+43">+43 Austria</option><option value="+994">+994 Azerbaijan</option><option value="+973">+973 Bahrain</option><option value="+880">+880 Bangladesh</option><option value="+375">+375 Belarus</option><option value="+32">+32 Belgium</option><option value="+501">+501 Belize</option><option value="+229">+229 Benin</option><option value="+975">+975 Bhutan</option><option value="+591">+591 Bolivia</option><option value="+267">+267 Botswana</option><option value="+55">+55 Brazil</option><option value="+673">+673 Brunei</option><option value="+359">+359 Bulgaria</option><option value="+226">+226 Burkina Faso</option><option value="+855">+855 Cambodia</option><option value="+237">+237 Cameroon</option><option value=" +1"> +1 Canada</option><option value="+56">+56 Chile</option><option value="+86">+86 China</option><option value="+61">+61 Christmas Island</option><option value="+61">+61 Cocos Islands</option><option value="+57">+57 Colombia</option><option value="+269">+269 Comoros</option><option value="+506">+506 Costa Rica</option><option value="+385">+385 Croatia</option><option value="+53">+53 Cuba</option><option value="+599">+599 Curacao</option><option value="+357">+357 Cyprus</option><option value="+420">+420 Czech Republic</option><option value="+45">+45 Denmark</option><option value="+253">+253 Djibouti</option><option value="+593">+593 Ecuador</option><option value="+20">+20 Egypt</option><option value="+503">+503 El Salvador</option><option value="+240">+240 Equatorial Guinea</option><option value="+372">+372 Estonia</option><option value="+251">+251 Ethiopia</option><option value="+298">+298 Faroe Islands</option><option value="+679">+679 Fiji</option><option value="+358">+358 Finland</option><option value="+33">+33 France</option><option value="+689">+689 French Polynesia</option><option value="+220">+220 Gambia</option><option value="+995">+995 Georgia</option><option value="+49">+49 Germany</option><option value="+233">+233 Ghana</option><option value="+30">+30 Greece</option><option value="+299">+299 Greenland</option><option value="+502">+502 Guatemala</option><option value="+224">+224 Guinea</option><option value="+592">+592 Guyana</option><option value="+509">+509 Haiti</option><option value="+504">+504 Honduras</option><option value="+36">+36 Hungary</option><option value="+354">+354 Iceland</option><option value="+91">+91 India</option><option value="+62">+62 Indonesia</option><option value="+98">+98 Iran</option><option value="+964">+964 Iraq</option><option value="+353">+353 Ireland</option><option value="+972">+972 Israel</option><option value="+39">+39 Italy</option><option value="+962">+962 Jordan</option><option value="+7">+7 Kazakhstan</option><option value="+254">+254 Kenya</option><option value="+383">+383 Kosovo</option><option value="+965">+965 Kuwait</option><option value="+996">+996 Kyrgyzstan</option><option value="+856">+856 Laos</option><option value="+371">+371 Latvia</option><option value="+961">+961 Lebanon</option><option value="+218">+218 Libya</option><option value="+423">+423 Liechtenstein</option><option value="+370">+370 Lithuania</option><option value="+352">+352 Luxembourg</option><option value="+853">+853 Macau</option><option value="+389">+389 Macedonia</option><option value="+261">+261 Madagascar</option><option value="+265">+265 Malawi</option><option value="+60">+60 Malaysia</option><option value="+960">+960 Maldives</option><option value="+223">+223 Mali</option><option value="+356">+356 Malta</option><option value="+692">+692 Marshall Islands</option><option value="+222">+222 Mauritania</option><option value="+230">+230 Mauritius</option><option value="+52">+52 Mexico</option><option value="+373">+373 Moldova</option><option value="+976">+976 Mongolia</option><option value="+382">+382 Montenegro</option><option value="+212">+212 Morocco</option><option value="+258">+258 Mozambique</option><option value="+95">+95 Myanmar</option><option value="+264">+264 Namibia</option><option value="+977">+977 Nepal</option><option value="+31">+31 Netherlands</option><option value="+687">+687 New Caledonia</option><option value="+64">+64 New Zealand</option><option value="+505">+505 Nicaragua</option><option value="+227">+227 Niger</option><option value="+234">+234 Nigeria</option><option value="+47">+47 Norway</option><option value="+968">+968 Oman</option><option value="+92">+92 Pakistan</option><option value="+680">+680 Palau</option><option value="+970">+970 Palestine</option><option value="+507">+507 Panama</option><option value="+675">+675 Papua New Guinea</option><option value="+595">+595 Paraguay</option><option value="+51">+51 Peru</option><option value="+63">+63 Philippines</option><option value="+48">+48 Poland</option><option value="+351">+351 Portugal</option><option value="+974">+974 Qatar</option><option value="+262">+262 Reunion</option><option value="+40">+40 Romania</option><option value="+7">+7 Russia</option><option value="+250">+250 Rwanda</option><option value="+685">+685 Samoa</option><option value="+966">+966 Saudi Arabia</option><option value="+221">+221 Senegal</option><option value="+381">+381 Serbia</option><option value="+248">+248 Seychelles</option><option value="+232">+232 Sierra Leone</option><option value="+421">+421 Slovakia</option><option value="+386">+386 Slovenia</option><option value="+677">+677 Solomon Islands</option><option value="+252">+252 Somalia</option><option value="+27">+27 South Africa</option><option value="+211">+211 South Sudan</option><option value="+34">+34 Spain</option><option value="+94">+94 Sri Lanka</option><option value="+249">+249 Sudan</option><option value="+597">+597 Suriname</option><option value="+46">+46 Sweden</option><option value="+41">+41 Switzerland</option><option value="+963">+963 Syria</option><option value="+992">+992 Tajikistan</option><option value="+255">+255 Tanzania</option><option value="+66">+66 Thailand</option><option value="+228">+228 Togo</option><option value="+676">+676 Tonga</option><option value="+216">+216 Tunisia</option><option value="+90">+90 Turkey</option><option value="+993">+993 Turkmenistan</option><option value="+256">+256 Uganda</option><option value="+380">+380 Ukraine</option><option value="+971">+971 United Arab Emirates</option><option value="+44">+44 United Kingdom</option><option value="+1">+1 United States</option><option value="+598">+598 Uruguay</option><option value="+998">+998 Uzbekistan</option><option value="+678">+678 Vanuatu</option><option value="+58">+58 Venezuela</option><option value="+84">+84 Vietnam</option><option value="+967">+967 Yemen</option><option value="+260">+260 Zambia</option><option value="+263">+263 Zimbabwe</option></select>
                                        <i class="MobileInput_MobileInput_select_arrow__hLBUp icon-arrow_right"></i>
                                    </div>
                                    <div class="MobileInput_MobileInput_input__5mhzh">
                                        <input name="userPhoneNumber" type="text" placeholder="(예시) 01034567890" onChange={onChange2} value={phoneNum}/>                                     
                                    </div>
                                </div>
                            </div>
                            <div class="style_guidance__FT8Qs input-group-guidance"></div>
                        </div>
                    </div>
                    <div class="style_wrapper__6RiUK">
                        <label for="userPasswordRepeat" class="style_label__BKYHB">이메일</label>
                        <div class="style_body__A6XnO">
                            <input type="text" name="userPasswordRepeat" placeholder="이메일을 입력해 주세요." id="userPasswordRepeat" onChange={onChange3} value={userEmail}/>
                        </div>
                        <div class="style_guidance__FT8Qs input-group-guidance"></div>
                    </div>
                    <div class="style_wrapper__6RiUK">
                        <label for="userPassword" class="style_label__BKYHB">비밀번호</label>
                        <div class="style_body__A6XnO">
                            <input type="password" name="userPassword" placeholder="비밀번호를 입력해 주세요." id="userPassword" onChange={onChange4} value={userPassword}/>
                        </div>
                        <div class="style_guidance__FT8Qs input-group-guidance">영문 대소문자, 숫자, 특수문자를 3가지 이상으로 조합하여 8자 이상 입력해 주세요.</div>                 
                    </div> 
                    <div class="style_wrapper__6RiUK">
                        <div class="style_body__A6XnO">
                            <input type="text" name="userPassword" placeholder="동의는 'y', 미동의는 'n'을 입력해 주세요." id="userPassword" onChange={onChange5} value={event}/>
                        </div>
                    </div>
                    <div class="Agreement_wrapper__1RTfh">
                        <div class="style_wrapper__TaLWc Agreement_checkbox__OGFNT">
                            <div class="style_check__svLur"><svg width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M18.75 21.75H5.25a3 3 0 0 1-3-3V5.25a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3v13.5a3 3 0 0 1-3 3zm0-1.5a1.5 1.5 0 0 0 1.5-1.5V5.25a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5v13.5a1.5 1.5 0 0 0 1.5 1.5h13.5z"></path></svg></div><div class="style_label__CZv3V"><input type="checkbox" name="acceptPrivacy"/>개인정보 수집 및 이용 동의<span>(필수)</span><a href="https://help.wanted.co.kr/hc/ko/articles/360040127872" rel="noopener noreferrer" target="_blank" class="Agreement_link__qZ81b">자세히</a></div>
                        </div>
                        <div class="style_wrapper__TaLWc Agreement_checkbox__OGFNT">
                            <div class="style_check__svLur"><svg width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M18.75 21.75H5.25a3 3 0 0 1-3-3V5.25a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3v13.5a3 3 0 0 1-3 3zm0-1.5a1.5 1.5 0 0 0 1.5-1.5V5.25a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5v13.5a1.5 1.5 0 0 0 1.5 1.5h13.5z"></path></svg></div><div class="style_label__CZv3V"><input type="checkbox" name="acceptEventEmail"/>이벤트 소식 등 알림 정보 받기<a href="https://help.wanted.co.kr/hc/ko/articles/360040540111" rel="noopener noreferrer" target="_blank" class="Agreement_link__qZ81b">자세히</a></div>
                        </div>
                    </div>
                </div>
                <div class="SetPassword_SetPassword_footer_btn__UrVb_">
                    <div class="SetPassword_SetPassword_footer_btn_wrapper__SRH1U">
                        <button class="style_wrapper__IgK7U" onClick={checkUser}>회원가입하기</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;
