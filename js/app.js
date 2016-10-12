/*Questions-- Set as pop-up/alert*/
var Questions = function(){[
	one: 'Do ye like yer drinks strong?',
	two: 'Do ye like it with a salty tang?',
	three: 'Are you a lubber who likes it bitter?',
	four: 'Would you like a bit of sweetness with yer poison?',
	five: 'Are ye one for a fruity finish?'
]};


/*Types of ingredients*/
var Ingredients = function(mix){
	this.mix = mix;
};
/*trying to figure which prototype this is*/
	//Ingredients.prototype.ingrType = function(length){
		// var drink = '';
		// $.each(Ingredients.prototype.ingrType(function(i,ingredient){
		// 	$('.drink-mix').append(results);
		// })
	var strong = function(){
		Ingredients.call(this,['Glug of rum', 'slug of whisky', 'splash of gin']);
	};
	var salty = function(){
		Ingredients.call(this,['Olive on a stick', 'salt-dusted rim', 'rasher of bacon']);	
	}; 
	var bitter = function(){ 
		Ingredients.call(this,['Shake of bitters', 'splash of tonic', 'twist of lemon peel']);
	};
	var sweet = function(){
		Ingredients.call(this,['Sugar cube', 'spoonful of honey', 'splash of cola']);
	};
	var fruity = function(){
		Ingredients.call(this,['Slice of orange', 'dash of cassis', 'cherry on top']);
	};

/*Pantry houses ingredients--inheritance??*/
var Pantry = function(Ingredients){
	this.Ingredients = Ingredients;
};

// *****example constructor function:*****
// 	var Musician = function(sounds){
// 		this.sounds = sounds;
// 	};

// 	var david = new Musician(['Twang','Thrumb','Bling']);
// 	console.log(david.sounds);
// *****end of constructor function example*****	
/*Create constructor functions for:
	questions
	ingredients
	pantry (which will contain available ingrs)


Then use the constructors to create objects representing
the bartenders questions/ingrs/pantry

Ask what style of a drink customer likes
	//create a UI which will ask user for input for ea ?
Create a Preferences{} that records their likes in the object
*/

/*Construct a drink object
	create a constructor for a bartender object
		>>method should take the preferences object and 
		
		*****example of method*****
		
		var Musician = function(sounds){
			this.sounds = sounds;
		};

		Musician.prototype.solo = function(length) {
			var solo = '';
			for(var i=0; i<length; i++){
				solo += this.sounds[i % this.sounds.length] + ' ';
				}
				console.log(solo);
		};

		var david = new Musician(['Twang','Thrumb','Bling']);
		david.solo(8);

		*****end of method example*****

		>>construct a new drink object by fetching randomly
		>>chosen ingredients from the pantry which match the user's preferences
	create a bartender object 
		>>add in logic so that when the user submits their preferences,
		>>the drink is created and displayed in your UI
*/
