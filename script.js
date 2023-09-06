var crse=document.querySelector("#cursor")
var cursr=document.querySelector("#cursor-blur")
document.addEventListener("mousemove",function(val){
    crse.style.left=val.x+"px";
    crse.style.top=val.y+"px";
    cursr.style.left=val.x - 250 +"px";
    cursr.style.top=val.y - 250 +"px";


})
var h4all = document.querySelectorAll("#nav h4");
h4all.forEach(function (elem) {
  elem.addEventListener("mouseenter", function () {
    crse.style.scale = 3;
    crse.style.border = "1px solid #fff";
    crse.style.backgroundColor = "transparent";
  });
  elem.addEventListener("mouseleave", function () {
    crse.style.scale = 1;
    crse.style.border = "0px solid #95C11E";
    crse.style.backgroundColor = "#95C11E";
  });
});

gsap.to("#nav",{
    backgroundColor:"#000",
    height:"65px",
    duration:1.2,
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
       // markers:true,
        start:"top -10%",
        end:"top -11%",
        scrub:1
    },
});
gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        //markers:true,
        start:"top -25%",
        end:"top -70%",
        scrub:2
    },
});
gsap.to("#about-us img,#about-us-in",{
    y:90,
    //opacity:0,
    duration:1,
    stagger:0.1,
    scrollTrigger:{
        trigger:"#about-us",
        scroller:"body",
        //markers:true,
        start:"top 70%",
        end:"top 65%",
        scrub:2
    },

});
gsap.to(".card",{
    scale:0.8,
    //opacity:0,
    duration:1,
    stagger:0.1,
    scrollTrigger:{
        trigger:".card",
        scroller:"body",
        //markers:true,
        start:"top 70%",
        end:"top 65%",
        scrub:1
    },

});
gsap.from("#colon1", {
    y: -70,
    x: -70,
    scrollTrigger: {
      trigger: "#colon1",
      scroller: "body",
      // markers:true,
      start: "top 55%",
      end: "top 45%",
      scrub: 4,
    },
  });
  gsap.from("#colon2", {
    y: 70,
    x: 70,
    scrollTrigger: {
      trigger: "#colon1",
      scroller: "body",
      // markers:true,
      start: "top 55%",
      end: "top 45%",
      scrub: 4,
    },
  });