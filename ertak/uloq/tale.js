// «Echki va yetti uloqcha» — ertakka xos qism. Dvigatel (index.html) umumiy.
window.TALE={
 id:'uloq', title:'Echki va yetti uloqcha', suffix:'va yetti uloqcha', kicker:'Sehrli ertak', hero:'Mustafo', sex:'boy', girl:false,
 hallBg:'e12', puzzleImg:'cover', certPic:'card_boy', memCards:['echki','uloq','boy','bori','olapar','uy'],
 cert:{line1:'«Echki va yetti uloqcha» ertagida', line2:'uloqchalarni ayyor Bo‘ridan asrab qoldi', badge:'ZIYRAK QO‘RIQCHI'},
 games:[{k:'quiz',ic:'❓',n:'Savol-javob'},{k:'door',ic:'🚪',n:'Eshikni ochamizmi?',run:()=>goodGame()},{k:'mem',ic:'🃏',n:'Xotira kartalari'},{k:'puz',ic:'🧩',n:'Boshqotirma'},{k:'color',ic:'🎨',n:'Bo‘yash'},{k:'cert',ic:'🏅',n:'Sertifikat'}],
};
const _sc=(f,g,amb,extra)=>Object.assign({f, pan:[[Math.max(.2,f[0]-.15),f[1]],[Math.min(.8,f[0]+.15),f[1]-.03]], grade:g, rays:.45, ray:[.6,0], amb:amb||'birds'},extra||{});
const G_DAY='linear-gradient(160deg,rgba(255,240,170,.42),rgba(120,200,120,.2))', G_WARM='linear-gradient(160deg,rgba(255,200,120,.45),rgba(220,120,60,.22))', G_WOOD='linear-gradient(170deg,rgba(120,200,140,.35),rgba(40,90,60,.25))';
TALE.SC={
 cover:_sc([.5,.55],'linear-gradient(135deg,rgba(90,160,255,.35),rgba(255,210,120,.4))','birds'),
 e1:_sc([.5,.5],G_DAY,'birds'), e2:_sc([.5,.55],G_DAY,'birds'), e3:_sc([.5,.55],G_DAY,'birds'), e4:_sc([.5,.55],G_WARM,'breeze'),
 e5:_sc([.5,.55],G_WARM,'breeze'), e6:_sc([.5,.55],G_WOOD,'breeze'), e7:_sc([.5,.55],G_WARM,'breeze'), e8:_sc([.5,.55],G_WOOD,'breeze'),
 e9:_sc([.5,.55],G_WARM,'fire',{rays:0}), e10:_sc([.5,.55],G_DAY,'wind',{cine:1}), e11:_sc([.5,.55],G_WARM,'birds'),
 e12:_sc([.5,.55],'radial-gradient(circle at 45% 60%,rgba(255,200,140,.5),rgba(180,90,60,.3) 75%)','fire',{rays:0, glow:'radial-gradient(circle at 50% 40%,rgba(255,170,80,.4),transparent 45%)', flicker:1}),
};
const mid=()=>({x:VW/2,y:R.y+R.h*.55});
TALE.FX={
  magic:{ start(){ amb=every(3,()=>add({kind:'spark',x:rnd(0,VW),y:VH+5,vy:rnd(-2.6,-1.2)*U,vx:rnd(-.3,.3),r:rnd(3,6),max:rnd(130,200),wob:.03,ph:rnd(0,6)})); tip('👆 Ekranga bosing — sehr uchqunlari!') }, tap(x,y){ burst(x,y,30,'spark',{sp:5,g:.02}); add({kind:'glow',x,y,r:60,max:25,grow:.03}); SFX.sparkle() } },
  sun:{ start(){ for(let i=0;i<8;i++) add({kind:'bfly',x:rnd(0,VW),y:rnd(VH*.2,VH*.7),vx:rnd(-.6,.6),vy:rnd(-.4,.4),r:rnd(4,7),hue:[0,330,50,200][i%4],max:1e6,ph:rnd(0,6),wob:.03}); tip('👆 Bosing — kapalaklar uchadi') }, tap(x,y){ SFX.sparkle(); for(let i=0;i<5;i++) add({kind:'bfly',x,y,vx:rnd(-3,3)*U,vy:rnd(-4,-1)*U,g:-.01,r:rnd(4,7),hue:rnd(0,360),max:140,ph:rnd(0,6),wob:.04}) } },
  hearts:{ start(){ amb=every(16,()=>{ const m=mid(); add({kind:'heart',x:m.x+rnd(-120,120)*U,y:m.y,vy:-1.2*U,vx:rnd(-.4,.4),r:rnd(4,7),max:150,wob:.03,ph:rnd(0,6)}) }); tip('👆 Do‘stlarga bosing') }, tap(x,y){ for(let i=0;i<10;i++) add({kind:'heart',x,y,vx:rnd(-2,2)*U,vy:rnd(-4,-1)*U,g:.02,r:rnd(4,7),max:90}); SFX.heart() } },
  fireworks:{ start(){ later(500,()=>{ fireworks(7); confetti() }); amb=every(6,()=>add({kind:'spark',x:rnd(0,VW),y:rnd(0,VH*.5),r:rnd(2,4),max:50})) }, tap(x,y){ SFX.boom((x/VW)*2-1); add({kind:'glow',x,y,r:90,max:20,grow:.02}); burst(x,y,55,'dot',{sp:5,g:.04,r:2.4,hue:rnd(0,360)}) } },
  song:{ start(){ [0,300,600,900].forEach((t,i)=>later(t,()=>tone([523,587,659,784][i],0,.25,'triangle',.07))); tip('👆 Bosing — qo‘shiq!') }, tap(x,y){ tone(rnd(500,900),0,.2,'triangle',.07); burst(x,y,8,'spark',{sp:3,hue:50}) } },
  wolf:{ start(){ tip('👆 Bo‘riga bosing') }, tap(x,y){ tone(220,0,.35,'sawtooth',.05,160); say({x,y:y-20},'Uvv!') } },
  leave:{ start(){ acts([['👋 Xayr, oyijon!',b=>{ const m=mid(); SFX.chime(); say({x:m.x,y:m.y-160*U},'Eshikni ochmaymiz!'); b.textContent='✅ Va’da!' }]]) }, tap(x,y){ tone(1300,0,.12,'triangle',.07); say({x,y:y-20},'Me-e-e!') } },
  knock:{ start(){ later(400,()=>[0,250,500].forEach(t=>later(t,()=>{ tone(120,0,.08,'square',.12); shake() }))); tip('👆 Eshikka bosing') }, tap(x,y){ [0,200].forEach(t=>later(t,()=>tone(120,0,.08,'square',.12))) } },
  voice:{ start(){ acts([['🙅 Ochmaymiz!',b=>{ const m=mid(); haptic('medium'); SFX.chime(); say({x:m.x,y:m.y-160*U},'Bu oyimiz emas!'); b.textContent='✅ To‘g‘ri!' }]]) }, tap(x,y){ tone(1300,0,.12,'triangle',.07); say({x,y:y-20},'Me-e-e!') } },
  honey:{ start(){ tip('👆 Asalga bosing') }, tap(x,y){ SFX.pop(); burst(x,y,14,'spark',{sp:3,hue:40}) } },
  paw:{ start(){ acts([['🔍 Derazadan qara',b=>{ const m=mid(); haptic('medium'); SFX.wrong(); say({x:m.x,y:m.y-160*U},'Qop-qora panja!'); b.textContent='⚠️ Bu Bo‘ri!' }]]) }, tap(x,y){ SFX.pop(); burst(x,y,10,'spark',{sp:3}) } },
  flour:{ start(){ for(let i=0;i<40;i++){ const m=mid(); add({kind:'dust',x:m.x+rnd(-80,80)*U,y:m.y,vx:rnd(-2,2),vy:rnd(-3,-.5),r:rnd(6,12),max:70}) } tip('👆 Bosing') }, tap(x,y){ burst(x,y,14,'dust',{sp:2,g:0,r:6}) } },
  stay:{ start(){ acts([['🔒 Eshikni bekit!',b=>{ const m=mid(); haptic('heavy'); tone(160,0,.15,'square',.1); say({x:m.x,y:m.y-160*U},'Oyimizni kutamiz!'); b.textContent='✅ Bekitildi!' }]]) }, tap(x,y){ SFX.pop(); burst(x,y,10,'spark',{sp:3}) } },
  dog:{ start(){ later(500,()=>{ shake(); SFX.crash(); const m=mid(); say({x:m.x,y:m.y-160*U},'Vov-vov!') }); tip('👆 Olaparga bosing') }, tap(x,y){ SFX.oink(); say({x,y:y-20},'Vov-vov!'); burst(x,y,10,'spark',{sp:3}) } },
};
TALE.onSentence=function(s){ const t=s.t;
  if(/taqilladi/.test(t)) [0,250,500].forEach(d=>later(d,()=>tone(120,0,.08,'square',.12)));
  if(/qo‘shiq aytdi/.test(t)) [0,300,600,900].forEach((d,i)=>later(d,()=>tone([523,587,659,784][i],0,.25,'triangle',.07)));
  if(/vovillab/.test(t)) SFX.oink();
  if(/Barakalla|esingda/.test(t)) SFX.chime();
};
// 🚪 O'yin: «Eshikni ochamizmi?» — 6 vaziyat
const SAFE=[
 {q:'Uyda yolg‘izsan. Eshik ortidan «men pochtachiman, oching» degan ovoz keldi.', o:['Ochmayman, oyimga qo‘ng‘iroq qilaman','Ochaman'], a:0},
 {q:'Eshik ortidagi odam «oying meni yubordi» deyapti.', o:['Ishonib ochaman','Ochmayman, oyimdan so‘rayman'], a:1},
 {q:'Oying va dadang uyda, eshik taqilladi.', o:['O‘zim yugurib ochaman','Kattalarga aytaman, ular ochadi'], a:1},
 {q:'Notanish odam «suv bering, chanqadim» dedi.', o:['Eshikni ochmayman, kattalarga aytaman','Ochib suv beraman'], a:0},
 {q:'Uyda yolg‘izsan, buving telefon qilib «hozir kelaman» dedi va keldi.', o:['Buvim ekanini ko‘rib, ochaman','Hech qachon ochmayman'], a:0},
 {q:'Kimdir eshikni qattiq taqillatib, qo‘rqityapti.', o:['Jim turib, ota-onamga qo‘ng‘iroq qilaman','Eshikni ochib qarayman'], a:0},
];
function goodGame(){ board('',img('e4')).remove(); const vs=BOOK.games.door||[]; let i=0, scr=0; const box=document.createElement('div'); box.className='qbox'; gtx.append(box,backBtn());
  function show(){ box.innerHTML=''; if(i>=SAFE.length){ return win('door',scr>=6?3:scr>=4?2:1,`${scr} / ${SAFE.length} — sen ehtiyotkor bolasan!`) }
    const it=SAFE[i]; const q=document.createElement('p'); q.className='q'; q.textContent=`${i+1}. ${it.q}`; const os=document.createElement('div'); os.className='opts'; box.append(q,os); let wrong=0;
    it.o.forEach((o,k)=>{ const bt=document.createElement('button'); bt.className='opt'; bt.textContent=o; bt.onclick=()=>{ if(k===it.a){ bt.classList.add('ok'); if(!wrong) scr++; SFX.chime(); haptic('light'); if(vs[1]) read([vs[1]]); gfx(.5,.5,40,'spark',{sp:6,g:.03}); setTimeout(()=>{ i++; show() },1100) } else { wrong++; bt.classList.remove('no'); void bt.offsetWidth; bt.classList.add('no'); SFX.wrong(); if(vs[2]) read([vs[2]]) } }; os.appendChild(bt) }) }
  if(vs[0]) read([vs[0]],show); else show() }
