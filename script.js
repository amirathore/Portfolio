function page1Animation(){
    window.addEventListener("mousemove", function(dets){
        gsap.to(".cursor",{
            x:dets.x,
            y:dets.y
        })
    })
    document.querySelector("#over").addEventListener("mousemove", function(){
        gsap.to(".cursor",{
            scale:5
        })
    })
    document.querySelector("#over").addEventListener("mouseleave", function(){
        gsap.to(".cursor",{
            scale:1
        })
    })
    document.querySelector("#title-section h1").addEventListener("mousemove", function(){
        gsap.to(".cursor",{
            scale:5
        })
    })
    document.querySelector("#title-section h1").addEventListener("mouseleave", function(){
        gsap.to(".cursor",{
            scale:1
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
              scale:1.04
                // opacity: 0
            }, "a");
            tl.to("#title-section h1", {
                scale:1.08
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
                scale:1
                  // opacity: 0
              }, "a");
              tl.to("#title-section h1", {
                scale:1
                  // opacity: 0
              }, "a");
        });
    });
    
}

page1Animation()

// var prj = document.querySelector(".project");

// prj.addEventListener("mousemove", function() {
//     gsap.to(".project img", {
//         scale: 1.04
//     });
// });
// prj.addEventListener("mouseleave", function() {
//     gsap.to(".project img", {
//         scale: 1
//     });
// });

// var projects = document.querySelectorAll(".project");

// projects.forEach(function (project) {
//     project.addEventListener("mousemove", function () {
//         gsap.to(this.querySelector("img"), {
//             scale: 1.03
//         });
//     });

//     project.addEventListener("mouseleave", function () {
//         gsap.to(this.querySelector("img"), {
//             scale: 1
//         });
//     });
// });

// var projects = document.querySelectorAll(".project");

// projects.forEach(function (project) {
//     project.addEventListener("mouseenter", function () {
//         gsap.to(this.querySelector("img"), {
//             scale: 1.04
//         });

//         gsap.to("body", {
//                 backgroundColor: "yellow" // Change the background color on mouseenter
//         });
//     });

//     project.addEventListener("mouseleave", function () {
//         gsap.to(this.querySelector("img"), {
//             scale: 1
//         });

//         gsap.to("body", {
//             backgroundColor: "black" // Revert to normal background color on mouseleave
//         });
//     });
// });


var projects = document.querySelectorAll(".project");
var body = document.querySelector("html,body");

projects.forEach(function (project) {
    project.addEventListener("mouseenter", function () {
        gsap.to(this.querySelector("img"), {
            scale: 1.04
        });

        body.style.backgroundColor = "yellow"; // Change the background color on mouseenter
    });

    project.addEventListener("mouseleave", function () {
        gsap.to(this.querySelector("img"), {
            scale: 1
        });

        body.style.backgroundColor = ""; // Revert to normal background color on mouseleave
    });
});
