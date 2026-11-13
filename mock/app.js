/* Shared header/footer + data. Header logo + "Home" are on EVERY page (fixes "can't get back to main page"). */
/* REAL events pulled from the Chamber's live calendar (hartfordvtchamber.com/events), plus the Balloon Festival.
   Repeating events are expanded into their individual dates. host = my read of who runs it, based on each listing's text. */
const thumbBg=e=>e.img?`style="background-image:url(${e.img})"`:'';
const mk=(base,dates)=>dates.map(d=>({...base,date:d}));
const EVENTS = [
  ...mk({key:'mixer-may',img:'img/mixer.jpg',title:'May Business Mixer (Tri-Chamber)',time:'5:30 – 7:00 PM',place:'Upper Valley Aquatic Center',host:'chamber',thumb:'t-town',icon:'🤝',desc:'Tri-Chamber mixer with the Hartford Area Chamber, Upper Valley Business Alliance and Woodstock Chamber. UVAC is unveiling $2.3 million in locker room renovations. RSVP through Eventbrite.'},['2026-05-20']),
  ...mk({key:'erg',img:'img/mixer.jpg',title:'Entrepreneur Resource Group',time:'4:30 – 7:00 PM',place:'The Coolidge Hotel, White River Junction',host:'chamber',thumb:'t-gorge',icon:'💡',desc:'A monthly small-group cohort hosted by the Chamber with SEVCA, for start-ups and established businesses. Practical, peer-driven conversations about growing your business.'},['2026-07-08']),
  ...mk({key:'nighthawks',title:'Meet the Upper Valley Nighthawks',time:'4:00 – 5:30 PM',place:'Upper Valley Aquatic Center',host:'community',hostName:'Upper Valley Aquatic Center',thumb:'t-spring',icon:'⚾',desc:'Free Meet & Greet with your hometown baseball team. Selfies, autographs and family-friendly fun.'},['2026-07-16']),
  ...mk({key:'oklahoma',title:"Rodgers & Hammerstein's OKLAHOMA!",time:'See Northern Stage for showtimes',place:'Northern Stage, White River Junction',host:'community',hostName:'Northern Stage',thumb:'t-sky',icon:'🎭',desc:'The musical that launched the Golden Age of Broadway comes to Northern Stage.'},['2026-07-29']).map(e=>({...e,end:'2026-08-01'})),
  ...mk({key:'fledge',title:'Fledge Party',time:'5:30 – 7:30 PM',place:'VINS Nature Center, Quechee',host:'community',hostName:'VINS',thumb:'t-spring',icon:'🦅',desc:'VINS celebrates Windsor, Dewey and V-2, the bald eagle family whose eaglet is thriving. Live bluegrass from the Well Kept Men, Green House Pizza Truck and exclusive merch.'},['2026-07-30']),
  ...mk({key:'music-river',title:'Music by the River',time:'6:00 – 8:00 PM',place:'East End Park, Woodstock',host:'community',hostName:'Woodstock',thumb:'t-sky',icon:'🎶',series:'Every Friday through Aug 21',season:'summer',desc:'Free live concert series every Friday at East End Park (217 Maxham Meadow Way). Bring a blanket. Zach Nugent\'s Dead Set Jul 31, All Night Boogie Band Aug 7, John Pinetree Aug 14, Jay Nash Aug 21.'},['2026-07-31','2026-08-07','2026-08-14','2026-08-21']),
  ...mk({key:'stonecarving',img:'img/autumn.jpg',title:'Live Stonecarving Demonstration',time:'9:00 AM – 1:00 PM',place:'Quechee Gorge Visitor Center',host:'chamber',thumb:'t-gorge',icon:'🪨',desc:'Watch Artist-in-Residence M Julian Issacson, a self-trained Vermont sculptor who works in wood and stone.'},['2026-08-01']),
  ...mk({key:'oklahoma2',title:"Rodgers & Hammerstein's OKLAHOMA!",time:'See Northern Stage for showtimes',place:'Northern Stage, White River Junction',host:'community',hostName:'Northern Stage',thumb:'t-sky',icon:'🎭',desc:'Second weekend of the Northern Stage production.'},['2026-08-07']).map(e=>({...e,end:'2026-08-08'})),
  ...mk({key:'first-friday',img:'img/downtown.jpg',title:'First Friday in White River Junction',time:'4:00 – 10:00 PM',place:'Downtown White River Junction',host:'community',hostName:'Downtown WRJ',thumb:'t-town',icon:'🎨',series:'First Friday of every month',season:'all',desc:'Live music spilling out of downtown restaurants, art exhibitions and gallery shows, and welcome wagons at the Main Street Museum.'},['2026-08-07','2026-09-04','2026-10-02','2026-11-06','2026-12-04','2027-01-01','2027-02-05','2027-03-05','2027-04-02','2027-05-07','2027-06-04']),
  ...mk({key:'spark',title:'Spark! the Fairway Golf Tournament',time:'10:00 AM – 4:00 PM',place:'Details via Spark! Community Center',host:'community',hostName:'Spark! Community Center',thumb:'t-spring',icon:'⛳',desc:'A morning on the course benefiting Spark! Community Center, which provides free programming for adults with differing abilities. Lunch and prizes included. Sponsorships available.'},['2026-08-15']),
  ...mk({key:'bridge-party',img:'img/gorge-bridge.jpg',title:'Quechee Gorge Bridge Block Party',time:'4:30 – 6:00 PM',place:'Quechee Gorge Visitor Center & Quechee',host:'chamber',thumb:'t-gorge',icon:'🌉',desc:'Celebrate the grand re-opening of the Quechee Gorge Bridge on First Friday! Open houses and special sales at the Visitor Center, Global Village Foods, Two Bistro, Whisper Hill, Jake\'s Market, Public House and more.'},['2026-09-04']),
  ...mk({key:'pentangle',title:'Pentangle Community Band',time:'7:00 – 9:00 PM',place:'Woodstock Town Hall Theatre',host:'community',hostName:'Pentangle Arts',thumb:'t-bridge',icon:'🎺',series:'Every Tuesday, Sept 22 – Dec 8',season:'fall',desc:'Make music with your neighbors, working toward a community holiday performance on December 11. Led by Parker Eastman.'},['2026-09-22','2026-09-29','2026-10-06','2026-10-13','2026-10-20','2026-10-27','2026-11-03','2026-11-10','2026-11-17','2026-11-24','2026-12-01','2026-12-08']),
  ...mk({key:'mixer-sep',img:'img/mixer.jpg',title:'September Business Mixer',time:'5:30 – 7:00 PM',place:'Fat Hat Clothing Co. & Two Bistro',host:'chamber',thumb:'t-town',icon:'🤝',desc:'Business After Hours with light bites, fresh fits and the coolest connections.'},['2026-09-23']),
  ...mk({key:'foliage',img:'img/autumn.jpg',title:'Foliage Fridays & Pop-up Shop',time:'11:00 AM – 2:00 PM',place:'Quechee Gorge Visitor Center',host:'chamber',thumb:'t-bridge',icon:'🍂',series:'Fridays through Oct 30',season:'fall',desc:'A new fall series highlighting Vermont\'s natural colors and New England\'s local artisans. Featured handcrafts for souvenirs, gifts and heritage pieces.'},['2026-09-25','2026-10-02','2026-10-09','2026-10-16','2026-10-23','2026-10-30']),
  ...mk({key:'mixer-oct',img:'img/mixer.jpg',title:'October Business After Hours',time:'5:30 – 7:00 PM',place:'Bar Harbor Bank, West Lebanon',host:'chamber',thumb:'t-town',icon:'🤝',desc:'Networking and bites with the Chamber. Bring your business cards and tell us what you have to share.'},['2026-10-21']),
  ...mk({key:'strangers',title:'STRANGERS: LIVE with Roy Wood Jr.',time:'7:00 PM',place:'Woodstock Town Hall Theatre',host:'community',hostName:'Pentangle Arts',thumb:'t-sky',icon:'🎤',desc:'Former Daily Show correspondent and CNN host Roy Wood Jr. in a live, filmed performance. Tickets $30 at Pentangle.org.'},['2026-10-25']),
  ...mk({key:'gory',img:'img/main-street-museum.jpg',title:'Gory Daze',time:'2:00 PM – late',place:'Downtown White River Junction',host:'community',hostName:'Hartford Parks & Rec / Main Street Museum',thumb:'t-winter',icon:'🎃',series:'Annual · every Halloween(ish)',season:'fall',desc:'2 PM Trunk or Treat at Town Hall, 6 PM Halloween-o-thon, 6:30 PM pre-parade party at the Main Street Museum, 8 PM Gory Daze Parade, 9 PM The Gutterball at Briggs Opera House.'},['2026-10-31']),
  ...mk({key:'hadestown',title:'Hadestown with Lebanon High',time:'7:00 PM',place:'Pentangle, Woodstock',host:'community',hostName:'Pentangle Arts',thumb:'t-sky',icon:'🎭',desc:'Screening of Hadestown: The Musical with a special performance from Lebanon High School students.'},['2026-11-02']),
  ...mk({key:'speed',img:'img/mixer.jpg',title:'Speed Networking',time:'5:30 – 7:00 PM',place:'RSVP via Upper Valley Business Alliance for location',host:'chamber',thumb:'t-town',icon:'⏱️',desc:'The NBC, in partnership with the Upper Valley Business Alliance and the Chamber. Half an hour of casual networking and appetizers, then paired 60-second introductions with business leaders. Please stay for the full event.'},['2026-11-18']),
  ...mk({key:'bf',img:'img/qbf-c.jpg',title:'Quechee Balloon Festival',time:'Launches 6:00 AM & 6:00 PM',place:'Village Green, Quechee',host:'chamber',thumb:'t-sky',icon:'🎈',bf:true,series:'Annual · Father\'s Day weekend',season:'summer',desc:'New England\'s most colorful Father\'s Day tradition for more than 45 years. Balloons, live music, food and family fun. 2027 dates not yet announced; shown here as Father\'s Day weekend.'},['2027-06-18']).map(e=>({...e,end:'2027-06-20'}))
].map((e,i)=>({...e,id:i+1}));
/* Seasons: recurring events carry an explicit season; one-offs get theirs from the date. 'all' = year-round. */
const SEASONS={summer:'☀️ Summer',fall:'🍂 Fall',winter:'❄️ Winter',spring:'🌱 Spring'};
const seasonOf=e=>e.season||['winter','winter','spring','spring','spring','summer','summer','summer','fall','fall','fall','winter'][+e.date.slice(5,7)-1];
const NEXT_BF =new Date('2027-06-18T06:00:00'); // placeholder date until 2027 is announced

