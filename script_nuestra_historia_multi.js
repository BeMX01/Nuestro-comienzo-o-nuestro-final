(function(){
  const stars=document.getElementById('stars');
  if(stars){for(let i=0;i<55;i++){const s=document.createElement('i');s.className='star';s.style.left=(Math.random()*100)+'%';s.style.top=(Math.random()*100)+'%';s.style.animationDelay=(Math.random()*3)+'s';s.style.animationDuration=(2+Math.random()*4)+'s';stars.appendChild(s)}}
  const music=document.getElementById('music'), btn=document.getElementById('musicBtn');
  if(!music||!btn)return;
  const song=music.dataset.song;
  if(song) music.src=song;
  function sync(){btn.textContent=music.paused?'♫':'Ⅱ';btn.classList.toggle('active',!music.paused)}
  btn.addEventListener('click',function(){if(music.paused){music.play().then(sync).catch(sync)}else{music.pause();sync()}});
  music.addEventListener('play',sync);music.addEventListener('pause',sync);sync();
})();
