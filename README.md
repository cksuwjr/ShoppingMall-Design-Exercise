# ShoppingMall-Design-Exercise


MeMo

#======================================================== html part ============================================================

<html>
    <head>
        <title>카테고리 페이지</title>
        <link type="text/css" rel="stylesheet" href="../css/base_setting.css">
        <link type="text/css" rel="stylesheet" href="../css/category_page_style.css">
        <link type="text/css" rel="stylesheet" href="../css/header_style.css">
        <script type="text/javascript" src="../js/test.js"></script>
        <title>내셔널지오그래픽 어패럴</title>
    </head>

    <body class="body-main body-index pc" data-aos-easing="ease" data-aos-duration="700" data-aos-delay="0">
        <div id="wrap">
          <div id="header">
              <!-- header > 1 상단 로고 및 검색 및 여러 기능 -->
              <div class="header_search">  
                  <div class="header_search_cont">
                      <!-- 상단 로고 그림 -->
                      <div class="h1_logo">
                          <a>
                              <img src="../image/logo.png" alt="상단 로고" title="상단 로고">
                          </a>
                      </div>
                      <!-- 검색 기능 -->
                      <div class="top_search">
                          <form>
                              <div class="top_search_cont">
                                  <div class="top_text_cont">
                                      <input type="text" id="search_form" name="keyword" class="top_search_text" title placeholder autocomplete="off">
                                      <input type="image" src="../image/btn_top_search-1.png" id="btnSearchTop" class="btn_top_search" title="검색" value="검색" alt="검색">
                                  </div>
                              </div>
                          </form>
                      </div>
                      <div class="member_is">
                          <ul class="top_member_box">
                              <li><a href="">LOGIN</a></li>
                              <li><a href="">JOIN</a>
                                  <span class="accent">
                                      <span><strong>5,000 P</strong></span>
                                  </span>
                              </li>
                              <li>
                                  <div class="top_mypage_cont">
                                      <span class="top_mypage_tit"><a href="">MYPAGE</a></span>
                                      <ul style="display: none;">
                                          <li><a href="">주문조회</a></li>
                                          <li><a href="">내정보수정</a></li>
                                          <li><a href="">찜 리스트</a></li>
                                          <li><a href="">정품등록</a></li>
                                      </ul>
                                  </div>
                              </li>
                              <li><a href="">CART( <strong>0</strong> )</a></li>
                              <li><a href="">CS CENTER</a></li>
                              <li><a href="" target="_blank">매장개설문의</a></li>
                              <li><a href="" target="_blank">매장찾기</a></li>
                              <li><a href="">고객의소리</a></li>
                              <li><a href="">B2B</a></li>
                          </ul>
                      </div>
                  </div>
              </div>
              <!-- header > 2 상단 메뉴바 -->
              <div class="header_gnb">

                  <div class="gnb">
                      <div class="gnb_all"></div>
                      <div class="gnb_allmenu_wrap"></div>
                      <div class="gnb_menu_box">
                          <ul class="depth0 gnb_menu0" style="overflow: visible; height: 100%;">
                              <li>
                                  <a href="" class="">
                                      EVENTS
                                  </a>
                              </li>
                              <li>
                                  <a href="" class="">
                                      NEW ARRIVALS
                                  </a>
                                  <ul class="depth1">
                                      <li>
                                          <a href="" class="">
                                              22SS
                                          </a>
                                          <ul class="depth2">
                                              <li>
                                                  <a href="" class="">APPAREL</a>
                                              </li>
                                              <li>
                                                  <a href="" class="">BAG</a>
                                              </li>
                                              <li>
                                                  <a href="" class="">ACC</a>
                                              </li>
                                              <li>
                                                  <a href="" class="">SHOES</a>
                                              </li>
                                              <li>
                                                  <a href="" class="">
                                                      KIDS
                                                  </a>
                                                  <ul class="depth3">
                                                      <li>
                                                          <a href="">APPAREL</a>
                                                      </li>
                                                      <li>
                                                          <a href="" class="">BAG</a>
                                                      </li>
                                                      <li>
                                                          <a href="" class="">SHOES</a>
                                                      </li>
                                                  </ul>
                                              </li>
                                          </ul>
                                      </li>
                                      <li>
                                          <a href="" class="">
                                              21FW
                                          </a>
                                          <ul class="depth2">
                                              <li>
                                                  <a href="">APPAREL</a>
                                              </li>
                                              <li>
                                                  <a href="">BAG</a>
                                              </li>
                                              <li>
                                                  <a href="">SHOES</a>
                                              </li>
                                              <li>
                                                  <a href="" class="">ACC</a>
                                              </li>
                                              <li>
                                                  <a href="" class="">
                                                      KIDS
                                                  </a>
                                                  <ul class="depth3">
                                                      <li>
                                                          <a href="">APPAREL</a>
                                                      </li>
                                                      <li>
                                                          <a href="">BAG&amp;ACC</a>
                                                      </li>
                                                      <li>
                                                          <a href="">SHOES</a>
                                                      </li>
                                                  </ul>
                                              </li>
                                          </ul>
                                      </li>
                                      <li>
                                          <a href="" class="">
                                              CAMPING
                                          </a>
                                      </li>
                                  </ul>
                              </li>
                              <li>
                                  <a href="" class="">
                                      MEN
                                  </a>
                                  <ul class="depth1">
                                      <li>
                                          <a href="" class="">
                                              OUTER
                                          </a>
                                          <ul class="depth2">
                                              <li>
                                                  <a href="" class="">다운</a>
                                              </li>
                                              <li>
                                                  <a href="" class="">베스트</a>
                                              </li>
                                              <li>
                                                  <a href="" class="">자켓</a>
                                              </li>
                                          </ul>
                                      </li>
                                      <li>
                                          <a href="" class="">
                                              TOP
                                          </a>
                                          <ul class="depth2">
                                              <li>
                                                  <a href="" class="">맨투맨</a>
                                              </li>
                                              <li>
                                                  <a href="" class="">후디</a>
                                              </li>
                                              <li>
                                                  <a href="" class="">티셔츠</a>
                                              </li>
                                          </ul>
                                      </li>
                                      <li>
                                          <a href="" class="">
                                              BOTTOM
                                          </a>
                                          <ul class="depth2">
                                              <li>
                                                  <a href="" class="">팬츠</a>
                                              </li>
                                              <li>
                                                  <a href="" class="">트레이닝 팬츠</a>
                                              </li>
                                              <li>
                                                  <a href="" class="">반바지</a>
                                              </li>
                                              <li>
                                                  <a href="" class="">레깅스</a>
                                              </li>
                                          </ul>
                                      </li>
                                      <li>
                                          <a href="" class="">
                                              SURF WEAR
                                          </a>
                                      </li>
                                  </ul>
                              </li>
                              <li>
                                  <a href="" class="">
                                      WOMEN
                                  </a>
                                  <ul class="depth1">
                                      <li>
                                          <a href="" class="">
                                              OUTER
                                          </a>
                                          <ul class="depth2">
                                              <li>
                                                  <a href="" class="">다운</a>
                                              </li>
                                              <li>
                                                  <a href="" class="">베스트</a>
                                              </li>
                                              <li>
                                                  <a href="" class="">자켓</a>
                                              </li>
                                          </ul>
                                      </li>
                                      <li>
                                          <a href="" class="">
                                              TOP
                                          </a>
                                          <ul class="depth2">
                                              <li>
                                                  <a href="">맨투맨</a>
                                              </li>
                                              <li>
                                                  <a href="">후디</a>
                                              </li>
                                              <li>
                                                  <a href="">티셔츠</a>
                                              </li>
                                          </ul>
                                      </li>
                                      <li>
                                          <a href="" class="">
                                              BOTTOM
                                          </a>
                                          <ul class="depth2">
                                              <li>
                                                  <a href="">팬츠</a>
                                              </li>
                                              <li>
                                                  <a href="" class="">트레이닝 팬츠</a>
                                              </li>
                                              <li>
                                                  <a href="" class="">반바지</a>
                                              </li>
                                              <li>
                                                  <a href="">레깅스</a>
                                              </li>
                                          </ul>
                                      </li>
                                      <li>
                                          <a href="" class="">
                                              SURF WEAR
                                          </a>
                                      </li>
                                  </ul>
                              </li>
                              <li>
                                  <a href="" class="">
                                      KIDS
                                  </a>
                                  <ul class="depth1">
                                      <li>
                                          <a href="" class="">
                                              OUTER
                                          </a>
                                          <ul class="depth2">
                                              <li>
                                                  <a href="" class="">다운</a>
                                              </li>
                                              <li>
                                                  <a href="">베스트</a>
                                              </li>
                                              <li>
                                                  <a href="">자켓</a>
                                              </li>
                                              <li>
                                                  <a href="">플리스</a>
                                              </li>
                                          </ul>
                                      </li>
                                      <li>
                                          <a href="" class="">
                                              TOP
                                          </a>
                                          <ul class="depth2">
                                              <li>
                                                  <a href="" class="">맨투맨</a>
                                              </li>
                                              <li>
                                                  <a href="" class="">후디</a>
                                              </li>
                                              <li>
                                                  <a href="" class="">티셔츠</a>
                                              </li>
                                              <li>
                                                  <a href="">SET-UP</a>
                                              </li>
                                          </ul>
                                      </li>
                                      <li>
                                          <a href="" class="">
                                              BOTTOM
                                          </a>
                                          <ul class="depth2">
                                              <li>
                                                  <a href="">팬츠</a>
                                              </li>
                                              <li>
                                                  <a href="">반바지</a>
                                              </li>
                                          </ul>
                                      </li>
                                      <li>
                                          <a href="" class="">
                                              BAG
                                          </a>
                                      </li>
                                      <li>
                                          <a href="" class="">
                                              SHOES
                                          </a>
                                      </li>
                                      <li>
                                          <a href="" class="">
                                              ACC
                                          </a>
                                          <ul class="depth2">
                                              <li>
                                                  <a href="" class="">전체보기</a>
                                              </li>
                                              <li>
                                                  <a href="" class="">모자</a>
                                              </li>
                                              <li>
                                                  <a href="" class="">기타 액세서리</a>
                                              </li>
                                          </ul>
                                      </li>
                                  </ul>
                              </li>
                              <li>
                                  <a href="" class="">
                                      BAG
                                  </a>
                                  <ul class="depth1">
                                      <li>
                                          <a href="" class="">
                                              전체보기
                                          </a>
                                      </li>
                                      <li>
                                          <a href="" class="">
                                              백팩
                                          </a>
                                      </li>
                                      <li>
                                          <a href="" class="">
                                              힙색
                                          </a>
                                      </li>
                                      <li>
                                          <a href="" class="">
                                              크로스백
                                          </a>
                                      </li>
                                      <li>
                                          <a href="" class="">
                                              토트백
                                          </a>
                                      </li>
                                      <li>
                                          <a href="" class="">
                                              워터백
                                          </a>
                                      </li>
                                  </ul>
                              </li>
                              <li>
                                  <a href="" class="">
                                      SHOES
                                  </a>
                                  <ul class="depth1">
                                      <li>
                                          <a href="" class="">
                                              전체보기
                                          </a>
                                      </li>
                                      <li>
                                          <a href="" class="">
                                              스니커즈
                                          </a>
                                      </li>
                                      <li>
                                          <a href="" class="">
                                              슬리퍼 &amp; 샌들
                                          </a>
                                      </li>
                                      <li>
                                          <a href="" class="">
                                              SEASON ITEM
                                          </a>
                                      </li>
                                  </ul>
                              </li>
                              <li>
                                  <a href="" class="">
                                      ACC
                                  </a>
                                  <ul class="depth1">
                                      <li>
                                          <a href="" class="">
                                              전체보기
                                          </a>
                                      </li>
                                      <li>
                                          <a href="" class="">
                                              모자
                                          </a>
                                          <ul class="depth2">
                                              <li>
                                                  <a href="" class="">전체보기</a>
                                              </li>
                                              <li>
                                                  <a href="" class="">CAP</a>
                                              </li>
                                              <li>
                                                  <a href="" class="">HAT</a>
                                              </li>
                                              <li>
                                                  <a href="" class="">BEANIE</a>
                                              </li>
                                          </ul>
                                      </li>
                                      <li>
                                          <a href="" class="">
                                              기타 액세서리
                                          </a>
                                      </li>
                                  </ul>
                              </li>
                              <li>
                                  <a href="" class="">
                                      SUITCASES
                                  </a>
                                  <ul class="depth1">
                                      <li>
                                          <a href="" class="">
                                              캐리어
                                          </a>
                                      </li>
                                      <li>
                                          <a href="" class="">
                                              캐리어 세트
                                          </a>
                                      </li>
                                      <li>
                                          <a href="" class="">
                                              기내용
                                          </a>
                                      </li>
                                      <li>
                                          <a href="" class="">
                                              화물용
                                          </a>
                                      </li>
                                  </ul>
                              </li>
                              <li>
                                  <a href="" class="">
                                      CAMPING
                                  </a>
                                  <ul class="depth1">
                                      <li>
                                          <a href="" class="">
                                              텐트
                                          </a>
                                      </li>
                                      <li>
                                          <a href="" class="">
                                              테이블 &amp; 체어
                                          </a>
                                      </li>
                                      <li>
                                          <a href="" class="">
                                              매트
                                          </a>
                                      </li>
                                      <li>
                                          <a href="" class="">
                                              타프
                                          </a>
                                      </li>
                                      <li>
                                          <a href="" class="">
                                              캠핑 아이템
                                          </a>
                                      </li>
                                  </ul>
                              </li>
                              <li>
                                  <a href="" class="">
                                      BEAUTY&amp;CARE
                                  </a>
                              </li>
                          </ul>
                      </div>

                  </div>

              </div>



          </div>
          <!-- 사이드 바 -->
          <div id="container">
            <div class="contents">
              <div class="sub_content_category">
                <div id="sidebar">
                  <div>
                    <h2>OUTER</h2>
                  </div>
                  <div class="sub_menu_box tree_type" id="cssmenu1">
                    <ul class="sub_depth0 sub_menu0">
                      <li class="has-sub">
                        <a>EVENTS</a>
                      </li>
                      <li class="has-sub">
                        <a>NEW ARRIVALS</a>
                      </li>
                      <li class="has-sub">
                        <a>MEN</a>
                      </li>
                      <li class="has-sub">
                        <a>WOMEN</a>
                      </li>
                      <li class="has-sub">
                        <a>KIDS</a>
                      </li>
                      <li class="has-sub">
                        <a>BAG</a>
                      </li>
                      <li class="has-sub">
                        <a>SHOES</a>
                      </li>
                      <li class="has-sub">
                        <a>ACC</a>
                      </li>
                      <li class="has-sub">
                        <a>SUITCASES</a>
                      </li>
                      <li class="has-sub">
                        <a>CAMPING</a>
                      </li>
                      <li class="has-sub">
                        <a>BEAUTY & CARE</a>
                      </li>
                      <li class="has-sub">
                        <a>OUTLET</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div class="content">
                <div class="location_wrap">
                  <div class="location_cont">
                    <em><a class="local_home">HOME
                    </a></em>
                    <span>></span>
                    <div class="location_select">
                      <div class="location_tit">
                        <a><span>WOMEN</span></a>
                        
                      </div>
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            
          </div>
          
          
          
        </div>
    </body>
