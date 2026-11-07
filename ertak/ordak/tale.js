// «Xunuk o‘rdakcha» — ertakka xos qism (make_tale.py). Dvigatel (index.html) umumiy.
window.TALE={
 id:'ordak', title:"Xunuk o‘rdakcha", suffix:"va Xunuk o‘rdakcha", kicker:'Sehrli ertak', hero:'Mustafo', sex:'boy', girl:false,
 hallBg:'o12', puzzleImg:'cover', certPic:'card_boy', memCards:["ordak", "oqqush", "boy", "jojalar", "ona", "hovuz"],
 cert:{line1:"«Xunuk o‘rdakcha» ertagida hamma tashlab ketgan", line2:"o‘rdakchaga do‘st bo‘ldi va qish bo‘yi g‘amxo‘rlik qildi", badge:"MEHRIBON DO‘ST"},
 games:[{k:'quiz',ic:'❓',n:'Savol-javob'},{k:'kind',ic:'🦢',n:"Mehribon bo‘lamiz",run:()=>choiceGame()},{k:'mem',ic:'🃏',n:'Xotira kartalari'},{k:'puz',ic:'🧩',n:'Boshqotirma'},{k:'color',ic:'🎨',n:'Bo‘yash'},{k:'cert',ic:'🏅',n:'Sertifikat'}],
};
const _sc=(f,g,amb,extra)=>Object.assign({f, pan:[[Math.max(.2,f[0]-.15),f[1]],[Math.min(.8,f[0]+.15),f[1]-.03]], grade:g, rays:.45, ray:[.6,0], amb:amb||'birds'},extra||{});
const G_DAY='linear-gradient(160deg,rgba(255,240,170,.42),rgba(120,200,120,.2))', G_WARM='linear-gradient(160deg,rgba(255,200,120,.45),rgba(220,120,60,.22))', G_WOOD='linear-gradient(170deg,rgba(120,200,140,.35),rgba(40,90,60,.25))', G_NIGHT='linear-gradient(170deg,rgba(80,90,200,.35),rgba(20,20,60,.3))';
TALE.SC={
 cover:_sc([.5,.55],G_DAY,'birds'),
 o1:_sc([.5,.55],G_DAY,'birds'),
 o2:_sc([.5,.55],G_DAY,'birds'),
 o3:_sc([.5,.55],G_DAY,'birds'),
 o4:_sc([.5,.55],G_DAY,'birds'),
 o5:_sc([.5,.55],G_DAY,'birds'),
 o6:_sc([.5,.55],G_DAY,'birds'),
 o7:_sc([.5,.55],G_DAY,'birds'),
 o8:_sc([.5,.55],G_DAY,'birds'),
 o9:_sc([.5,.55],G_DAY,'birds'),
 o10:_sc([.5,.55],G_DAY,'birds'),
 o11:_sc([.5,.55],G_DAY,'birds'),
 o12:_sc([.5,.55],'radial-gradient(circle at 45% 60%,rgba(255,200,140,.5),rgba(180,90,60,.3) 75%)','fire',{rays:0, flicker:1}),
};
const mid=()=>({x:VW/2,y:R.y+R.h*.55});
TALE.FX={
  magic:{ start(){ amb=every(3,()=>add({kind:'spark',x:rnd(0,VW),y:VH+5,vy:rnd(-2.6,-1.2)*U,vx:rnd(-.3,.3),r:rnd(3,6),max:rnd(130,200),wob:.03,ph:rnd(0,6)})); tip('👆 Ekranga bosing — sehr uchqunlari!') }, tap(x,y){ burst(x,y,30,'spark',{sp:5,g:.02}); add({kind:'glow',x,y,r:60,max:25,grow:.03}); SFX.sparkle() } },
  sun:{ start(){ for(let i=0;i<8;i++) add({kind:'bfly',x:rnd(0,VW),y:rnd(VH*.2,VH*.7),vx:rnd(-.6,.6),vy:rnd(-.4,.4),r:rnd(4,7),hue:[0,330,50,200][i%4],max:1e6,ph:rnd(0,6),wob:.03}); tip('👆 Bosing — kapalaklar uchadi') }, tap(x,y){ SFX.sparkle(); for(let i=0;i<5;i++) add({kind:'bfly',x,y,vx:rnd(-3,3)*U,vy:rnd(-4,-1)*U,g:-.01,r:rnd(4,7),hue:rnd(0,360),max:140,ph:rnd(0,6),wob:.04}) } },
  hearts:{ start(){ amb=every(16,()=>{ const m=mid(); add({kind:'heart',x:m.x+rnd(-120,120)*U,y:m.y,vy:-1.2*U,vx:rnd(-.4,.4),r:rnd(4,7),max:150,wob:.03,ph:rnd(0,6)}) }); tip('👆 Do‘stlarga bosing') }, tap(x,y){ for(let i=0;i<10;i++) add({kind:'heart',x,y,vx:rnd(-2,2)*U,vy:rnd(-4,-1)*U,g:.02,r:rnd(4,7),max:90}); SFX.heart() } },
  fireworks:{ start(){ later(500,()=>{ fireworks(7); confetti() }); amb=every(6,()=>add({kind:'spark',x:rnd(0,VW),y:rnd(0,VH*.5),r:rnd(2,4),max:50})) }, tap(x,y){ SFX.boom((x/VW)*2-1); add({kind:'glow',x,y,r:90,max:20,grow:.02}); burst(x,y,55,'dot',{sp:5,g:.04,r:2.4,hue:rnd(0,360)}) } },
  egg:{ start(){ acts([["🥚 Tuxumni chiqar",b=>{ const m=mid(); haptic('medium'); SFX.chime(); say({x:m.x,y:m.y-160*U},"Pip-pip!"); add({kind:'glow',x:m.x,y:m.y,r:140,max:35,grow:.01}); b.textContent="✅ O‘rdakcha chiqdi!" }]]) }, tap(x,y){ SFX.pop(); burst(x,y,10,'spark',{sp:3}) } },
  mock:{ start(){ tip("👆 O‘rdakchaga bosing") }, tap(x,y){ SFX.pop(); say({x,y:y-20},"Men ham sizga o‘xshashni xohlayman…"); burst(x,y,14,'spark',{sp:3}) } },
  friend:{ start(){ acts([["🤝 Do‘st bo‘lamiz!",b=>{ const m=mid(); haptic('medium'); SFX.chime(); say({x:m.x,y:m.y-160*U},"Kel, do‘st bo‘lamiz!"); add({kind:'glow',x:m.x,y:m.y,r:140,max:35,grow:.01}); b.textContent="✅ Do‘st topildi!" }]]) }, tap(x,y){ SFX.pop(); burst(x,y,10,'spark',{sp:3}) } },
  autumn:{ start(){ tip("👆 Qushlarga bosing") }, tap(x,y){ SFX.pop(); say({x,y:y-20},"Qanday go‘zal!"); burst(x,y,14,'spark',{sp:3}) } },
  winter:{ start(){ tip("👆 Bosing") }, tap(x,y){ SFX.pop(); say({x,y:y-20},"Brr, sovuq…"); burst(x,y,14,'spark',{sp:3}) } },
  warm:{ start(){ acts([["🧣 Isitib qo‘y",b=>{ const m=mid(); haptic('medium'); SFX.chime(); say({x:m.x,y:m.y-160*U},"Endi issiq!"); add({kind:'glow',x:m.x,y:m.y,r:140,max:35,grow:.01}); b.textContent="✅ Barakalla!" }]]) }, tap(x,y){ SFX.pop(); burst(x,y,10,'spark',{sp:3}) } },
  spring:{ start(){ tip("👆 Suvga bosing") }, tap(x,y){ SFX.pop(); say({x,y:y-20},"Bu menmi?"); burst(x,y,14,'spark',{sp:3}) } },
  swan:{ start(){ later(500,()=>{ const m=mid(); SFX.yay(); confetti(); say({x:m.x,y:m.y-160*U},"Oqqush bo‘lib ketdi!") }) }, tap(x,y){ SFX.sparkle(); burst(x,y,20,'spark',{sp:4}) } },
  thanks:{ start(){ tip("👆 Oqqushga bosing") }, tap(x,y){ SFX.pop(); say({x,y:y-20},"Rahmat, do‘stim!"); burst(x,y,14,'spark',{sp:3}) } },
};
TALE.onSentence=function(s){ const t=s.t;
  if(/Pip|jo‘jalar/.test(t)) tone(1800,0,.06,'sine',.07);
  if(/oqqush suzib/.test(t)) SFX.yay(); confetti();
  if(/Barakalla|esingda/.test(t)) SFX.chime();
};
// 🦢 O'yin: «Mehribon bo‘lamiz»
const CHOICES=[
 {q:"Bog‘chaga ko‘zoynak taqqan yangi bola keldi.", o:["Ustidan kulaman", "U bilan tanishib, o‘ynayman"], a:1},
 {q:"Do‘stingning ko‘ylagi eski.", o:["Masxara qilaman", "Hech narsa demayman, birga o‘ynayman"], a:1},
 {q:"Bir bola yolg‘iz o‘tiribdi.", o:["O‘yinga chaqiraman", "E’tibor bermayman"], a:0},
 {q:"Kimdir boshqa tilda gapiryapti.", o:["Kulaman", "Qiziqib, salom berishni o‘rganaman"], a:1},
 {q:"Do‘sting yugurishda sekin.", o:["Kutib turaman", "Tashlab ketaman"], a:0},
 {q:"Bolalar bir bolani masxara qilishyapti.", o:["Men ham qo‘shilaman", "Bunday qilmanglar, deyman"], a:1},
];
function choiceGame(){ board('',img('o5')).remove(); const vs=BOOK.games.kind||[]; let i=0, scr=0; const box=document.createElement('div'); box.className='qbox'; gtx.append(box,backBtn());
  function show(){ box.innerHTML=''; if(i>=CHOICES.length){ return win('kind',scr>=CHOICES.length?3:scr>=CHOICES.length-2?2:1,`${scr} / ${CHOICES.length} — sen mehribon bolasan!`) }
    const it=CHOICES[i]; const q=document.createElement('p'); q.className='q'; q.textContent=`${i+1}. ${it.q}`; const os=document.createElement('div'); os.className='opts'; box.append(q,os); let wrong=0;
    it.o.forEach((o,k)=>{ const bt=document.createElement('button'); bt.className='opt'; bt.textContent=o; bt.onclick=()=>{ if(k===it.a){ bt.classList.add('ok'); if(!wrong) scr++; SFX.chime(); haptic('light'); if(vs[1]) read([vs[1]]); gfx(.5,.5,40,'spark',{sp:6,g:.03}); setTimeout(()=>{ i++; show() },1100) } else { wrong++; bt.classList.remove('no'); void bt.offsetWidth; bt.classList.add('no'); SFX.wrong(); if(vs[2]) read([vs[2]]) } }; os.appendChild(bt) }) }
  if(vs[0]) read([vs[0]],show); else show() }
