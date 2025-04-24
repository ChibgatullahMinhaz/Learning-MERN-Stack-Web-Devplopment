gsap.to ('.box1' ,{
    rotation: 360,
    duration: 2,
 
   
    repeat: Infinity,
   borderRadius :'50%',
    backgroundColor : 'blue',
    delay : 0,
    // stagger: 1 // => when i have many element as same  then i will use stagger 
})

gsap.to ('.box2' ,{
    rotation: 360,
    duration: 3,
    x: 700,
    delay : 1,
    repeat : Infinity ,
    yoyo: true
})
gsap.to ('.box3' ,{
    rotation: 60,
    duration: 3,
    yoyo: true,
    x: 1000,
    delay : 1,
    repeat: Infinity,
})
