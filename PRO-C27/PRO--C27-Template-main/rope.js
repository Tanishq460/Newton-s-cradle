class rope{
	constructor(body1,body2,body3,body4,body5, offsetX, offsetY)
	{
		this.offsetX=offsetX
		this.offsetY=offsetY
		var options={
			bodyA:body1,
			bodyB:body2,
			bodyC:body3,
			bodyD:body4,
			bodyE:body5,
			pointB:{x:this.offsetX, y:this.offsetY}
		}
		//console.log(options);
		this.rope=Constraint.create(options)
		World.add(world,this.rope)
	}

	display()
	{
		var pointA=this.rope.bodyA.position;
		var pointB=this.rope.bodyB.position;
		var pointC=this.rope.bodyC.position;
		var pointD=this.rope.bodyD.position;
		//var pointE=this.rope.bodyE.position;

		strokeWeight(2);

		//var Anchor1X=pointA.x
		//var Anchor1Y=pointA.y

		//var Anchor2X=pointB.x+this.offsetX
		//var Anchor2Y=pointB.y+this.offsetY

		//var Anchor3X=pointC.x+this.offsetX
		//var Anchor3Y=pointC.y+this.offsetY

		//var Anchor4X=pointD.x+this.offsetX
		//var Anchor4Y=pointD.y+this.offsetY

		//var Anchor5X=pointE.x
		//var Anchor5Y=pointE.y

		//ine(Anchor1X,Anchor1Y,Anchor2X,Anchor2Y,Anchor3X,Anchor3Y,Anchor4X,Anchor4Y,Anchor5X,Anchor5Y);
		
	}

}