</html>


#======================================================== css part ==============================================================

/* 헤더부분 전반적 */
#header {
    position:relative; 
    background:#0b0b0d;
}

/* 상단 로고 설정 */

#header .h1_logo {
    padding:30px 0 30px 40px;
}
#header .h1_logo img {
    width:210px;
}

/* 검색창 틀 위치 */
#header .top_search {
    position: absolute;
    top: 25px;
    left: 35px;
    margin-left: 319px;
    background-color: #fff;
    z-index: 110;
}


/* 검색창 내부 레이아웃 색깔 : 하얀바탕 */
#header .top_search .top_search_cont {
    background: #fff;
}

/* 검색창 깜빡이 디자인 */
#header .top_search .top_text_cont .top_search_text {
    width: 100%;
    height: 38px;
    padding: 5px 45px 5px 15px;
    box-sizing: border-box;
    background: #fff;
    border-bottom: 2px solid #000;
    color: #000;
}

/* 검색창 내부 레이아웃 크기 */
#header .top_search .top_text_cont input {
    border: none 0;
    vertical-align: top;
    font-size: 20px;
    font-weight: 600;
}
/* 검색창 내부 레이아웃 위치 */
#header .top_search .top_text_cont .btn_top_search {
    position: absolute;
    top: 0px;
    right: 0px;
}

