// import {} from 'scrollmagic';

  //window height
   var wheight = $(window).height(); //get height of the window

   $('.fullheight').css('height', wheight);

   $(window).resize(function() {
     var wheight = $(window).height(); //get height of the window
     $('.fullheight').css('height', wheight);
   }) //on resize


// init controller
var controller = new ScrollMagic.Controller({
  globalSceneOptions:{
   
  }
});

var attractionsTween = TweenMax.staggerFromTo('#attractions article' , 1 , {opacity: 0 , scale: 0 } , {opacity: 1 , scale: 1 , ease: Back.easeOut , delay: .5 } );

// create a scene
var scene = new ScrollMagic.Scene({
  triggerHook: .5,
  triggerElement: '#attractions' 
  
})
  .setTween(attractionsTween)
  .addTo(controller); 
