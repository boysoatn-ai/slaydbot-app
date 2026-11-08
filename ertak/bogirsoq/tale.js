// «Bo‘g‘irsoq» — ertakka xos qism. Dvigatel (index.html) umumiy.
window.TALE={
 id:'bogirsoq', title:'Bo‘g‘irsoq', suffix:'va Bo‘g‘irsoq', kicker:'Sehrli ertak', hero:'Mustafo', sex:'boy', girl:false,
 hallBg:'b12', puzzleImg:'cover', certPic:'card_boy', memCards:['bogirsoq','boy','quyon','bori','ayiq','tulki'],
 cert:{line1:'«Bo‘g‘irsoq» ertagida Bo‘g‘irsoqni', line2:'ayyor Tulkidan qutqarib, uyiga qaytardi', badge:'ZIYRAK DO‘ST'},
 games:[{k:'quiz',ic:'❓',n:'Savol-javob'},{k:'stay',ic:'🏠',n:'Nima qilasan?',run:()=>goodGame()},{k:'mem',ic:'🃏',n:'Xotira kartalari'},{k:'puz',ic:'🧩',n:'Boshqotirma'},{k:'color',ic:'🎨',n:'Bo‘yash'},{k:'cert',ic:'🏅',n:'Sertifikat'}],
};
const _sc=(f,g,amb,extra)=>Object.assign({f, pan:[[Math.max(.2,f[0]-.15),f[1]],[Math.min(.8,f[0]+.15),f[1]-.03]], grade:g, rays:.45, ray:[.6,0], amb:amb||'birds'},extra||{});
const G_DAY='linear-gradient(160deg,rgba(255,240,170,.42),rgba(120,200,120,.2))', G_WARM='linear-gradient(160deg,rgba(255,200,120,.45),rgba(220,120,60,.22))', G_WOOD='linear-gradient(170deg,rgba(120,200,140,.35),rgba(40,90,60,.25))';
TALE.SC={
 cover:_sc([.5,.55],'linear-gradient(135deg,rgba(255,170,40,.4),rgba(120,200,120,.3))','birds'),
 b1:_sc([.5,.5],G_DAY,'birds'), b2:_sc([.5,.55],G_WARM,'fire',{rays:0, flicker:1}), b3:_sc([.5,.6],G_DAY,'birds',{cine:1}), b4:_sc([.5,.55],G_DAY,'birds'),
 b5:_sc([.5,.55],G_WOOD,'birds'), b6:_sc([.5,.55],G_WOOD,'birds'), b7:_sc([.5,.55],G_WOOD,'breeze'), b8:_sc([.5,.55],G_WOOD,'breeze'),
 b9:_sc([.5,.55],G_WOOD,'breeze'), b10:_sc([.5,.55],G_WOOD,'wind'), b11:_sc([.5,.55],G_DAY,'birds'),
 b12:_sc([.5,.55],'radial-gradient(circle at 45% 60%,rgba(255,200,140,.5),rgba(180,90,60,.3) 75%)','fire',{rays:0, glow:'radial-gradient(circle at 50% 40%,rgba(255,170,80,.4),transparent 45%)', flicker:1}),
};
const mid=()=>({x:VW/2,y:R.y+R.h*.55});
TALE.FX={
  magic:{ start(){ amb=every(3,()=>add({kind:'spark',x:rnd(0,VW),y:VH+5,vy:rnd(-2.6,-1.2)*U,vx:rnd(-.3,.3),r:rnd(3,6),max:rnd(130,200),wob:.03,ph:rnd(0,6)})); tip('👆 Ekranga bosing — sehr uchqunlari!') }, tap(x,y){ burst(x,y,30,'spark',{sp:5,g:.02}); add({kind:'glow',x,y,r:60,max:25,grow:.03}); SFX.sparkle() } },
  sun:{ start(){ for(let i=0;i<8;i++) add({kind:'bfly',x:rnd(0,VW),y:rnd(VH*.2,VH*.7),vx:rnd(-.6,.6),vy:rnd(-.4,.4),r:rnd(4,7),hue:[0,330,50,200][i%4],max:1e6,ph:rnd(0,6),wob:.03}); tip('👆 Bosing — kapalaklar uchadi') }, tap(x,y){ SFX.sparkle(); for(let i=0;i<5;i++) add({kind:'bfly',x,y,vx:rnd(-3,3)*U,vy:rnd(-4,-1)*U,g:-.01,r:rnd(4,7),hue:rnd(0,360),max:140,ph:rnd(0,6),wob:.04}) } },
  hearts:{ start(){ amb=every(16,()=>{ const m=mid(); add({kind:'heart',x:m.x+rnd(-120,120)*U,y:m.y,vy:-1.2*U,vx:rnd(-.4,.4),r:rnd(4,7),max:150,wob:.03,ph:rnd(0,6)}) }); tip('👆 Do‘stlarga bosing') }, tap(x,y){ for(let i=0;i<10;i++) add({kind:'heart',x,y,vx:rnd(-2,2)*U,vy:rnd(-4,-1)*U,g:.02,r:rnd(4,7),max:90}); SFX.heart() } },
  walk:{ start(){ for(let i=0;i<6;i++) add({kind:'bfly',x:rnd(0,VW),y:rnd(VH*.2,VH*.6),vx:rnd(-.6,.6),vy:rnd(-.4,.4),r:rnd(4,6),hue:rnd(0,360),max:1e6,ph:rnd(0,6),wob:.03}); tip('👆 Qushlarga bosing') }, tap(x,y){ tone(1800,0,.07,'sine',.07); tone(2300,.09,.07,'sine',.07); say({x,y:y-20},'Chirr-chirr!') } },
  fireworks:{ start(){ later(500,()=>{ fireworks(7); confetti() }); amb=every(6,()=>add({kind:'spark',x:rnd(0,VW),y:rnd(0,VH*.5),r:rnd(2,4),max:50})) }, tap(x,y){ SFX.boom((x/VW)*2-1); add({kind:'glow',x,y,r:90,max:20,grow:.02}); burst(x,y,55,'dot',{sp:5,g:.04,r:2.4,hue:rnd(0,360)}) } },
  bake:{ start(){ amb=every(9,()=>{ const m=mid(); add({kind:'dust',x:m.x+rnd(-80,80)*U,y:m.y,vy:-.9*U,vx:rnd(-.2,.2),r:rnd(6,11),max:80}) }); later(700,()=>{ const m=mid(); say({x:m.x,y:m.y-170*U},'Mmm, issiq non!') }); tip('👆 Tandirga bosing') }, tap(x,y){ SFX.chime(); burst(x,y,16,'spark',{sp:3,hue:40}) } },
  roll:{ start(){ for(let i=0;i<14;i++) add({kind:'dust',x:rnd(0,VW),y:R.y+R.h*.82,vx:rnd(1,3),vy:rnd(-1,0),r:rnd(6,12),max:60}); tip('👆 Bo‘g‘irsoqqa bosing') }, tap(x,y){ SFX.pop(); say({x,y:y-20},'Dumalab ketaman!') } },
  meet:{ start(){ acts([['✋ To‘xta, Bo‘g‘irsoq!',b=>{ const m=mid(); haptic('medium'); SFX.chime(); say({x:m.x,y:m.y-160*U},'Uyingga qayt!'); b.textContent='✅ To‘g‘ri aytding!' }]]) }, tap(x,y){ SFX.pop(); burst(x,y,10,'spark',{sp:3}) } },
  song:{ start(){ [0,300,600,900].forEach((t,i)=>later(t,()=>tone([523,587,659,784][i],0,.25,'triangle',.07))); tip('👆 Bosing — qo‘shiq!') }, tap(x,y){ tone(rnd(500,900),0,.2,'triangle',.07); burst(x,y,8,'spark',{sp:3,hue:50}) } },
  hare:{ start(){ tip('👆 Quyonga bosing') }, tap(x,y){ tone(1600,0,.06,'sine',.07); say({x,y:y-20},'Hop-hop!'); burst(x,y,10,'spark',{sp:3}) } },
  wolf:{ start(){ tip('👆 Bo‘riga bosing') }, tap(x,y){ tone(220,0,.35,'sawtooth',.05,160); say({x,y:y-20},'Uvv!') } },
  bear:{ start(){ shake(); tip('👆 Ayiqqa bosing') }, tap(x,y){ tone(110,0,.4,'sawtooth',.06,90); shake(); say({x,y:y-20},'Ar-r-r!') } },
  fox:{ start(){ tip('👆 Tulkiga bosing') }, tap(x,y){ tone(900,0,.2,'sine',.05,1200); say({x,y:y-20},'Voy, qanday chiroyli!') } },
  warn:{ start(){ acts([['📣 Maqtovga uchma!',b=>{ const m=mid(); haptic('heavy'); tone(700,0,.3,'triangle',.1); tone(900,.3,.3,'triangle',.1); say({x:m.x,y:m.y-170*U},'Tulki aldayapti!'); b.textContent='✅ Bo‘g‘irsoq eshitdi!' }]]) }, tap(x,y){ SFX.pop(); burst(x,y,10,'spark',{sp:3}) } },
  save:{ start(){ later(500,()=>{ const m=mid(); SFX.yay(); confetti(); say({x:m.x,y:m.y-160*U},'Hop — savatga!') }) }, tap(x,y){ SFX.sparkle(); burst(x,y,20,'spark',{sp:4}) } },
};
TALE.onSentence=function(s){ const t=s.t;
  if(/qo‘shiq aytdi/.test(t)) [0,300,600,900].forEach((d,i)=>later(d,()=>tone([523,587,659,784][i],0,.25,'triangle',.07)));
  if(/maqtovga uchma/.test(t)){ tone(700,0,.3,'triangle',.1); tone(900,.3,.3,'triangle',.1) }
  if(/savatga sakradi/.test(t)){ SFX.yay(); confetti() }
  if(/Barakalla|esingda/.test(t)) SFX.chime();
};
// 🏠 O'yin: «Nima qilasan?» — 6 vaziyat
const SAFE=[
 {q:'Do‘sting «yur, oyimga aytmasdan bog‘ga qochamiz» dedi.', o:['Avval oyimdan so‘rayman','Darhol ketaman'], a:0},
 {q:'Notanish odam «sen juda aqllisan, yur, sovg‘a beraman» dedi.', o:['Ketaman','Bormayman, kattalarga aytaman'], a:1},
 {q:'Hovlida o‘ynayapsan, koptok ko‘chaga chiqib ketdi.', o:['O‘zim yugurib chiqaman','Kattalarni chaqiraman'], a:1},
 {q:'Seni hamma maqtayapti, sen…', o:['«Men eng zo‘rman!» deb maqtanaman','Rahmat aytib, kamtar bo‘laman'], a:1},
 {q:'Do‘kon oldida oyingni yo‘qotib qo‘yding.', o:['Turgan joyimda kutaman yoki sotuvchiga aytaman','Uyga yolg‘iz ketaman'], a:0},
 {q:'Oying «tez qaytaman, eshikni ochma» dedi. Kimdir taqillatdi.', o:['Eshikni ochmayman','Ochaman'], a:0},
];
function goodGame(){ board('',img('b4')).remove(); const vs=BOOK.games.stay||[]; let i=0, scr=0; const box=document.createElement('div'); box.className='qbox'; gtx.append(box,backBtn());
  function show(){ box.innerHTML=''; if(i>=SAFE.length){ return win('stay',scr>=6?3:scr>=4?2:1,`${scr} / ${SAFE.length} — sen aqlli bolasan!`) }
    const it=SAFE[i]; const q=document.createElement('p'); q.className='q'; q.textContent=`${i+1}. ${it.q}`; const os=document.createElement('div'); os.className='opts'; box.append(q,os); let wrong=0;
    it.o.forEach((o,k)=>{ const bt=document.createElement('button'); bt.className='opt'; bt.textContent=o; bt.onclick=()=>{ if(k===it.a){ bt.classList.add('ok'); if(!wrong) scr++; SFX.chime(); haptic('light'); if(vs[1]) read([vs[1]]); gfx(.5,.5,40,'spark',{sp:6,g:.03}); setTimeout(()=>{ i++; show() },1100) } else { wrong++; bt.classList.remove('no'); void bt.offsetWidth; bt.classList.add('no'); SFX.wrong(); if(vs[2]) read([vs[2]]) } }; os.appendChild(bt) }) }
  show(); if(vs[0]) read([vs[0]]) }