/* 여기부터는 상단 우측 메뉴 위 메뉴 */
.member_is {
    position: absolute !important;
    top: 41px;
    right: 40px;
    width: 600px;
    height: 29px;
}
.top_member_box {
    float: right;
    position: relative;
    margin: 0;
    line-height: 1;
    z-index: 150;
}
/* 상단 우측 메뉴 레이아웃 설정들 */
.top_member_box > li {
    float:left; 
    position:relative;
}
.top_member_box > li a {
    display:inline-block; 
    padding:4px 0 4px 15px; 
    color:#000; 
    font-size:12px;
}

.top_member_box > li .accent span, .top_member_box > li .accent strong {
    display:inline-block; 
    min-width:40px; 
    height:16px; 
    color:#ffffff; 
    font-size:11px; 
    letter-spacing:-1px; 
    line-height:16px;
	background:url("") no-repeat;
}
.top_member_box > li .accent {
    display:block; 
    overflow:hidden; 
    position:absolute; 
    left:50%; top:19px; 
    width:160px; 
    height:23px; 
    padding:6px 0 0 0;
    margin-left:-80px; 
    text-align:center; 
    z-index:40;
	background:url("") no-repeat -68px -44px;
}

/* 상단 전체의 색상 */
#header .header_search {
    background:#fff;        
    border-bottom:1px solid #404040;
}
#header .header_search_cont {
    min-height:90px;
}

