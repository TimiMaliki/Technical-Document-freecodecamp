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
        trigger:".menu",
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
        trigger:".menu",
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
    x: 20,
    duration:5,
    scrollTrigger:{
        trigger:".showcase",
        start:"5",
        end:"350 center",
        markers:false,
        scrub:2,
        toggleClass:"show",
    }
})



