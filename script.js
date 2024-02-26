function locomotive(){
    gsap.registerPlugin(ScrollTrigger);

    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
    
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#main"),
      smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);
    
    // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("#main", {
      scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
      }, // we don't have to define a scrollLeft because we're only scrolling vertically.
      getBoundingClientRect() {
        return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
      },
      // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
      pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });
    
    
    
    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    
    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();
    
    
    
    
}

// locomotive()


function page1Animation() {
    window.addEventListener("mousemove", function (dets) {
        gsap.to(".cursor", {
            x: dets.x,
            y: dets.y
        })
    })
    document.querySelector("#over").addEventListener("mousemove", function () {
        gsap.to(".cursor", {
            scale: 5
        })
    })
    document.querySelector("#over").addEventListener("mouseleave", function () {
        gsap.to(".cursor", {
            scale: 1
        })
    })
    document.querySelector("#title-section h1").addEventListener("mousemove", function () {
        gsap.to(".cursor", {
            scale: 5
        })
    })
    document.querySelector("#title-section h1").addEventListener("mouseleave", function () {
        gsap.to(".cursor", {
            scale: 1
        })
    })
    var tl = gsap.timeline();

    var impo = document.querySelectorAll(".impo");

    impo.forEach(function (e) {
        e.addEventListener("mouseenter", function () {
            // Reset the timeline at the beginning of each mouseenter
            tl.clear();

            tl.to(".first", {
                y: -200,
                // opacity: 0
            }, "a");
            tl.to(".foth2", {
                y: 200,
                // opacity: 0
            }, "a");
            tl.to("#over img", {
                scale: 1.04
                // opacity: 0
            }, "a");
            tl.to("#title-section h1", {
                scale: 1.08
                // opacity: 0
            }, "a");
        });

        e.addEventListener("mouseleave", function () {
            // Reset the timeline at the beginning of each mouseleave
            tl.clear();

            tl.to(".first", {
                y: -40,
                // transform: "translateY(-25%)"
            }, "a");
            tl.to(".foth2", {
                y: -20,
                // opacity: 0
            }, "a");
            tl.to("#over img", {
                scale: 1
                // opacity: 0
            }, "a");
            tl.to("#title-section h1", {
                scale: 1
                // opacity: 0
            }, "a");
        });
    });

}
page1Animation()


  
    // var ti = gsap.timeline();
    // ti.from("#page1 .impo",{
    //     scale:0,
    //     opacity:0,
    //     stagger:1
    // })
    // ti.to(".project #image1",{
    //     opacity:1,
    //     height:"100%",
    //     scrollTrigger :{
    //         trigger: " #p1",
    //         scroller: "#main",
    //         // markers: true,
    //         start: "top 60%",
    //         end : "top 60%",
    //         scrub:1,
    //         pin:true,
    //     },
    // }) 
    // ti.to(".project #image2",{
    //     opacity:1,
    //     height:"100%",
    //     scrollTrigger :{
    //         trigger: " #p2",
    //         scroller: "#main",
    //         // markers: true,
    //         start: "top 60%",
    //         end : "top 60%",
    //         scrub:1,
    //         pin:true,
    //     },
    // }) 
    //    ti.to(".project #image3",{
    //     opacity:1,
    //     height:"100%",
    //     scrollTrigger :{
    //         trigger: " #p3",
    //         scroller: "#main",
    //         // markers: true,
    //         start: "top 60%",
    //         end : "top 60%",
    //         scrub:1,
    //         pin:true,
    //     },
    // })
    // ti.to(".project #image4",{
    //     opacity:1,
    //     height:"100%",
    //     scrollTrigger :{
    //         trigger: " #p4",
    //         scroller: "#main",
    //         // markers: true,
    //         start: "top 60%",
    //         end : "top 60%",
    //         scrub:1,
    //         pin:true,
    //     },
    // })
    // ti.to(".project #image5",{
    //     opacity:1,
    //     height:"100%",
    //     scrollTrigger :{
    //         trigger: " #p5",
    //         scroller: "#main",
    //         // markers: true,
    //         start: "top 60%",
    //         end : "top 60%",
    //         scrub:1,
    //         pin:true,
    //     },
    // })