// importing scripts
import './jquery.waypoints.min.js';
import './waypoint';
import './smooth-nav-min';

// ------------------ document ------------------

// onload fade in hero
$(document).ready(function(){
    $("#home").hide(0).fadeIn(1000)
});

// adds shadow to the header based on the window offset
$(document).scroll(function() {
    if($(window).scrollTop() > 15){
        $('#header').css('box-shadow', '0 0 20px #ccc');
        $('#home-btn').css('opacity', '1');
    }else if($(window).scrollTop() < 15){
        $('#header').css('box-shadow', '0 0 0 #ccc');
        $('#home-btn').css('opacity', '0');
    }
});

// ------------------ mobile navigation ------------------
// fades in mobile navigation
$('.header__mobile--btn').click(function(){
    $( ".mobile__nav--backdrop").css("width", "100%");
});
// fades out mobile navigation
$('#mobile-close-btn').click(function(){
    $( ".mobile__nav--backdrop").css("width", "0%");
});
// fades out mobile navigation
$('.mobile__nav--backdrop').click(function(){
    $( ".mobile__nav--backdrop").css("width", "0%");
});

// ------------------ video modal ------------------

// querying elements
const openModal = document.querySelector('#open-modal');
const closeModal = document.querySelector('#close-modal');
const modalBackdrop = document.querySelector('#backdrop');

// opens the modal
openModal.addEventListener('click', function(e){
    e.preventDefault();
    modalBackdrop.style.visibility = 'visible';
});

// closes the modal
modalBackdrop.addEventListener('click', function(e){
    e.preventDefault();
    modalBackdrop.style.visibility = 'hidden';
});
// closes the modal
closeModal.addEventListener('click', function(e){
    e.preventDefault();
    modalBackdrop.style.visibility = 'hidden';
});

// ------------------ waypoints ------------------

const elToAnimate = [
    '.intro__waypoint', 
    '.about__waypoint',
    '.features__waypoint',
    '.gallery__waypoint',
    '.video__waypoint',
    '.team__waypoint',
    '.tes__waypoint',
    '.price__waypoint',
    '.blog__waypoint',
    '.newsletter__waypoint'
];

const animateMe = (elArr) => {
    $.each(elArr , function (index, value){
        waypointMe(value);
    });
}

const waypointMe = (el) => {
    let $me = $(el);
    $me.waypoint((direction) => {
        if(direction === 'down'){
            $me.fadeTo( "slow" , 1,)
        } }, {offset: '80%'});
};

animateMe(elToAnimate);