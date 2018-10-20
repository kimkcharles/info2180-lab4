window.onload = function() {
	//Excercise 1
	let wall= document.getElementById("boundary1");
	wall.addEventListener("mouseover", function() {
	 	this.classList.add("youlose");
	});

		
	//Excercise 2
	
	let walls= document.querySelectorAll(".boundary:not(.example)");

	
	for (let w=0; w<walls.length; w++){
			walls[w].addEventListener("mouseover", function(){
				for (a=0; a<walls.length ; a++){
					walls[a].classList.add("youlose");
				}
			})
		}


	


}