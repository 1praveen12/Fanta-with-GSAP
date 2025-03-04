

var t1 = gsap.timeline({
  scrollTrigger: {
    trigger: '.one',
    start: "70% 50%",
    end: "10% 50%",
    scrub: true,
  }
})

var t3 = gsap.timeline({
  scrollTrigger: {
    trigger: '.three',
    start: "-10% 50%",
    end: "50% 50%",
    scrub: true,
  }
})

var t2 = gsap.timeline({
  scrollTrigger: {
    trigger: '.two',
    start: "70% 50%",
    end: "50% 50%",
    scrub: true,
  }
})



t2.to("#fanta",{
top:"240%",
left:"50%",
}
)

t1.to("#leaf1",{
top:"125%",
left:"30%",
rotate:"-180deg"
}
)

t1.to("#fanta",{
top:"147%",
left:"27%",
}
)
t1.to("#slice",{
top:"115%",
left:"23%",
width:"15%",
rotate:"360deg"

}
)
t1.to("#leaf2",{
top:"147%",
left:"15%",
rotate:"-180deg"
})
t1.to("#oranges",{
bottom:"-37%",
right:"-10%%",
rotate:"40deg"
})

t3.from("#cola",{
  rotate:"30deg",
  bottom:"-37%",
},'ca')
t3.from("#sprite",{
  rotate:"-30deg",
  bottom:"-37%",
},'ca')

t3.to("#cola",{
  rotate:"-0deg",
  bottom:"10%",
},'ca')
t3.to("#sprite",{
  rotate:"-0deg",
  bottom:"10%",
},'ca')

t3.from("#lemon",{
  rotate:"360deg",
},'same')
t3.from("#orange2",{
  rotate:"360deg",
},'same')
t3.from("#orange3",{
  rotate:"360deg",
},'same')







