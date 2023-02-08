# FastCampus 🍏 iPad Demo


[Apple Demo Site](https://apple-ipad-one.vercel.app/)  
FastCampus 강의를 들으며 만든 사이트입니다.  
![Slack Open Graph example](https://raw.githubusercontent.com/KimSeoYeon23/apple-ipad/main/__assets/반응형작업.png)
<br/>
<br/>

# 📅 개발 기간
- 2022 . 12 . 30 ~ 2022 . 02 . 07
<br/>
<br/>

***

## 📌 Skill
<img alt="HTML" src="https://img.shields.io/badge/HTML-E34F26.svg?style=for-the-badge&logo=HTML5&logoColor=white"/> <img alt="CSS3" src="https://img.shields.io/badge/CSS3-1572B6.svg?style=for-the-badge&logo=CSS3&logoColor=white"/> <img alt="Javascript" src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=white"/>


## 오픈 그래프(The Open Graph protocol)

웹페이지가 소셜 미디어(페이스북 등)로 공유될 때 우선적으로 활용되는 정보를 지정합니다.

Slack -

![Slack Open Graph example](https://raw.githubusercontent.com/KimSeoYeon23/apple-ipad/main/__assets/slackApple.png)

KakaoTalk -

![KakaoTalk Open Graph example](https://raw.githubusercontent.com/KimSeoYeon23/apple-ipad/main/__assets/kakaotalkApple.png)

[더 많은 오픈 그래프 속성 보기](https://ogp.me/)

```html
<meta property="og:type" content="website" />
<meta property="og:site_name" content="Apple (KR)" />
<meta property="og:title" content="iPad 10.2" />
<meta property="og:description" content="강력한 A13 Bionic 칩을 탑재한 iPad. 센터 스테이지 기술이 적용된 12MP 울트라 와이드 전면 카메라, True Tone 디스플레이 기술 및 64GB 저장 용량까지 갖췄습니다." />
<meta property="og:image" content="./images/ipad-seo.png" />
<meta property="og:url" content="https://apple.com/kr/ipad-10.2" />
```

- `og:type`: 페이지의 유형(E.g, `website`, `video.movie`)
- `og:site_name`: 속한 사이트의 이름
- `og:title`: 페이지의 이름(제목)
- `og:description`: 페이지의 간단한 설명
- `og:image`: 페이지의 대표 이미지 주소(URL)
- `og:url`: 페이지 주소(URL)
<br/>
<br/>

## 트위터 카드(Twitter Cards)

웹페이지가 소셜 미디어(트위터)로 공유될 때 우선적으로 활용되는 정보를 지정합니다.

[더 많은 트위터 카드 보기](https://developer.twitter.com/en/docs/twitter-for-websites/cards/guides/getting-started)

```html
<meta property="twitter:card" content="summary" />
<meta property="twitter:site" content="Apple (KR)" />
<meta property="twitter:title" content="iPad 10.2" />
<meta property="twitter:description" content="강력한 A13 Bionic 칩을 탑재한 iPad. 센터 스테이지 기술이 적용된 12MP 울트라 와이드 전면 카메라, True Tone 디스플레이 기술 및 64GB 저장 용량까지 갖췄습니다." />
<meta property="twitter:image" content="./images/ipad-seo.png" />
<meta property="twitter:url" content="https://apple.com/kr/ipad-10.2" />
```

- `twitter:card`: 페이지(카드)의 유형(E.g. `summary`, `player`)
- `twitter:site`: 속한 사이트의 이름
- `twitter:title`: 페이지의 이름(제목)
- `twitter:description`: 페이지의 간단한 설명
- `twitter:image`: 페이지의 대표 이미지 주소(URL)
- `twitter:url`: 페이지 주소(URL)
<br/>
<br/>

## Reset.css

각 브라우저의 기본 스타일을 초기화합니다.

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/reset-css@5.0.1/reset.min.css" />
```
<br/>
<br/>

## CSS 변수

`--`로 시작하는 변수를 선언해 값을 할당할 수 있습니다.  
변수가 선언된 선택자 요소를 포함해 하위 요소에서 `var()` 함수를 통해 사용할 수 있습니다.

> :root 선택자는 웹 문서 구조에서 특정 위치에 있는 요소를 선택하는 가상 클래스이다.
> </br>
> 웹 문서 구조에서 가장 상위 요소를 선택할 때 사용한다.

```css
:root {
    --border-color: #d2d2d2;
    --text-white-color: #f5f5f5;
    --white-color: #fff;
    --text-color: #1d1d1d;
    --header-color: #3a3a3a;
    --dark-gray: #6e6e6e;
    --middle-gray: #b7b7b7;
    --link-color: #0071e3;
    --link-focus-color: #81b9f1;
    --shadow-color: rgba(0, 0, 0, .4);
}
.example {
  background-color: var(--header-color);
}
```
### Icons

```css
.info .icon.icon--chip         { background-image: url("../images/sprite_chip.png"); }
.info .icon.icon--faster       { background-image: url("../images/sprite_faster.png"); }
.info .icon.icon--neural       { background-image: url("../images/sprite_neural.png"); }
.info .icon.icon--apps         { background-image: url("../images/sprite_apps.png"); }
.info .icon.icon--battery      { background-image: url("../images/sprite_battery.png"); }
.info .icon.icon--display      { background-image: url("../images/sprite_display.png"); }
.info .icon.icon--true-tone    { background-image: url("../images/sprite_true_tone.png"); }
.info .icon.icon--center-stage { background-image: url("../images/sprite_center_stage.png"); }
.info .icon.icon--front-camera { background-image: url("../images/sprite_front_camera.png"); }
.info .icon.icon--back-camera  { background-image: url("../images/sprite_back_camera.png"); }
.info .icon.icon--scan         { background-image: url("../images/sprite_scan.png"); }
.info .icon.icon--download     { background-image: url("../images/sprite_download.png"); }
.info .icon.icon--wifi         { background-image: url("../images/sprite_wifi.png"); }
.info .icon.icon--lte          { background-image: url("../images/sprite_lte.png"); }
.info .icon.icon--pencil       { background-image: url("../images/sprite_pencil.png"); }
.info .icon.icon--keyboard     { background-image: url("../images/sprite_keyboard.png"); }
.info .icon.icon--notes        { background-image: url("../images/sprite_notes.png"); }
.info .icon.icon--covers       { background-image: url("../images/sprite_covers.png"); }
```
<br/>
<br/>

## Sprite Icon Animation

여러 이미지를 한 이미지로 합쳐 관리하는 방식을 **이미지 스프라이트 기법** 이라고 합니다.

<img src="./images/sprite_apps.png" alt="이미지 스프라이트" width="300" />

```css
@keyframes sprite-icon {
  /* 1~10 */
  0.00% { background-position: 0 0; }
  1.67% { background-position: -100px 0; }
  3.33% { background-position: -200px 0; }
  5.00% { background-position: -300px 0; }
  6.67% { background-position: -400px 0; }
  8.33% { background-position: -500px 0; }
  10.00% { background-position: 0 -100px; }
  11.67% { background-position: -100px -100px; }
  13.33% { background-position: -200px -100px; }
  15.00% { background-position: -300px -100px; }
  /* 11~20 */
  16.67% { background-position: -400px -100px; }
  18.33% { background-position: -500px -100px; }
  20.00% { background-position: 0 -200px; }
  21.67% { background-position: -100px -200px; }
  23.33% { background-position: -200px -200px; }
  25.00% { background-position: -300px -200px; }
  26.67% { background-position: -400px -200px; }
  28.33% { background-position: -500px -200px; }
  30.00% { background-position: 0 -300px; }
  31.67% { background-position: -100px -300px; }
  /* 21~30 */
  33.33% { background-position: -200px -300px; }
  35.00% { background-position: -300px -300px; }
  36.67% { background-position: -400px -300px; }
  38.33% { background-position: -500px -300px; }
  40.00% { background-position: 0 -400px; }
  41.67% { background-position: -100px -400px; }
  43.33% { background-position: -200px -400px; }
  45.00% { background-position: -300px -400px; }
  46.67% { background-position: -400px -400px; }
  48.33% { background-position: -500px -400px; }
  /* 31~40 */
  50.00% { background-position: 0 -500px; }
  51.67% { background-position: -100px -500px; }
  53.33% { background-position: -200px -500px; }
  55.00% { background-position: -300px -500px; }
  56.67% { background-position: -400px -500px; }
  58.33% { background-position: -500px -500px; }
  60.00% { background-position: 0 -600px; }
  61.67% { background-position: -100px -600px; }
  63.33% { background-position: -200px -600px; }
  65.00% { background-position: -300px -600px; }
  /* 41~50 */
  66.67% { background-position: -400px -600px; }
  68.33% { background-position: -500px -600px; }
  70.00% { background-position: 0 -700px; }
  71.67% { background-position: -100px -700px; }
  73.33% { background-position: -200px -700px; }
  75.00% { background-position: -300px -700px; }
  76.67% { background-position: -400px -700px; }
  78.33% { background-position: -500px -700px; }
  80.00% { background-position: 0 -800px; }
  81.67% { background-position: -100px -800px; }
  /* 51~60 */
  83.33% { background-position: -200px -800px; }
  85.00% { background-position: -300px -800px; }
  86.67% { background-position: -400px -800px; }
  88.33% { background-position: -500px -800px; }
  90.00% { background-position: 0 -900px; }
  91.67% { background-position: -100px -900px; }
  93.33% { background-position: -200px -900px; }
  95.00% { background-position: -300px -900px; }
  96.67% { background-position: -400px -900px; }
  98.33% { background-position: -500px -900px; }
}
```
<br/>
<br/>

## IntersectionObserver

[IntersectionObserver(요소의 가시성 관찰)](https://heropy.blog/2019/10/27/intersection-observer/)  
브라우저 뷰포트(Viewport)와 설정한 요소(Element)의 교차점을 관찰하여, 요소가 보이는지 보이지 않는지 구별하는 기능.

```js
// 요소의 가시성 관찰 로직!
const io = new IntersectionObserver(entries => {
  // entries는 `io.observe(el)`로 등록된 모든 관찰 대상 배열.
  entries.forEach(entry => {
     // 사라질 때.
    if (!entry.isIntersecting) {
      return
    }
    entry.target.classList.add('show')
  })
})
// 관찰할 요소들 검색
const infoEls = document.querySelectorAll('.info')
// 관찰 시작!
infoEls.forEach(el => io.observe(el))
```

<br/>
<br/>

## iPad 종류
js 파일로 따로 만들어서 반복문을 사용하여 HTML에 반환했습니다.

### ipads.js
```js
export default [
  {
    thumbnail: './images/compare_ipad_pro.png',
    colors: ['#68696D', '#E2E3E5'],
    name: 'iPad Pro',
    tagline: '궁극의 iPad란<br />이런 것.',
    price: 999000,
    url: '/ipad-pro/'
  },
  {
    thumbnail: './images/compare_ipad_air.png',
    colors: ['#68696D', '#E2E3E5', '#E8D2CE', '#B9B8D1', '#88AEBF'],
    name: 'iPad Air',
    tagline: '강력하다. 다채롭다.<br />경이롭다.',
    price: 779000,
    url: '/ipad-air/'
  },
  {
    thumbnail: './images/compare_ipad_10_2.png',
    colors: ['#68696D', '#E2E3E5'],
    name: 'iPad',
    tagline: '만족스러운 성능.<br />기분 좋은 가격.',
    price: 449000,
    url: '/ipad-10.2/'
  },
  {
    thumbnail: './images/compare_ipad_mini.png',
    colors: ['#68696D', '#E2E3E5', '#E8D2CE', '#B9B8D1'],
    name: 'iPad Pro',
    tagline: '메가급 성능.<br />크기만 미니.',
    price: 649000,
    url: '/ipad-mini/'
  }
]
```

### ipads.js 반환
```js
// '당신에게 맞는 iPad는' 렌더링
const itemsEl = document.querySelector('section.compare .items');
ipads.forEach((ipad) => {
    const itemEl = document.createElement('div');
    let colorList = '';
    ipad.colors.forEach((color) => {
        colorList += `<li style="background-color: ${color};"></li>`
    });

    itemEl.classList.add('item');
    itemEl.innerHTML = /* html */`
        <div class="thumbnail">
            <img src="${ipad.thumbnail}" alt="${ipad.name}" />
        </div>
        <ul class="colors">
            ${colorList}
        </ul>
        <h3 class="name">${ipad.name}</h3>
        <p class="tagline">${ipad.tagline}</p>
        <p class="price">￦${ipad.price.toLocaleString('en-US')}부터</p>
        <button class="btn">구입하기</button>
        <a href="${ipad.url}" class="link">더 알아보기</a>
    `
    itemsEl.append(itemEl);
});
```
결과 페이지 -
  
![Slack Open Graph example](https://raw.githubusercontent.com/KimSeoYeon23/apple-ipad/main/__assets/ipadsResult.png)
<br/>
<br/>

## Footer 메뉴
js 파일로 따로 만들어서 반복문을 사용하여 HTML에 반환했습니다.

### navigations.js
```js
export default [
  {
    title: '쇼핑 및 알아보기',
    maps: [
      { name: '스토어', url: '/shop/goto/store' },
      { name: 'Mac', url: '/mac' },
      { name: 'iPad', url: '/ipad' },
      { name: 'iPhone', url: '/iphone' },
      { name: 'Watch', url: '/watch' },
      { name: 'AirPods', url: '/airpods' },
      { name: 'TV 및 홈', url: '/tv-home' },
      { name: 'AirTag', url: '/airtag' },
      { name: '액세서리', url: '/shop/goto/buy_accessories' }
    ]
  },
  {
    title: '서비스',
    maps: [
      { name: 'Apple Music', url: '/apple-music' },
      { name: 'Apple TV+', url: '/apple-tv-plus' },
      { name: 'Apple Arcade', url: '/apple-arcade' },
      { name: 'iCloud', url: '/icloud' },
      { name: 'Apple Books', url: '/apple-books' },
      { name: 'Apple Podcast', url: '/apple-podcasts' },
      { name: 'App Store', url: '/app-store' }
    ]
  },
  {
    title: '계정',
    maps: [
      { name: 'Apple ID 관리', url: 'https://appleid.apple.com' },
      { name: 'Apple Store 계정', url: '/shop/goto/account' },
      { name: 'iCloud.com', url: 'https://www.icloud.com' }
    ]
  },
  {
    title: 'Apple Store',
    maps: [
      { name: '매장 찾기', url: '/retail' },
      { name: 'Genius Bar', url: '/retail/geniusbar' },
      { name: 'Today at Apple', url: '/today' },
      { name: 'Apple 캠프', url: '/today/camp' },
      { name: 'Apple Store 앱', url: 'https://apps.apple.com/app/apple-store/id375380948' },
      { name: '리퍼 및 특가 제품', url: '/shop/goto/special_deals' },
      { name: '금융 혜택', url: '/shop/goto/financing' },
      { name: 'Apple Trade In', url: '/trade-in' },
      { name: '주문 상태', url: '/shop/goto/order/list' },
      { name: '쇼핑 도움말', url: '/shop/goto/help' }
    ]
  },
  {
    title: '비즈니스',
    maps: [
      { name: 'Apple과 비즈니스', url: '/business' },
      { name: '비즈니스를 위한 제품 쇼핑하기', url: '/retail/business' }
    ]
  },
  {
    title: '교육',
    maps: [
      { name: 'Apple과 교육', url: '/education' },
      { name: '초중고용 제품 쇼핑하기', url: '/education/k12/how-to-buy' },
      { name: '대학 생활을 위한 제품 쇼핑하기', url: '/shop/goto/educationrouting' }
    ]
  },
  {
    title: 'Apple의 가치관',
    maps: [
      { name: '손쉬운 사용', url: '/accessibility' },
      { name: '환경', url: '/environment' },
      { name: '개인정보 보호', url: '/privacy' },
      { name: '협력업체에 대한 책임', url: '/supplier-responsibility' }
    ]
  },
  {
    title: 'Apple 정보',
    maps: [
      { name: 'Newsroom', url: '/newsroom' },
      { name: 'Apple 리더십', url: '/leadership' },
      { name: '채용 안내', url: '/careers' },
      { name: '윤리 및 규정 준수', url: '/compliance' },
      { name: '이벤트', url: '/apple-events' },
      { name: '일자리 창출', url: '/job-creation' },
      { name: 'Apple 연락처', url: '/contact' }
    ]
  }
]
```

### navigations.js 반환
```js
const navigationsEl = document.querySelector('footer .navigations');
navigations.forEach((nav) => {
    const mapEl = document.createElement('div');
    let mapList = '';
    
    mapEl.classList.add('map');

    nav.maps.forEach((map) => {
        mapList += /* html */`
            <li>
                <a href="${map.url}">${map.name}</a>
            </li>
        `
    });    
    mapEl.innerHTML = /* html */`
        <h3>
            <span class="text">${nav.title}</span>
            <span class="icon">+</span>
        </h3>
        <ul>
            ${mapList}
        </ul>
    `;

    navigationsEl.append(mapEl);
});
```
결과 페이지 -
  
![Slack Open Graph example](https://raw.githubusercontent.com/KimSeoYeon23/apple-ipad/main/__assets/navigationsResult.png)
<br/>
<br/>
