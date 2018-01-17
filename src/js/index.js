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

// highlight links nav on scroll

 $(window).scroll(function(){

  var windowPos = $(window).scrollTop() + topoffset;
  $('nav li a').removeClass('active');
   if (windowPos > $('#confiserieinfo').offset().top ){
      $('nav li a').removeClass('active');
      $('a[href$="#confiserieinfo"]').addClass('active');
    }
   if (windowPos > $('#rooms').offset().top) {
     $('nav li a').removeClass('active');
     $('a[href$="#rooms"]').addClass('active');
   }
   if (windowPos > $('#dining').offset().top) {
     $('nav li a').removeClass('active');
     $('a[href$="#dining"]').addClass('active');
   }
   if (windowPos > $('#events').offset().top) {
     $('nav li a').removeClass('active');
     $('a[href$="#events"]').addClass('active');
   }
   if (windowPos > $('#attractions').offset().top) {
     $('nav li a').removeClass('active');
     $('a[href$="#attractions"]').addClass('active');
   }
 });


//  rooms animation

var start = {
  bottom: -700 ,
  scale : 0 , 
  opacity: 0
  
}

var finish = {
  bottom: 0 ,
  scale: 1 ,
  opacity: 1,
  ease: Back.easeOut ,
  repeat: 1,
  yoyo: true
}



var roomTween = TweenMax.staggerFromTo( '#piccadilly .content' , 1 , start , finish );

var pin = new ScrollMagic.Scene({
  triggerHook: 'onLeave',
  triggerElement: '#piccadilly'  ,
  offset: -topoffset,
  duration: 500
}).setPin('#piccadilly')
  .setTween(roomTween)
  .addTo(controller);

var roomTween = TweenMax.staggerFromTo('#cambridge .content', 1, start, finish);

var pin = new ScrollMagic.Scene({
  triggerHook: 'onLeave',
  triggerElement: '#cambridge',
  offset: -topoffset,
  duration: 500
}).setPin('#cambridge')
  .setTween(roomTween)
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
