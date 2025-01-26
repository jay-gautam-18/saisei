var tl= gsap.timeline(); //loader gsap
tl.to("#l1",{
    y:"100%",
    duration:1.5
},"one")
tl.to("#l3",{
    y:"-100%",
    duration:1.5
},"one")
tl.to("#l2",{
    width:0,
    ease: Power1,
    display:"none",
    ease: Power1,
    
},"one")
tl.to(".loader",{
    y:"-100%",
    duration:0.5,
},"five")
var tg =gsap.timeline();
tg.to(".circle",{
    borderLeft: "2px solid rgb(254, 240, 233)" ,
    duration:0.2

},"one")
tg.to(".circle",{
    borderBottom: "2px solid rgb(254, 240, 233)" ,
    duration:0.3
},"two")
tg.to(".circle",{
    borderRight: "2px solid rgb(254, 240, 233)" ,
    duration:0.3
},"three")
tg.to(".circle",{
    borderTop: "2px solid rgb(254, 240, 233)" ,
    duration:0.2
},"four")
tg.to(".ig",{
    duration:0.5,
    opacity:0
},"five");

//loader end
//page1 animation//
tl.to(".onpoop",{
    width:"10%",
    duration:0.5,
    
},"six")
tl.to(".onpoop",{
    width:"100%",
    duration:0.3,
    // delay:0.5
},"seven");
tl.to(".log",{
    y:"-15.5px",
    
},"eight")
tl.to(".menu-bar",{
    opacity:1,
    duration:1

},"eight")
tl.to(".nav-bottom",{
    width:"100%"
},"eight")
tl.to(".chinese h1",{
    y:"-51px",
    duration:0.7
},"nine")
tl.to(".scroll h3",{
    top:"0",
    duration:0.7
},"nine")
tl.to(".para p",{
    top:"0",
    duration:0.7
},"nine")
tl.to(".main-head h1",{
    opacity:1,
    duration:2
},"nine")
tl.to('.buddy',{
    position:"relative"
})
//page 1 end
//menu start
const menu = document.querySelector('.menu-bar')
menu.addEventListener("click", function(){
    gsap.to('.buddy',{
        position:"relative"
    })
    const ti = gsap.timeline()
    ti.to('.buddy',{
        position:"fixed"
    })
    ti.to('.left-menu',{
            left:0,duration:1.5
        },"1")
    ti.to('.right-menu',{
                left:"50%",duration:1.5
        },"1")

        ti.to('.overlay-line',{
            width:"100%",
            duration:2,
            stagger:0.1
        },"2")
        const boxs = document.querySelectorAll(".go-on");
        ti.to(boxs,{
            opacity:1,
            duration:0.7,
            delay:0.5,
            stagger:0.15
        
        },"2")
        ti.to('.c-circle',{
            opacity:1,
            duration:0.5
        
        },"2")
        ti.to('.r-1 h1,.r-1 h3,.l-1 h1, .r-2 h1 ,.l-2 h1 , .r-3 h1  , .l-3 h1',{
            top:0,
            stagger:0.06
        },"2")
        ti.to(".right-menu-line",{
            width:"100%",
            duration:1.5
        },"2")
        const obox = document.querySelectorAll(".overlay-go-on")
        const eh1 = document.querySelectorAll(".go-on h1")
        const img1 = document.querySelectorAll(".n-img")
        const ch1 = document.querySelectorAll(".name h4")
        const ol1 = document.querySelectorAll(".o-l1")
        const oll = document.querySelectorAll(".overlay-line")
        boxs.forEach((box,index)=> {
           box.addEventListener('mouseover',function(){
            gsap.to(obox[index],{
                height:"100%",
                duration:0.1
            })
            gsap.to(eh1[index],{
                x:30
            })
            gsap.to(img1[index],{
                opacity:0
            })
            gsap.to(ch1[index],{
                opacity:1
            })
            gsap.to(ol1[index],{
                width:"100%"
            })
            gsap.to(oll[index],{
                opacity:0
            })
           })
           box.addEventListener('mouseout',function(){
            gsap.to(obox[index],{
                height:0,
                duration:0.1
            })
            gsap.to(eh1[index],{
                x:0
            })
            gsap.to(img1[index],{
                opacity:1
            })
            gsap.to(ch1[index],{
                opacity:0
            })
            gsap.to(ol1[index],{
                width:0
            })
            gsap.to(oll[index],{
                opacity:1
            })
        
           })
            
        });

})
const band = document.querySelector(".right-menu button")
band.addEventListener("click",function(){
        gsap.to('.buddy',{
            position:"fixed"
        })
        const tg = gsap.timeline()
        tg.to('.left-menu',{
                left:"-50%",duration:0.5
            },"2")
        tg.to('.right-menu',{
                    left:"100%",duration:0.5
            },"2")
    
            tg.to('.overlay-line',{
                width:0,
                
                stagger:0.01
            },"1")
            const boxs = document.querySelectorAll(".go-on");
            tg.to(boxs,{
                opacity:0,
                
                delay:0.5,
                stagger:0.005
            
            },"1")
            tg.to('.c-circle',{
                opacity:0,
                
            
            },"1")
            tg.to('.r-1 h1,.r-1 h3,.l-1 h1, .r-2 h1 ,.l-2 h1 , .r-3 h1  , .l-3 h1',{
                top:"100%",
                stagger:0.006
            },"1")
            tg.to(".right-menu-line",{
                width:0,
                
            },"1")
})
//menu-bar animation
menu.addEventListener("mouseover",function(){
    const tp = gsap.timeline()
    tp.to(".rightmen",{
        x:"-68px",
        
    },"one")
    tp.to(".rightmen",{
        x:0,
        
    },"two")
    tp.to(".leftmen",{
        x:"-68px",
        
        delay:0.3
    },"one")
    tp.to(".leftmen",{
        x:0,
        
        delay:0.3
    },"two")
});
//menu end
//para page2
const abtus = document.querySelector('.button-page2');
abtus.addEventListener('mouseover',()=>{
    gsap.to('.light-gold',{
        y:"-100%"
    })
    gsap.to('.dark-gold',{
        y:"-100%"
    })
})
abtus.addEventListener('mouseout',()=>{
    gsap.to('.light-gold',{
        y:0
    })
    gsap.to('.dark-gold',{
        y:0
    })
})

//page2 big image
gsap.registerPlugin(ScrollTrigger);
const ty = gsap.timeline({
    scrollTrigger: {
        trigger:'.main',
        markers:true
    }
});
ty.to('.center-2 img',{
    width:"100%",
    duration:1.3
},'one')
ty.to('.right-2-2 img',{
    width:"100%",
    duration:1.3
},'two')
ty.to('.button-page2',{
    opacity:1,
    duration:1
},'one')
ty.to('#p-tag p',{
    top:"0%",
    duration:1.3
},'one')
ty.to('.oppo h1',{
    top:0,
    duration:1
},'one')
ty.to('.left-2 #hu',{
    top:0,
    duration:1,
    opacity:1
})
gsap.from('#oppo-1',{
    opacity:0
    // duration:1
},'two').to({
    opacity:1,
    duration:1
},'two');
