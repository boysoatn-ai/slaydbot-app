// «Jek va loviya poyasi» — ertakka xos qism (make_tale.py). Dvigatel (index.html) umumiy.
window.TALE={
 id:'jek', title:"Jek va loviya poyasi", suffix:"va sehrli loviya", kicker:'Sehrli ertak', hero:'Mustafo', sex:'boy', girl:false,
 hallBg:'j12', puzzleImg:'cover', certPic:'card_boy', memCards:["jek", "dev", "boy", "tovuq", "loviya", "ona"],
 cert:{line1:"«Jek va loviya poyasi» ertagida do‘stini", line2:"noto‘g‘ri ishdan to‘xtatdi va yolg‘iz Devga do‘st bo‘ldi", badge:"HALOL DO‘ST"},
 games:[{k:'quiz',ic:'❓',n:'Savol-javob'},{k:'honest',ic:'🫘',n:"Halolmi?",run:()=>choiceGame()},{k:'mem',ic:'🃏',n:'Xotira kartalari'},{k:'puz',ic:'🧩',n:'Boshqotirma'},{k:'color',ic:'🎨',n:'Bo‘yash'},{k:'cert',ic:'🏅',n:'Sertifikat'}],
};
const _sc=(f,g,amb,extra)=>Object.assign({f, pan:[[Math.max(.2,f[0]-.15),f[1]],[Math.min(.8,f[0]+.15),f[1]-.03]], grade:g, rays:.45, ray:[.6,0], amb:amb||'birds'},extra||{});
const G_DAY='linear-gradient(160deg,rgba(255,240,170,.42),rgba(120,200,120,.2))', G_WARM='linear-gradient(160deg,rgba(255,200,120,.45),rgba(220,120,60,.22))', G_WOOD='linear-gradient(170deg,rgba(120,200,140,.35),rgba(40,90,60,.25))', G_NIGHT='linear-gradient(170deg,rgba(80,90,200,.35),rgba(20,20,60,.3))';
TALE.SC={
 cover:_sc([.5,.55],G_DAY,'birds'),
 j1:_sc([.5,.55],G_DAY,'birds'),
 j2:_sc([.5,.55],G_DAY,'birds'),
 j3:_sc([.5,.55],G_DAY,'birds'),
 j4:_sc([.5,.55],G_DAY,'birds'),
 j5:_sc([.5,.55],G_DAY,'birds'),
 j6:_sc([.5,.55],G_DAY,'birds'),
 j7:_sc([.5,.55],G_DAY,'birds'),
 j8:_sc([.5,.55],G_DAY,'birds'),
 j9:_sc([.5,.55],G_DAY,'birds'),
 j10:_sc([.5,.55],G_DAY,'birds'),
 j11:_sc([.5,.55],G_DAY,'birds'),
 j12:_sc([.5,.55],'radial-gradient(circle at 45% 60%,rgba(255,200,140,.5),rgba(180,90,60,.3) 75%)','fire',{rays:0, flicker:1}),
};
const mid=()=>({x:VW/2,y:R.y+R.h*.55});
TALE.FX={
  magic:{ start(){ amb=every(3,()=>add({kind:'spark',x:rnd(0,VW),y:VH+5,vy:rnd(-2.6,-1.2)*U,vx:rnd(-.3,.3),r:rnd(3,6),max:rnd(130,200),wob:.03,ph:rnd(0,6)})); tip('👆 Ekranga bosing — sehr uchqunlari!') }, tap(x,y){ burst(x,y,30,'spark',{sp:5,g:.02}); add({kind:'glow',x,y,r:60,max:25,grow:.03}); SFX.sparkle() } },
  sun:{ start(){ for(let i=0;i<8;i++) add({kind:'bfly',x:rnd(0,VW),y:rnd(VH*.2,VH*.7),vx:rnd(-.6,.6),vy:rnd(-.4,.4),r:rnd(4,7),hue:[0,330,50,200][i%4],max:1e6,ph:rnd(0,6),wob:.03}); tip('👆 Bosing — kapalaklar uchadi') }, tap(x,y){ SFX.sparkle(); for(let i=0;i<5;i++) add({kind:'bfly',x,y,vx:rnd(-3,3)*U,vy:rnd(-4,-1)*U,g:-.01,r:rnd(4,7),hue:rnd(0,360),max:140,ph:rnd(0,6),wob:.04}) } },
  hearts:{ start(){ amb=every(16,()=>{ const m=mid(); add({kind:'heart',x:m.x+rnd(-120,120)*U,y:m.y,vy:-1.2*U,vx:rnd(-.4,.4),r:rnd(4,7),max:150,wob:.03,ph:rnd(0,6)}) }); tip('👆 Do‘stlarga bosing') }, tap(x,y){ for(let i=0;i<10;i++) add({kind:'heart',x,y,vx:rnd(-2,2)*U,vy:rnd(-4,-1)*U,g:.02,r:rnd(4,7),max:90}); SFX.heart() } },
  fireworks:{ start(){ later(500,()=>{ fireworks(7); confetti() }); amb=every(6,()=>add({kind:'spark',x:rnd(0,VW),y:rnd(0,VH*.5),r:rnd(2,4),max:50})) }, tap(x,y){ SFX.boom((x/VW)*2-1); add({kind:'glow',x,y,r:90,max:20,grow:.02}); burst(x,y,55,'dot',{sp:5,g:.04,r:2.4,hue:rnd(0,360)}) } },
  market:{ start(){ amb=every(9,()=>add({kind:'spark',x:rnd(0,VW),y:rnd(VH*.1,VH*.7),vx:rnd(-.3,.3),vy:rnd(-.6,-.2)*U,r:rnd(2,4),max:rnd(70,120),wob:.03,ph:rnd(0,6)})); tip("👆 Cholga bosing") }, tap(x,y){ SFX.pop(); tone(rnd(700,1300),0,.12,'triangle',.06); say({x,y:y-20},"Sehrli loviya!"); burst(x,y,22,'spark',{sp:4,g:.03}); add({kind:'glow',x,y,r:70,max:22,grow:.03}) } },
  beans:{ start(){ amb=every(9,()=>add({kind:'spark',x:rnd(0,VW),y:rnd(VH*.1,VH*.7),vx:rnd(-.3,.3),vy:rnd(-.6,-.2)*U,r:rnd(2,4),max:rnd(70,120),wob:.03,ph:rnd(0,6)})); tip("👆 Loviyaga bosing") }, tap(x,y){ SFX.pop(); tone(rnd(700,1300),0,.12,'triangle',.06); say({x,y:y-20},"Pak!"); burst(x,y,22,'spark',{sp:4,g:.03,hue:50}); add({kind:'glow',x,y,r:70,max:22,grow:.03}) } },
  grow:{ start(){ later(500,()=>{ const m=mid(); SFX.yay(); confetti(); fireworks(3); haptic('heavy'); say({x:m.x,y:m.y-160*U},"Osmongacha o‘sdi!") }) }, tap(x,y){ SFX.sparkle(); burst(x,y,30,'spark',{sp:5}); add({kind:'glow',x,y,r:90,max:25,grow:.03}) } },
  clouds:{ start(){ amb=every(9,()=>add({kind:'spark',x:rnd(0,VW),y:rnd(VH*.1,VH*.7),vx:rnd(-.3,.3),vy:rnd(-.6,-.2)*U,r:rnd(2,4),max:rnd(70,120),wob:.03,ph:rnd(0,6)})); tip("👆 Qasrga bosing") }, tap(x,y){ SFX.pop(); tone(rnd(700,1300),0,.12,'triangle',.06); say({x,y:y-20},"Qanday katta qasr!"); burst(x,y,22,'spark',{sp:4,g:.03}); add({kind:'glow',x,y,r:70,max:22,grow:.03}) } },
  grab:{ start(){ amb=every(9,()=>add({kind:'spark',x:rnd(0,VW),y:rnd(VH*.1,VH*.7),vx:rnd(-.3,.3),vy:rnd(-.6,-.2)*U,r:rnd(2,4),max:rnd(70,120),wob:.03,ph:rnd(0,6)})); acts([["✋ So‘ramay olmaymiz!",b=>{ const m=mid(); haptic('medium'); SFX.chime(); say({x:m.x,y:m.y-160*U},"So‘ramay olish — o‘g‘rilik!"); add({kind:'glow',x:m.x,y:m.y,r:160,max:40,grow:.01}); for(let i=0;i<36;i++) add({kind:'spark',x:m.x,y:m.y,vx:rnd(-6,6)*U,vy:rnd(-8,-2)*U,g:.12*U,r:rnd(3,5),max:80}); b.textContent="✅ Halol qaror!" }]]) }, tap(x,y){ SFX.pop(); burst(x,y,16,'spark',{sp:3}) } },
  giant:{ start(){ amb=every(9,()=>add({kind:'spark',x:rnd(0,VW),y:rnd(VH*.1,VH*.7),vx:rnd(-.3,.3),vy:rnd(-.6,-.2)*U,r:rnd(2,4),max:rnd(70,120),wob:.03,ph:rnd(0,6)})); tip("👆 Devga bosing") }, tap(x,y){ SFX.pop(); tone(rnd(700,1300),0,.12,'triangle',.06); say({x,y:y-20},"Assalomu alaykum!"); burst(x,y,22,'spark',{sp:4,g:.03}); add({kind:'glow',x,y,r:70,max:22,grow:.03}) } },
  lonely:{ start(){ amb=every(9,()=>add({kind:'spark',x:rnd(0,VW),y:rnd(VH*.1,VH*.7),vx:rnd(-.3,.3),vy:rnd(-.6,-.2)*U,r:rnd(2,4),max:rnd(70,120),wob:.03,ph:rnd(0,6)})); tip("👆 Devga bosing") }, tap(x,y){ SFX.pop(); tone(rnd(700,1300),0,.12,'triangle',.06); say({x,y:y-20},"Rahmat, bolalar!"); burst(x,y,22,'spark',{sp:4,g:.03}); add({kind:'glow',x,y,r:70,max:22,grow:.03}) } },
  gift:{ start(){ later(500,()=>{ const m=mid(); SFX.yay(); confetti(); fireworks(3); haptic('heavy'); say({x:m.x,y:m.y-160*U},"Tilla tuxum — sovg‘a!") }) }, tap(x,y){ SFX.sparkle(); burst(x,y,30,'spark',{sp:5}); add({kind:'glow',x,y,r:90,max:25,grow:.03}) } },
  home:{ start(){ amb=every(9,()=>add({kind:'spark',x:rnd(0,VW),y:rnd(VH*.1,VH*.7),vx:rnd(-.3,.3),vy:rnd(-.6,-.2)*U,r:rnd(2,4),max:rnd(70,120),wob:.03,ph:rnd(0,6)})); tip("👆 Onaga bosing") }, tap(x,y){ SFX.pop(); tone(rnd(700,1300),0,.12,'triangle',.06); say({x,y:y-20},"Barakalla, bolalarim!"); burst(x,y,22,'spark',{sp:4,g:.03}); add({kind:'glow',x,y,r:70,max:22,grow:.03}) } },
};
TALE.onSentence=function(s){ const t=s.t;
  if(/tilla tuxum/.test(t)) SFX.sparkle();
  if(/ulkan loviya/.test(t)) SFX.chime();
  if(/Barakalla|esingda/.test(t)) SFX.chime();
};
// 🫘 O'yin: «Halolmi?»
const CHOICES=[
 {q:"Do‘kondan to‘lamasdan konfet olish.", o:["Halol", "Halol emas"], a:1},
 {q:"Topib olgan hamyonni egasiga qaytarish.", o:["Halol", "Halol emas"], a:0},
 {q:"Do‘stingning qalamini so‘rab olish.", o:["Halol", "Halol emas"], a:0},
 {q:"Vazani sindirib, «mushuk sindirdi» deyish.", o:["Halol", "Halol emas"], a:1},
 {q:"O‘yinda yutqazsang ham qoidaga amal qilish.", o:["Halol", "Halol emas"], a:0},
 {q:"Akangning shirinligini yashirincha yeyish.", o:["Halol", "Halol emas"], a:1},
];
function choiceGame(){ board('',img('j9')).remove(); const vs=BOOK.games.honest||[]; let i=0, scr=0; const box=document.createElement('div'); box.className='qbox'; gtx.append(box,backBtn());
  function show(){ box.innerHTML=''; if(i>=CHOICES.length){ return win('honest',scr>=CHOICES.length?3:scr>=CHOICES.length-2?2:1,`${scr} / ${CHOICES.length} — sen halol bolasan!`) }
    const it=CHOICES[i]; const q=document.createElement('p'); q.className='q'; q.textContent=`${i+1}. ${it.q}`; const os=document.createElement('div'); os.className='opts'; box.append(q,os); let wrong=0;
    it.o.forEach((o,k)=>{ const bt=document.createElement('button'); bt.className='opt'; bt.textContent=o; bt.onclick=()=>{ if(k===it.a){ bt.classList.add('ok'); if(!wrong) scr++; SFX.chime(); haptic('light'); if(vs[1]) read([vs[1]]); gfx(.5,.5,40,'spark',{sp:6,g:.03}); setTimeout(()=>{ i++; show() },1100) } else { wrong++; bt.classList.remove('no'); void bt.offsetWidth; bt.classList.add('no'); SFX.wrong(); if(vs[2]) read([vs[2]]) } }; os.appendChild(bt) }) }
  if(vs[0]) read([vs[0]],show); else show() }
