window.addEventListener('mousemove',function
(dets){
    var rect = document.querySelector('#rec');
    //mapRange(inMin, inMax, outMin, outMax, valueToMap)
    var xval = gsap.utils.mapRange(
        0, window.innerWidth,200+rect.getBoundingClientRect().width/2,window.innerWidth - (200+rect.getBoundingClientRect().width/2),
        dets.clientX
    )
    gsap.to('#rec',{
        left: xval ,
        ease: Power3
    })
})