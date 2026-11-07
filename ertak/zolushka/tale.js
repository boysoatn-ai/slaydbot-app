// «Zolushka» — ertakka xos qism (make_tale.py). Dvigatel (index.html) umumiy.
window.TALE={
 id:'zolushka', title:"Zolushka", suffix:"va Zolushka", kicker:'Sehrli ertak', hero:'Mustafo', sex:'boy', girl:false,
 hallBg:'c12', puzzleImg:'cover', certPic:'card_boy', memCards:["zolushka", "momo", "boy", "arava", "soat", "qovoq"],
 cert:{line1:"«Zolushka» ertagida sehrgar Momoga shogird bo‘lib,", line2:"Zolushkaga yordam berdi va uni o‘z vaqtida uyiga qaytardi", badge:"MEHRIBON YORDAMCHI"},
 games:[{k:'quiz',ic:'❓',n:'Savol-javob'},{k:'kind',ic:'🎃',n:"Mehribonlik ishlari",run:()=>choiceGame()},{k:'mem',ic:'🃏',n:'Xotira kartalari'},{k:'puz',ic:'🧩',n:'Boshqotirma'},{k:'color',ic:'🎨',n:'Bo‘yash'},{k:'cert',ic:'🏅',n:'Sertifikat'}],
};
const _sc=(f,g,amb,extra)=>Object.assign({f, pan:[[Math.max(.2,f[0]-.15),f[1]],[Math.min(.8,f[0]+.15),f[1]-.03]], grade:g, rays:.45, ray:[.6,0], amb:amb||'birds'},extra||{});
const G_DAY='linear-gradient(160deg,rgba(255,240,170,.42),rgba(120,200,120,.2))', G_WARM='linear-gradient(160deg,rgba(255,200,120,.45),rgba(220,120,60,.22))', G_WOOD='linear-gradient(170deg,rgba(120,200,140,.35),rgba(40,90,60,.25))', G_NIGHT='linear-gradient(170deg,rgba(80,90,200,.35),rgba(20,20,60,.3))';
TALE.SC={
 cover:_sc([.5,.55],G_DAY,'birds'),
 c1:_sc([.5,.55],G_DAY,'birds'),
 c2:_sc([.5,.55],G_DAY,'birds'),
 c3:_sc([.5,.55],G_DAY,'birds'),
 c4:_sc([.5,.55],G_DAY,'birds'),
 c5:_sc([.5,.55],G_DAY,'birds'),
 c6:_sc([.5,.55],G_DAY,'birds'),
 c7:_sc([.5,.55],G_DAY,'birds'),
 c8:_sc([.5,.55],G_DAY,'birds'),
 c9:_sc([.5,.55],G_DAY,'birds'),
 c10:_sc([.5,.55],G_DAY,'birds'),
 c11:_sc([.5,.55],G_DAY,'birds'),
 c12:_sc([.5,.55],'radial-gradient(circle at 45% 60%,rgba(255,200,140,.5),rgba(180,90,60,.3) 75%)','fire',{rays:0, flicker:1}),
};
const mid=()=>({x:VW/2,y:R.y+R.h*.55});
TALE.FX={
  magic:{ start(){ amb=every(3,()=>add({kind:'spark',x:rnd(0,VW),y:VH+5,vy:rnd(-2.6,-1.2)*U,vx:rnd(-.3,.3),r:rnd(3,6),max:rnd(130,200),wob:.03,ph:rnd(0,6)})); tip('👆 Ekranga bosing — sehr uchqunlari!') }, tap(x,y){ burst(x,y,30,'spark',{sp:5,g:.02}); add({kind:'glow',x,y,r:60,max:25,grow:.03}); SFX.sparkle() } },
  sun:{ start(){ for(let i=0;i<8;i++) add({kind:'bfly',x:rnd(0,VW),y:rnd(VH*.2,VH*.7),vx:rnd(-.6,.6),vy:rnd(-.4,.4),r:rnd(4,7),hue:[0,330,50,200][i%4],max:1e6,ph:rnd(0,6),wob:.03}); tip('👆 Bosing — kapalaklar uchadi') }, tap(x,y){ SFX.sparkle(); for(let i=0;i<5;i++) add({kind:'bfly',x,y,vx:rnd(-3,3)*U,vy:rnd(-4,-1)*U,g:-.01,r:rnd(4,7),hue:rnd(0,360),max:140,ph:rnd(0,6),wob:.04}) } },
  fireworks:{ start(){ later(500,()=>{ fireworks(7); confetti() }); amb=every(6,()=>add({kind:'spark',x:rnd(0,VW),y:rnd(0,VH*.5),r:rnd(2,4),max:50})) }, tap(x,y){ SFX.boom((x/VW)*2-1); add({kind:'glow',x,y,r:90,max:20,grow:.02}); burst(x,y,55,'dot',{sp:5,g:.04,r:2.4,hue:rnd(0,360)}) } },
  work:{ start(){ amb=every(9,()=>add({kind:'spark',x:rnd(0,VW),y:rnd(VH*.1,VH*.7),vx:rnd(-.3,.3),vy:rnd(-.6,-.2)*U,r:rnd(2,4),max:rnd(70,120),wob:.03,ph:rnd(0,6)})); tip("👆 Qushlarga bosing") }, tap(x,y){ SFX.pop(); tone(rnd(700,1300),0,.12,'triangle',.06); say({x,y:y-20},"Chirr-chirr!"); burst(x,y,22,'spark',{sp:4,g:.03}); add({kind:'glow',x,y,r:70,max:22,grow:.03}) } },
  invite:{ start(){ amb=every(9,()=>add({kind:'spark',x:rnd(0,VW),y:rnd(VH*.1,VH*.7),vx:rnd(-.3,.3),vy:rnd(-.6,-.2)*U,r:rnd(2,4),max:rnd(70,120),wob:.03,ph:rnd(0,6)})); tip("👆 Xatga bosing") }, tap(x,y){ SFX.pop(); tone(rnd(700,1300),0,.12,'triangle',.06); say({x,y:y-20},"Saroyda bayram!"); burst(x,y,22,'spark',{sp:4,g:.03}); add({kind:'glow',x,y,r:70,max:22,grow:.03}) } },
  cry:{ start(){ amb=every(9,()=>add({kind:'spark',x:rnd(0,VW),y:rnd(VH*.1,VH*.7),vx:rnd(-.3,.3),vy:rnd(-.6,-.2)*U,r:rnd(2,4),max:rnd(70,120),wob:.03,ph:rnd(0,6)})); tip("👆 Zolushkaga bosing") }, tap(x,y){ SFX.pop(); tone(rnd(700,1300),0,.12,'triangle',.06); say({x,y:y-20},"Hammasi yaxshi bo‘ladi!"); burst(x,y,22,'spark',{sp:4,g:.03}); add({kind:'glow',x,y,r:70,max:22,grow:.03}) } },
  help:{ start(){ amb=every(9,()=>add({kind:'spark',x:rnd(0,VW),y:rnd(VH*.1,VH*.7),vx:rnd(-.3,.3),vy:rnd(-.6,-.2)*U,r:rnd(2,4),max:rnd(70,120),wob:.03,ph:rnd(0,6)})); acts([["🧹 Birga ishlaymiz!",b=>{ const m=mid(); haptic('medium'); SFX.chime(); say({x:m.x,y:m.y-160*U},"Birga tez tugatamiz!"); add({kind:'glow',x:m.x,y:m.y,r:160,max:40,grow:.01}); for(let i=0;i<36;i++) add({kind:'spark',x:m.x,y:m.y,vx:rnd(-6,6)*U,vy:rnd(-8,-2)*U,g:.12*U,r:rnd(3,5),max:80}); b.textContent="✅ Ish tugadi!" }]]) }, tap(x,y){ SFX.pop(); burst(x,y,16,'spark',{sp:3}) } },
  pumpkin:{ start(){ later(500,()=>{ const m=mid(); SFX.yay(); confetti(); fireworks(3); haptic('heavy'); say({x:m.x,y:m.y-160*U},"Qovoq aravaga aylandi!") }) }, tap(x,y){ SFX.sparkle(); burst(x,y,30,'spark',{sp:5}); add({kind:'glow',x,y,r:90,max:25,grow:.03}) } },
  clock:{ start(){ amb=every(9,()=>add({kind:'spark',x:rnd(0,VW),y:rnd(VH*.1,VH*.7),vx:rnd(-.3,.3),vy:rnd(-.6,-.2)*U,r:rnd(2,4),max:rnd(70,120),wob:.03,ph:rnd(0,6)})); tip("👆 Soatga bosing") }, tap(x,y){ SFX.pop(); tone(rnd(700,1300),0,.12,'triangle',.06); say({x,y:y-20},"Tik-tak!"); burst(x,y,22,'spark',{sp:4,g:.03}); add({kind:'glow',x,y,r:70,max:22,grow:.03}) } },
  ball:{ start(){ amb=every(9,()=>add({kind:'spark',x:rnd(0,VW),y:rnd(VH*.1,VH*.7),vx:rnd(-.3,.3),vy:rnd(-.6,-.2)*U,r:rnd(2,4),max:rnd(70,120),wob:.03,ph:rnd(0,6)})); tip("👆 Bosing") }, tap(x,y){ SFX.pop(); tone(rnd(700,1300),0,.12,'triangle',.06); say({x,y:y-20},"Qanday chiroyli bayram!"); burst(x,y,22,'spark',{sp:4,g:.03}); add({kind:'glow',x,y,r:70,max:22,grow:.03}) } },
  midnight:{ start(){ amb=every(9,()=>add({kind:'spark',x:rnd(0,VW),y:rnd(VH*.1,VH*.7),vx:rnd(-.3,.3),vy:rnd(-.6,-.2)*U,r:rnd(2,4),max:rnd(70,120),wob:.03,ph:rnd(0,6)})); acts([["⏰ Vaqt bo‘ldi!",b=>{ const m=mid(); haptic('medium'); SFX.chime(); say({x:m.x,y:m.y-160*U},"Ketdik!"); add({kind:'glow',x:m.x,y:m.y,r:160,max:40,grow:.01}); for(let i=0;i<36;i++) add({kind:'spark',x:m.x,y:m.y,vx:rnd(-6,6)*U,vy:rnd(-8,-2)*U,g:.12*U,r:rnd(3,5),max:80}); b.textContent="✅ O‘z vaqtida!" }]]) }, tap(x,y){ SFX.pop(); burst(x,y,16,'spark',{sp:3}) } },
  forgive:{ start(){ amb=every(9,()=>add({kind:'spark',x:rnd(0,VW),y:rnd(VH*.1,VH*.7),vx:rnd(-.3,.3),vy:rnd(-.6,-.2)*U,r:rnd(2,4),max:rnd(70,120),wob:.03,ph:rnd(0,6)})); tip("👆 Opalarga bosing") }, tap(x,y){ SFX.pop(); tone(rnd(700,1300),0,.12,'triangle',.06); say({x,y:y-20},"Kechirdim!"); burst(x,y,22,'spark',{sp:4,g:.03}); add({kind:'glow',x,y,r:70,max:22,grow:.03}) } },
};
TALE.onSentence=function(s){ const t=s.t;
  if(/tayoqchasini/.test(t)) SFX.sparkle(); confetti();
  if(/o‘n ikki/.test(t)) tone(880,0,.3,'triangle',.07);
  if(/Barakalla|esingda/.test(t)) SFX.chime();
};
// 🎃 O'yin: «Mehribonlik ishlari»
const CHOICES=[
 {q:"Buvingga stul olib berish.", o:["Mehribonlik 💖", "Mehribonlik emas"], a:0},
 {q:"Ukangning o‘yinchog‘ini tortib olish.", o:["Mehribonlik 💖", "Mehribonlik emas"], a:1},
 {q:"Oying charchaganda yordam berish.", o:["Mehribonlik 💖", "Mehribonlik emas"], a:0},
 {q:"Do‘sting yiqilganda kulish.", o:["Mehribonlik 💖", "Mehribonlik emas"], a:1},
 {q:"Qushlarga don berish.", o:["Mehribonlik 💖", "Mehribonlik emas"], a:0},
 {q:"Seni xafa qilgan do‘st kechirim so‘rasa, kechirish.", o:["Mehribonlik 💖", "Mehribonlik emas"], a:0},
];
function choiceGame(){ board('',img('c6')).remove(); const vs=BOOK.games.kind||[]; let i=0, scr=0; const box=document.createElement('div'); box.className='qbox'; gtx.append(box,backBtn());
  function show(){ box.innerHTML=''; if(i>=CHOICES.length){ return win('kind',scr>=CHOICES.length?3:scr>=CHOICES.length-2?2:1,`${scr} / ${CHOICES.length} — sen mehribon bolasan!`) }
    const it=CHOICES[i]; const q=document.createElement('p'); q.className='q'; q.textContent=`${i+1}. ${it.q}`; const os=document.createElement('div'); os.className='opts'; box.append(q,os); let wrong=0;
    it.o.forEach((o,k)=>{ const bt=document.createElement('button'); bt.className='opt'; bt.textContent=o; bt.onclick=()=>{ if(k===it.a){ bt.classList.add('ok'); if(!wrong) scr++; SFX.chime(); haptic('light'); if(vs[1]) read([vs[1]]); gfx(.5,.5,40,'spark',{sp:6,g:.03}); setTimeout(()=>{ i++; show() },1100) } else { wrong++; bt.classList.remove('no'); void bt.offsetWidth; bt.classList.add('no'); SFX.wrong(); if(vs[2]) read([vs[2]]) } }; os.appendChild(bt) }) }
  if(vs[0]) read([vs[0]],show); else show() }
