$(document).ready(function(){
  $(".expandDiv").click(function(){
   if($(this).children(".content").is(':visible')){
     $(this).children(".content").show();
   } else {
     if($(".content").is(":visible")){
       $(".content").slideUp();
       $("button").css({  
        "backgroundColor": "#f2f2f2"}); 
     } else {
       $(".content").hide();
     }
     $(this).children(".content").slideDown();
     $(this).children("button").css({  
      "backgroundColor": "white"}); 
   }   
  });
});