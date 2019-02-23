bubbly();

var ctx = document.getElementById("cv").getContext("2d");

ctx.beginPath();
ctx.fillStyle = 'rgb(192, 80, 77)'; // 赤
ctx.arc(120, 120, 100, 0, Math.PI*2, true);
ctx.fill();