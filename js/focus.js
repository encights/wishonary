// JavaScript Document

$(document).ready(function() {
  $("#cmp input").focus(function() {
      $('#step-1').show('slow');       
   });
   
  $('#cmp input').blur(function(){
          $('#step-1').hide('slow');
  });

// step1 close  

 $("#d-of input").focus(function() {
      $('#step-2').show('slow');       
   });
   
  $('#d-of input').blur(function(){
          $('#step-2').hide('slow');
  });

// step2 close  

 $("#d-au input").focus(function() {
      $('#step-3').show('slow');       
   });
   
  $('#d-au input').blur(function(){
          $('#step-3').hide('slow');
  });
  
// step3 close  

 $("#sl-pr input").focus(function() {
      $('#step-4').show('slow');       
   });
   
  $('#sl-pr input').blur(function(){
          $('#step-4').hide('slow');
  });
  
// step4 close 

$("#ss input").focus(function() {
      $('#step-5').show('slow');       
   });
   
  $('#ss input').blur(function(){
          $('#step-5').hide('slow');
  });
  
// step5 close  

});
