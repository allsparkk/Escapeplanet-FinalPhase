var speed=0
var newy=600
var gameState="play"

function preload()
{
	astro1img=loadImage('images/astro2 (1).png')
   background1=loadImage('images/planet.jpg')
   p1=loadImage('images/platform.png')
   Spaceship=loadImage('images/meship.png')
   g1=loadImage('images/grond (1).png')
   
}

function setup() {
	createCanvas(800, 700);
	
	g1=new Platform()
   


   basegroup=new Group()
   base2group=new Group()


   for(var i=0; i<30;i++){
      
	b1=new Base(newy)
   newy-=150
   basegroup.add(b1.body)
   base2group.add(b1.body2)
   }

	sip=new ship(newy)

   astrounot=new Astrounot()
   la=new form()

}


function draw() {
   console.log(astrounot.body.y)
 
  background(background1);
  astrounot.body.velocityY+=0.3
  astrounot.body.collide(la.body)
  astrounot.body.collide(basegroup)
  astrounot.body.collide(base2group,gravity)
  if(keyDown("up")&& astrounot.body.velocityY==0){
     astrounot.body.velocityY=-11
  }
  if(keyDown("left")&& astrounot.body.velocityY!==0){
     astrounot.body.x-=5
  }
  if(keyDown("right")&& astrounot.body.velocityY!==0){
	astrounot.body.x+=5
 }
 drawSprites();
 if(sip.body.isTouching(astrounot.body)){
    
    astrounot.body.destroy()
   gameState="end"

 }
 
  if(gameState==="end"){
   textSize(30)
   fill("red")
   text("lets go back to home earth!",sip.body.x,sip.body.y)
   
  }
  camera.position.y=astrounot.body.y-200



  
 
}

function gravity(astro,base){
   astro.velocityY+=0.5
}




