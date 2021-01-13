var s,sI,r,rI,yI,a,aI;
var cgroup,oGroup,eGroup;
var score=0,bI,b,oI,cI,eI,xI;
var gameState = "PLAY";
var PLAY=1;
var END=0;
var rS,rSound,mSound;
var c,cI1;
var v,vI;

function preload(){
  sI=loadImage("download.jpg")
  bI=loadImage("images.jpg")
  oI=loadImage("virus03_03.png")
  cI=loadImage("download (1).png")
  eI=loadImage("mighty.png")
  rI=loadImage("download (1).jpg")
  yI=loadImage("images.png")
  aI=loadImage("download (2).jpg")
  rSound=loadSound("zapsplat_multimedia_game_point_award_50735.mp3")
  mSound=loadSound("music_orlamusic_Happy+009.mp3")//house_party.mp3
  eSound=loadSound("smartsound_HUMAN_VOCAL_Male_Scream_Deep_Pain_04.mp3")
  cI1=loadImage("download (2).png")
  xI=loadImage("virus03_04.png")
  vI=loadImage("download (3)-1.png")
}



function setup(){
  createCanvas(450,450)
 
  
  b=createSprite(220,235,50,10)
  b.addImage(bI)
  b.scale=2.8
   
  s=createSprite(220,420,20,20)
  s.addImage(sI)
  s.scale=0.2
 
  
  r=createSprite(225,225,20,20)
  r.addImage(rI)
  r.scale=0.8;
  r.visible=false;
  
  v=createSprite(225,50,30,30)
  v.addImage(vI);
  v.scale=0.5;
  v.visible=false;
  
  c=createSprite(490,50,20,20)
  c.addImage(cI1)
  c.scale=1
  
  c.visible=false;
  
  mSound.loop();
  
  a=createSprite(225,345,20,20)
  a.addImage(aI)
  a.scale=0.3;
  a.visible=false;
  
  cGroup=createGroup();
  oGroup=createGroup();
  eGroup=createGroup();
  
}

function draw(){
  background("white")
  if(gameState==="PLAY"){
    s.x=World.mouseX
    
  spwanO();
    
    if(s.isTouching(cGroup)){
    oGroup.destroyEach();
    cGroup.destroyEach();
    score=score+50;
  }
   
    eGroup.visible=true;
    oGroup.visible=true;
    cGroup.visible=true;
    //
  
  if(s.isTouching(eGroup)){
    
    score=score+1;
    rSound.play(1);
  }
 
    if(score>499){
      v.visible=true;
    }
    
    if(score>100){
      v.visible=false
    }
    
    if(score>999){
     v.visible=true;
    }
    
    if(score>1500){
      v.visible=false
    }
    if(score>9999){
     v.visible=true;
    }
    
    if(score>10000){
      v.visible=false
    }
    
  if(s.isTouching(oGroup)){
    
    e.destroy();
    gameState="END"
    mSound.stop();
    eSound.play();
    v.visible=false
    //c.velocityX=4
    //c.visible=true;
  }
    
    
  }
 
  if(gameState==="END"){
    eGroup.velocity=0;
    oGroup.velocity=0;
    eGroup.velocity=0;
    
   
    v.visible=false;
    eGroup.destroyEach();
    oGroup.destroyEach();
    cGroup.destroyEach();
     s.addImage(yI)
    s.scale=0.4
     r.visible=true;
    a.visible=true;
    
  
    if(mousePressedOver(a)) {
      gameState="PLAY"
     s.addImage(sI)
      s.scale=0.2;
      r.visible=false;
      a.visible=false;
      c.visible=false;
      
      eSound.stop();
      mSound.play();
      score=0
    }
  }
    
  
  
  
  
  drawSprites();
  fill("red")
  textSize(16)
   text("score:"+score,20,14)
  
}

function spwanO(){
  o=createSprite(200,0,20,20)
  o.velocityY=(6.6+score/100)
 o.x=Math.round(random(10,7000))

  o.addImage(oI)
  
  o.scale=0.1
  oGroup.add(o)
  
  o=createSprite(100,0,20,20)
  o.velocityY=(6.6+score/100)
 o.x=Math.round(random(10,8700))

  o.addImage(xI)
  
  o.scale=0.1
  oGroup.add(o)
  //part-2
  c=createSprite(200,0,20,20)
  c.velocityY=(6+score/100)
  c.x=Math.round(random(120,38330))
  c.addImage(cI)
  c.scale=0.1
  cGroup.add(c)
  
  //part-3
  e=createSprite(200,0,20,20)
  e.velocityY=(6+score/100)
  e.x=Math.round(random(120,32080))
  e.addImage(eI)
  e.scale=0.5
  eGroup.add(e)
}