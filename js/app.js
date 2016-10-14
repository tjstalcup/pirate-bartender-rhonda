$(function(){
	alert('Pirates only! Enter at ye own risk matey');
});

var Questions = [{
	one: 'Do ye like yer drinks strong?',
	two: 'Do ye like it with a salty tang?',
	three: 'Are you a lubber who likes it bitter?',
	four: 'Would you like a bit of sweetness with yer poison?',
	five: 'Are ye one for a fruity finish?'
}]; //invoking function
//trying to get questions to append to the DOM
//$('.questions').append(this.one,this.two,this.three,this.four,this.five);
console.log(Questions);

//trying to configure the pantry (in 2 spots right now)
var Pantry = function(ingredients) {
   this.ingredients = ingredients;
};

/*Setting the Pantry function to house the ingredients and set preferences--
--preferences may need to go somewhere else*/
// Pantry.prototype.preference = function(length) {
//    var preference = '';
//    for (var i=0; i<length; i++) {
// 	preference += this.ingredients[i%this.ingredients.length]+' ';
//     }
//    console.log(preference);
// };

var Ingredients = function(){
	var Strong = ['Glug of rum', 'Slug of whisky', 'Splash of gin']; 	
	var Salty = ['Olive on a stick', 'Salt-dusted rim', 'Rasher of bacon'];	 
	var Bitter = ['Shake of bitters', 'Splash of tonic', 'Twist of lemon peel'];
	var Sweet = ['Sugar cube', 'Spoonful of honey', 'Splash of cola'];
	var Fruity = ['Slice of orange', 'Dash of cassis', 'Cherry on top'];
};

//var preference = newDrink(){
	//
//};
// /*Pantry houses ingredients--inheritance??*/
// var Pantry = function(Ingredients){
// 	this.Ingredients = Ingredients;
// };

// // *****example constructor function:*****
// // 	var Musician = function(sounds){
// // 		this.sounds = sounds;
// // 	};

// // 	var david = new Musician(['Twang','Thrumb','Bling']);
// // 	console.log(david.sounds);
// // *****end of constructor function example*****	
// /*Create constructor functions for:
// 	questions
// 	ingredients
// 	pantry (which will contain available ingrs)


// Then use the constructors to create objects representing
// the bartenders questions/ingrs/pantry

// Ask what style of a drink customer likes
// 	//create a UI which will ask user for input for ea ?
// Create a Preferences{} that records their likes in the object
// */

// /*Construct a drink object
// 	create a constructor for a bartender object
// 		>>method should take the preferences object and 
		
// 		*****example of method*****
		
// 		var Musician = function(sounds){
// 			this.sounds = sounds;
// 		};

// 		Musician.prototype.solo = function(length) {
// 			var solo = '';
// 			for(var i=0; i<length; i++){
// 				solo += this.sounds[i % this.sounds.length] + ' ';
// 				}
// 				console.log(solo);
// 		};

// 		var david = new Musician(['Twang','Thrumb','Bling']);
// 		david.solo(8);

// 		*****end of method example*****

// 		>>construct a new drink object by fetching randomly
// 		>>chosen ingredients from the pantry which match the user's preferences
// 	create a bartender object 
// 		>>add in logic so that when the user submits their preferences,
// 		>>the drink is created and displayed in your UI
// */

/*example from udemy guy
function Person(firstname, lastname) {
 
    console.log(this); //person{}
    this.firstname = firstname;
    this.lastname = lastname;
    console.log('This function is invoked.');//This function is invoked
    
}

Person.prototype.getFullName = function() {
    return this.firstname + ' ' + this.lastname;   
} //created a constructor function for the prototypes

var john = new Person('John', 'Doe');
console.log(john); //John Doe (getFullName)

var jane = new Person('Jane', 'Doe');
console.log(jane); //Jane Doe (getFullName)

Person.prototype.getFormalFullName = function() {
    return this.lastname + ', ' + this.firstname;   
} 

console.log(john.getFormalFullName()); //Doe, John  //Doe, Jane
*/