/* 상단 메뉴바 높이 및 위치 설정 */
#header .gnb {
    position:relative;             /* 상대적 */
    height:50px;                   /* 메뉴바 높이 50px 제한 */
}

#header .gnb .gnb_all {
    display:inline-block; 
    vertical-align:top; 
    text-align:left;
}
#header .gnb_allmenu_wrap {
    display:inline-block;
}


/* gnb가 들어가는 박스 생성 후 설정 */
#header .gnb_menu_box {
    display:inline-block;       /* ? */
    vertical-align:top;         /* ? */
    width:100%;                 /* 100%만큼 공간생성 */
    margin-left:0px;            /* 왼쪽 여백 0px */
    margin-top:-21px;           /* 위의 여백 -21px */
}

/* depth0의 기본설정 */
#header .gnb .depth0 {
    font-size:0;                /*폰트 사이즈 없음*/
    vertical-align:top;         
    border:none; 
    overflow:hidden;            
    height:49px;                /* ? */
    float:right;                /* 우측에 붙도록 */
}

/* depth0 ul에 속한 li의 위치 설정 */
#header .gnb .depth0 > li {
    position:relative;          /* 포지션 상대값 */
    display:inline-block;       /* 내부 블럭 처리 */
    vertical-align:top;         /* ? */
    right:0;                    /* ? */
}

