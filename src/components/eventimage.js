import "./css/eventimage.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Event1 from "./assets/images/event1.png";
import Event2 from "./assets/images/event2.png";
import Slider from 'react-slick'
const EventImage = () => {

    const settings = {
        dots: 0,
        infinite: true,
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 5,
        responsive: [ // 반응형 웹 구현 옵션
          {
              breakpoint: 1200, // 화면 사이즈 1200px
              settings: {
                  slidesToShow: 5,
              }
          }
          ]
      };

    return (
    <div className="App">   
        <header>
            <a href="/events/newstart" class="" aria-label="" target="_blank" rel="noopener noreferrer" data-attribute-id="event__banner__click" data-landing-uri="/events/newstart" data-position="top">
                <section class="BgImg_bgType__f_agX Banner_Banner_image__EBGa5" ></section>
            </a>
        </header>
        <div class="EventList_EventList_container__mcoes">
                <div class="slick-slider slick-initialized">
                        <button type="button" class="NavButton_NavButton__yPIr_ is-prev"><svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" class="NavButton_NavButton_icon__WQBl1"><path d="M14.611 11L7.306 18.306C7.037 18.574 7.037 19.009 7.306 19.278C7.574 19.546 8.009 19.546 8.278 19.278L16.069 11.486C16.338 11.218 16.338 10.782 16.069 10.514L8.278 2.722C8.009 2.454 7.574 2.454 7.306 2.722C7.037 2.991 7.037 3.426 7.306 3.694L14.61 11H14.611Z" fill="#939393"></path></svg></button>
                        <Slider {...settings}>                        
                            <div><button type="button" name="item-10093" autofocus="" data-attribute-id="home__interestTag__click" data-interest-tag="IT·Dev" class="ChipScroll_ChipScroll__item__Qka9D ChipScroll_ChipScroll__item__selected__CYQWk">전체</button></div>
                            <div><button type="button" name="item-10238" data-attribute-id="home__interestTag__click" data-interest-tag="Work-Life Balance" class="ChipScroll_ChipScroll__item__Qka9D">커리어고민</button></div>
                            <div><button type="button" name="item-10074" data-attribute-id="home__interestTag__click" data-interest-tag="Marketing" class="ChipScroll_ChipScroll__item__Qka9D">HR</button></div>
                            <div><button type="button" name="item-10241" data-attribute-id="home__interestTag__click" data-interest-tag="Career Search" class="ChipScroll_ChipScroll__item__Qka9D">경영·비즈니스</button></div>
                            <div><button type="button" name="item-10069" data-attribute-id="home__interestTag__click" data-interest-tag="Leadership" class="ChipScroll_ChipScroll__item__Qka9D">회사생활</button></div>
                            <div><button type="button" name="item-10214" data-attribute-id="home__interestTag__click" data-interest-tag="Law" class="ChipScroll_ChipScroll__item__Qka9D">개발</button></div>
                            <div><button type="button" name="item-10089" data-attribute-id="home__interestTag__click" data-interest-tag="Design" class="ChipScroll_ChipScroll__item__Qka9D">취업/이직</button></div>
                            <div><button type="button" name="item-10240" data-attribute-id="home__interestTag__click" data-interest-tag="Business/Strategy" class="ChipScroll_ChipScroll__item__Qka9D">브랜딩</button></div>
                            <div><button type="button" name="item-10075" data-attribute-id="home__interestTag__click" data-interest-tag="UX/UI" class="ChipScroll_ChipScroll__item__Qka9D">UX/UI</button></div>
                            <div><button type="button" name="item-10239" data-attribute-id="home__interestTag__click" data-interest-tag="Work Culture" class="ChipScroll_ChipScroll__item__Qka9D">조직문화</button></div>
                            <div><button type="button" name="item-10244" data-attribute-id="home__interestTag__click" data-interest-tag="Work Productivity" class="ChipScroll_ChipScroll__item__Qka9D">회사생활</button></div>
                            <div><button type="button" name="item-10059" data-attribute-id="home__interestTag__click" data-interest-tag="Tech" class="ChipScroll_ChipScroll__item__Qka9D">IT/기술</button></div>
                            <div><button type="button" name="item-10086" data-attribute-id="home__interestTag__click" data-interest-tag="Career Advice" class="ChipScroll_ChipScroll__item__Qka9D">커리어고민</button></div>
                            <div><button type="button" name="item-10243" data-attribute-id="home__interestTag__click" data-interest-tag="Mental Health" class="ChipScroll_ChipScroll__item__Qka9D">인간관계</button></div>
                            <div><button type="button" name="item-10085" data-attribute-id="home__interestTag__click" data-interest-tag="Data" class="ChipScroll_ChipScroll__item__Qka9D">데이터</button></div>
                            <div><button type="button" name="item-10070" data-attribute-id="home__interestTag__click" data-interest-tag="HR" class="ChipScroll_ChipScroll__item__Qka9D">HR</button></div>
                            <div><button type="button" name="item-10072" data-attribute-id="home__interestTag__click" data-interest-tag="Branding" class="ChipScroll_ChipScroll__item__Qka9D">브랜딩</button></div>
                            <div><button type="button" name="item-10242" data-attribute-id="home__interestTag__click" data-interest-tag="Product Management" class="ChipScroll_ChipScroll__item__Qka9D">서비스기획</button></div>                            
                        </Slider>        
                        <button type="button" class="NavButton_NavButton__yPIr_ is-next"><svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" class="NavButton_NavButton_icon__WQBl1"><path d="M14.611 11L7.306 18.306C7.037 18.574 7.037 19.009 7.306 19.278C7.574 19.546 8.009 19.546 8.278 19.278L16.069 11.486C16.338 11.218 16.338 10.782 16.069 10.514L8.278 2.722C8.009 2.454 7.574 2.454 7.306 2.722C7.037 2.991 7.037 3.426 7.306 3.694L14.61 11H14.611Z" fill="#939393"></path></svg></button>       
                </div> 
                <h2 class="EventList-title Title_Title__N_nVD">전체</h2>    
        </div> 
        <div class="Sticky_Sticky_target__3v02E Header_Header__xnAUj EventList_EventList_header__7lei8">
            <div class="EventList_EventList_container__mcoes Header_Header_inner__wM44e"><div class="CategorySelect_CategorySelect__fIcxt"><label for="CategorySelect" class="CategorySelect_CategorySelect_label__sN7mg">전체<svg width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg" class="CategorySelect_CategorySelect_icon__Gxr3n"><path d="M8.75106 0C9.38006 0 9.73005 0.726 9.33805 1.218L5.35205 6.218C5.05205 6.593 4.48206 6.594 4.18106 6.22L0.167057 1.22C-0.227943 0.729 0.122057 0 0.751057 0H8.75106V0Z" fill="#333333"></path></svg></label><select id="CategorySelect" class="CategorySelect_CategorySelect_input__SsGvp" data-attribute-id="eventList__category__choose"><option value="">전체</option><option value="tag.keorieo">커리어고민</option><option value="tag.insa">HR</option><option value="tag.ilban_samu">경영·비즈니스</option><option value="tag.hoesasaenghwal">회사생활</option><option value="tag.it2">개발</option><option value="tag.cwijun_ijig">취업/이직</option><option value="tag.beuraending">브랜딩</option><option value="tag.gisul_it">IT/기술</option><option value="tag.maketing_gwanggo_hongbo">마케팅·광고</option><option value="tag.rideosib">리더십</option><option value="tag.jojigmunhwa">조직문화</option><option value="tag.nomu">노무</option><option value="tag.dijain">디자인</option><option value="tag.gyeongyeong_jeonryag">경영/전략</option><option value="tag.seobiseu_gihoeg">서비스기획</option><option value="tag.raipeuseutail">라이프스타일</option><option value="tag.ux">UX/UI</option><option value="tag.gogaegseobiseu">고객서비스·리테일</option><option value="tag.deiteo">데이터</option><option value="tag.peuriraenseo">프리랜서</option><option value="tag.ingangwangye">인간관계</option><option value="tag.yeongeob">영업</option><option value="tag.enjinieoring_seolgye">엔지니어링·설계</option><option value="tag.gyoyuk">교육</option><option value="tag.geumyung">금융</option></select></div><div class="Header_Header_triggers__P5ule"><div class="FilterMenu_FilterMenu__Xrj_g"><button type="button" class="FilterMenu_FilterMenu_button__aZjnZ" data-attribute-id="eventList__filter">
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" class="FilterMenu_FilterMenu_icon__Q0svG"><path d="M4.66699 10.51C5.55699 10.51 6.30999 11.11 6.54099 11.927H13.875C14.168 11.927 14.406 12.165 14.406 12.458C14.406 12.752 14.168 12.99 13.875 12.99H6.54099C6.30999 13.807 5.55799 14.406 4.66699 14.406C3.77499 14.406 3.02299 13.806 2.79199 12.989H1.12499C0.831994 12.989 0.593994 12.752 0.593994 12.459C0.593994 12.165 0.831994 11.927 1.12499 11.927H2.79199C3.02399 11.109 3.77599 10.51 4.66699 10.51V10.51ZM4.66699 11.573C4.17799 11.573 3.78099 11.97 3.78099 12.458C3.78099 12.947 4.17799 13.344 4.66699 13.344C5.15499 13.344 5.55199 12.947 5.55199 12.458C5.55199 11.97 5.15499 11.573 4.66699 11.573ZM10.333 5.55299C11.225 5.55299 11.977 6.15199 12.208 6.96899H13.875C14.168 6.96899 14.406 7.20699 14.406 7.49999C14.406 7.79299 14.168 8.03099 13.875 8.03099H12.208C11.976 8.84899 11.224 9.44799 10.333 9.44799C9.44299 9.44799 8.68999 8.84799 8.45899 8.03199H1.12499C0.831994 8.03199 0.593994 7.79299 0.593994 7.49999C0.593994 7.20699 0.831994 6.96899 1.12499 6.96899H8.45899C8.68999 6.15199 9.44199 5.55199 10.333 5.55199V5.55299ZM10.333 6.61499C9.84499 6.61499 9.44799 7.01099 9.44799 7.49999C9.44799 7.98899 9.84499 8.38499 10.333 8.38499C10.822 8.38499 11.219 7.98899 11.219 7.49999C11.219 7.01099 10.822 6.61499 10.333 6.61499V6.61499ZM4.66699 0.593994C5.55699 0.593994 6.30999 1.19299 6.54099 2.00999H13.875C14.168 2.00999 14.406 2.24799 14.406 2.54199C14.406 2.83499 14.168 3.07199 13.875 3.07199L6.54099 3.07399C6.30899 3.89099 5.55799 4.48999 4.66699 4.48999C3.77599 4.48999 3.02399 3.88999 2.79199 3.07399L1.12499 3.07299C0.831994 3.07299 0.593994 2.83499 0.593994 2.54199C0.593994 2.24799 0.831994 2.00999 1.12499 2.00999H2.79199C3.02399 1.19299 3.77599 0.593994 4.66699 0.593994V0.593994ZM4.66699 1.65599C4.17799 1.65599 3.78099 2.05299 3.78099 2.54199C3.78099 3.02999 4.17799 3.42699 4.66699 3.42699C5.15499 3.42699 5.55199 3.02999 5.55199 2.54199C5.55199 2.05299 5.15499 1.65599 4.66699 1.65599V1.65599Z" fill="#333333"></path></svg><span class="FilterMenu_FilterMenu_label__pyoXD">필터 및 정렬</span><div class="FilterMenu_FilterMenu_counter__XXX_G FilterCounter_FilterCounter__wGXD5">1</div></button></div><div class="NotificationManager_NotificationManager_wrapper__JmH6R">
            <button type="button" class="NotificationManager_NotificationManager__X1DXD is-desktop" data-attribute-id="event__keywordNoti"><svg width="17" height="15" viewBox="0 0 17 15" fill="none" xmlns="http://www.w3.org/2000/svg" class="NotificationManager_NotificationManager_icon__l78H_"><path d="M5.385 13H8.615C8.38 13.583 7.745 14 7 14C6.254 14 5.62 13.583 5.385 13ZM7 15C8.522 15 9.755 13.829 9.755 12.384C9.755 12.094 9.508 11.86 9.205 11.86H1.856C1.553 11.86 1.326 11.847 1.172 11.823L1.236 11.708C1.271 11.648 1.583 11.145 1.686 10.964C2.154 10.151 2.407 9.405 2.407 8.547V5.407C2.407 2.937 4.422 1.047 6.999 1.047C9.576 1.047 11.591 2.937 11.591 4.407C11.594 4.711 11.842 4.957 12.146 4.957H12.149C12.449 4.957 12.693 4.713 12.693 4.413V4.407C12.694 2.356 10.182 0 7 0C3.818 0 1.306 2.356 1.306 5.407V8.547C1.306 9.204 1.107 9.79 0.72 10.463C0.628 10.625 0.318 11.123 0.273 11.201C0.089 11.516 0 11.733 0 11.975C0 12.701 0.62 12.907 1.857 12.907H4.3C4.555 14.101 5.667 15 7 15Z" fill="#fff"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M13.433 6.6C13.737 6.6 13.983 6.846 13.983 7.15V9.516H16.35C16.623 9.516 16.85 9.716 16.893 9.977L16.9 10.067V10.133C16.9 10.437 16.654 10.683 16.35 10.683H13.983V13.05C13.983 13.354 13.737 13.6 13.433 13.6H13.367C13.063 13.6 12.817 13.354 12.817 13.05L12.816 10.683H10.45C10.177 10.683 9.94999 10.483 9.90699 10.223L9.89999 10.133V10.067C9.89999 9.763 10.146 9.517 10.45 9.517L12.816 9.516V7.15C12.816 6.846 13.063 6.6 13.366 6.6H13.433V6.6Z" fill="#fff"></path></svg><span class="">키워드 알림 신청</span></button>
            <button id="NotificationManger" type="button" class="NotificationManager_NotificationManager__X1DXD NotificationManager_NotificationManager_motion__YXmC8 is-mobile" data-attribute-id="event__keywordNoti"><svg width="17" height="15" viewBox="0 0 17 15" fill="none" xmlns="http://www.w3.org/2000/svg" class="NotificationManager_NotificationManager_motion_icon__7AinR"><path d="M5.385 13H8.615C8.38 13.583 7.745 14 7 14C6.254 14 5.62 13.583 5.385 13ZM7 15C8.522 15 9.755 13.829 9.755 12.384C9.755 12.094 9.508 11.86 9.205 11.86H1.856C1.553 11.86 1.326 11.847 1.172 11.823L1.236 11.708C1.271 11.648 1.583 11.145 1.686 10.964C2.154 10.151 2.407 9.405 2.407 8.547V5.407C2.407 2.937 4.422 1.047 6.999 1.047C9.576 1.047 11.591 2.937 11.591 4.407C11.594 4.711 11.842 4.957 12.146 4.957H12.149C12.449 4.957 12.693 4.713 12.693 4.413V4.407C12.694 2.356 10.182 0 7 0C3.818 0 1.306 2.356 1.306 5.407V8.547C1.306 9.204 1.107 9.79 0.72 10.463C0.628 10.625 0.318 11.123 0.273 11.201C0.089 11.516 0 11.733 0 11.975C0 12.701 0.62 12.907 1.857 12.907H4.3C4.555 14.101 5.667 15 7 15Z" fill="#fff"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M13.433 6.6C13.737 6.6 13.983 6.846 13.983 7.15V9.516H16.35C16.623 9.516 16.85 9.716 16.893 9.977L16.9 10.067V10.133C16.9 10.437 16.654 10.683 16.35 10.683H13.983V13.05C13.983 13.354 13.737 13.6 13.433 13.6H13.367C13.063 13.6 12.817 13.354 12.817 13.05L12.816 10.683H10.45C10.177 10.683 9.94999 10.483 9.90699 10.223L9.89999 10.133V10.067C9.89999 9.763 10.146 9.517 10.45 9.517L12.816 9.516V7.15C12.816 6.846 13.063 6.6 13.366 6.6H13.433V6.6Z" fill="#fff"></path></svg><span class="NotificationManager_NotificationManager_motion_label__3EfGf">알림 신청</span></button><div class="Tooltip_Tooltip__O9xC8 NotificationManager_NotificationManager_tooltip__lkyul">관심 태그를 등록하시면, <mark>이벤트가 오픈되는<br/>즉시 카카오톡으로</mark> 알려드릴게요!</div></div></div></div>
        </div>


        <div>
        <div class="EventList_EventList_container__mcoes EventList_EventList_items__NeJxX">
            <div>        
                <div class="EventItems_EventItems_list__1d36q">
                    <div class="EventItem_EventItem__1Rj6D">
                        <a href="/events?eventIdOrKey=22_07_s15_b01" class="EventItem_EventItem_link__gWsoH" aria-label=""><header class="EventItem_EventItem_media__T_Pm2"></header><div class="EventItem_EventItem_body__ix_9a"><div class="EventKinds EventKinds_EventKinds__YhUSb"><span class="EventKind EventKinds_EventKind__eWUu8 is-article"><span class="EventKinds_EventKind__text__sYu5A">아티클</span></span></div><h2 class="EventItem_EventItem_title__Xjepj EventItem_EventItem_maintitle__lC0yT">Z세대가 반응하는  브랜드 캠페인 만들기 ‘스타일쉐어’</h2><h3 class="EventItem_EventItem_title__Xjepj EventItem_EventItem_subtitle__p_ZPR">2022.07.26 (화) ~ 2022.07.27 (수)</h3><div class="EventCategories_EventCategories__GN0Wa"><span class="EventCategories_EventCategories_categoriesTag__C83cl">#마케팅·광고 #브랜딩 #회사생활</span></div></div></a>
                    </div>
                    <div class="EventItem_EventItem__1Rj6D">
                        <a href="/events?eventIdOrKey=22_07_s15_b01" class="EventItem_EventItem_link__gWsoH" aria-label=""><header class="EventItem_EventItem_media__T_Pm2"></header><div class="EventItem_EventItem_body__ix_9a"><div class="EventKinds EventKinds_EventKinds__YhUSb"><span class="EventKind EventKinds_EventKind__eWUu8 is-article"><span class="EventKinds_EventKind__text__sYu5A">아티클</span></span></div><h2 class="EventItem_EventItem_title__Xjepj EventItem_EventItem_maintitle__lC0yT">Z세대가 반응하는  브랜드 캠페인 만들기 ‘스타일쉐어’</h2><h3 class="EventItem_EventItem_title__Xjepj EventItem_EventItem_subtitle__p_ZPR">2022.07.26 (화) ~ 2022.07.27 (수)</h3><div class="EventCategories_EventCategories__GN0Wa"><span class="EventCategories_EventCategories_categoriesTag__C83cl">#마케팅·광고 #브랜딩 #회사생활</span></div></div></a>
                    </div>
                    <div class="EventItem_EventItem__1Rj6D">
                        <a href="/events?eventIdOrKey=22_07_s15_b01" class="EventItem_EventItem_link__gWsoH" aria-label=""><header class="EventItem_EventItem_media__T_Pm2"></header><div class="EventItem_EventItem_body__ix_9a"><div class="EventKinds EventKinds_EventKinds__YhUSb"><span class="EventKind EventKinds_EventKind__eWUu8 is-article"><span class="EventKinds_EventKind__text__sYu5A">아티클</span></span></div><h2 class="EventItem_EventItem_title__Xjepj EventItem_EventItem_maintitle__lC0yT">Z세대가 반응하는  브랜드 캠페인 만들기 ‘스타일쉐어’</h2><h3 class="EventItem_EventItem_title__Xjepj EventItem_EventItem_subtitle__p_ZPR">2022.07.26 (화) ~ 2022.07.27 (수)</h3><div class="EventCategories_EventCategories__GN0Wa"><span class="EventCategories_EventCategories_categoriesTag__C83cl">#마케팅·광고 #브랜딩 #회사생활</span></div></div></a>
                    </div>
                    <div class="EventItem_EventItem__1Rj6D">
                        <a href="/events?eventIdOrKey=22_07_s15_b01" class="EventItem_EventItem_link__gWsoH" aria-label=""><header class="EventItem_EventItem_media__T_Pm2"></header><div class="EventItem_EventItem_body__ix_9a"><div class="EventKinds EventKinds_EventKinds__YhUSb"><span class="EventKind EventKinds_EventKind__eWUu8 is-article"><span class="EventKinds_EventKind__text__sYu5A">아티클</span></span></div><h2 class="EventItem_EventItem_title__Xjepj EventItem_EventItem_maintitle__lC0yT">Z세대가 반응하는  브랜드 캠페인 만들기 ‘스타일쉐어’</h2><h3 class="EventItem_EventItem_title__Xjepj EventItem_EventItem_subtitle__p_ZPR">2022.07.26 (화) ~ 2022.07.27 (수)</h3><div class="EventCategories_EventCategories__GN0Wa"><span class="EventCategories_EventCategories_categoriesTag__C83cl">#마케팅·광고 #브랜딩 #회사생활</span></div></div></a>
                    </div>
                    <div class="EventItem_EventItem__1Rj6D">
                        <a href="/events?eventIdOrKey=22_07_s15_b01" class="EventItem_EventItem_link__gWsoH" aria-label=""><header class="EventItem_EventItem_media__T_Pm2"></header><div class="EventItem_EventItem_body__ix_9a"><div class="EventKinds EventKinds_EventKinds__YhUSb"><span class="EventKind EventKinds_EventKind__eWUu8 is-article"><span class="EventKinds_EventKind__text__sYu5A">아티클</span></span></div><h2 class="EventItem_EventItem_title__Xjepj EventItem_EventItem_maintitle__lC0yT">Z세대가 반응하는  브랜드 캠페인 만들기 ‘스타일쉐어’</h2><h3 class="EventItem_EventItem_title__Xjepj EventItem_EventItem_subtitle__p_ZPR">2022.07.26 (화) ~ 2022.07.27 (수)</h3><div class="EventCategories_EventCategories__GN0Wa"><span class="EventCategories_EventCategories_categoriesTag__C83cl">#마케팅·광고 #브랜딩 #회사생활</span></div></div></a>
                    </div>
                    <div class="EventItem_EventItem__1Rj6D">
                        <a href="/events?eventIdOrKey=22_07_s15_b01" class="EventItem_EventItem_link__gWsoH" aria-label=""><header class="EventItem_EventItem_media__T_Pm2"></header><div class="EventItem_EventItem_body__ix_9a"><div class="EventKinds EventKinds_EventKinds__YhUSb"><span class="EventKind EventKinds_EventKind__eWUu8 is-article"><span class="EventKinds_EventKind__text__sYu5A">아티클</span></span></div><h2 class="EventItem_EventItem_title__Xjepj EventItem_EventItem_maintitle__lC0yT">Z세대가 반응하는  브랜드 캠페인 만들기 ‘스타일쉐어’</h2><h3 class="EventItem_EventItem_title__Xjepj EventItem_EventItem_subtitle__p_ZPR">2022.07.26 (화) ~ 2022.07.27 (수)</h3><div class="EventCategories_EventCategories__GN0Wa"><span class="EventCategories_EventCategories_categoriesTag__C83cl">#마케팅·광고 #브랜딩 #회사생활</span></div></div></a>
                    </div>
                    <div class="EventItem_EventItem__1Rj6D">
                        <a href="/events?eventIdOrKey=22_07_s15_b01" class="EventItem_EventItem_link__gWsoH" aria-label=""><header class="EventItem_EventItem_media__T_Pm2"></header><div class="EventItem_EventItem_body__ix_9a"><div class="EventKinds EventKinds_EventKinds__YhUSb"><span class="EventKind EventKinds_EventKind__eWUu8 is-article"><span class="EventKinds_EventKind__text__sYu5A">아티클</span></span></div><h2 class="EventItem_EventItem_title__Xjepj EventItem_EventItem_maintitle__lC0yT">Z세대가 반응하는  브랜드 캠페인 만들기 ‘스타일쉐어’</h2><h3 class="EventItem_EventItem_title__Xjepj EventItem_EventItem_subtitle__p_ZPR">2022.07.26 (화) ~ 2022.07.27 (수)</h3><div class="EventCategories_EventCategories__GN0Wa"><span class="EventCategories_EventCategories_categoriesTag__C83cl">#마케팅·광고 #브랜딩 #회사생활</span></div></div></a>
                    </div>
                    <div class="EventItem_EventItem__1Rj6D">
                        <a href="/events?eventIdOrKey=22_07_s15_b01" class="EventItem_EventItem_link__gWsoH" aria-label=""><header class="EventItem_EventItem_media__T_Pm2"></header><div class="EventItem_EventItem_body__ix_9a"><div class="EventKinds EventKinds_EventKinds__YhUSb"><span class="EventKind EventKinds_EventKind__eWUu8 is-article"><span class="EventKinds_EventKind__text__sYu5A">아티클</span></span></div><h2 class="EventItem_EventItem_title__Xjepj EventItem_EventItem_maintitle__lC0yT">Z세대가 반응하는  브랜드 캠페인 만들기 ‘스타일쉐어’</h2><h3 class="EventItem_EventItem_title__Xjepj EventItem_EventItem_subtitle__p_ZPR">2022.07.26 (화) ~ 2022.07.27 (수)</h3><div class="EventCategories_EventCategories__GN0Wa"><span class="EventCategories_EventCategories_categoriesTag__C83cl">#마케팅·광고 #브랜딩 #회사생활</span></div></div></a>
                    </div>
                    <div class="EventItem_EventItem__1Rj6D">
                        <a href="/events?eventIdOrKey=22_07_s15_b01" class="EventItem_EventItem_link__gWsoH" aria-label=""><header class="EventItem_EventItem_media__T_Pm2"></header><div class="EventItem_EventItem_body__ix_9a"><div class="EventKinds EventKinds_EventKinds__YhUSb"><span class="EventKind EventKinds_EventKind__eWUu8 is-article"><span class="EventKinds_EventKind__text__sYu5A">아티클</span></span></div><h2 class="EventItem_EventItem_title__Xjepj EventItem_EventItem_maintitle__lC0yT">Z세대가 반응하는  브랜드 캠페인 만들기 ‘스타일쉐어’</h2><h3 class="EventItem_EventItem_title__Xjepj EventItem_EventItem_subtitle__p_ZPR">2022.07.26 (화) ~ 2022.07.27 (수)</h3><div class="EventCategories_EventCategories__GN0Wa"><span class="EventCategories_EventCategories_categoriesTag__C83cl">#마케팅·광고 #브랜딩 #회사생활</span></div></div></a>
                    </div>
                    <div class="EventItem_EventItem__1Rj6D">
                        <a href="/events?eventIdOrKey=22_07_s15_b01" class="EventItem_EventItem_link__gWsoH" aria-label=""><header class="EventItem_EventItem_media__T_Pm2"></header><div class="EventItem_EventItem_body__ix_9a"><div class="EventKinds EventKinds_EventKinds__YhUSb"><span class="EventKind EventKinds_EventKind__eWUu8 is-article"><span class="EventKinds_EventKind__text__sYu5A">아티클</span></span></div><h2 class="EventItem_EventItem_title__Xjepj EventItem_EventItem_maintitle__lC0yT">Z세대가 반응하는  브랜드 캠페인 만들기 ‘스타일쉐어’</h2><h3 class="EventItem_EventItem_title__Xjepj EventItem_EventItem_subtitle__p_ZPR">2022.07.26 (화) ~ 2022.07.27 (수)</h3><div class="EventCategories_EventCategories__GN0Wa"><span class="EventCategories_EventCategories_categoriesTag__C83cl">#마케팅·광고 #브랜딩 #회사생활</span></div></div></a>
                    </div>
                    <div class="EventItem_EventItem__1Rj6D">
                        <a href="/events?eventIdOrKey=22_07_s15_b01" class="EventItem_EventItem_link__gWsoH" aria-label=""><header class="EventItem_EventItem_media__T_Pm2"></header><div class="EventItem_EventItem_body__ix_9a"><div class="EventKinds EventKinds_EventKinds__YhUSb"><span class="EventKind EventKinds_EventKind__eWUu8 is-article"><span class="EventKinds_EventKind__text__sYu5A">아티클</span></span></div><h2 class="EventItem_EventItem_title__Xjepj EventItem_EventItem_maintitle__lC0yT">Z세대가 반응하는  브랜드 캠페인 만들기 ‘스타일쉐어’</h2><h3 class="EventItem_EventItem_title__Xjepj EventItem_EventItem_subtitle__p_ZPR">2022.07.26 (화) ~ 2022.07.27 (수)</h3><div class="EventCategories_EventCategories__GN0Wa"><span class="EventCategories_EventCategories_categoriesTag__C83cl">#마케팅·광고 #브랜딩 #회사생활</span></div></div></a>
                    </div>
                    <div class="EventItem_EventItem__1Rj6D">
                        <a href="/events?eventIdOrKey=22_07_s15_b01" class="EventItem_EventItem_link__gWsoH" aria-label=""><header class="EventItem_EventItem_media__T_Pm2"></header><div class="EventItem_EventItem_body__ix_9a"><div class="EventKinds EventKinds_EventKinds__YhUSb"><span class="EventKind EventKinds_EventKind__eWUu8 is-article"><span class="EventKinds_EventKind__text__sYu5A">아티클</span></span></div><h2 class="EventItem_EventItem_title__Xjepj EventItem_EventItem_maintitle__lC0yT">Z세대가 반응하는  브랜드 캠페인 만들기 ‘스타일쉐어’</h2><h3 class="EventItem_EventItem_title__Xjepj EventItem_EventItem_subtitle__p_ZPR">2022.07.26 (화) ~ 2022.07.27 (수)</h3><div class="EventCategories_EventCategories__GN0Wa"><span class="EventCategories_EventCategories_categoriesTag__C83cl">#마케팅·광고 #브랜딩 #회사생활</span></div></div></a>
                    </div>
                </div>                 
            </div>
        </div>
        </div>
        
    </div>
    );
  }
  
  export default EventImage;