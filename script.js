// Data
const menu = [
  {name:"Japanese Cheesecake",kr:"재패니즈 치즈케이크",price:"₹280",desc:"Soft, jiggly cheesecake topped with a scoop of vanilla ice cream.",img:"assets/menu-cheesecake.jpg",tag:"POPULAR"},
  {name:"Tiramisu",kr:"티라미수",price:"₹320",desc:"Tall layers of mascarpone cream and coffee-soaked sponge, dusted in cocoa.",img:"assets/menu-tiramisu.jpg",tag:"POPULAR"},
  {name:"Korean Fried Chicken with Kimchi",kr:"양념 치킨",price:"₹420",desc:"Crispy double-fried chicken glazed in sweet-spicy gochujang, served with house kimchi.",img:"assets/menu-friedchicken.jpg",tag:"MUST TRY"},
  {name:"Fried Ramen Corn Dog",kr:"라면 핫도그",price:"₹260",desc:"Mozzarella-stuffed corn dog wrapped in crispy ramen, ketchup & mustard zigzag.",img:"assets/menu-corndog.jpg",tag:"POPULAR"},
  {name:"Butterbeer",kr:"버터비어",price:"₹220",desc:"Golden cream-soda style butterbeer with a thick foam cap. Wizarding optional.",img:"assets/menu-butterbeer.jpg",tag:"FAN FAV"},
  {name:"Flavored Soju",kr:"맛 소주",price:"₹340",desc:"Real-tasting non-alcoholic soju in seasonal flavors. Honestly, you won't believe it.",img:"assets/menu-soju.jpg",tag:"0% ABV"},
];

const ticker = ["오늘의 메뉴","MANGA · MANHWA · MUSIC","JAPANESE CHEESECAKE","OPEN TIL 10PM","치즈 떡볶이 ♥","READ · SIP · STAY","BUTTERBEER 시간","BARRACKPORE · KOLKATA"];

const reviews = [
  {name:"Payel Roy",meta:"1 review · 3 photos",when:"4 weeks ago",rating:5,text:"There are lots of cats in the cafe, adding a cute and comforting vibe. The must-try dishes are the mala oil dumplings and jajangmyeon. They also serve non-alcoholic soju that honestly tastes so real you wouldn't believe it's non-alcoholic."},
  {name:"Sarnali Das",meta:"4 reviews · 12 photos",when:"4 months ago",rating:5,text:"That quite cozy ambience, cats, books, and warm lighting with mouthwatering food — just A class. This cafe feels like it came straight out of some Japanese fiction book. Staff are well-behaved too."},
  {name:"Ishita Dey",meta:"Local Guide · 94 reviews · 1,023 photos",when:"6 months ago",rating:5,text:"Audrey's Korean Cafe is a hidden gem! The ambiance is cozy and Instagram-worthy, with a lovely blend of Korean and modern vibes. The food is delicious, with authentic Korean flavors that leave you craving more."},
  {name:"Rocky Rock",meta:"Local Guide · 14 reviews · 9 photos",when:"3 months ago",rating:5,text:"This place serves things at a five-star level. Not only the taste of the food — the presentation, portion size, every detail is five-star standard."},
  {name:"Senjuti Kunda Das",meta:"Local Guide · 42 reviews · 268 photos",when:"a month ago",rating:4,text:"The dishes are very unique, tasty, well prepared. Hygiene of the cafe is very nice. The food however seems to be a little overpriced, though the LPG hike is an issue every place is facing."},
  {name:"katu panja",meta:"Local Guide · 215 reviews · 1,588 photos",when:"Edited 7 months ago",rating:4,text:"They have tried to bring a Korean-themed experience and the ambience really delivers — manga everywhere, cats, soft music. A unique spot for Barrackpore."},
];

const keywords = ["ambience 220","tteokbokki 21","japanese cheesecake 25","tiramisu 20","soju 19","corn dog 51","soft music 4","taiyaki 9","ramen 63","kalguksu 8"];

const story = [
  {k:"Read",v:"Pull any volume off the shelf",kr:"읽다"},
  {k:"Sip",v:"Korean drinks, made unhurried",kr:"마시다"},
  {k:"Stay",v:"As long as your story takes",kr:"머물다"},
];

function stars(n){return '★★★★★'.split('').map((s,i)=>`<span style="opacity:${i<n?1:.25}">${s}</span>`).join('')}

// Marquee (double for seamless loop)
const m = document.getElementById('marquee');
const block = ticker.map(t=>`<span class="marquee-item">${t}<span class="sep">✦</span></span>`).join('');
m.innerHTML = block + block;

// Menu
document.getElementById('menu-grid').innerHTML = menu.map((it,i)=>`
  <article class="panel card" style="transform:rotate(${i%2===0?'-0.6deg':'0.6deg'})">
    <div class="img-wrap">
      <img src="${it.img}" alt="${it.name}" loading="lazy" />
      <span class="tag">${it.tag}</span>
    </div>
    <div class="body">
      <div class="card-row">
        <h3>${it.name}</h3>
        <span class="card-price">${it.price}</span>
      </div>
      <div class="card-kr">${it.kr}</div>
      <p class="card-desc">${it.desc}</p>
    </div>
  </article>`).join('');

// Keywords
document.getElementById('keyword-chips').innerHTML = keywords.map(k=>`<span>${k}</span>`).join('');

// Reviews
document.getElementById('reviews-grid').innerHTML = reviews.map((r,i)=>`
  <article class="panel review" style="transform:rotate(${i%2===0?'-0.4deg':'0.5deg'})">
    <div class="review-head">
      <div class="review-avatar">${r.name[0]}</div>
      <div style="min-width:0">
        <div class="review-name">${r.name}</div>
        <div class="review-meta">${r.meta}</div>
      </div>
    </div>
    <div class="review-row">
      <div class="stars">${stars(r.rating)}</div>
      <span class="review-when">${r.when}</span>
    </div>
    <p class="review-text">"${r.text}"</p>
  </article>`).join('');

// Story
document.getElementById('story-grid').innerHTML = story.map((b,i)=>`
  <div class="panel story-card" style="transform:rotate(${i===1?'0deg':i===0?'-1deg':'1deg'})">
    <div class="kr">${b.kr}</div>
    <div class="h">${b.k}.</div>
    <p>${b.v}</p>
  </div>`).join('');

document.getElementById('year').textContent = new Date().getFullYear();
