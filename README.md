# FastCampus π iPad Demo


[Apple Demo Site](https://apple-ipad-one.vercel.app/)  
FastCampus κ°μλ₯Ό λ€μΌλ©° λ§λ  μ¬μ΄νΈμλλ€.  
![Result Image example](https://raw.githubusercontent.com/KimSeoYeon23/apple-ipad/main/__assets/λ°μνμμ.png)
<br/>
<br/>

# π κ°λ° κΈ°κ°
- 2022 . 12 . 30 ~ 2022 . 02 . 07
<br/>
<br/>

***

## π Skill
<img alt="HTML" src="https://img.shields.io/badge/HTML-E34F26.svg?style=for-the-badge&logo=HTML5&logoColor=white"/> <img alt="CSS3" src="https://img.shields.io/badge/CSS3-1572B6.svg?style=for-the-badge&logo=CSS3&logoColor=white"/> <img alt="Javascript" src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=white"/>


## μ€ν κ·Έλν(The Open Graph protocol)

μΉνμ΄μ§κ° μμ λ―Έλμ΄(νμ΄μ€λΆ λ±)λ‘ κ³΅μ λ  λ μ°μ μ μΌλ‘ νμ©λλ μ λ³΄λ₯Ό μ§μ ν©λλ€.

Slack -

![Slack Open Graph example](https://raw.githubusercontent.com/KimSeoYeon23/apple-ipad/main/__assets/slackApple.png)

KakaoTalk -

![KakaoTalk Open Graph example](https://raw.githubusercontent.com/KimSeoYeon23/apple-ipad/main/__assets/kakaotalkApple.png)

[λ λ§μ μ€ν κ·Έλν μμ± λ³΄κΈ°](https://ogp.me/)

```html
<meta property="og:type" content="website" />
<meta property="og:site_name" content="Apple (KR)" />
<meta property="og:title" content="iPad 10.2" />
<meta property="og:description" content="κ°λ ₯ν A13 Bionic μΉ©μ νμ¬ν iPad. μΌν° μ€νμ΄μ§ κΈ°μ μ΄ μ μ©λ 12MP μΈνΈλΌ μμ΄λ μ λ©΄ μΉ΄λ©λΌ, True Tone λμ€νλ μ΄ κΈ°μ  λ° 64GB μ μ₯ μ©λκΉμ§ κ°μ·μ΅λλ€." />
<meta property="og:image" content="./images/ipad-seo.png" />
<meta property="og:url" content="https://apple.com/kr/ipad-10.2" />
```

- `og:type`: νμ΄μ§μ μ ν(E.g, `website`, `video.movie`)
- `og:site_name`: μν μ¬μ΄νΈμ μ΄λ¦
- `og:title`: νμ΄μ§μ μ΄λ¦(μ λͺ©)
- `og:description`: νμ΄μ§μ κ°λ¨ν μ€λͺ
- `og:image`: νμ΄μ§μ λν μ΄λ―Έμ§ μ£Όμ(URL)
- `og:url`: νμ΄μ§ μ£Όμ(URL)
<br/>
<br/>

## νΈμν° μΉ΄λ(Twitter Cards)

μΉνμ΄μ§κ° μμ λ―Έλμ΄(νΈμν°)λ‘ κ³΅μ λ  λ μ°μ μ μΌλ‘ νμ©λλ μ λ³΄λ₯Ό μ§μ ν©λλ€.

[λ λ§μ νΈμν° μΉ΄λ λ³΄κΈ°](https://developer.twitter.com/en/docs/twitter-for-websites/cards/guides/getting-started)

```html
<meta property="twitter:card" content="summary" />
<meta property="twitter:site" content="Apple (KR)" />
<meta property="twitter:title" content="iPad 10.2" />
<meta property="twitter:description" content="κ°λ ₯ν A13 Bionic μΉ©μ νμ¬ν iPad. μΌν° μ€νμ΄μ§ κΈ°μ μ΄ μ μ©λ 12MP μΈνΈλΌ μμ΄λ μ λ©΄ μΉ΄λ©λΌ, True Tone λμ€νλ μ΄ κΈ°μ  λ° 64GB μ μ₯ μ©λκΉμ§ κ°μ·μ΅λλ€." />
<meta property="twitter:image" content="./images/ipad-seo.png" />
<meta property="twitter:url" content="https://apple.com/kr/ipad-10.2" />
```

- `twitter:card`: νμ΄μ§(μΉ΄λ)μ μ ν(E.g. `summary`, `player`)
- `twitter:site`: μν μ¬μ΄νΈμ μ΄λ¦
- `twitter:title`: νμ΄μ§μ μ΄λ¦(μ λͺ©)
- `twitter:description`: νμ΄μ§μ κ°λ¨ν μ€λͺ
- `twitter:image`: νμ΄μ§μ λν μ΄λ―Έμ§ μ£Όμ(URL)
- `twitter:url`: νμ΄μ§ μ£Όμ(URL)
<br/>
<br/>

## Reset.css

κ° λΈλΌμ°μ μ κΈ°λ³Έ μ€νμΌμ μ΄κΈ°νν©λλ€.

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/reset-css@5.0.1/reset.min.css" />
```
<br/>
<br/>

## CSS λ³μ

`--`λ‘ μμνλ λ³μλ₯Ό μ μΈν΄ κ°μ ν λΉν  μ μμ΅λλ€.  
λ³μκ° μ μΈλ μ νμ μμλ₯Ό ν¬ν¨ν΄ νμ μμμμ `var()` ν¨μλ₯Ό ν΅ν΄ μ¬μ©ν  μ μμ΅λλ€.

> :root μ νμλ μΉ λ¬Έμ κ΅¬μ‘°μμ νΉμ  μμΉμ μλ μμλ₯Ό μ ννλ κ°μ ν΄λμ€μ΄λ€.
> </br>
> μΉ λ¬Έμ κ΅¬μ‘°μμ κ°μ₯ μμ μμλ₯Ό μ νν  λ μ¬μ©νλ€.

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

μ¬λ¬ μ΄λ―Έμ§λ₯Ό ν μ΄λ―Έμ§λ‘ ν©μ³ κ΄λ¦¬νλ λ°©μμ **μ΄λ―Έμ§ μ€νλΌμ΄νΈ κΈ°λ²** μ΄λΌκ³  ν©λλ€.

<img src="./images/sprite_apps.png" alt="μ΄λ―Έμ§ μ€νλΌμ΄νΈ" width="300" />

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

[IntersectionObserver(μμμ κ°μμ± κ΄μ°°)](https://heropy.blog/2019/10/27/intersection-observer/)  
λΈλΌμ°μ  λ·°ν¬νΈ(Viewport)μ μ€μ ν μμ(Element)μ κ΅μ°¨μ μ κ΄μ°°νμ¬, μμκ° λ³΄μ΄λμ§ λ³΄μ΄μ§ μλμ§ κ΅¬λ³νλ κΈ°λ₯.

```js
// μμμ κ°μμ± κ΄μ°° λ‘μ§!
const io = new IntersectionObserver(entries => {
  // entriesλ `io.observe(el)`λ‘ λ±λ‘λ λͺ¨λ  κ΄μ°° λμ λ°°μ΄.
  entries.forEach(entry => {
     // μ¬λΌμ§ λ.
    if (!entry.isIntersecting) {
      return
    }
    entry.target.classList.add('show')
  })
})
// κ΄μ°°ν  μμλ€ κ²μ
const infoEls = document.querySelectorAll('.info')
// κ΄μ°° μμ!
infoEls.forEach(el => io.observe(el))
```

<br/>
<br/>

## iPad μ’λ₯
js νμΌλ‘ λ°λ‘ λ§λ€μ΄μ λ°λ³΅λ¬Έμ μ¬μ©νμ¬ HTMLμ λ°ννμ΅λλ€.

### ipads.js
```js
export default [
  {
    thumbnail: './images/compare_ipad_pro.png',
    colors: ['#68696D', '#E2E3E5'],
    name: 'iPad Pro',
    tagline: 'κΆκ·Ήμ iPadλ<br />μ΄λ° κ².',
    price: 999000,
    url: '/ipad-pro/'
  },
  {
    thumbnail: './images/compare_ipad_air.png',
    colors: ['#68696D', '#E2E3E5', '#E8D2CE', '#B9B8D1', '#88AEBF'],
    name: 'iPad Air',
    tagline: 'κ°λ ₯νλ€. λ€μ±λ‘­λ€.<br />κ²½μ΄λ‘­λ€.',
    price: 779000,
    url: '/ipad-air/'
  },
  {
    thumbnail: './images/compare_ipad_10_2.png',
    colors: ['#68696D', '#E2E3E5'],
    name: 'iPad',
    tagline: 'λ§μ‘±μ€λ¬μ΄ μ±λ₯.<br />κΈ°λΆ μ’μ κ°κ²©.',
    price: 449000,
    url: '/ipad-10.2/'
  },
  {
    thumbnail: './images/compare_ipad_mini.png',
    colors: ['#68696D', '#E2E3E5', '#E8D2CE', '#B9B8D1'],
    name: 'iPad Pro',
    tagline: 'λ©κ°κΈ μ±λ₯.<br />ν¬κΈ°λ§ λ―Έλ.',
    price: 649000,
    url: '/ipad-mini/'
  }
]
```

### ipads.js λ°ν
```js
// 'λΉμ μκ² λ§λ iPadλ' λ λλ§
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
        <p class="price">οΏ¦${ipad.price.toLocaleString('en-US')}λΆν°</p>
        <button class="btn">κ΅¬μνκΈ°</button>
        <a href="${ipad.url}" class="link">λ μμλ³΄κΈ°</a>
    `
    itemsEl.append(itemEl);
});
```
κ²°κ³Ό νμ΄μ§ -
  
![iPad Image example](https://raw.githubusercontent.com/KimSeoYeon23/apple-ipad/main/__assets/ipadsResult.png)
<br/>
<br/>

## Footer λ©λ΄
js νμΌλ‘ λ°λ‘ λ§λ€μ΄μ λ°λ³΅λ¬Έμ μ¬μ©νμ¬ HTMLμ λ°ννμ΅λλ€.

### navigations.js
```js
export default [
  {
    title: 'μΌν λ° μμλ³΄κΈ°',
    maps: [
      { name: 'μ€ν μ΄', url: '/shop/goto/store' },
      { name: 'Mac', url: '/mac' },
      { name: 'iPad', url: '/ipad' },
      { name: 'iPhone', url: '/iphone' },
      { name: 'Watch', url: '/watch' },
      { name: 'AirPods', url: '/airpods' },
      { name: 'TV λ° ν', url: '/tv-home' },
      { name: 'AirTag', url: '/airtag' },
      { name: 'μ‘μΈμλ¦¬', url: '/shop/goto/buy_accessories' }
    ]
  },
  {
    title: 'μλΉμ€',
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
    title: 'κ³μ ',
    maps: [
      { name: 'Apple ID κ΄λ¦¬', url: 'https://appleid.apple.com' },
      { name: 'Apple Store κ³μ ', url: '/shop/goto/account' },
      { name: 'iCloud.com', url: 'https://www.icloud.com' }
    ]
  },
  {
    title: 'Apple Store',
    maps: [
      { name: 'λ§€μ₯ μ°ΎκΈ°', url: '/retail' },
      { name: 'Genius Bar', url: '/retail/geniusbar' },
      { name: 'Today at Apple', url: '/today' },
      { name: 'Apple μΊ ν', url: '/today/camp' },
      { name: 'Apple Store μ±', url: 'https://apps.apple.com/app/apple-store/id375380948' },
      { name: 'λ¦¬νΌ λ° νΉκ° μ ν', url: '/shop/goto/special_deals' },
      { name: 'κΈμ΅ νν', url: '/shop/goto/financing' },
      { name: 'Apple Trade In', url: '/trade-in' },
      { name: 'μ£Όλ¬Έ μν', url: '/shop/goto/order/list' },
      { name: 'μΌν λμλ§', url: '/shop/goto/help' }
    ]
  },
  {
    title: 'λΉμ¦λμ€',
    maps: [
      { name: 'Appleκ³Ό λΉμ¦λμ€', url: '/business' },
      { name: 'λΉμ¦λμ€λ₯Ό μν μ ν μΌννκΈ°', url: '/retail/business' }
    ]
  },
  {
    title: 'κ΅μ‘',
    maps: [
      { name: 'Appleκ³Ό κ΅μ‘', url: '/education' },
      { name: 'μ΄μ€κ³ μ© μ ν μΌννκΈ°', url: '/education/k12/how-to-buy' },
      { name: 'λν μνμ μν μ ν μΌννκΈ°', url: '/shop/goto/educationrouting' }
    ]
  },
  {
    title: 'Appleμ κ°μΉκ΄',
    maps: [
      { name: 'μμ¬μ΄ μ¬μ©', url: '/accessibility' },
      { name: 'νκ²½', url: '/environment' },
      { name: 'κ°μΈμ λ³΄ λ³΄νΈ', url: '/privacy' },
      { name: 'νλ ₯μμ²΄μ λν μ±μ', url: '/supplier-responsibility' }
    ]
  },
  {
    title: 'Apple μ λ³΄',
    maps: [
      { name: 'Newsroom', url: '/newsroom' },
      { name: 'Apple λ¦¬λμ­', url: '/leadership' },
      { name: 'μ±μ© μλ΄', url: '/careers' },
      { name: 'μ€λ¦¬ λ° κ·μ  μ€μ', url: '/compliance' },
      { name: 'μ΄λ²€νΈ', url: '/apple-events' },
      { name: 'μΌμλ¦¬ μ°½μΆ', url: '/job-creation' },
      { name: 'Apple μ°λ½μ²', url: '/contact' }
    ]
  }
]
```

### navigations.js λ°ν
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
κ²°κ³Ό νμ΄μ§ -
  
![Footer menu example](https://raw.githubusercontent.com/KimSeoYeon23/apple-ipad/main/__assets/navigationsResult.png)
<br/>
<br/>
