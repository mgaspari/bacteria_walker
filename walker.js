let counter = 0
let nums = [0,1]
let lineX = []
let lineY = []
document.addEventListener('DOMContentLoaded', function(){
  // $('body').addEventListener()
})
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
		strokeWeight(10);
		point(this.x,this.y);
	}

  var  mapItOut = () => {
    lineX.push(this.x)
    lineY.push(this.y)
    lineX.forEach((val, i, arr)=>{
      stroke(100)
      line(lineX[i], lineY[i], lineX[i-1], lineY[i-1])
    })
  }

  this.step = function(){
    let nextNum = nums[nums.length - 2] + nums[nums.length - 1];
    nums.push(nextNum);
    let testInt = counter % 4
    switch (testInt){
      case 0:
      this.x += nextNum
      this.y -= nextNum
      mapItOut()
      counter++
      break
      case 1:
      this.x += nextNum
      this.y += nextNum
      mapItOut()
      counter++
      break
      case 2:
      this.x -= nextNum
      this.y += nextNum
      mapItOut()
      counter++
      break
      case 3:
      this.x -= nextNum
      this.y -= nextNum
      mapItOut()
      counter++
      break
      default:
      "Done"
    }


  }
}
// 	this.step  = function(){
//
//     var disToMove = 12;
// 		var choice = Math.floor(Math.random() * (4 - 0)) + 0;
// 		if (choice == 0){
// 			this.x += disToMove;
// 		} else if (choice ==1){
// 				this.x -= disToMove;
// 		}
// 			else if(choice ==2){
// 				this.y += disToMove;
// 		}
// 		else {this.y -= disToMove;}
// 	}
// }
