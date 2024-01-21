gsap.from("#nav img",{
    // y:-100,
    duretion:1,
    delay:0.5,
    opacity:0
})
gsap.from("#nav h3",{
    y:-100,
    duretion:1,
    delay:0.5,
    opacity:0,
    stagger:0.2
})
gsap.from("#nav h4,#nav button",{
    y:-100,
    duretion:1,
    delay:0.5,
    opacity:0,
    stagger:0.5
})
gsap.from("#main h1",{
    y:100,
    delay:1,
    opacity:0,
    stagger:0.3
})
gsap.from("#main>img",{
    scale:0,
    opacity:0,
    stagger:0.2,
    delay:2
})
gsap.from("h5",{
    scale:0,
    opacity:0,
    delay:2
})
gsap.to("h5",{
    y:40,
    repeat:-1,
    duretion:1,
    yoyo:true
})
