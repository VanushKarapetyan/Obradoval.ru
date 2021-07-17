window.onload = function() {
    document.body.classList.add('loaded_hiding');
    window.setTimeout(function() {
        document.body.classList.add('loaded');
        document.body.classList.remove('loaded_hiding');
    }, 500);
}

$('.single-item').slick({
    infinite: false,
    arrows: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
});
var acc = document.getElementsByClassName("accordion_link");
var i;
for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}
var isshow = false;

function myFunction(x) {
    x.classList.add("change");
    if (isshow === false) {
        document.querySelector(".burger_nav").classList.add("burger_nav_hide")
        setTimeout(function() {
            document.querySelector(".header").classList.add("header_fixed")
        }, 200);
        setTimeout(function() {
            isshow = true
        }, 100);
    } else if (isshow === true) {
        document.querySelector(".burger_nav").classList.remove("burger_nav_hide")
        document.querySelector(".header").classList.remove("header_fixed")
        setTimeout(function() {
            isshow = false
        }, 100);
    }
}

window.addEventListener("click", function(e) {
    var div = $(".burger_nav");
    if (isshow === true && !div.is(e.target) &&
        div.has(e.target).length === 0) {
        document.querySelector(".burger_nav").classList.remove("burger_nav_hide")
        isshow = false
        document.querySelector(".burger_menu_icon").classList.remove("change")
    }
})

function btnfunction(event) {
    document.querySelector(".active").classList.remove("active")
    this.event.target.classList.add("active")
}

function btnfunctiontwo(event) {
    document.querySelector(".active1").classList.remove("active1")
    this.event.target.classList.add("active1")
}

function btnfunctionthree(event) {
    document.querySelector(".active2").classList.remove("active2")
    this.event.target.classList.add("active2")
}

function btnfunctionfour(event) {
    document.querySelector(".active3").classList.remove("active3")
    this.event.target.classList.add("active3")
}

function btnfunctionfive(event) {
    document.querySelector(".active4").classList.remove("active4")
    this.event.target.classList.add("active4")
}

function btnfunctionsix(event) {
    document.querySelector(".active5").classList.remove("active5")
    this.event.target.classList.add("active5")
}
var isShow = false
var filtersblock = document.querySelector(".filters_section_two")

function filtersopen() {
    if (isShow === false) {
        filtersblock.classList.add("filter_section_media")
        document.querySelector(".filter_btn").style.display = "none"
        document.querySelector(".filter_close_btn").style.display = "block"
        setTimeout(function() {
            isShow = true
        }, 100);
    }
}

function filtersclose() {
    if (isShow === true) {
        filtersblock.classList.remove("filter_section_media")
        document.querySelector(".filter_close_btn").style.display = "none"
        document.querySelector(".filter_btn").style.display = "block"
        setTimeout(function() {
            isShow = false
        }, 100);
    }
}
$('.col_block').slick({
    arrows: false,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,

    responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1.2,
                slidesToScroll: 1
            }
        }
    ]
});

function tabsFunction(event) {
    event.target.parentElement.nextElementSibling.classList.toggle("tabs_display_block_list")
    var tabicon = document.querySelector(".tab_icon")
    event.target.parentElement.children[1].classList.toggle("tab_icon_rotate");
}