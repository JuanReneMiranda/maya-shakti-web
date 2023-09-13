let e,t=document.querySelector(".now-playing"),a=document.querySelector(".track-art"),r=document.querySelector(".track-name"),n=document.querySelector(".track-artist"),o=document.querySelector(".playpause-track");document.querySelector(".next-track"),document.querySelector(".prev-track");let c=document.querySelector(".seek_slider");document.querySelector(".volume_slider");let u=document.querySelector(".current-time"),i=document.querySelector(".total-duration"),m=0,s=document.createElement("audio"),l=[{name:"Secrets Of The Universe",artist:"Knock Out",image:"https://mayashaktirecords.com/music/knockout.png",path:"https://mayashaktirecords.com/music/KnockOut-SecretsOfTheUniverse.mp3"},{name:"Antz",artist:"Antaluk",image:"https://mayashaktirecords.com/music/shiva.png",path:"https://mayashaktirecords.com/music/Antaluk-Antz.mp3"},{name:"Alien Invasion",artist:"Humalien vs Dry Ice",image:"https://mayashaktirecords.com/music/humalien.png",path:"https://mayashaktirecords.com/music/HumalienDryIce-AlienInvasion.mp3"}];// function random_bg_color() {
//   // Get a number between 64 to 256 (for getting lighter colors)
//   let red = Math.floor(Math.random() * 256) + 64;
//   let green = Math.floor(Math.random() * 256) + 64;
//   let blue = Math.floor(Math.random() * 256) + 64;
//   // Construct a color withe the given values
//   let bgColor = "rgb(" + red + "," + green + "," + blue + ")";
//   // Set the background to that color
//   document.body.style.background = bgColor;
// }
function d(o){clearInterval(e),u.textContent="00:00",i.textContent="00:00",c.value=0,s.src=l[o].path,s.load(),a.style.backgroundImage="url("+l[o].image+")",r.textContent=l[o].name,n.textContent=l[o].artist,t.textContent="PLAYING "+(o+1)+" OF "+l.length,e=setInterval(y,1e3),s.addEventListener("ended",h);// random_bg_color();
}function h(){m<l.length-1?m+=1:m=0,d(m),s.play(),o.innerHTML='<i class="fa fa-pause-circle fa-5x"></i>'}function y(){let e=0;if(!isNaN(s.duration)){e=s.currentTime*(100/s.duration),c.value=e;let t=Math.floor(s.currentTime/60),a=Math.floor(s.currentTime-60*t),r=Math.floor(s.duration/60),n=Math.floor(s.duration-60*r);a<10&&(a="0"+a),n<10&&(n="0"+n),t<10&&(t="0"+t),r<10&&(r="0"+r),u.textContent=t+":"+a,i.textContent=r+":"+n}}//# sourceMappingURL=index.f3c9cf30.js.map
// Load the first track in the tracklist
d(m);
//# sourceMappingURL=index.f3c9cf30.js.map
