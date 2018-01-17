// import {} from 'scrollmagic';

  //window height
   var wheight = $(window).height(); //get height of the window
  var topoffset = 43;
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

// smooth Scroll

$(function () {
  $('a[href*="#"]:not([href="#"])').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top - topoffset
        }, 1000);
        return false;
      }
    }
  });
});

// navbar animation

var nav = new ScrollMagic.Scene({
  triggerHook: '0',
  triggerElement: 'nav' 
})
 .setPin('nav')
 .addTo(controller);


// last part of the page animation

var attractionsTween = TweenMax.staggerFromTo('#attractions article' , 1 , {opacity: 0 , scale: 0 } , {opacity: 1 , scale: 1 , ease: Back.easeOut , delay: .5 } );

var scene = new ScrollMagic.Scene({
  triggerHook: 'onLeave',
  triggerElement: '#attractions' ,
  offset: -topoffset-1
  
})
  .setTween(attractionsTween)
  .addTo(controller); 