const NAV=[
 ['index.html','Home'],
 ['about.html','About'],
 ['Membership',[['membership.html#benefits','Member Benefits'],['membership.html#benefits','Member Insurance with VACE'],['membership.html#join','Join Us'],['membership.html#benefits','Downtown Business Association']]],
 ['Visit & Explore',[['visit.html#visitor-center','Quechee Gorge Visitor Center'],['visit.html#explore-map','Quechee State Park Map'],['visit.html#covered-bridges','Covered Bridges of Windsor County'],['visit.html#area-history','Area History and Information']]],
 ['events.html','Events'],
 ['News',[['news.html#newsletter','Chamber Newsletter'],['news.html#guide','The Local\'s Guide']],'right'],
 ['index.html#Contact','Contact']
];
const TICKETS='https://fareharbor.com/embeds/book/hartfordareachamberofcommerce/?full-items=yes&flow=1565675';
const cur = location.pathname.split('/').pop()||'index.html';
const isBF = cur==='balloon-fest.html';

document.body.insertAdjacentHTML('afterbegin',`
<a class="skip" href="#main">Skip to content</a>
<header class="site"><div class="wrap">
  <a class="logo" href="index.html" aria-label="Hartford Area Chamber of Commerce – home"><img src="img/logo-chamber.jpg" alt="Hartford Area Chamber of Commerce"></a>
  <button class="menu-btn" aria-label="Menu" onclick="document.getElementById('nav').classList.toggle('open')">☰</button>
  <nav class="main" id="nav" aria-label="Main"><ul>
    ${NAV.map(([h,t,r])=>{
      if(Array.isArray(t)){const pg=t.map(c=>c[0].split('#')[0]);const act=pg.includes(cur);
        return `<li class="has-dd"><a href="${t[0][0]}" class="${act?'active':''}" aria-haspopup="true">${h} <i class="car">▾</i></a><div class="dd ${r==='right'?'dd-right':''}">${t.map(c=>`<a href="${c[0]}">${c[1]}</a>`).join('')}</div></li>`}
      return `<li><a href="${h}" class="${cur===h?'active':''}${t==='Contact'?' nav-contact':''}">${t}</a></li>`}).join('')}
    <li><a href="balloon-fest.html" class="nav-bf ${isBF?'on':''}">🎈 Balloon Festival</a></li>
  </ul></nav>
</div></header>
`);

