const stars=document.getElementById("stars");
for(let i=0;i<90;i++){const s=document.createElement("i");s.className="star";s.style.left=Math.random()*100+"%";s.style.top=Math.random()*100+"%";s.style.animationDelay=Math.random()*3+"s";s.style.animationDuration=2+Math.random()*4+"s";stars.appendChild(s);}
const music=document.getElementById("music"), musicBtn=document.getElementById("musicBtn");
const song=music?.dataset.song;
const wasPlaying=localStorage.getItem("historia_music_playing")==="1";
if(song){ music.src=song; }
function sync(){ if(music?.paused){musicBtn.textContent="♫";musicBtn.classList.remove("active");}else{musicBtn.textContent="Ⅱ";musicBtn.classList.add("active");} }
function play(){if(!music)return; music.play().then(()=>{localStorage.setItem("historia_music_playing","1");sync();}).catch(()=>{localStorage.setItem("historia_music_playing","0");sync();});}
musicBtn?.addEventListener("click",()=>{if(music.paused) play(); else {music.pause();localStorage.setItem("historia_music_playing","0");sync();}});
if(song && wasPlaying){ window.addEventListener('load',()=>play(),{once:true}); }
if(music){music.addEventListener('play',sync);music.addEventListener('pause',sync);}
sync();