#header .gnb .depth0 > li > a {
    display:inline-block; 
    padding:0 30px; 
    min-width:70px; 
    font-size:12px; 
    font-weight:bold; 
    text-align:center; 
    line-height:50px; 
    color:#fff; 
    background:url('') left center no-repeat;
}
#header .gnb .depth0 > li:first-child > a {
    background:none;
}
#header .gnb .depth0 > li:hover > a {
    color:#ffdb00;
}

#header .gnb .depth0 > li:hover > ul {
    display: block;
}

/* depth1의 기본설정 */
#header .gnb .depth1 {              
    display:none;                    /* 처음엔 보이지않게 */
    position:absolute;               /* 포지션 절대값 */
    top:50px; left:0;                /* 위로부터 50px 밀기 */
    width:100%;                      /* 가로넓이 160px */
    background:rgba(0,0,0,.6);     /* 색: 블랙 투명도60% */
    z-index:100;                     /* 창이 가장 먼저보이게 z-index높게 설정(100정도면 제일 위에 보이겠지) */
}

/* depth1 ul에 속한 li의 위치 설정 */
#header .gnb .depth1 > li {
    position:relative;              /* 포지션 상대값 */
}

/* li 안의 a태그 설정 */
#header .gnb .depth1 > li > a {
    display: block;                 /* 블록으로 설정 */
    padding:5px 10px 7px 19px;      /* 패딩 설정 */
    font-size:12px;                 /* 글씨 크기 설정 */
    color:#e7e7e7;                /* 글씨 기본 색: 하양 */
}

