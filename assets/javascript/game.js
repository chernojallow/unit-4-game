
// global variables
var wins = 0;
var losses = 0;
var randomResult;
var previous = 0;

   //$(".crystal").attr('class', 'red');

var resetAndStart = function() {

    $(".crystals").empty();

    var images =[ "assets/images/crystal1.jpeg", 
                  "assets/images/crystal2.jpeg",
                  "assets/images/crystal3.jpeg",
                  "assets/images/crystal4.jpeg"
              ] ;

     randomResult =Math.floor(Math.random() * 69 ) + 30;

     $(".result").html( randomResult);

for ( var i = 0; i < 4; i++) {
    
    var random = Math.floor(Math.random() * 11) +1;
    //console.log(random);
    
    var crystal = $("<div>");
      //crystal.attr("src",  images[i]);
    crystal.attr({"class": 'crystal',
                  "random-number": random
                
});
    crystal.css({
         "background-image":"url('" + images[i] + "')",
          "background-size": "cover"

    });
   
       // crystal.html(random);

    $(".crystals").append(crystal);
   
}
   $(".previous").html(previous);
}
  resetAndStart();




  $(document).on('click', ".crystal", function() {


    var num = parseInt($(this).attr('random-number'));
    previous +=num;
   console.log(previous);
   $(".previous").html(previous);

   if (previous > randomResult){
       losses++;
       
       $(".win-lost-counter").html("<p>Wins: " + wins + "</p>" + "<p>Losses:  " + losses + "</p>");
    
       
       
       previous = 0;
       resetAndStart();
   }
   else if (previous === randomResult){
     
       wins++;
       $(".win-lost-counter").html("<p>Wins: " + wins + "</p>" + "<p>Losses:  " + losses + "</p>");
      
       previous = 0;
       resetAndStart();
       
   }
 
});

  
