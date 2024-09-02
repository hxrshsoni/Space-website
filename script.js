gsap.to("#nav" ,{
    backgroundColor:"black",
    scrollTrigger:{
        trigger:"#nav",
        scroller: "body",
        start:"top -40%",
        end:"top -41%",
        scrub:2

    }
})

gsap.to("#main" ,{
    backgroundColor:"#000",
    
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        start:"top -40%",
        end:"top -80%",
        scrub:2
    }
})

gsap.from("#page3 h1", {
    y:50,
   scrollTrigger: {
     trigger: "#page3 h1",
     scroller: "body",
     start: "top 75%",
     end: "top  40%",
     scrub: 3,
   },
 });