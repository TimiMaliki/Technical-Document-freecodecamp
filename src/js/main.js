gsap.registerPlugin(ScrollTrigger)

gsap.to(".hero" , {
    scrollTrigger:{
        trigger:".hero",
        start:"5",
        end:"550 center",
        markers:false,
        scrub:9,
        toggleClass:"black",
    }
})


gsap.to(".featured" , {
    // x: 50,
    // duration:3,
    scrollTrigger:{
        trigger:".menu-class",
        start:"1340",
        end:"2450 center",
        markers:false,
        scrub:9,
        toggleClass:"white",
    }
})

gsap.to(".featured" , {
    scrollTrigger:{
        trigger:".featured",
        start:"1340",
        end:"2450 center",
        markers:false,
        scrub:true,
        toggleClass:"white",
    }
})

gsap.to(".beauty" , {
    scrollTrigger:{
        trigger:".menu-class",
        start:"3340",
        end:"1450 center",
        markers:false,
        scrub:true,
        toggleClass:"white",
    }
})
gsap.to(".beauty" , {
    scrollTrigger:{
        trigger:".beauty",
        start:"3340",
        end:"1450 center",
        markers:false,
        scrub:true,
        toggleClass:"white",
    }
})




gsap.to(".showcase" , {
    // x: 20,
    // duration:5,
    scrollTrigger:{
        trigger:".showcase",
        start:"5",
        end:"350 center",
        markers:false,
        scrub:2,
        toggleClass:"show",
    }
})


gsap.to(".foot" , {
    scrollTrigger:{
        trigger:".menu-class",
        start:"4240",
        end:"5150 center",
        markers:false,
        scrub:9,
        toggleClass:"white",
    }
})

// gsap.(".beauty", {
//                     scale:2
//                 })









// document.addEventListener('DOMContentLoaded', () => {
//      const totalSlides = 7
//     const sectionheight = (document.body.scrollHeight - window.innerHeight) /totalSlides
//     console.log(sectionheight)

//     const slides = document.querySelectorAll(".slide")

//     slides.forEach((slide, index) => {
//         gsap.to(slide, {
//             zIndex:(progress) => {
//                 return progress < 0.5 ? 1 : 5 - index
//             },
//             scrollTrigger : {
//                 start : sectionheight * index + "top",
//                 end : sectionheight * (index + 1) + "top",
//                 scrub:1,
//             }
//         });


//         gsap.fromTop(slide, {
//             scale: index === 0 ? 1 : 0,
//         },
//         {
//             scale: 1,
//             scrollTrigger:{
//                 start: sectionheight * index + " top",
//                 end: sectionheight * (index + 1) + "top",
//                 scrub:1
//             },
//         }
//         );
        
//         if(index !== 0){
//             gsap.fromTop(slide.querySelectorAll(".scale")), {
//                 scale:2
//             },{
//                 scale: 1,
//                 scrollTrigger: {
//                     start: sectionheight * index + " top",
//                     end: sectionheight * (index + 1) + " top",
//                     scrub: 1,
//                 }
//             }
//         }
//     })

// })