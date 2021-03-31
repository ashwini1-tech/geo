class Iron{
	constructor(x,y)
	{
	
	var options= {
		"restitution" :0.8 ,
		"friction" :  3 ,
		"density" : 30

	}
		this.x=x;
		this.y=y;
		
		this.body=Bodies.rectangle(x,y,
			 options)
        this.width=50
        this.height=50

		World.add(world, this.body);

	}
	display()
	{
			var ironpos=this.body.position;		
			push()
			translate(ironpos.x, ironpos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("darkblue");
			rect(0, 0, this.width, this.height);
			pop()
	}

}