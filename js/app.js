var questions = [{
				type: 'strong',
        title: 'Do ye like yer drinks strong?',
        ingredients: ['Glug of rum', 'Slug of whisky', 'Splash of gin']
    },
    { type: 'salty', title: 'Do ye like it with a salty tang?', ingredients: ['Olive on a stick', 'Salt-dusted rim', 'Rasher of bacon'] },
    { type: 'bitter', title: 'Are you a lubber who likes it bitter?', ingredients: ['Shake of bitters', 'Splash of tonic', 'Twist of lemon peel'] },
    { type: 'sweet', title: 'Would you like a bit of sweetness with yer poison?', ingredients: ['Sugar cube', 'Spoonful of honey', 'Splash of cola'] },
    { type: 'fruity', title: 'Are ye one for a fruity finish?', ingredients: ['Slice of orange', 'Dash of cassis', 'Cherry on top'] }
];


$(function() {
    questions.map(function(question) {
        $('.questions').prepend('<p>' + question.title + 
        	' <input name="'+question.type+'" type="radio" value="true" checked/>Yes ' + 
        	' <input name="'+question.type+'" type="radio" value="false"/>No </p>');
    });

    $('.questions').on('click','.submit',function(){
    	var ingredients = [];
    	questions.map(function(question){
    		if($('input[name="'+question.type+'"]:checked').val()=='true'){
    			ingredients.push(question.ingredients[0]);
    		}
    	});

    	var drinkMix = "";
    	ingredients.map(function(ingredient,i){
    		if(i!==0){
    			drinkMix += " with a ";
    		}
    		drinkMix += ingredient;
    	});

    	$('.drink-mix').html(drinkMix);
    });

});
