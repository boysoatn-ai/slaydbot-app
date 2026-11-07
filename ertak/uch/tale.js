// «Uch cho‘chqacha» — ertakka xos qism. Dvigatel (index.html) umumiy.
window.TALE={
 id:'uch', title:'Uch cho‘chqacha', suffix:'va uch cho‘chqacha', kicker:'Sehrli ertak', hero:'Mustafo', sex:'boy', girl:true,
 hallBg:'p12', puzzleImg:'cover', certPic:'card_boy', memCards:['pix','pax','puxta','boy','wolf','mom'],
 cert:{line1:'«Uch cho‘chqacha» ertagida bo‘rini aldab,', line2:'do‘stlariga g‘isht uy qurishga yordam berdi', badge:'PUXTA USTA'},
 games:[{k:'quiz',ic:'❓',n:'Savol-javob'},{k:'mem',ic:'🃏',n:'Xotira kartalari'},{k:'puz',ic:'🧩',n:'Boshqotirma'},{k:'wall',ic:'🧱',n:'G‘isht uy qur',run:()=>wall()},{k:'color',ic:'🎨',n:'Bo‘yash'},{k:'cert',ic:'🏅',n:'Sertifikat'}],
};
TALE.SC={
 sheet:{f:[.5,.55], pan:[[.25,.55],[.75,.5]], grade:'linear-gradient(160deg,rgba(255,245,190,.4),rgba(120,200,120,.2))', rays:.45, ray:[.4,0], amb:'birds'},
 B:{f:[.45,.5], pan:[[.25,.5],[.8,.55]], grade:'linear-gradient(160deg,rgba(255,230,80,.45),rgba(120,200,120,.2))', rays:.55, ray:[.5,0], amb:'birds'},
 C:{f:[.5,.5], pan:[[.3,.5],[.75,.5]], grade:'linear-gradient(160deg,rgba(255,225,120,.4),rgba(255,250,210,.2))', rays:.45, ray:[.6,0], amb:'birds', ball:[.28,.6]},
 D:{f:[.5,.55], pan:[[.3,.55],[.75,.5]], grade:'linear-gradient(160deg,rgba(255,200,120,.45),rgba(200,120,60,.25))', rays:.4, ray:[.9,.05], amb:'birds', cart:[.5,.6]},
 F:{f:[.5,.5], pan:[[.2,.55],[.7,.45]], grade:'radial-gradient(circle at 70% 40%,rgba(255,190,90,.5),rgba(80,60,150,.45) 70%)', rays:.2, ray:[.1,.1], amb:'wind', wolf:[.2,.6], mouth:[.27,.55], house:[.7,.45], window:[.72,.4], kind:'brick'},
 G:{f:[.4,.5], pan:[[.2,.5],[.75,.5]], grade:'linear-gradient(170deg,rgba(255,170,60,.4),rgba(120,70,40,.3))', rays:.3, ray:[.8,0], amb:'breeze', wolf:[.25,.55]},
 cover:{f:[.5,.58], pan:[[.35,.55],[.62,.55]], grade:'linear-gradient(135deg,rgba(120,60,220,.45),rgba(255,200,90,.4))', rays:.55, ray:[.5,0], amb:'birds', wolf:[.07,.33]},
 A:{f:[.58,.4], pan:[[.45,.45],[.62,.38]], grade:'linear-gradient(160deg,rgba(255,190,140,.45),rgba(255,140,100,.25))', rays:.35, ray:[.85,.1], amb:'fire', mom:[.6,.22]},
 p1:{f:[.5,.55], pan:[[.35,.55],[.65,.55]], grade:'linear-gradient(160deg,rgba(255,245,190,.4),rgba(120,200,120,.2))', rays:.5, ray:[.3,0], amb:'birds'},
 p2:{f:[.42,.45], pan:[[.3,.5],[.55,.45]], grade:'linear-gradient(170deg,rgba(255,160,40,.45),rgba(160,80,20,.25))', rays:.45, ray:[.6,0], amb:'breeze'},
 p3:{f:[.62,.5], pan:[[.4,.5],[.7,.5]], grade:'linear-gradient(160deg,rgba(255,225,120,.45),rgba(255,250,210,.2))', rays:.5, ray:[.5,0], amb:'birds', hut:[.62,.45]},
 p4:{f:[.45,.5], pan:[[.35,.5],[.6,.5]], grade:'linear-gradient(170deg,rgba(150,110,60,.35),rgba(80,120,60,.25))', rays:.25, ray:[.7,0], amb:'birds'},
 p5:{f:[.65,.5], pan:[[.45,.5],[.75,.45]], grade:'linear-gradient(160deg,rgba(255,170,90,.45),rgba(200,90,50,.25))', rays:.45, ray:[.9,.05], amb:'birds', house:[.72,.45]},
 E:{f:[.22,.4], pan:[[.2,.38],[.7,.55]], grade:'linear-gradient(180deg,rgba(20,35,110,.7),rgba(10,10,40,.55))', rays:0, amb:'night', dim:1, cine:1, wolf:[.2,.35], eyes:[[.17,.3],[.24,.3]], houses:[.7,.55]},
 p6:{f:[.6,.45], pan:[[.5,.42],[.85,.5]], grade:'linear-gradient(170deg,rgba(90,120,190,.45),rgba(60,80,140,.25))', rays:.15, ray:[.2,0], amb:'wind', wolf:[.55,.38], mouth:[.62,.42], house:[.84,.55], kind:'straw'},
 p7:{f:[.4,.45], pan:[[.25,.4],[.6,.5]], grade:'linear-gradient(170deg,rgba(70,90,150,.5),rgba(50,60,110,.3))', rays:.1, ray:[.6,0], amb:'wind', wolf:[.25,.4], mouth:[.33,.4], house:[.55,.5], kind:'twig'},
 p8:{f:[.6,.5], pan:[[.35,.45],[.75,.5]], grade:'radial-gradient(circle at 75% 45%,rgba(255,190,90,.5),rgba(60,80,150,.45) 70%)', rays:.2, ray:[.8,0], amb:'wind', wolf:[.3,.42], door:[.7,.55]},
 p9:{f:[.5,.4], pan:[[.4,.22],[.65,.7]], grade:'linear-gradient(180deg,rgba(40,60,150,.55),rgba(255,140,60,.25))', rays:0, amb:'drone', cine:1, glow:'radial-gradient(circle at 60% 62%,rgba(255,140,40,.55),transparent 35%)', wolf:[.4,.2], basin:[.65,.75]},
 p10:{f:[.32,.6], pan:[[.32,.6],[.85,.6]], grade:'linear-gradient(170deg,rgba(80,200,255,.45),rgba(40,120,200,.25))', rays:.2, ray:[.3,0], amb:'none', basin:[.32,.62], runner:[.88,.6]},
 p11:{f:[.5,.55], pan:[[.35,.55],[.7,.5]], grade:'linear-gradient(160deg,rgba(255,240,170,.45),rgba(255,170,90,.2))', rays:.5, ray:[.4,0], amb:'birds'},
 H:{f:[.45,.55], pan:[[.3,.5],[.65,.55]], grade:'radial-gradient(circle at 45% 60%,rgba(255,200,140,.5),rgba(180,90,60,.3) 75%)', rays:0, amb:'fire', glow:'radial-gradient(circle at 88% 40%,rgba(255,150,50,.45),transparent 40%),radial-gradient(circle at 25% 20%,rgba(255,200,120,.35),transparent 30%)', flicker:1, pot:[.42,.62]},
 p12:{f:[.5,.55], pan:[[.35,.55],[.65,.5]], grade:'linear-gradient(180deg,rgba(130,70,220,.4),rgba(255,170,80,.35))', rays:.45, ray:[.75,.15], amb:'evening'},
};

