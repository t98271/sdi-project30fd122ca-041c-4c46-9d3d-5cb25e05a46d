
var numEat = 2;
var nameProm = prompt("What should one of the brothers names be?", "john")
var nameBros = ["chip","steve","longtail", nameProm];
var eatBans = function() {
	for (var i = 0; i < nameBros.length; i++) {
		console.log(nameBros[i] + " has eaten " + i + " of his bananas");
   };
}; 
var have = confirm("Do we have dessert?")
var dessert = confirm("Did all the monkeys eat enough to get Dessert. OK for yes, Cancel for no.");
var results = function (have,dessert){
	if (have === true) {
		console.log("Yum! we have dessert if you ate enough!");
			if (dessert === true){
				console.log("Yay! Everyone gets dessert!");
			} else {
			console.log("OH NO! Someone is not getting dessert");
		}; 
	} else {
			console.log("Sorry we dont have any desert!");
	};
};	
var oneDone = nameBros.pop()
var keepEat = function (oneDone){
	var oneDone = nameBros.pop()
		while()
}


console.log("The Monkey brothers " +
				nameBros + 
				" all had to sit down for dinner time.");
eatBans();

console.log(" To get desert the monkey must eat atleast" + numEat + " Bananas.");

results(dessert)
				
console.log("since " + nameBros.pop() + "ate the most he can go!");