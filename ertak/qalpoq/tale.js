// «Qizil qalpoqcha» — ertakka xos qism. Dvigatel (index.html) umumiy.
window.TALE={
 id:'qalpoq', title:'Qizil qalpoqcha', suffix:'va Qizil qalpoqcha', kicker:'Sehrli ertak', hero:'Mustafo', sex:'boy', girl:false,
 hallBg:'q11', puzzleImg:'cover', certPic:'card_boy', memCards:['qalpoq','boy','buvi','wolf','oyi','otin'],
 cert:{line1:'«Qizil qalpoqcha» ertagida do‘stini', line2:'xavfdan asrab qoldi va kattalarni yordamga chaqirdi', badge:'ZIYRAK DO‘ST'},
 games:[{k:'quiz',ic:'❓',n:'Savol-javob'},{k:'safe',ic:'🛡️',n:'Kimga ishonamiz?',run:()=>safeGame()},{k:'mem',ic:'🃏',n:'Xotira kartalari'},{k:'puz',ic:'🧩',n:'Boshqotirma'},{k:'color',ic:'🎨',n:'Bo‘yash'},{k:'cert',ic:'🏅',n:'Sertifikat'}],
};
const _sc=(f,g,amb,extra)=>Object.assign({f, pan:[[Math.max(.2,f[0]-.15),f[1]],[Math.min(.8,f[0]+.15),f[1]-.03]], grade:g, rays:.45, ray:[.6,0], amb:amb||'birds'},extra||{});
const G_DAY='linear-gradient(160deg,rgba(255,240,170,.42),rgba(120,200,120,.2))', G_WARM='linear-gradient(160deg,rgba(255,200,120,.45),rgba(220,120,60,.22))', G_WOOD='linear-gradient(170deg,rgba(120,200,140,.35),rgba(40,90,60,.25))';
TALE.SC={
 cover:_sc([.5,.55],'linear-gradient(135deg,rgba(220,40,60,.35),rgba(255,200,90,.4))','birds'),
 q1:_sc([.5,.5],G_DAY,'birds'), q2:_sc([.5,.55],G_DAY,'birds'), q3:_sc([.5,.55],G_WARM,'fire',{rays:0}), q4:_sc([.5,.55],G_WOOD,'birds'),
 q5:_sc([.5,.55],G_WOOD,'breeze'), q6:_sc([.5,.55],G_DAY,'breeze'), q7:_sc([.5,.55],G_WOOD,'wind',{cine:1}), q8:_sc([.5,.5],G_WOOD,'breeze'),
 q9:_sc([.5,.55],G_WOOD,'breeze'), q10:_sc([.5,.55],G_DAY,'wind'), q11:_sc([.5,.55],G_WARM,'fire',{rays:0, flicker:1}),
 q12:_sc([.5,.55],'radial-gradient(circle at 45% 60%,rgba(255,200,140,.5),rgba(180,90,60,.3) 75%)','fire',{rays:0, glow:'radial-gradient(circle at 50% 40%,rgba(255,170,80,.4),transparent 45%)', flicker:1}),
};
const mid=()=>({x:VW/2,y:R.y+R.h*.55});
TALE.FX={
  magic:{ start(){ amb=every(3,()=>add({kind:'spark',x:rnd(0,VW),y:VH+5,vy:rnd(-2.6,-1.2)*U,vx:rnd(-.3,.3),r:rnd(3,6),max:rnd(130,200),wob:.03,ph:rnd(0,6)})); tip('👆 Ekranga bosing — sehr uchqunlari!') }, tap(x,y){ burst(x,y,30,'spark',{sp:5,g:.02}); add({kind:'glow',x,y,r:60,max:25,grow:.03}); SFX.sparkle() } },
  sun:{ start(){ for(let i=0;i<8;i++) add({kind:'bfly',x:rnd(0,VW),y:rnd(VH*.2,VH*.7),vx:rnd(-.6,.6),vy:rnd(-.4,.4),r:rnd(4,7),hue:[0,330,50,200][i%4],max:1e6,ph:rnd(0,6),wob:.03}); tip('👆 Bosing — kapalaklar uchadi') }, tap(x,y){ SFX.sparkle(); for(let i=0;i<5;i++) add({kind:'bfly',x,y,vx:rnd(-3,3)*U,vy:rnd(-4,-1)*U,g:-.01,r:rnd(4,7),hue:rnd(0,360),max:140,ph:rnd(0,6),wob:.04}) } },
  hearts:{ start(){ amb=every(16,()=>{ const m=mid(); add({kind:'heart',x:m.x+rnd(-120,120)*U,y:m.y,vy:-1.2*U,vx:rnd(-.4,.4),r:rnd(4,7),max:150,wob:.03,ph:rnd(0,6)}) }); tip('👆 Do‘stlarga bosing') }, tap(x,y){ for(let i=0;i<10;i++) add({kind:'heart',x,y,vx:rnd(-2,2)*U,vy:rnd(-4,-1)*U,g:.02,r:rnd(4,7),max:90}); SFX.heart() } },
  basket:{ start(){ acts([['🧺 Savatni to‘ldir',b=>{ const m=mid(); SFX.chime(); haptic('light'); ['🍞','🥟','🍯'].forEach((e,i)=>later(i*350,()=>say({x:m.x+(i-1)*110*U,y:m.y-120*U},e))); b.textContent='✅ Tayyor!' }]]) }, tap(x,y){ SFX.pop(); burst(x,y,12,'spark',{sp:3,g:.03}) } },
  walk:{ start(){ for(let i=0;i<6;i++) add({kind:'bfly',x:rnd(0,VW),y:rnd(VH*.2,VH*.6),vx:rnd(-.6,.6),vy:rnd(-.4,.4),r:rnd(4,6),hue:rnd(0,360),max:1e6,ph:rnd(0,6),wob:.03}); tip('👆 Qushlarga bosing') }, tap(x,y){ tone(1800,0,.07,'sine',.07); tone(2300,.09,.07,'sine',.07); say({x,y:y-20},'Chirr-chirr!') } },
  wolf:{ start(){ acts([['🙅 Gaplashmaymiz!',b=>{ const m=mid(); SFX.chime(); haptic('medium'); say({x:m.x,y:m.y-160*U},'Notanish bilan gaplashmaymiz!'); b.textContent='✅ To‘g‘ri!' }]]); tip('👆 Bo‘riga bosing') }, tap(x,y){ tone(220,0,.35,'sawtooth',.05,160); say({x,y:y-20},'Hmm…') } },
  flowers:{ start(){ acts([['🛤️ Yo‘ldan chiqmaymiz!',b=>{ const m=mid(); SFX.chime(); haptic('medium'); burst(m.x,m.y,30,'spark',{sp:5,g:.02}); b.textContent='✅ Barakalla!' }]]); tip('👆 Gullarga bosing') }, tap(x,y){ SFX.pop(); burst(x,y,16,'leaf',{sp:3,g:.06,hue:rnd(300,360)}) } },
  run:{ start(){ shake(); for(let i=0;i<20;i++) add({kind:'dust',x:rnd(0,VW),y:R.y+R.h*.8,vx:rnd(-3,-1),vy:rnd(-1,0),r:rnd(8,14),max:60}); tip('👆 Bosing') }, tap(x,y){ SFX.pop(); burst(x,y,10,'dust',{sp:2,g:0,r:6}) } },
  knock:{ start(){ later(400,()=>{ [0,250,500].forEach(t=>later(t,()=>{ tone(120,0,.08,'square',.12); shake() })) }); tip('👆 Derazaga bosing') }, tap(x,y){ say({x,y:y-20},'Bu bo‘ri-ku!'); SFX.chime() } },
  help:{ start(){ acts([['📣 Yordam bering!',b=>{ const m=mid(); haptic('heavy'); tone(700,0,.3,'triangle',.1); tone(900,.3,.3,'triangle',.1); say({x:m.x,y:m.y-170*U},'Yordam bering!'); b.textContent='✅ Kattalar eshitdi!' }]]) }, tap(x,y){ SFX.pop(); burst(x,y,10,'spark',{sp:3}) } },
  axe:{ start(){ later(500,()=>{ flash(); shake(); SFX.crash(); const m=mid(); say({x:m.x,y:m.y-160*U},'Qoch-qoch!') }); tip('👆 Bosing') }, tap(x,y){ SFX.yay(); burst(x,y,20,'spark',{sp:4}) } },
  tea:{ start(){ amb=every(10,()=>{ const m=mid(); add({kind:'dust',x:m.x+rnd(-60,60)*U,y:m.y,vy:-.8*U,vx:rnd(-.2,.2),r:rnd(6,10),max:80}) }); tip('👆 Choynakka bosing') }, tap(x,y){ SFX.splash(); say({x,y:y-20},'Mazali!') } },
  fireworks:{ start(){ later(500,()=>{ fireworks(7); confetti() }); amb=every(6,()=>add({kind:'spark',x:rnd(0,VW),y:rnd(0,VH*.5),r:rnd(2,4),max:50})) }, tap(x,y){ SFX.boom((x/VW)*2-1); add({kind:'glow',x,y,r:90,max:20,grow:.02}); burst(x,y,55,'dot',{sp:5,g:.04,r:2.4,hue:rnd(0,360)}) } },
};
TALE.onSentence=function(s){ const t=s.t;
  if(/taqillatdi/.test(t)) [0,250,500].forEach(d=>later(d,()=>tone(120,0,.08,'square',.12)));
  if(/Yordam bering/.test(t)){ tone(700,0,.3,'triangle',.1); tone(900,.3,.3,'triangle',.1) }
  if(/qochdi/.test(t)){ flash(); SFX.crash() }
  if(/Barakalla|esingda/.test(t)) SFX.chime();
};
// 🛡️ O'yin: «Kimga ishonamiz?» — 6 vaziyat, xavfsiz tanlovni topish
const SAFE=[
 {q:'Ko‘chada notanish odam shirinlik berib, «yur, ketamiz» dedi.', o:['Shirinlikni olaman','Yo‘q deyman va kattalarga aytaman'], a:1},
 {q:'Bozorda oyingdan adashib qolding.', o:['Do‘kondagi xola yoki militsionerga aytaman','Yolg‘iz uyga yuraman'], a:0},
 {q:'Uyda yolg‘izsan, eshik taqilladi.', o:['Eshikni ochmayman, oyimga qo‘ng‘iroq qilaman','Darhol ochaman'], a:0},
 {q:'Notanish odam «oying meni yubordi» dedi.', o:['Ishonib, u bilan ketaman','Bormayman, oyimdan so‘rayman'], a:1},
 {q:'Do‘sting yo‘ldan chiqib, o‘rmonga kirmoqchi.', o:['Uni to‘xtataman, birga yo‘lda qolamiz','Men ham ketaman'], a:0},
 {q:'Kimdir seni qo‘rqitdi.', o:['Hech kimga aytmayman','Ota-onamga aytaman'], a:1},
];
function safeGame(){ board('',img('q5')).remove(); const vs=BOOK.games.safe||[]; let i=0, scr=0; const box=document.createElement('div'); box.className='qbox'; gtx.append(box,backBtn());
  function show(){ box.innerHTML=''; if(i>=SAFE.length){ return win('safe',scr>=6?3:scr>=4?2:1,`${scr} / ${SAFE.length} — sen ziyrak bolasan!`) }
    const it=SAFE[i]; const q=document.createElement('p'); q.className='q'; q.textContent=`${i+1}. ${it.q}`; const os=document.createElement('div'); os.className='opts'; box.append(q,os); let wrong=0;
    it.o.forEach((o,k)=>{ const bt=document.createElement('button'); bt.className='opt'; bt.textContent=o; bt.onclick=()=>{ if(k===it.a){ bt.classList.add('ok'); if(!wrong) scr++; SFX.chime(); haptic('light'); if(vs[1]) read([vs[1]]); gfx(.5,.5,40,'spark',{sp:6,g:.03}); setTimeout(()=>{ i++; show() },1100) } else { wrong++; bt.classList.remove('no'); void bt.offsetWidth; bt.classList.add('no'); SFX.wrong(); if(vs[2]) read([vs[2]]) } }; os.appendChild(bt) }) }
  show(); if(vs[0]) read([vs[0]]) }