document.body.insertAdjacentHTML('beforeend',`
<footer class="site"><div class="wrap">
  <div class="grid g4">
    <div><h4>Hartford Area Chamber</h4><p>Supporting business. Welcoming visitors. Strengthening the Hartford area.</p><p style="margin-top:10px"><a href="index.html#Contact">Address, hours &amp; contact →</a></p></div>
    <div><h4>Explore</h4><a href="index.html">Home</a><a href="about.html">About</a><a href="membership.html">Membership</a><a href="visit.html">Visit &amp; Explore</a><a href="events.html">Events</a><a href="news.html">News</a><a href="index.html#Contact">Contact</a></div>
    <div><h4>Quechee Balloon Festival</h4><a href="balloon-fest.html">Festival home</a><a href="balloon-fest.html#tickets">Buy tickets</a><a href="balloon-fest.html#info">Getting here</a></div>
    <div><h4>Connect</h4><a href="https://www.facebook.com/hartfordchamber.vt">Facebook</a><a href="https://www.instagram.com/hartfordvt_chamber_commerce/">Instagram</a><a href="mailto:info@hartfordvtchamber.com">info@hartfordvtchamber.com</a><a href="tel:8022956852">Visitor Center 802.295.6852</a></div>
  </div>
  <div class="legal"><span>© 2026 Hartford Area Chamber of Commerce · Class redesign mock, sample events and imagery are placeholders</span><span>Presented with community partners</span></div>
</div></footer>`);

