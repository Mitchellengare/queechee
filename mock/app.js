/* Shared header/footer + data. Header logo + "Home" are on EVERY page (fixes "can't get back to main page"). */
const EVENTS = [
  {id:1,title:'Small Business Saturday Passport',date:'2026-11-28',time:'10:00 AM – 4:00 PM',place:'Downtown White River Junction',host:'chamber',thumb:'t-town',icon:'🛍️',desc:'Shop local, collect stamps at participating member businesses and enter to win a prize basket.'},
  {id:2,title:'Quechee Tree Lighting & Cocoa Walk',date:'2026-12-05',time:'4:30 PM',place:'Quechee Village Green',host:'chamber',thumb:'t-winter',icon:'🎄',desc:'Light the village tree together with cocoa, carols and a visit from Santa.'},
  {id:3,title:'Winter Business After Hours',date:'2027-01-21',time:'5:30 – 7:30 PM',place:'Quechee Gorge Visitor Center',host:'chamber',thumb:'t-gorge',icon:'🤝',desc:'Member mixer with light bites and a chance to meet the new Chamber board.'},
  {id:4,title:'Gorge Winter Snowshoe Hike',date:'2027-02-13',time:'10:00 AM',place:'Quechee State Park',host:'community',hostName:'VT State Parks',thumb:'t-winter',icon:'🥾',desc:'Guided snowshoe hike along the gorge rim. Rentals available.'},
  {id:5,title:'Chamber Annual Meeting',date:'2027-03-18',time:'5:00 PM',place:'Hartford Area, TBA',host:'chamber',thumb:'t-gorge',icon:'📋',desc:'Annual member meeting, board elections and a look at the year ahead.'},
  {id:6,title:'Maple Open House Weekend',date:'2027-03-27',time:'10:00 AM – 3:00 PM',place:'Upper Valley sugarhouses',host:'community',hostName:'Local sugarmakers',thumb:'t-spring',icon:'🍁',desc:'Tour working sugarhouses and taste fresh Vermont maple.'},
  {id:7,title:'Covered Bridges Spring Ride',date:'2027-05-08',time:'9:00 AM',place:'Quechee Village',host:'community',hostName:'Upper Valley Bike Club',thumb:'t-bridge',icon:'🚲',desc:'Scenic group ride past the covered bridges of Windsor County.'},
  {id:8,title:'Memorial Day Parade',date:'2027-05-31',time:'10:00 AM',place:'White River Junction',host:'community',hostName:'Town of Hartford',thumb:'t-town',icon:'🇺🇸',desc:'Annual parade honoring local veterans.'},
  {id:9,title:'Quechee Balloon Festival',date:'2027-06-18',end:'2027-06-20',time:'Launches 6:00 AM & 6:00 PM',place:'Village Green, Quechee',host:'chamber',thumb:'t-sky',icon:'🎈',desc:'New England\'s most colorful Father\'s Day tradition. Balloons, live music, food and family fun.',bf:true}
];
const NEXT_BF = new Date('2027-06-18T06:00:00'); // placeholder date until 2027 is announced

const PAGES=[['index.html','Home'],['about.html','About'],['membership.html','Membership'],['visit.html','Visit & Explore'],['events.html','Events']];
const cur = location.pathname.split('/').pop()||'index.html';
const isBF = cur==='balloon-fest.html';

document.body.insertAdjacentHTML('afterbegin',`
<div class="mock-note">Class redesign mock. Sample events and imagery are placeholders. Not the official site.</div>
<a class="skip" href="#main">Skip to content</a>
<div class="topbar"><div class="wrap">
  <span>📍 5966 Woodstock Road, Quechee, VT 05059 · Visitor Center open daily 9–5</span>
  <span><a href="tel:8022957900">802.295.7900</a> · <a href="mailto:info@hartfordvtchamber.com">info@hartfordvtchamber.com</a></span>
</div></div>
<header class="site"><div class="wrap">
  <a class="logo" href="index.html" aria-label="Hartford Area Chamber of Commerce – home"><span class="logo-mark">🏔️</span><span>Hartford Area<small>Chamber of Commerce</small></span></a>
  <button class="menu-btn" aria-label="Menu" onclick="document.getElementById('nav').classList.toggle('open')">☰</button>
  <nav class="main" id="nav" aria-label="Main"><ul>
    ${PAGES.map(([h,t])=>`<li><a href="${h}" class="${cur===h?'active':''}">${t}</a></li>`).join('')}
    <li><a href="balloon-fest.html" class="nav-bf">🎈 Balloon Festival</a></li>
  </ul></nav>
</div></header>`);

document.body.insertAdjacentHTML('beforeend',`
<footer class="site"><div class="wrap">
  <div class="grid g4">
    <div><h4>Hartford Area Chamber</h4><p>Supporting business. Welcoming visitors. Strengthening the Hartford area.<br><br>5966 Woodstock Road<br>P.O. Box 823<br>Quechee, VT 05059</p></div>
    <div><h4>Explore</h4><a href="index.html">Home</a><a href="about.html">About</a><a href="membership.html">Membership</a><a href="visit.html">Visit &amp; Explore</a><a href="events.html">Events</a></div>
    <div><h4>Quechee Balloon Festival</h4><a href="balloon-fest.html">Festival home</a><a href="balloon-fest.html#tickets">Tickets</a><a href="balloon-fest.html#info">Getting here</a></div>
    <div><h4>Connect</h4><a href="https://www.facebook.com/hartfordchamber.vt">Facebook</a><a href="https://www.instagram.com/hartfordvt_chamber_commerce/">Instagram</a><a href="mailto:info@hartfordvtchamber.com">Email us</a></div>
  </div>
  <div class="legal"><span>© 2026 Hartford Area Chamber of Commerce (mock redesign)</span><span>Presented with community partners</span></div>
</div></footer>`);

/* helpers */
const fmt=(d,o)=>new Date(d+'T12:00:00').toLocaleDateString('en-US',o);
const badge=e=>e.host==='chamber'?'<span class="badge b-chamber">Hosted by the Chamber</span>':`<span class="badge b-community">Community · ${e.hostName||'Local'}</span>`;
function countdown(el){
  const tick=()=>{let ms=Math.max(0,NEXT_BF-new Date());
    const d=Math.floor(ms/864e5),h=Math.floor(ms/36e5)%24,m=Math.floor(ms/6e4)%60,s=Math.floor(ms/1e3)%60;
    el.innerHTML=[[d,'Days'],[h,'Hours'],[m,'Min'],[s,'Sec']].map(([n,l])=>`<div><b>${String(n).padStart(2,'0')}</b><span>${l}</span></div>`).join('')};
  tick();setInterval(tick,1000);
}
document.querySelectorAll('.count').forEach(countdown);
