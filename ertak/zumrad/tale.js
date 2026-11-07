// «Zumrad va Qimmat» — ertakka xos qism. Dvigatel (index.html) umumiy.
window.TALE={
 id:'zumrad', title:'Zumrad va Qimmat', suffix:'va mehnatkash Zumrad', kicker:'Sehrli ertak', hero:'Mustafo', sex:'boy', girl:false,
 hallBg:'z12', puzzleImg:'cover', certPic:'card_boy', memCards:['zumrad','qimmat','boy','momo','sandiq','non'],
 cert:{line1:'«Zumrad va Qimmat» ertagida Momoga', line2:'mehnat qilib yordam berdi va do‘stini qo‘llab-quvvatladi', badge:'MEHNATKASH BOLA'},
 games:[{k:'quiz',ic:'❓',n:'Savol-javob'},{k:'good',ic:'⭐',n:'Yaxshi odatmi?',run:()=>goodGame()},{k:'mem',ic:'🃏',n:'Xotira kartalari'},{k:'puz',ic:'🧩',n:'Boshqotirma'},{k:'color',ic:'🎨',n:'Bo‘yash'},{k:'cert',ic:'🏅',n:'Sertifikat'}],
};
const _sc=(f,g,amb,extra)=>Object.assign({f, pan:[[Math.max(.2,f[0]-.15),f[1]],[Math.min(.8,f[0]+.15),f[1]-.03]], grade:g, rays:.45, ray:[.6,0], amb:amb||'birds'},extra||{});
const G_DAY='linear-gradient(160deg,rgba(255,240,170,.42),rgba(120,200,120,.2))', G_WARM='linear-gradient(160deg,rgba(255,200,120,.45),rgba(220,120,60,.22))', G_WOOD='linear-gradient(170deg,rgba(120,200,140,.35),rgba(40,90,60,.25))';
TALE.SC={
 cover:_sc([.5,.55],'linear-gradient(135deg,rgba(40,160,90,.35),rgba(255,200,90,.4))','birds'),
 z1:_sc([.5,.5],G_DAY,'birds'), z2:_sc([.5,.55],G_DAY,'birds'), z3:_sc([.5,.55],G_WOOD,'breeze'), z4:_sc([.5,.55],G_WOOD,'birds'),
 z5:_sc([.5,.55],G_DAY,'birds'), z6:_sc([.5,.55],G_WARM,'fire',{rays:0, flicker:1}), z7:_sc([.5,.55],G_WARM,'fire',{rays:0}), z8:_sc([.5,.5],G_DAY,'birds'),
 z9:_sc([.5,.55],G_WOOD,'breeze'), z10:_sc([.5,.55],G_DAY,'wind'), z11:_sc([.5,.55],G_DAY,'birds'),
 z12:_sc([.5,.55],'radial-gradient(circle at 45% 60%,rgba(255,200,140,.5),rgba(180,90,60,.3) 75%)','fire',{rays:0, glow:'radial-gradient(circle at 50% 40%,rgba(255,170,80,.4),transparent 45%)', flicker:1}),
};
const mid=()=>({x:VW/2,y:R.y+R.h*.55});
TALE.FX={
  magic:{ start(){ amb=every(3,()=>add({kind:'spark',x:rnd(0,VW),y:VH+5,vy:rnd(-2.6,-1.2)*U,vx:rnd(-.3,.3),r:rnd(3,6),max:rnd(130,200),wob:.03,ph:rnd(0,6)})); tip('👆 Ekranga bosing — sehr uchqunlari!') }, tap(x,y){ burst(x,y,30,'spark',{sp:5,g:.02}); add({kind:'glow',x,y,r:60,max:25,grow:.03}); SFX.sparkle() } },
  sun:{ start(){ for(let i=0;i<8;i++) add({kind:'bfly',x:rnd(0,VW),y:rnd(VH*.2,VH*.7),vx:rnd(-.6,.6),vy:rnd(-.4,.4),r:rnd(4,7),hue:[0,330,50,200][i%4],max:1e6,ph:rnd(0,6),wob:.03}); tip('👆 Bosing — kapalaklar uchadi') }, tap(x,y){ SFX.sparkle(); for(let i=0;i<5;i++) add({kind:'bfly',x,y,vx:rnd(-3,3)*U,vy:rnd(-4,-1)*U,g:-.01,r:rnd(4,7),hue:rnd(0,360),max:140,ph:rnd(0,6),wob:.04}) } },
  hearts:{ start(){ amb=every(16,()=>{ const m=mid(); add({kind:'heart',x:m.x+rnd(-120,120)*U,y:m.y,vy:-1.2*U,vx:rnd(-.4,.4),r:rnd(4,7),max:150,wob:.03,ph:rnd(0,6)}) }); tip('👆 Do‘stlarga bosing') }, tap(x,y){ for(let i=0;i<10;i++) add({kind:'heart',x,y,vx:rnd(-2,2)*U,vy:rnd(-4,-1)*U,g:.02,r:rnd(4,7),max:90}); SFX.heart() } },
  walk:{ start(){ for(let i=0;i<6;i++) add({kind:'bfly',x:rnd(0,VW),y:rnd(VH*.2,VH*.6),vx:rnd(-.6,.6),vy:rnd(-.4,.4),r:rnd(4,6),hue:rnd(0,360),max:1e6,ph:rnd(0,6),wob:.03}); tip('👆 Qushlarga bosing') }, tap(x,y){ tone(1800,0,.07,'sine',.07); tone(2300,.09,.07,'sine',.07); say({x,y:y-20},'Chirr-chirr!') } },
  help:{ start(){ acts([['📣 Yordam bering!',b=>{ const m=mid(); haptic('heavy'); tone(700,0,.3,'triangle',.1); tone(900,.3,.3,'triangle',.1); say({x:m.x,y:m.y-170*U},'Yordam bering!'); b.textContent='✅ Kattalar eshitdi!' }]]) }, tap(x,y){ SFX.pop(); burst(x,y,10,'spark',{sp:3}) } },
  fireworks:{ start(){ later(500,()=>{ fireworks(7); confetti() }); amb=every(6,()=>add({kind:'spark',x:rnd(0,VW),y:rnd(0,VH*.5),r:rnd(2,4),max:50})) }, tap(x,y){ SFX.boom((x/VW)*2-1); add({kind:'glow',x,y,r:90,max:20,grow:.02}); burst(x,y,55,'dot',{sp:5,g:.04,r:2.4,hue:rnd(0,360)}) } },
  house:{ start(){ amb=every(14,()=>{ const m=mid(); add({kind:'dust',x:m.x+rnd(-40,40)*U,y:R.y+R.h*.3,vy:-.6*U,vx:rnd(-.2,.2),r:rnd(6,10),max:90}) }); tip('👆 Momoga bosing') }, tap(x,y){ say({x,y:y-20},'Assalomu alaykum, Momojon!'); SFX.chime() } },
  work:{ start(){ acts([['🧹 Supur!',b=>{ const m=mid(); SFX.pop(); haptic('light'); for(let i=0;i<20;i++) add({kind:'dust',x:m.x+rnd(-150,150)*U,y:m.y+rnd(40,110)*U,vx:rnd(-3,3),vy:rnd(-1.5,0),r:rnd(6,12),max:45}); b.textContent='✨ Top-toza!' }],['💧 Suv tashi',b=>{ const m=mid(); SFX.splash(); for(let i=0;i<30;i++) add({kind:'drop',x:m.x+rnd(-50,50)*U,y:m.y-100*U,vx:rnd(-1,1),vy:rnd(2,5)*U,g:.25*U,r:rnd(2,4),max:50}); b.textContent='✅ Barakalla!' }]]) }, tap(x,y){ SFX.pop(); burst(x,y,12,'spark',{sp:3}) } },
  bread:{ start(){ amb=every(9,()=>{ const m=mid(); add({kind:'dust',x:m.x+rnd(-80,80)*U,y:m.y,vy:-.9*U,vx:rnd(-.2,.2),r:rnd(6,11),max:80}) }); later(700,()=>{ const m=mid(); say({x:m.x,y:m.y-170*U},'Mmm, issiq non!') }); tip('👆 Tandirga bosing') }, tap(x,y){ SFX.chime(); burst(x,y,16,'spark',{sp:3,hue:40}) } },
  chest:{ start(){ acts([['📦 Kichkinasini olamiz',b=>{ const m=mid(); SFX.chime(); haptic('medium'); add({kind:'glow',x:m.x,y:m.y,r:160,max:40,grow:.01}); b.textContent='✅ Kamtarlik!' }]]); tip('👆 Sandiqqa bosing') }, tap(x,y){ SFX.sparkle(); burst(x,y,20,'spark',{sp:4}) } },
  gold:{ start(){ later(400,()=>{ const m=mid(); SFX.yay(); for(let i=0;i<50;i++) add({kind:'spark',x:m.x,y:m.y,vx:rnd(-6,6)*U,vy:rnd(-9,-2)*U,g:.15*U,r:rnd(3,6),hue:45,max:90}); confetti() }); tip('👆 Bosing — sovg‘alar!') }, tap(x,y){ SFX.sparkle(); burst(x,y,25,'spark',{sp:5,hue:45}) } },
  greedy:{ start(){ tip('👆 Qimmatga bosing') }, tap(x,y){ tone(200,0,.3,'sawtooth',.05,150); say({x,y:y-20},'Menga kattasini bering!') } },
  ash:{ start(){ later(500,()=>{ const m=mid(); SFX.wrong(); for(let i=0;i<40;i++) add({kind:'dust',x:m.x+rnd(-60,60)*U,y:m.y,vx:rnd(-2,2),vy:rnd(-3,-.5),r:rnd(8,14),max:70}); say({x:m.x,y:m.y-160*U},'Voy, kul!') }); tip('👆 Bosing') }, tap(x,y){ burst(x,y,10,'dust',{sp:2,g:0,r:6}) } },
};
TALE.onSentence=function(s){ const t=s.t;
  if(/tillalar/.test(t)){ SFX.yay(); confetti() }
  if(/kul va eski latta/.test(t)) SFX.wrong();
  if(/Barakalla|esingda|Qo‘lingiz gul/.test(t)) SFX.chime();
};
// ⭐ O'yin: «Yaxshi odatmi?» — 6 vaziyat
const SAFE=[
 {q:'Oyiga dasturxon yozishda yordam berish.', o:['Yaxshi odat 👍','Yomon odat 👎'], a:0},
 {q:'Kattalarga qo‘pol gapirish.', o:['Yaxshi odat 👍','Yomon odat 👎'], a:1},
 {q:'O‘yinchoqlarni o‘ynab bo‘lgach joyiga qo‘yish.', o:['Yaxshi odat 👍','Yomon odat 👎'], a:0},
 {q:'Ishni boshqalarga tashlab, o‘zi o‘ynab yurish.', o:['Yaxshi odat 👍','Yomon odat 👎'], a:1},
 {q:'Ovqatdan keyin «rahmat» deyish.', o:['Yaxshi odat 👍','Yomon odat 👎'], a:0},
 {q:'Eng kattasini doim o‘ziga olish.', o:['Yaxshi odat 👍','Yomon odat 👎'], a:1},
];
function goodGame(){ board('',img('z5')).remove(); const vs=BOOK.games.good||[]; let i=0, scr=0; const box=document.createElement('div'); box.className='qbox'; gtx.append(box,backBtn());
  function show(){ box.innerHTML=''; if(i>=SAFE.length){ return win('good',scr>=6?3:scr>=4?2:1,`${scr} / ${SAFE.length} — sen odobli bolasan!`) }
    const it=SAFE[i]; const q=document.createElement('p'); q.className='q'; q.textContent=`${i+1}. ${it.q}`; const os=document.createElement('div'); os.className='opts'; box.append(q,os); let wrong=0;
    it.o.forEach((o,k)=>{ const bt=document.createElement('button'); bt.className='opt'; bt.textContent=o; bt.onclick=()=>{ if(k===it.a){ bt.classList.add('ok'); if(!wrong) scr++; SFX.chime(); haptic('light'); if(vs[1]) read([vs[1]]); gfx(.5,.5,40,'spark',{sp:6,g:.03}); setTimeout(()=>{ i++; show() },1100) } else { wrong++; bt.classList.remove('no'); void bt.offsetWidth; bt.classList.add('no'); SFX.wrong(); if(vs[2]) read([vs[2]]) } }; os.appendChild(bt) }) }
  if(vs[0]) read([vs[0]],show); else show() }
