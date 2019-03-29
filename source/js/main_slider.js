$(document).ready(function(){
  $('.slide-one').owlCarousel({
     loop:true,
     margin:10,
     nav:true,
     autoplay:false,
     autoplaySpeed:1000,
     responsive:{
         0:{
             items:1
         },
         600:{
             items:1
         },
         1000:{
             items:1
         }
     }
   })

   $('.slide-two').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoplay:false,
    autoplaySpeed:3000,
    responsive:{
        0:{
            items:1
        },
        768:{
            items:3
        },
        1200:{
            items:3
        }
    }
  })

  $('.slide-third').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoplay:false,
    autoplaySpeed:3000,
    responsive:{
        0:{
            items:1
        },
        768:{
            items:3
        },
        1200:{
            items:3
        }
    }
  })
});

