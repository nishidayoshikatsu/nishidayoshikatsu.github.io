ityped.init(document.querySelector("#ityped"), {
  loop: true,
  showCursor: true,
  strings: ["Welcome to NSD's Web site！！"]
})

var techbtn = document.getElementById("blog");

techbtn.addEventListener( "click", function() {
    alert("未実装領域だよ！！！！ちょっとまって！！なんでもしますから！！！");
});

// draw a spinning box
// with width, height and depth of 50
function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  //img = loadImage("../images/textures.png");
}

function draw() {
  background(0);
  translate(-500,100);

  //orbitControl();
  rotateX(frameCount * 0.03);
  rotateY(frameCount * 0.03);
  box(200);

}