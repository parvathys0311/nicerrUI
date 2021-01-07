// let selected = document.querySelectorAll('.panel');
// let content = document.querySelectorAll('accordion-content');

// function initAccordion(document){
//    //when panel is clicked, handlePanelClick is called.          
// function handlePanelClick(event){
//   showPanel(event.currentTarget);
// }
//   function showPanel(panel){
//     //Hide current one. First time it will be null. 
//     //  var expandedPanel = document.querySelector(".active");
//     //  console.log(expandedPanel);
//     //  if (expandedPanel){
//     //    console.log("yes");
//     //      expandedPanel.classList.remove("active");
//     //  }
//      //Show new one
//      panel.classList.toggle("active");
//   }

//   for (var i = 0, len = selected.length; i < len; i++){
//     selected[i].addEventListener("click", handlePanelClick);
//   }

// // showPanel(selected[0])
// }
// initAccordion(document.getElementById("acc"));
// $('.accordion-content').first().show();
$("#accordion ul li").each(function(){
  var trigger= $(this).find('a')
  var siblings = $(this).siblings()
  var acc_text = $(this).find('.accordion-content')
  $(trigger).click(function(){
      var visible_text = siblings.find('.accordion-content').filter(":visible")
      // if ($('.accordion-content').first() == trigger){
      //   alert('no');
      //   $('.accordion-content').first().show();
      // }
      // else {
      //   alert('alert');
      //   $('.accordion-content').first().hide();
      // }

      $(acc_text).slideToggle()
      $(visible_text).slideUp()
  });
  
});