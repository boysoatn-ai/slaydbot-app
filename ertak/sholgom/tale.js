// «Katta sholg‘om» — ertakka xos qism. Dvigatel (index.html) umumiy.
window.TALE={
 id:'sholgom', title:'Katta sholg‘om', suffix:'va katta sholg‘om', kicker:'Sehrli ertak', hero:'Mustafo', sex:'boy', girl:true,
 hallBg:'s12', puzzleImg:'cover', certPic:'card_boy', memCards:['bobo','momo','boy','dog','cat','mouse'],
 cert:{line1:'«Katta sholg‘om» ertagida Bobo va Momoga', line2:'sholg‘omni sug‘urib olishda yordam berdi', badge:'ZO‘R YORDAMCHI'},
 games:[{k:'quiz',ic:'❓',n:'Savol-javob'},{k:'mem',ic:'🃏',n:'Xotira kartalari'},{k:'puz',ic:'🧩',n:'Boshqotirma'},{k:'pullg',ic:'💪',n:'Sholg‘omni tort',run:()=>pullGame()},{k:'color',ic:'🎨',n:'Bo‘yash'},{k:'cert',ic:'🏅',n:'Sertifikat'}],
};
const _sc=(f,g,amb,extra)=>Object.assign({f, pan:[[Math.max(.2,f[0]-.15),f[1]],[Math.min(.8,f[0]+.15),f[1]-.03]], grade:g, rays:.45, ray:[.6,0], amb:amb||'birds'},extra||{});
const G_DAY='linear-gradient(160deg,rgba(255,240,170,.42),rgba(120,200,120,.2))', G_WARM='linear-gradient(160deg,rgba(255,200,120,.45),rgba(220,120,60,.22))', G_AUT='linear-gradient(170deg,rgba(255,170,60,.42),rgba(160,90,30,.22))';
TALE.SC={
 cover:_sc([.5,.55],'linear-gradient(135deg,rgba(120,60,220,.4),rgba(255,200,90,.4))','birds'),
 s1:_sc([.5,.5],G_DAY,'birds'), s2:_sc([.5,.55],G_WARM,'birds'), s3:_sc([.5,.55],G_DAY,'birds'), s4:_sc([.5,.5],G_DAY,'breeze'),
 s5:_sc([.5,.55],G_AUT,'breeze'), s6:_sc([.5,.55],G_AUT,'breeze'), s7:_sc([.5,.55],G_AUT,'breeze'), s8:_sc([.5,.55],G_AUT,'breeze'),
 s9:_sc([.5,.55],G_AUT,'breeze'), s10:_sc([.5,.6],G_AUT,'breeze'), s11:_sc([.5,.55],G_AUT,'wind',{cine:1}),
 s12:_sc([.5,.55],'radial-gradient(circle at 45% 60%,rgba(255,200,140,.5),rgba(180,90,60,.3) 75%)','fire',{rays:0, glow:'radial-gradient(circle at 50% 40%,rgba(255,170,80,.4),transparent 45%)', flicker:1}),
};
const mid=()=>({x:VW/2,y:R.y+R.h*.55});
const pullFx=(n)=>({ start(){ acts([['💪 Tortamiz!',()=>{ const m=mid(); SFX.inhale(); haptic('medium'); shake(); for(let i=0;i<14;i++) add({kind:'dust',x:m.x+rnd(-140,140)*U,y:m.y+rnd(40,110)*U,vx:rnd(-2,2),vy:rnd(-1.5,0),r:rnd(8,14),max:50}); later(500,()=>say({x:m.x,y:m.y-170*U},['Uh-h-h!','Yana bir oz!','Qimirlamadi!'][Math.floor(Math.random()*3)])) }]]); tip('👆 Ekranga bosing') }, tap(x,y){ SFX.pop(); burst(x,y,12,'leaf',{sp:3,g:.08,r:5}) } });
TALE.FX={
  magic:{ start(){ amb=every(3,()=>add({kind:'spark',x:rnd(0,VW),y:VH+5,vy:rnd(-2.6,-1.2)*U,vx:rnd(-.3,.3),r:rnd(3,6),max:rnd(130,200),wob:.03,ph:rnd(0,6)})); tip('👆 Ekranga bosing — sehr uchqunlari!') }, tap(x,y){ burst(x,y,30,'spark',{sp:5,g:.02}); add({kind:'glow',x,y,r:60,max:25,grow:.03}); SFX.sparkle() } },
  sun:{ start(){ for(let i=0;i<8;i++) add({kind:'bfly',x:rnd(0,VW),y:rnd(VH*.2,VH*.7),vx:rnd(-.6,.6),vy:rnd(-.4,.4),r:rnd(4,7),hue:[40,330,50,200][i%4],max:1e6,ph:rnd(0,6),wob:.03}); tip('👆 Bosing — kapalaklar uchadi') }, tap(x,y){ SFX.sparkle(); for(let i=0;i<5;i++) add({kind:'bfly',x,y,vx:rnd(-3,3)*U,vy:rnd(-4,-1)*U,g:-.01,r:rnd(4,7),hue:rnd(0,360),max:140,ph:rnd(0,6),wob:.04}) } },
  hearts:{ start(){ amb=every(16,()=>{ const m=mid(); add({kind:'heart',x:m.x+rnd(-120,120)*U,y:m.y,vy:-1.2*U,vx:rnd(-.4,.4),r:rnd(4,7),max:150,wob:.03,ph:rnd(0,6)}) }); tip('👆 Bobo va Momoga bosing') }, tap(x,y){ for(let i=0;i<10;i++) add({kind:'heart',x,y,vx:rnd(-2,2)*U,vy:rnd(-4,-1)*U,g:.02,r:rnd(4,7),max:90}); SFX.heart() } },
  seed:{ start(){ acts([['💧 Sug‘or!',()=>{ const m=mid(); SFX.splash(); haptic('light'); for(let i=0;i<40;i++) add({kind:'drop',x:m.x+rnd(-60,60)*U,y:m.y-120*U,vx:rnd(-1,1),vy:rnd(2,5)*U,g:.25*U,r:rnd(2,4),max:50}); later(600,()=>{ add({kind:'glow',x:m.x,y:m.y+60*U,r:120,max:40,grow:.01}); say({x:m.x,y:m.y-160*U},'O‘s, sholg‘omjon!') }) }]]) }, tap(x,y){ burst(x,y,14,'drop',{sp:3,g:.25,r:3}); SFX.pop() } },
  grow:{ start(){ amb=every(12,()=>add({kind:'spark',x:rnd(0,VW),y:rnd(VH*.1,VH*.6),r:rnd(2,4),max:60,hue:50})); later(800,()=>{ const m=mid(); SFX.chime(); add({kind:'glow',x:m.x,y:m.y,r:220,max:50,grow:.01}); say({x:m.x,y:m.y-180*U},'Voy, qanday katta!') }); tip('👆 Sholg‘omga bosing') }, tap(x,y){ SFX.sparkle(); burst(x,y,24,'spark',{sp:4,g:.02,hue:120}) } },
  pull:pullFx(), call:pullFx(),
  dog:Object.assign(pullFx(),{tap(x,y){ SFX.oink(); say({x,y:y-20},'Vov-vov!'); burst(x,y,10,'spark',{sp:3}) }}),
  cat:Object.assign(pullFx(),{tap(x,y){ tone(900,0,.25,'triangle',.08,600); say({x,y:y-20},'Miyov!'); burst(x,y,10,'spark',{sp:3,hue:300}) }}),
  mouse:{ start(){ tip('👆 Sichqonchaga bosing') }, tap(x,y){ tone(2400,0,.08,'sine',.08); tone(2800,.1,.08,'sine',.08); say({x,y:y-20},'Chiy-chiy!'); burst(x,y,10,'spark',{sp:2}) } },
  final:{ start(){ acts([['🥕 Bir, ikki, uch!',b=>{ const m=mid(); SFX.inhale(); haptic('heavy'); later(700,()=>{ flash(); shake(); SFX.crash(); for(let i=0;i<60;i++) add({kind:'dust',x:m.x+rnd(-200,200)*U,y:m.y+rnd(0,120)*U,vx:rnd(-4,4),vy:rnd(-3,0),r:rnd(8,16),max:70}); for(let i=0;i<40;i++) add({kind:'leaf',x:m.x,y:m.y,vx:rnd(-8,8)*U,vy:rnd(-9,-2)*U,g:.12*U,r:rnd(4,7),hue:rnd(80,130),max:110}); say({x:m.x,y:m.y-170*U},'DUP!'); later(500,()=>{ SFX.yay(); confetti() }); b.textContent='✅ Sug‘urildi!' }) }]]) }, tap(x,y){ SFX.pop(); burst(x,y,14,'spark',{sp:4}) } },
  fireworks:{ start(){ later(500,()=>{ fireworks(7); confetti() }); amb=every(6,()=>add({kind:'spark',x:rnd(0,VW),y:rnd(0,VH*.5),r:rnd(2,4),max:50})) }, tap(x,y){ SFX.boom((x/VW)*2-1); add({kind:'glow',x,y,r:90,max:20,grow:.02}); burst(x,y,55,'dot',{sp:5,g:.04,r:2.4,hue:rnd(0,360)}) } },
};
TALE.onSentence=function(s){ const t=s.t;
  if(/Tortadi-tortadi|Tortishadi-tortishadi/.test(t)){ SFX.inhale(); later(400,()=>shake()) }
  if(/Vov-vov/.test(t)) SFX.oink();
  if(/chiyilladi/.test(t)){ tone(2400,0,.08,'sine',.08); tone(2800,.1,.08,'sine',.08) }
  if(/dup!/.test(t)){ flash(); shake(); SFX.crash(); confetti() }
  if(/Barakalla|esingda/.test(t)) SFX.chime();
};
// 💪 O'yin: tez-tez bosib sholg'omni sug'urib ol (10 soniyada 25 marta)
function pullGame(){ const b=board('cv'); const c=document.createElement('canvas'); b.appendChild(c); const r=gpos(), w=r.width, h=r.height; c.width=w*2; c.height=h*2; const g=c.getContext('2d'); g.scale(2,2);
  let n=0, need=25, t0=0, done=false;
  function scene(){ g.clearRect(0,0,w,h); const s=g.createLinearGradient(0,0,0,h); s.addColorStop(0,'#8fd3ff'); s.addColorStop(1,'#e8f7ff'); g.fillStyle=s; g.fillRect(0,0,w,h); g.fillStyle='#7a5230'; g.fillRect(0,h*.7,w,h*.3);
    const up=Math.min(1,n/need)*h*.35, cx=w*.5, cy=h*.72-up;
    g.fillStyle='#4caf50'; for(let i=-2;i<=2;i++){ g.beginPath(); g.ellipse(cx+i*14,cy-h*.16,10,h*.1,i*.25,0,7); g.fill() }
    g.fillStyle='#f3f0ff'; g.beginPath(); g.ellipse(cx,cy,h*.13,h*.12,0,0,7); g.fill(); g.fillStyle='#b65fcf'; g.beginPath(); g.ellipse(cx,cy-h*.06,h*.12,h*.06,0,Math.PI,0); g.fill();
    g.fillStyle='#2a1f3d'; g.font='800 '+Math.round(h*.06)+'px Nunito,sans-serif'; g.textAlign='center'; g.fillText(done?'Sug‘urildi! 🎉':`Bos-bos-bos! ${n}/${need}`,w/2,h*.12) }
  c.addEventListener('pointerdown',()=>{ A(); if(done) return; if(!t0) t0=performance.now(); n++; SFX.pop(); haptic('light'); burst(r.left+w*.5+rnd(-40,40),r.top+h*.7,6,'dust',{sp:2,g:0,r:6}); if(n>=need){ done=true; scene(); const sec=(performance.now()-t0)/1000; SFX.crash(); later(400,()=>win('pullg',sec<6?3:sec<10?2:1,`Sholg‘om sug‘urildi! ${sec.toFixed(1)} soniyada!`)); return } scene() });
  scene(); gtx.innerHTML='<p class="q">Ekranni tez-tez bosing — sholg‘omni birga sug‘uramiz!</p>'; gtx.appendChild(backBtn()) }
