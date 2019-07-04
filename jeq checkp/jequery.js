$(document).ready(function(){
    $(".espace").hover(function(){
      $(".button").show();
      $("#img").css("opacity", "0.5");
     
    }, function(){
        $(".button").hide();
        $("#img").css("opacity", "1");
     } );
   
   
  });
  $(document).ready(function(){
    $(".botmikey").click(function(){
      $("#a504").show();
      $("#a504").animate({right: "+=400",top:"+=500",width:"+=200",height:"+=200"});
    });
    
  });

