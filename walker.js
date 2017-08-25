function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  walker = new Walker();
  background(255);

}

function draw() {
  walker.step();
  walker.display();
}

function Walker (){
	this.x = 340;
	this.y = 200;

	this.display = function(){
		stroke(0);
		strokeWeight(15);
		point(this.x,this.y);
	}

	this.step = function(){
		var choice = Math.floor(Math.random() * (4 - 0)) + 0;
		if (choice == 0){
			this.x++;
		} else if (choice ==1){
				this.x--;
		}
			else if(choice ==2){
				this.y++;
		}
		else {this.y--;}
	}
}