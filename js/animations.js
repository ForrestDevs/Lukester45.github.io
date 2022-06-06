gsap.registerPlugin(ScrollTrigger);

gsap.set('#header-line-main', {
    width:'65vw', 
    height:'1px',
    marginLeft: '1vw',
    backgroundColor: 'rgb(255, 255, 255)' 
})
gsap.set('#header-buttons a', {
    textAlign: 'center',
    textDecoration: 'none',
    textTransform: 'uppercase',
    color: 'rgb(255, 255, 255)',
    fontSize: '1vw'
})
gsap.set('#gearshed-logo-white', {
    position: 'absolute', 
    width: '6.5vw',
    marginTop: '6%'
})
gsap.set('#gearshed-logo-black', {
    position: 'absolute', 
    width: '6.5vw',
    marginTop: '6%',
    opacity: '0'
})


function mountainScene() {
    var tl = gsap.timeline();
    tl.fromTo(".sky", 10, {y: -150}, {y: 0, duration: 10})
    .to(".cloudBackRight", 10, { y: -250 }, "-=10")
    .fromTo(".mountBack", 10, {y: 0 }, {y: 350, duration: 10}, "-=10")
    .to(".cloudMiddleRight", 10, { y: -250 }, "-=10")
    .fromTo(".mountMiddle", 10, {y: -50 }, {y: 250, duration: 10}, "-=10")
    .fromTo(".mountFront", 10, {y: 0 }, {y: 250, duration: 10}, "-=10")
    .to(".cloudFrontLeft", 10, { y: -700 }, "-=10")
    .to(".cloudFG", 10, { y: -200 }, "-=10")
    .fromTo(".cloudMask", 10, {y: -50 }, {y: -1100, duration: 10}, "-=10")
    .to("#gearshed-logo-white", 5, {marginTop: '-2.5%'}, "-=10")
    .to("#gearshed-logo-black", 5, {marginTop: '-2.5%'}, "-=10")
    .to("#gearshed-logo-white", 2, {opacity: 0}, "-=6")
    .to("#gearshed-logo-black", 2, {opacity: 1}, "-=6")
    .to("#header-line-main", 3, {marginLeft: '7.5vw', width: '57.5vw'}, "-=10")
    .to("#header-line-main", 2, {backgroundColor: '#162a43'}, "-=5")
    .to("#header-buttons a", 2, {color: '#162a43'}, "-=5")
    .to("#org-text", 3, {opacity: 0}, "-=3")
    .to(".punch1", 3, {opacity: 1}, "-=3")
    .fromTo(".punch1", 3, {x: "-100%"}, {x: 0}, "-=3")
    .to(".punch2", 3, {opacity: 1}, "-=3")
    .fromTo(".punch2", 3, {x: "100%"}, {x: 0}, "-=3")
    .to(".punch3", 3, {opacity: 1}, "-=3")
    .fromTo(".punch3", 3, {y: "100%"}, {y: 0}, "-=3")
    return tl;
}
    
function aboutScene() {
    var tl = gsap.timeline();
    //tl.to(".aboutSection", 10, {y: -1100});
    return tl;
}

const homeSectionScrollTrigger = gsap.timeline({
    scrollTrigger: {
        trigger: ".pageWrapper",
        markers: false,
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
        pin: '#homeSection',
        //pinSpacing: -1000,
    }
});

homeSectionScrollTrigger
.add(mountainScene())



 


