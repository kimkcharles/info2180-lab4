window.onload = function() {

	//This is for if the boundary is touched
	var touched=false;
	var statmess=document.getElementById("status");



	//Excercise 1
	let wall= document.getElementById("boundary1");
	wall.addEventListener("mouseover", function() {
	 	this.classList.add("youlose");
	});

		
	//Excercise 2
	
	let walls= document.querySelectorAll(".boundary:not(.example)");

	
	for (let w=0; w<walls.length; w++){
		walls[w].addEventListener("mouseover", function(){
			statmess.innerHTML="You Lose!"; //Exercise 5
			for (a=0; a<walls.length ; a++){
				walls[a].classList.add("youlose");
			}
			touched=true;
		})
	}


	//Excercise 3
	let ended = document.getElementById("end");
	ended.addEventListener("mouseover", function(){
		if (touched==false){
			//alert("You Win!");
			statmess.innerHTML="You Win!"; //Exercise 5
		}
	});



	//Excercise 4

	let begin =document.getElementById("start");
	begin.addEventListener("click", function(){
		//alert("Lets start!!");

		touched=false;
		if (walls.length!=0){
			walls.forEach(function(e){
				e.classList.remove("youlose");
			})
		}
	});





	


}