TALE.FX={
  summer:{ start(){ for(let i=0;i<12;i++) add({kind:'bfly',x:rnd(0,VW),y:rnd(VH*.15,VH*.8),vx:rnd(-.6,.6),vy:rnd(-.4,.4),r:rnd(4,7),hue:[40,330,50,200][i%4],max:1e6,ph:rnd(0,6),wob:.03}); amb=every(10,()=>add({kind:'spark',x:rnd(0,VW),y:rnd(VH*.1,VH*.6),r:rnd(2,4),max:60,hue:50})); tip('👆 Kungaboqarlarga bosing') }, tap(x,y){ SFX.sparkle(); haptic('light'); for(let i=0;i<6;i++) add({kind:'bfly',x,y,vx:rnd(-3,3)*U,vy:rnd(-4,-1)*U,g:-.01,r:rnd(4,7),hue:rnd(0,360),max:140,ph:rnd(0,6),wob:.04}); burst(x,y,14,'spark',{sp:3,g:.02,hue:50}) } },
  ball:{ start(sc){ acts([['⚽ To‘pni tep!',()=>{ const b=S(sc.ball); SFX.pop(); haptic('light'); add({kind:'dot',x:b.x,y:b.y,vx:7*U,vy:-9*U,g:.25*U,r:9,hue:0,max:90,drag:.995}); for(let i=0;i<10;i++) add({kind:'dust',x:b.x,y:b.y+10*U,vx:rnd(-2,2),vy:rnd(-1,0),r:rnd(6,10),max:40}); later(500,()=>say({x:b.x+200*U,y:b.y-120*U},'Keyin o‘ynaymiz!')) }]]) }, tap(x,y){ SFX.pop(); burst(x,y,12,'spark',{sp:3,g:.02}) } },
  cart:{ start(sc){ steps(4); amb=every(14,()=>{ const c=S(sc.cart); add({kind:'dust',x:c.x+rnd(-60,60)*U,y:c.y+40*U,vx:rnd(-1.5,0),vy:rnd(-.8,0),r:rnd(6,12),max:60}) }); tip('👆 Aravachaga bosing') }, tap(x,y){ SFX.brick(); haptic('light'); burst(x,y,8,'brick',{sp:3,g:.2,r:5}); burst(x,y,8,'dust',{sp:2,g:0,r:6}) } },
  door:{ start(sc){ steps(3); later(1300,()=>{ const d=S(sc.door); SFX.knock(1); flash('#fff3c4'); haptic('medium'); add({kind:'glow',x:d.x,y:d.y,r:140,max:40,grow:.01}); say({x:d.x,y:d.y-150*U},'Tezroq, ichkariga!') }); tip('👆 Eshikka bosing') }, tap(x,y){ SFX.knock(1); say({x,y:y-20},'Taq!'); burst(x,y,8,'dust',{sp:2,g:0,r:5}) } },
  runaway:{ start(sc){ amb=every(5,()=>add({kind:'leaf',x:rnd(0,VW),y:-10,vx:rnd(-2,-.5),vy:rnd(1,2)*U,r:rnd(4,7),hue:rnd(18,48),vr:rnd(-.1,.1),max:300,wob:.05,ph:rnd(0,6)})); later(600,()=>{ const w=S(sc.wolf); SFX.whoosh(-.5); SFX.shiver(); for(let i=0;i<24;i++) add({kind:'drop',x:w.x+rnd(-40,40)*U,y:w.y+rnd(-50,30)*U,vx:rnd(-4,2),vy:rnd(-3,1),g:.25*U,r:rnd(2,4),max:50}); say({x:w.x,y:w.y-140*U},'Ap-chxi!') }); tip('👆 Bo‘riga bosing') }, tap(x,y){ SFX.shiver(); say({x,y:y-20},'Ap-chxi!'); burst(x,y,14,'drop',{sp:4,g:.25,r:3}) } },
  magic:{ start(sc){ amb=every(3,()=>add({kind:'spark',x:rnd(0,VW),y:VH+5,vy:rnd(-2.6,-1.2)*U,vx:rnd(-.3,.3),r:rnd(3,6),max:rnd(130,200),wob:.03,ph:rnd(0,6)})); later(900,()=>{ const w=S(sc.wolf); add({kind:'eye',x:w.x-8*U,y:w.y,r:4,max:220}); add({kind:'eye',x:w.x+14*U,y:w.y,r:4,max:220}) }); tip('👆 Ekranga bosing — sehr uchqunlari!') }, tap(x,y){ burst(x,y,30,'spark',{sp:5,g:.02}); add({kind:'glow',x,y,r:60,max:25,grow:.03}); SFX.sparkle() } },
  hearts:{ start(sc){ amb=every(18,()=>{ const m=S(sc.mom); add({kind:'heart',x:m.x+rnd(-60,60)*U,y:m.y+60*U,vy:-1.2*U,vx:rnd(-.4,.4),r:rnd(4,7),max:150,wob:.03,ph:rnd(0,6)}) }); tip('👆 Onajonga bosing') }, tap(x,y){ for(let i=0;i<10;i++) add({kind:'heart',x,y,vx:rnd(-2,2)*U,vy:rnd(-4,-1)*U,g:.02,r:rnd(4,7),max:90}); SFX.heart() } },
  oink:{ start(){ tip('👆 Cho‘chqachalarga bosing') ; amb=every(12,()=>add({kind:'spark',x:rnd(0,VW),y:rnd(VH*.1,VH*.6),r:rnd(2,4),max:60,hue:330}))}, tap(x,y){ SFX.oink((x/VW)*2-1); haptic('light'); say({x,y:y-20},['Xrr-xrr!','Salom!','Do‘st bo‘lamiz!'][Math.floor(Math.random()*3)]); burst(x,y,14,'spark',{hue:330,sp:4,g:.03}) } },
  leaves:{ start(){ tip('👆 Bosing — shamol esadi'); amb=every(4,()=>add({kind:'leaf',x:rnd(0,VW),y:-10,vx:rnd(-1,1),vy:rnd(.8,1.7)*U,r:rnd(4,7),hue:rnd(18,48),vr:rnd(-.08,.08),max:340,wob:.05,ph:rnd(0,6)})) }, tap(x,y){ SFX.whoosh((x/VW)*2-1); for(let i=0;i<34;i++) add({kind:'leaf',x,y,vx:rnd(-7,7)*U,vy:rnd(-8,-1)*U,g:.08*U,r:rnd(4,7),hue:rnd(18,48),vr:rnd(-.3,.3),max:130}) } },
  straw:{ start(sc){ tip('👆 Bosing — Pix qo‘shiq aytadi'); amb=every(16,()=>{ const h=S(sc.hut); add({kind:'note',x:h.x+rnd(-80,80)*U,y:h.y+40*U,vy:-1.3*U,vx:rnd(-.6,.6),r:rnd(4,6),max:120,ch:Math.random()<.5?'♪':'♫',wob:.04,ph:rnd(0,6)}) }) }, tap(x,y){ [784,988,1175,1568].forEach((f,i)=>tone(f,i*.11,.25,'triangle',.08)); for(let i=0;i<7;i++) add({kind:'note',x,y,vx:rnd(-2,2)*U,vy:rnd(-3,-1)*U,r:rnd(4,6),max:80,ch:'♪'}) } },
  twigs:{ start(){ amb=every(10,()=>add({kind:'leaf',x:rnd(0,VW),y:-10,vx:rnd(-1,1),vy:rnd(1,2)*U,r:rnd(4,6),hue:rnd(25,45),vr:.05,max:280,wob:.04,ph:rnd(0,6)})); tip('👆 Bosing') }, tap(x,y){ SFX.brick(); burst(x,y,12,'twig',{sp:4,g:.15,r:3}) } },
  bricks:{ start(sc){ let n=0; acts([['🧱 G‘isht qo‘y (0/6)',b=>{ if(n>=6) return; n++; const h=S(sc.house), x=h.x+rnd(-90,90)*U, y=h.y+rnd(-20,60)*U; add({kind:'brick',x,y:-30,vy:16*U,r:10,max:Math.max(4,Math.floor((y+30)/(16*U)))}); later(Math.max(4,(y+30)/(16*U))*16,()=>{ SFX.brick(); haptic('light'); for(let i=0;i<9;i++) add({kind:'dust',x,y,vx:rnd(-2,2),vy:rnd(-1.5,0),r:rnd(6,11),max:40}) }); b.textContent=`🧱 G‘isht qo‘y (${n}/6)`; if(n===6) later(600,()=>{ SFX.yay(); burst(h.x,h.y,60,'spark',{sp:6,g:.03}); add({kind:'glow',x:h.x,y:h.y,r:200,max:40,grow:.01}); say({x:h.x,y:h.y-120*U},'Uy tayyor!'); b.textContent='✅ Uy tayyor!' }) }]]) }, tap(x,y){ SFX.brick(); burst(x,y,8,'dust',{sp:2,g:0,r:6}) } },
  night:{ start(sc){ for(let i=0;i<18;i++) add({kind:'fly',x:rnd(0,VW),y:rnd(VH*.2,VH*.9),vx:rnd(-.3,.3),vy:rnd(-.3,.3),r:rnd(1.6,2.6),max:1e6,ph:rnd(0,6),wob:.01}); later(600,()=>{ sc.eyes.forEach(e=>{ const p=S(e); add({kind:'eye',x:p.x,y:p.y,r:5,max:1e6}) }); SFX.growl() }); steps(3); tip('👆 Bo‘riga bosing') }, tap(x,y){ SFX.growl(); haptic('medium'); say({x,y},'Ana, kechki ovqat!') } },
  'blow-straw':{ start(sc){ steps(4); acts([['💨 Bo‘ri puflaydi!',()=>blow(sc)]]) }, tap(x,y){ burst(x,y,12,'straw',{sp:5,g:.1}) } },
  'blow-twigs':{ start(sc){ steps(4); acts([['💨 Bo‘ri puflaydi!',()=>blow(sc)]]) }, tap(x,y){ burst(x,y,10,'twig',{sp:5,g:.12}) } },
  'blow-brick':{ start(sc){ steps(4); acts([['💨 Bo‘ri puflaydi!',()=>blow(sc)]]) }, tap(x,y){ SFX.knock(2); say({x,y},'Tak-tak!') } },
  roof:{ start(sc){ acts([['💧 Tog‘orani qo‘y!',()=>{ const b=S(sc.basin); SFX.splash(); burst(b.x,b.y,34,'drop',{sp:5,g:.25,r:3}); say({x:b.x,y:b.y-90*U},'Tayyor!') }]]); later(400,()=>{ const c=S([.5,.18]); for(let i=0;i<4;i++) later(i*500,()=>add({kind:'smoke',x:c.x,y:c.y,vy:-.8*U,vx:rnd(-.3,.3),r:12,max:120})) }) }, tap(x,y){ burst(x,y,10,'dust',{sp:2,g:.05,r:6}); SFX.brick() } },
  splash:{ start(sc){ acts([['💦 Shalop!',()=>splash(sc)]]) }, tap(x,y){ burst(x,y,20,'drop',{sp:6,g:.3,r:3}); SFX.pop() } },
  build:{ start(){ amb=every(36,()=>add({kind:'brick',x:rnd(VW*.2,VW*.8),y:-15,vy:7*U,r:7,max:30})); tip('👆 Bosing') }, tap(x,y){ SFX.brick(); burst(x,y,18,'spark',{sp:4}) } },
  tea:{ start(sc){ amb=every(9,()=>{ const p=S(sc.pot); add({kind:'smoke',x:p.x+rnd(-8,8)*U,y:p.y-30*U,vy:-.9*U,vx:rnd(-.2,.2),r:rnd(5,9),max:110,wob:.02,ph:rnd(0,6)}) }); tip('👆 Piyolaga bosing') }, tap(x,y){ SFX.clink(); burst(x,y,14,'spark',{sp:3,g:.02,hue:40}) } },
  fireworks:{ start(){ later(500,()=>{ fireworks(7); confetti() }); amb=every(6,()=>add({kind:'spark',x:rnd(0,VW),y:rnd(0,VH*.5),r:rnd(2,4),max:50})) }, tap(x,y){ SFX.boom((x/VW)*2-1); add({kind:'glow',x,y,r:90,max:20,grow:.02}); burst(x,y,55,'dot',{sp:5,g:.04,r:2.4,hue:rnd(0,360)}) } },
};
TALE.onSentence=function(s,sc,p){ const t=s.t;
  if(/taqillatdi|eshikni och!/.test(t)) SFX.knock(3);
  if(/puflagan edi|puflab-puflab/.test(t)&&sc.kind) blow(sc);
  if(/shalop/.test(t)&&sc.basin&&p.fx==='splash') splash(sc);
  if(/qochib ketdi/.test(t)) SFX.whoosh(.6);
  if(/Voy, sovuq/.test(t)) SFX.shiver();
  if(/Barakalla/.test(t)) SFX.chime();
  if(/jahli chiqdi/.test(t)&&sc.wolf) cam(sc.wolf[0],sc.wolf[1],1.35,1.2);
  if(/hammadan oldin sezdi/.test(t)&&sc.basin) cam(sc.basin[0],sc.basin[1],1.25,1.2);
}
function wall(){ const b=board('cv'); const c=document.createElement('canvas'); b.appendChild(c); const r=gpos(), w=r.width, h=r.height; c.width=w*2; c.height=h*2; const g=c.getContext('2d'); g.scale(2,2);
  const bw=w/8, bh=h/12, rows=4, cols=5, x0=w*.5-cols*bw/2, y0=h*.86; let n=0, drop=null, done=false;
  const brickAt=(x,y)=>{ g.fillStyle='#c4532f'; g.fillRect(x+1,y+1,bw-2,bh-2); g.strokeStyle='#7b2e15'; g.lineWidth=2; g.strokeRect(x+1,y+1,bw-2,bh-2); g.fillStyle='#ffffff22'; g.fillRect(x+3,y+3,bw-6,3) };
  const pos=i=>{ const rr=Math.floor(i/cols), cc=i%cols; return [x0+cc*bw+(rr%2?bw*.12:0), y0-(rr+1)*bh] };
  function scene(){ g.clearRect(0,0,w,h); const s=g.createLinearGradient(0,0,0,h); s.addColorStop(0,'#7ec8ff'); s.addColorStop(1,'#d8f0ff'); g.fillStyle=s; g.fillRect(0,0,w,h); g.fillStyle='#ffe066'; g.beginPath(); g.arc(w*.85,h*.15,h*.07,0,7); g.fill(); g.fillStyle='#6abf4b'; g.fillRect(0,y0,w,h-y0);
    for(let i=0;i<n;i++){ const [x,y]=pos(i); brickAt(x,y) }
    if(n>=rows*cols){ g.fillStyle='#a8362a'; g.beginPath(); g.moveTo(x0-bw*.4,y0-rows*bh); g.lineTo(x0+cols*bw/2,y0-rows*bh-bh*2.6); g.lineTo(x0+cols*bw+bw*.5,y0-rows*bh); g.fill(); g.fillStyle='#6b3b1a'; g.fillRect(x0+cols*bw/2-bw*.35,y0-bh*2,bw*.7,bh*2) }
    if(drop) brickAt(drop.x,drop.y) }
  function tap(){ if(drop||done) return; const [tx,ty]=pos(n); drop={x:tx,y:-bh}; SFX.whoosh();
    (function fall(){ drop.y+=Math.max(6,(ty-drop.y)*.18); if(drop.y>=ty-1){ drop=null; n++; SFX.brick(); haptic('light'); burst(r.left+tx+bw/2,r.top+ty+bh,10,'dust',{sp:2,g:0,r:6}); scene(); $('#wn').textContent=n; if(n>=rows*cols) finish(); return } scene(); requestAnimationFrame(fall) })() }
  function finish(){ done=true; scene(); SFX.yay(); later(700,()=>{ for(let i=0;i<30;i++) add({kind:'gust',x:r.left+rnd(-50,w*.2),y:r.top+rnd(h*.3,h*.85),vx:rnd(9,14)*U,r:rnd(4,8),max:90}); SFX.wind(2) }); later(2200,()=>{ say({x:r.left+w*.5,y:r.top+h*.25},'Bo‘ri puflasa ham qulamaydi!'); win('wall',3,'G‘isht uy tayyor! Hech qanday bo‘ri qo‘rqinchli emas!') }) }
  c.addEventListener('pointerdown',()=>{ A(); tap() }); scene(); gtx.innerHTML=`<p class="q">Ekranni bosib, g‘isht qo‘y! <span id="wn">0</span> / ${rows*cols}</p>`; gtx.appendChild(backBtn()) }