/* li 안의 a태그 블럭에 마우스 올릴시 */
#header .gnb .depth1 > li > a:hover {
    background:#545454;           /* 블럭 배경 색깔 변경: 회색 */
    color:#ffffff;                /* 글씨 색깔 변경: 하양색(아주 약간 더 밝게) */
}

/* depth1의 ul 블럭으로 보이게 설정 */
#header .gnb .depth1 > li:hover > ul {
    display: block;
}

/* depth2의 기본설정 */
#header .gnb .depth2 {
    display:none;                   /* 처음엔 보이지않게 */
    position:absolute;              /* 포지션 절대값 */
    top:0; left:100%;               /* 100% 밀기 */
    width:160px;                    /* 가로넓이 160px */
    background:rgba(0,0,0,.6);    /* 색: 블랙 투명도60% */
    z-index:100;                    /* 창이 가장 먼저보이게 z-index높게 설정(100정도면 제일 위에 보이겠지) */
}

/* depth2 ul에 속한 li의 위치 설정 */
#header .gnb .depth2 > li {
    position: relative;             /* 포지션 상대값 */
}

/* li 안의 a태그 설정 */
#header .gnb .depth2 > li > a {
    display: block;                 /* 블록으로 설정 */
    padding:5px 10px 7px 19px;      /* 패딩 설정 */
    font-size:12px;                 /* 글씨 크기 설정 */
    color:#e7e7e7;                /* 글씨 기본 색: 하양 */
}

/* li 안의 a태그 블럭에 마우스 올릴시 */
#header .gnb .depth2 > li > a:hover {
    background:#545454;           /* 블럭 배경 색깔 변경: 회색 */
    color:#ffffff;                /* 글씨 색깔 변경: 하양색(아주 약간 더 밝게) */
}

/* depth3의 ul 블럭으로 보이게 설정 */
#header .gnb .depth2 > li:hover ul {  
    display: block;
}

/* depth3의 기본설정 */
#header .gnb .depth3 {              
    display:none;                   /* 처음엔 보이지않게 */
    position:absolute;              /* 포지션 절대값 */
    top:0; left:100%;               /* 100% 밀기 */
    width:160px;                    /* 가로넓이 160px */
    background:rgba(0,0,0,.6);    /* 색: 블랙 투명도60% */
}

/* depth3 ul에 속한 li의 위치 설정 */
#header .gnb .depth3 > li {
    position: relative;             /* 포지션 상대값 */
}

/* li 안의 a태그 설정 */
#header .gnb .depth3 > li > a {     
    display: block;                 /* 블록으로 설정 */
    padding:5px 10px 7px 19px;      /* 패딩 설정 */
    font-size:12px;                 /* 글씨 크기 설정 */
    color:#e7e7e7;                /* 글씨 기본 색: 하양 */
}

