class dustbin{
constructor(x,y,height,width){
var options={
isStatic: true

}
this.body=Bodies.rectangle(x,y,width,height,options);
this.height=height;
this.width=width;
World.add(world,this.body);
}
display(){
var pos=this.body.position;
push()
translate(pos.x,pos.y);
rectMode(CENTER);
strokeWeight(3);
fill("white")
rect(0,0,this.width,this.height);
pop()
}

}