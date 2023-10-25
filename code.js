var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["5551be0b-6a34-4c04-b6ed-485ac66dc646","870d5d13-6ecf-4286-903b-a85bdf3e2edb","af8674da-911b-4cea-bc24-70993ca23b0e","cbc01306-49a9-4a32-8c6c-cee1f5113bba","06ecabd4-d0d2-491d-969a-83504d205da8","cfe5244e-f826-411e-925b-97c3a9c1d8f4","0510ee01-7004-4318-8871-348467706829","8b307ecb-0af6-464a-b206-4a78cfa6f692","1ccd63da-0a86-4809-8952-e0e17adfa7d7","62bcea1e-a3d0-4aa3-88fa-c20bff077431","4f28f50f-fa7a-48a9-9331-52cdd0d677a2"],"propsByKey":{"5551be0b-6a34-4c04-b6ed-485ac66dc646":{"name":"a","sourceUrl":"assets/api/v1/animation-library/gamelab/gML8dYrd8SrxAUuLbIjp7o5ghB38oFCc/category_fantasy/alien_06.png","frameSize":{"x":347,"y":398},"frameCount":1,"looping":true,"frameDelay":2,"version":"gML8dYrd8SrxAUuLbIjp7o5ghB38oFCc","categories":["fantasy"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":347,"y":398},"rootRelativePath":"assets/api/v1/animation-library/gamelab/gML8dYrd8SrxAUuLbIjp7o5ghB38oFCc/category_fantasy/alien_06.png"},"870d5d13-6ecf-4286-903b-a85bdf3e2edb":{"name":"r","sourceUrl":null,"frameSize":{"x":13,"y":13},"frameCount":1,"looping":true,"frameDelay":12,"version":"QcxUWOUGpsVjIjNIAMsTsHxIVewxcUwt","loadedFromSource":true,"saved":true,"sourceSize":{"x":13,"y":13},"rootRelativePath":"assets/870d5d13-6ecf-4286-903b-a85bdf3e2edb.png"},"af8674da-911b-4cea-bc24-70993ca23b0e":{"name":"o","sourceUrl":null,"frameSize":{"x":13,"y":13},"frameCount":1,"looping":true,"frameDelay":12,"version":"M8fZ.JwTWvZwAs2fmTtTE7DXFGZ64AFS","loadedFromSource":true,"saved":true,"sourceSize":{"x":13,"y":13},"rootRelativePath":"assets/af8674da-911b-4cea-bc24-70993ca23b0e.png"},"cbc01306-49a9-4a32-8c6c-cee1f5113bba":{"name":"y","sourceUrl":null,"frameSize":{"x":13,"y":13},"frameCount":1,"looping":true,"frameDelay":12,"version":"kUEpIW7obsgO2fNzhV5cgijexZw5whvZ","loadedFromSource":true,"saved":true,"sourceSize":{"x":13,"y":13},"rootRelativePath":"assets/cbc01306-49a9-4a32-8c6c-cee1f5113bba.png"},"06ecabd4-d0d2-491d-969a-83504d205da8":{"name":"g","sourceUrl":null,"frameSize":{"x":13,"y":13},"frameCount":1,"looping":true,"frameDelay":12,"version":"V3Lq7JkwcBxljoID_xQJtKEnPBwO8FmQ","loadedFromSource":true,"saved":true,"sourceSize":{"x":13,"y":13},"rootRelativePath":"assets/06ecabd4-d0d2-491d-969a-83504d205da8.png"},"cfe5244e-f826-411e-925b-97c3a9c1d8f4":{"name":"b","sourceUrl":null,"frameSize":{"x":13,"y":13},"frameCount":1,"looping":true,"frameDelay":12,"version":"cTzXN7RvZPgPn1u9a6U5aVaN1RTrXQ6h","loadedFromSource":true,"saved":true,"sourceSize":{"x":13,"y":13},"rootRelativePath":"assets/cfe5244e-f826-411e-925b-97c3a9c1d8f4.png"},"0510ee01-7004-4318-8871-348467706829":{"name":"p","sourceUrl":null,"frameSize":{"x":13,"y":13},"frameCount":1,"looping":true,"frameDelay":12,"version":"wCHrKh7cuo0SZAiYdFXPah9k6iED_zf9","loadedFromSource":true,"saved":true,"sourceSize":{"x":13,"y":13},"rootRelativePath":"assets/0510ee01-7004-4318-8871-348467706829.png"},"8b307ecb-0af6-464a-b206-4a78cfa6f692":{"name":"cb","sourceUrl":null,"frameSize":{"x":500,"y":468},"frameCount":1,"looping":true,"frameDelay":12,"version":"lgZxVZKYP70Fs_TE875AgFKugocpeKI8","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":500,"y":468},"rootRelativePath":"assets/8b307ecb-0af6-464a-b206-4a78cfa6f692.png"},"1ccd63da-0a86-4809-8952-e0e17adfa7d7":{"name":"bg","sourceUrl":"assets/v3/animations/obu6p5uFlzh8f7YIQveOQKP2frqsxySBXbRBvy-w9WM/1ccd63da-0a86-4809-8952-e0e17adfa7d7.png","frameSize":{"x":195,"y":122},"frameCount":1,"looping":true,"frameDelay":4,"version":"pvBxdu2bqgZdhIU3_ff_5acI7EFyN4P7","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":195,"y":122},"rootRelativePath":"assets/v3/animations/obu6p5uFlzh8f7YIQveOQKP2frqsxySBXbRBvy-w9WM/1ccd63da-0a86-4809-8952-e0e17adfa7d7.png"},"62bcea1e-a3d0-4aa3-88fa-c20bff077431":{"name":"e","sourceUrl":null,"frameSize":{"x":393,"y":394},"frameCount":1,"looping":true,"frameDelay":12,"version":"pR69PjZEVJt4RYyKpJufD03Tr6DoUgPk","categories":["icons"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":393,"y":394},"rootRelativePath":"assets/62bcea1e-a3d0-4aa3-88fa-c20bff077431.png"},"4f28f50f-fa7a-48a9-9331-52cdd0d677a2":{"name":"ss","sourceUrl":"assets/api/v1/animation-library/gamelab/1NW0s4FKF54T3qL3gQC5gOgETMnxEZZw/category_icons/ufo.png","frameSize":{"x":386,"y":267},"frameCount":1,"looping":true,"frameDelay":2,"version":"1NW0s4FKF54T3qL3gQC5gOgETMnxEZZw","categories":["icons"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":386,"y":267},"rootRelativePath":"assets/api/v1/animation-library/gamelab/1NW0s4FKF54T3qL3gQC5gOgETMnxEZZw/category_icons/ufo.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var bg = createSprite(200, 200);
bg.setAnimation("bg");
bg.scale = 5;

var ss = createSprite(0, 100);
ss.setAnimation("ss");
ss.scale = 0.3;






var e = createSprite(200, 500);
e.setAnimation("e");
e.scale = 1.25;

var a = createSprite(200,220);
a.setAnimation("a");
a.scale = 0.3;
a.tint = false;



var cb = createSprite(80,200);
cb.setAnimation("cb");
cb.scale = 0.3;

var r = createSprite(90,370);
r.setAnimation("r");
r.scale=2;
var o = createSprite(125,370);
o.setAnimation("o");
o.scale=2;

var y = createSprite(160,370);
y.setAnimation("y");
y.scale=2;

var g = createSprite(195,370);
g.setAnimation("g");
g.scale=2;

var b = createSprite(230,370);
b.setAnimation("b");
b.scale=2;

var p = createSprite(265,370);
p.setAnimation("p");
p.scale=2;
drawSprites();
var aDance;

function draw() {
  background("bg");
   
  if (keyDown("right")) {
  ss.x = ss.x + 5;
    ss.y = ss.y + 1;

}

if (ss.x == 450) {
  ss.x = 0;
  ss.y=100;
}

  
  e.rotation = e.rotation += 0.5;
  drawSprites();
  
  if (aDance <= 100){
  a.rotation = a.rotation+randomNumber(1, 5);
  a.rotation =a.rotation-randomNumber(1, 5) ;
    aDance++;
  }
  else{
    a.rotation = 0;
    aDance = 0;
  }

  
  if (keyDown("UP_ARROW")){
    cb.y=cb.y-5;
  }
  
   if (keyDown("DOWN_ARROW")){
    cb.y=cb.y+5;
  }
  
  
  if (mousePressedOver(r)){
    a.tint = ("red");
    drawSprites();

  }
  if (mousePressedOver(o)){
    a.tint = ("orange");
    drawSprites();

  }
   if (mousePressedOver(y)){
    a.tint = ("yellow");
    drawSprites();

  }
  if (mousePressedOver(g)){
    a.tint = ("green");
    drawSprites();
  }
    
     if (mousePressedOver(b)){
    a.tint = ("blue");
    drawSprites();

  }
  if (mousePressedOver(p)){
    a.tint = ("purple");
    drawSprites();

  }
drawSprites();
stroke("white");
fill("white");
textSize(40);
text("Welcome Home!", 50, 40);

stroke("white");
fill("white");
textSize(12);
text("Click the up, down, and right arrows to move the balloons and the UFO", 12, 60);

text("Click the colors at the bottom to change the alien's color!", 45, 80);



  }


// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
