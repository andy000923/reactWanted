import Dropdown from "../Dropdown/index.jsx";
import "./Navbar1.css";
import React, { useState, useEffect, useRef, Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-regular-svg-icons";

function Navbar1() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSignupOpen, setIsSignupOpen] = useState(false);
  const openSignupModal = () => {
    setIsSignupOpen(true);
};  
  const closeSignupModal = () => {
        setIsSignupOpen(false);
    };

  return (
    <div className="navBar" role="presentation" style={{position: "fixed", paddingRight: "initial"}} >
    <div className="mainBar">
      <nav className="mainBarNav">
      <div className ="mainBarNavTop">
          <div className="mainBarNavTopLogo">
            <button type="button" aria-label="jobCategoryMenuButton" className="mainBarHamburger"
            onMouseEnter={setIsOpen}>
              <img src="https://static.wanted.co.kr/images/icon-menu.png" alt="hambergurMenu" className="hamburgerMenu" style={{width:"17px",
                height:"14px", objectFit: "contain"}}></img>
            </button>
            <Dropdown isOpen={isOpen} onMouseLeave={() => setIsOpen(false)} />
            <a href="/" className="mainBarLogo">
             <img src="https://www.wantedlab.com/img/logo.png" alt="wanted logo" className="logoImg" />
            </a>
            </div>
          <button id="gnbSignupBtn" className="xsSignUpButton" onClick={openSignupModal}>회원가입하기 </button>
        </div>
        <div className="Mainbar_Menu">
        <ul className ="menu">
          <li className="xsHomeButton xsOnly selectedNav"> 
            <a href="/1">홈</a>
          </li>
          <li><a href="/jobsfeed1">채용</a></li>
          <li><a href="/events1">이벤트</a></li>
          <li className="options"><a href="/salary1">직군별 연봉</a></li>
          <li className="options"><a href="/cv1">이력서</a></li>
          <li className="options">
            <a href="/community1">
              커뮤니티
              <em>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="11"
                    viewBox="0 0 18 11"
                  >
                    <g
                      fill="none"
                      fillRule="evenodd"
                      fontFamily="AppleSDGothicNeo-SemiBold, Apple SD Gothic Neo"
                      fontSize="9"
                      fontWeight="500"
                    >
                      <g fill="#3366FF">
                        <g fill="#3366FF">
                          <g fill="#3366FF">
                            <g fill="#3366FF">
                              <g fill="#3366FF">
                                <g fill="#3366FF">
                                  <g fill="#3366FF">
                                    <text
                                      transform="translate(-931.000000, -13.000000) translate(224.000000, 7.000000) translate(210.000000, 6.000000) translate(350.000000, 0.000000) translate(147.000000, 0.000000)"
                                      fill="#3366FF"
                                    >
                                      <tspan x="0" y="8" fill="#3366FF">
                                        New
                                      </tspan>
                                    </text>
                                  </g>
                                </g>
                              </g>
                            </g>
                          </g>
                        </g>
                      </g>
                    </g>
                  </svg>
                </em>
            </a>
          
          </li>
          <li className="options"><a href="/experts1">프리랜서</a></li>
          <li className="options">
            <a href="/aiscore1">
              AI 합격예측
              <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="11"
                    viewBox="0 0 18 11"
                  >
                    <g
                      fill="none"
                      fillRule="evenodd"
                      fontFamily="AppleSDGothicNeo-SemiBold, Apple SD Gothic Neo"
                      fontSize="9"
                      fontWeight="500"
                    >
                      <g fill="#3366FF">
                        <g fill="#3366FF">
                          <g fill="#3366FF">
                            <g fill="#3366FF">
                              <g fill="#3366FF">
                                <g fill="#3366FF">
                                  <g fill="#3366FF">
                                    <text
                                      transform="translate(-931.000000, -13.000000) translate(224.000000, 7.000000) translate(210.000000, 6.000000) translate(350.000000, 0.000000) translate(147.000000, 0.000000)"
                                      fill="#3366FF"
                                    >
                                      <tspan x="0" y="8" fill="#3366FF">
                                        Beta
                                      </tspan>
                                    </text>
                                  </g>
                                </g>
                              </g>
                            </g>
                          </g>
                        </g>
                      </g>
                    </g>
                  </svg>
                </span>
            </a>
          </li>
        </ul>
        </div>
        <div className="Mainbar_SideMenu">
          <div className="Mainbar_SideMenu_search">
            <FontAwesomeIcon icon={faSearch} className="search" />
            <span>N</span>
          </div>
          <div className="Mainbar_SideMenu_bell">
            <FontAwesomeIcon icon={faBell} className="bell" />
            <span>N</span>
          </div>
          <div className="Mainbar_SideMenu_avatar">
            <img src="https://static.wanted.co.kr/images/profile_default.png" alt="avatar.img"></img>
          </div>
          <div className="Mainbar_SideMenu_menuPlus">
            <FontAwesomeIcon icon={faEllipsisH} className="menuPlus" />
          </div>
          <div className="Mainbar_SideMenu_verticalbar">|</div>
          <div className="Mainbar_SideMenu_text">기업 서비스</div>
        </div>
        </nav>
      </div>
    </div>
  );
}
export default Navbar1;