/* helpers */
const fmt=(d,o)=>new Date(d+'T12:00:00').toLocaleDateString('en-US',o);
const badge=e=>e.host==='chamber'?'<span class="badge b-chamber">★ Hosted by the Chamber</span>':`<span class="badge b-community">● Community · ${e.hostName||'Local'}</span>`;
function countdown(el){
  const tick=()=>{let ms=Math.max(0,NEXT_BF-new Date());
    const d=Math.floor(ms/864e5),h=Math.floor(ms/36e5)%24,m=Math.floor(ms/6e4)%60,s=Math.floor(ms/1e3)%60;
    el.innerHTML=[[d,'Days'],[h,'Hours'],[m,'Min'],[s,'Sec']].map(([n,l])=>`<div><b>${String(n).padStart(2,'0')}</b><span>${l}</span></div>`).join('')};
  tick();setInterval(tick,1000);
}
document.querySelectorAll('.count').forEach(countdown);


/* ---- Buy Tickets pop-up: blurred, tinted backdrop; every Buy Tickets link opens it ---- */
function openTickets(){
  document.querySelectorAll('dialog[open]').forEach(d=>d.close());
  let d=document.getElementById('tix');
  if(!d){d=document.createElement('dialog');d.id='tix';d.dataset.tone='t-sky';document.body.appendChild(d);
    d.addEventListener('click',e=>{if(e.target===d)d.close()})}
  const alerts=isBF?'#alerts':'balloon-fest.html#alerts';
  const SPONSOR='https://fareharbor.com/embeds/book/hartfordareachamberofcommerce/items/708093/?full-items=yes&flow=1575107';
  const OPTS=[
    ['img/qbf-c.jpg','Quechee Balloon Festival Admission','46th Annual! All ages welcome!','Buy',TICKETS,true],
    ['img/qbf-a.jpg','Hot Air Balloon Adventure Ride','Get ready to soar at the Quechee Balloon Festival!','Select date',TICKETS],
    ['img/sunrise.jpg','Sunrise Yoga','Yoga while the sun rises and the pilots fill their balloons!','Select date',TICKETS],
    ['img/ebike.jpg','Balloon Festival E-Bike Ride','Starting at $129 · Self-guided e-bike adventure to visit a fourth-generation maple farm.','View',TICKETS],
    ['img/balloons-2.jpg','Balloon Ride Raffle','Your chance to win a trip to the skies.','Buy',TICKETS],
    ['img/balloon-fest-1.jpg','Volunteer, Vendor & Sponsor Registration','Be part of the tradition.','View',SPONSOR]
  ];
  d.innerHTML=`<button class="x" aria-label="Close" onclick="document.getElementById('tix').close()">✕</button>
  <div class="thumb photo" style="background-image:url(img/qbf-d.jpg)"></div>
  <div class="inner">
    <span class="badge b-chamber">★ Hosted by the Chamber</span>
    <h3>Quechee Balloon Festival · Book online</h3>
    <div class="opts">${OPTS.map(o=>`<div class="opt${o[5]?' main':''}"><span class="oi ph" aria-hidden="true" style="background-image:url(${o[0]})${o[0].includes('ebike')?';background-position:center 68%':''}"></span><span><b>${o[1]}</b><small>${o[2]}</small></span><a class="btn ${o[5]?'btn-primary':'btn-green'}" data-direct="1" target="_blank" rel="noopener" href="${o[4]}" aria-label="${o[3]}: ${o[1]}">${o[3]}</a></div>`).join('')}</div>
    <small style="color:var(--muted)">All prices in US dollars. Booking opens on the Chamber's secure FareHarbor page. 2027 dates and prices aren't announced yet.</small>
    <a class="btn btn-ghost" style="color:var(--green);align-self:flex-start" href="${alerts}" onclick="document.getElementById('tix').close()">Get text alerts when tickets drop</a>
  </div>`;
  d.showModal();d.scrollTop=0;
}
document.addEventListener('click',e=>{
  const a=e.target.closest('a[href^="https://fareharbor.com"]');
  if(!a||a.dataset.direct||e.metaKey||e.ctrlKey||e.shiftKey)return;
  e.preventDefault();openTickets();
});


