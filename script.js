// Partículas animadas
const canvas=document.getElementById('bg');
const ctx=canvas.getContext('2d');

canvas.width=innerWidth;
canvas.height=innerHeight;

let particles=[];
for(let i=0;i<150;i++){
  particles.push({
    x:Math.random()*canvas.width,
    y:Math.random()*canvas.height,
    z:Math.random()*2+0.5,
    vx:(Math.random()-0.5)*0.6,
    vy:(Math.random()-0.5)*0.6
  });
}

function animate(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  particles.forEach(p=>{
    p.x+=p.vx*p.z;
    p.y+=p.vy*p.z;
    if(p.x<0||p.x>canvas.width)p.vx*=-1;
    if(p.y<0||p.y>canvas.height)p.vy*=-1;
    ctx.fillStyle='#ff004c';
    ctx.beginPath();
    ctx.arc(p.x,p.y,2*p.z,0,Math.PI*2);
    ctx.fill();
  });
  requestAnimationFrame(animate);
}
animate();

// Dark / Light mode
document.getElementById('mode').onclick=()=>{
  document.body.classList.toggle('light');
};