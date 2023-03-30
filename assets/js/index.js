const navbar = document.querySelector('.navbar');
        window.onscroll = () => {
            if (window.scrollY > 50) {
                navbar.classList.add('navbar-scroll');
            } else {
                navbar.classList.remove('navbar-scroll');
            }
        };

        const priceRange = document.getElementById("price-range");
        const priceValue = document.getElementById("price-value");
        
        priceRange.oninput = function() {
          priceValue.innerHTML = "$" + this.value;
        }
        

        const counter = document.querySelector('.count');
        const rangeStart = 1;
        const rangeEnd = 10;


$(document).ready(function(){
    $(".counter").each(function(){
        $(this).prop('Counter',0).animate({
            counter:$(this).text()
        },{
            duration:3500,
            easing :'swing',
            step:function(now){
                $(this).text(Math.ceil(now))
            }
        })
    });
});

gsap.fromTo( ".logo",{duration:1 , x: 1000 }, {duration:1 , x: 0 , });

gsap.from(".nav-item",{duration:1 , opacity:0 , y: -150 ,stagger:0.25});

gsap.from(".card",{duration:2.5 , opacity:0 , scale:0.3 });

//Dot animatio use gsap 
gsap.from(".dot",{duration:1 , opacity:0 , y: -150 ,stagger:0.25});