/* ---- scroll one full-screen section at a time (every page) ---- */
(function(){
  const secs=[...document.querySelectorAll('main>section')];
  if(!secs.length)return;
  const root=document.documentElement,mq=matchMedia('(min-width:801px)'),rm=matchMedia('(prefers-reduced-motion:reduce)');
  const sync=()=>root.classList.toggle('snap',mq.matches&&!rm.matches);
  sync();mq.addEventListener('change',sync);
  secs.forEach((x,i)=>{if(!x.id)x.id='sec'+i;
    x.dataset.label=x.dataset.label||(x.classList.contains('page-hero')||x.classList.contains('hero')||x.classList.contains('bf-hero')?'Top':(x.querySelector('h2,h1')||{textContent:'Section '+(i+1)}).textContent.trim().slice(0,26))});
  const dots=document.createElement('nav');dots.className='dots';dots.setAttribute('aria-label','Sections');
  dots.innerHTML=secs.map(x=>`<a href="#${x.id}" aria-label="${x.dataset.label}"><span>${x.dataset.label}</span></a>`).join('');
  document.body.appendChild(dots);
  secs.forEach(x=>[...x.querySelectorAll(':scope>.wrap>*')].forEach((el,i)=>{el.classList.add('reveal');el.style.transitionDelay=(i*80)+'ms'}));
  const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){
    e.target.querySelectorAll('.reveal').forEach(r=>r.classList.add('in'));
    dots.querySelectorAll('a').forEach(a=>a.classList.toggle('on',a.getAttribute('href')==='#'+e.target.id))}}),{threshold:.2});
  secs.forEach(x=>io.observe(x));

  /* fit-to-screen: scale each section's content up or down so it fills one screen.
     Map sections are skipped (maps don't like zoom) and sized by CSS instead. */
  function fit(){
    secs.forEach(x=>{
      const w=x.querySelector(':scope>.wrap');if(!w)return;
      if(!root.classList.contains('snap')||x.querySelector('#map,.map')){w.style.zoom='';return}
      const target=(innerHeight-80-56)*.93;let lo=.7,hi=+(x.dataset.maxzoom||1.1);
      x.style.minHeight='0';
      for(let i=0;i<8;i++){const m=(lo+hi)/2;w.style.zoom=m;(x.offsetHeight-56<=target)?lo=m:hi=m}
      w.style.zoom=lo;x.style.minHeight='';x.dataset.zoom=lo.toFixed(2);
    });
  }
  window.refit=fit;
  let ft;const refit=()=>{clearTimeout(ft);ft=setTimeout(fit,120)};
  addEventListener('resize',refit);mq.addEventListener('change',refit);
  (document.fonts?document.fonts.ready:Promise.resolve()).then(()=>setTimeout(fit,60));addEventListener('load',()=>setTimeout(fit,300));

  /* one scroll gesture (wheel, trackpad swipe, arrow/page keys) = one section.
     A section taller than the screen still scrolls normally inside itself. */
  let busy=false;const HDR=80;
  const top=x=>x.getBoundingClientRect().top+scrollY-HDR;
  const here=()=>{let b=0,d=1e9;secs.forEach((x,i)=>{const k=Math.abs(top(x)-scrollY);if(k<d){d=k;b=i}});return b};
  const tall=x=>x.scrollHeight>innerHeight-HDR+6;
  const maxY=()=>document.documentElement.scrollHeight-innerHeight;
  function go(dir){
    const i=here(),last=secs.length-1,inFooter=scrollY>top(secs[last])+30;
    let y;
    if(dir>0){y=i<last?top(secs[i+1]):maxY()}
    else{y=inFooter?top(secs[last]):(i>0?top(secs[i-1]):0)}
    busy=true;scrollTo({top:Math.max(0,Math.min(y,maxY())),behavior:'smooth'});setTimeout(()=>busy=false,850);
  }
  const blocked=()=>!root.classList.contains('snap')||document.querySelector('dialog[open]');
  addEventListener('wheel',e=>{
    if(blocked()||Math.abs(e.deltaY)<8||e.ctrlKey)return;
    if(e.target.closest('textarea,dialog'))return;
    const x=secs[here()];
    if(tall(x)&&scrollY<top(x)+x.scrollHeight-innerHeight+HDR-4&&e.deltaY>0)return;   // still reading a tall section
    if(tall(x)&&e.deltaY<0&&scrollY>top(x)+4)return;
    e.preventDefault();if(!busy)go(e.deltaY>0?1:-1);
  },{passive:false});
  addEventListener('keydown',e=>{
    if(blocked()||/INPUT|TEXTAREA|SELECT/.test(document.activeElement.tagName))return;
    const k=e.key,dn=['ArrowDown','PageDown'].includes(k)||(k===' '&&!e.shiftKey),up=['ArrowUp','PageUp'].includes(k)||(k===' '&&e.shiftKey);
    if(dn||up){e.preventDefault();if(!busy)go(dn?1:-1)}
    else if(k==='Home'){e.preventDefault();scrollTo({top:0,behavior:'smooth'})}
    else if(k==='End'){e.preventDefault();scrollTo({top:maxY(),behavior:'smooth'})}
  });
})();
