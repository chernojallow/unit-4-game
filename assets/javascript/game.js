
// global variables
var wins = 0;
var losses = 0;
var randomResult;
var previousValue = 0;

  var resetAndStart = function() {
       $(".crystals").empty();

           var images =[ "assets/images/crystal8.jpeg", 
                         "assets/images/crystal2.jpeg",
                         "assets/images/crystal3.jpeg",
                          "assets/images/crystal9.jpg"
                      ] ;

    randomResult =Math.floor(Math.random() * 69 ) + 30;
    $(".result").html( randomResult);

    for ( var i = 0; i < 4; i++) {
       var random = Math.floor(Math.random() * 11) +1;
    
     var crystal = $("<div>");
     crystal.attr({"class": 'crystal',
                  "random-number": random
                
    });
    crystal.css({
         "background-image":"url('" + images[i] + "')",
          "background-size": "cover"

    });
   
    $(".crystals").append(crystal);
   }
   $(".previous").html(previousValue);
}
  resetAndStart();

  $(document).on('click', ".crystal", function() {
     var number = parseInt($(this).attr('random-number'));
     previousValue +=number;
     console.log(previousValue);
     $(".previous").html(previousValue);

   if (previousValue > randomResult){
       losses++;
       $(".win-lost-counter").html("<p>Wins: " + wins + "</p>" + "<p>Losses:  " + losses + "</p>");
       $(".win-lost-counter").append("You lost!");
       previousValue = 0;
       resetAndStart();
   }

   else if (previousValue === randomResult){
       wins++;
       $(".win-lost-counter").html("<p>Wins: " + wins + "</p>" + "<p>Losses:  " + losses + "</p>");
       $(".win-lost-counter").append("You win!");
       previousValue = 0;
       resetAndStart();
       
   }
 
});

  
