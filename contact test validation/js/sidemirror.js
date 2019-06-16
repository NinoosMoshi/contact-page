$(function(){
 'use strict'
  
    //Adjust Slider Height
    var winH   = $(window).height(),
        navH   = $('.navbar').innerHeight();
    
    $('.ninos').height(winH - navH);
    
   
    
});