/* li 안의 a태그 블럭에 마우스 올릴시 */
#header .gnb .depth3 > li > a:hover {
    background:#545454;           /* 블럭 배경 색깔 변경: 회색 */
    color:#ffffff;                /* 글씨 색깔 변경: 하양색(아주 약간 더 밝게) */
}




/*                                    */

#wrap{
  position: relative;
  min-width: 1440px;
}

#container{
  margin-top: -1px;
  border-top: 1px solid #cccccc;
  
}

.contents{
  min-height: 400px;
  padding: 0 0 80px 0;
}

.sub_content_category{
  width: 100%;
  margin: 0 auto;
  padding: 45px 0 0 0;
}

#sidebar{
  background: #fff;
  float: left;
  width: 15%;
  height: 40px;
  border-bottom: 1px solid #000;
  margin: 0 0 20px 20px;
}

h2{
  display: block;
  font-size: 1.5em;
  margin-block-start: 0.83em;
  margin-block-end: 0.83em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
}

#cssmenu1{
  width: 100%;
  font-family: Raleway, sans-serif;
  color: #ffffff;
  margin-top: 20px;
  margin-bottom: 20px;
  padding-bottom: 10px;
  border-bottom: 1px solid #dedede;
}

#cssmenu1, #cssmenu1 ul, #cssmenu1 ul li, #cssmenu1 ul li a {
  margin: 0;
  padding: 0;
  border: 0;
  list-style: none;
  line-height: 1;
  display: block;
  position: relative;
  box-sizing: border-box;
}

.sub_menu_box.tree_type ul{
  border: none 0;
}

.sub_menu_box .sub_depth0 {
  padding: 0;
  font-size: 0;
  vertical-align: top;
  border: none;
}

#cssmenu1 ul > li.has-sub > a:before {
  position: absolute;
  right: 22px;
  top: 23px;
  display: block;
  width: 10px;
  height: 2px;
  background: #000;
  content: "";
  transition: all 0.1s ease-out;
}

#cssmenu1 ul > li.has-sub > a:after {
  position: absolute;
  right: 26px;
  top: 19px;
  z-index: 5;
  display: block;
  height: 10px;
  width: 2px;
  background: #000;
  content: "";
  transition: all 0.1s ease-out;
}

#cssmenu1 > ul > li > a {
  padding: 12px 0 10px 10px;
  cursor: pointer;
  z-index: 2;
  font-size: 15px;
  font-weight: bold;
  text-decoration: none;
  color: #000;
  background: #fff;
  transition: color .2s ease;
}

.sub_menu_box .sub_depth0 > li > a {
  display: block;
  padding: 0 10px 10px 20px;
  font-size: 14px;
  font-weight: bold;
  text-align: left;
}



.sub_content_category .content{
  width: 80%;
  min-height: 500px;
  padding: 0 0 0 15px;
  float: left;
}

.sub_content_category .location_wrap{
  margin: -25px 0 15px 0;
  border-bottom: none 0;
}

.location_wrap{
  position: relative;
  width: 100%;
  border-bottom: 1px solid #cdcdcd;
  background: #f9f9f9;
}

.location_wrap .location_cont{
  width: 98%;
  margin: 0 0 0 12px;
}


.location_cont em{
  display: block;
  float: left;
  padding: 12px 0 10px 0;
  color: #777777;
  font-size: 11px;
}

address, caption, cite, code, dfn, em, var{
  font-style: normal;
  font-weight: normal;
}

.location_cont .local_home{
  color: #777777;
}

.location_select{
  display: inline-block;
  position: relative;
  min-width: 150px;
  margin: 7px 0 0 0;
  border: 1px solid #999999;
  z-index: 50;
}

.location_select .location_tit{
  background: url(	https://www.naturestore.co.kr/data/skin/front/the_living/img/etc/select_arrow_down_11x7.png) no-repeat right center;
}

.location_select .location_tit a {
  display: block;
  padding: 3px 32px 3px 9px;
  font-size: 11px;
}
