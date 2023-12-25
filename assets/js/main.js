$(document).ready(function(){
//Aside
$('.nav_link').on('click', function(){
  $('.nav_link .a').removeClass('ri-arrow-down-s-line');
  $('.nav_link .a').addClass('ri-arrow-right-s-line');
  $(this).next('.menu-dropdown').toggle(1000);
  $('.menu-dropdown').not($(this).next('.menu-dropdown')).slideUp(1000);
  $(this).children('.a').removeClass('ri-arrow-right-s-line');
  $(this).children('.a').addClass('ri-arrow-down-s-line');
});
//mode
$(".ri-moon-line").click(function () {
  $(".ri-moon-line").hide();
  $(".ri-sun-line").show();
  $(":root").css("--primary", "#212529");
  $(":root").css("--grey", "rgba(0, 0, 0, 0.888)");
  $(":root").css("--btn-bg", "rgba(43, 43, 43, 0.716)");
  $(":root").css("--grid-color", "#212529");
  $(":root").css("--darkgrey1", "#dff0fa");
  $(":root").css("--white", "#212529");
  $(":root").css("--grey1", "gray");
  $(":root").css("--black","#ffffff");
  $(":root").css("--table_bg", "#000000");
  $('.head-right-dropdown2').hide();
  $('.head-right-dropdown').hide();
  $('.head-right-dropdown1').hide();
});
$(".ri-sun-line").click(function () {
  $(".ri-moon-line").show();
  $(".ri-sun-line").hide();
  $(":root").css("--primary", "#405189");
  $(":root").css("--grey", "#f3f3f9");
  $(":root").css("--btn-bg", "#dff0fa");
  $(":root").css("--grid-color", "rgba(255, 255, 255, 0.959)");
  $(":root").css("--darkgrey1", "#495057");
  $(":root").css("--white", "#ffffff");
  $(":root").css("--grey1", "#e9ebec");
  $(":root").css("--black", "#000000");
  $(":root").css("--table_bg", "#f3f6f9");
  $('.head-right-dropdown2').hide();
  $('.head-right-dropdown').hide();
  $('.head-right-dropdown1').hide();
});
// top-button
var $backToTop = $("#button");
$backToTop.hide();

$(window).on('scroll', function() {
  if ($(this).scrollTop() > 100) {
    $backToTop.fadeIn();
  } else {
    $backToTop.fadeOut();
  }
});

$backToTop.on('click', function(e) {
  $("html, body").animate({scrollTop: 0}, 500);
});

//Full-screen
    document.querySelector("#full").addEventListener("click", function () {
    toggleFullScreen();
  });
  
  function toggleFullScreen() {
    if (
      !document.fullscreenElement && // alternative standard method
      !document.mozFullScreenElement &&
      !document.webkitFullscreenElement &&
      !document.msFullscreenElement
    ) {
      // current working methods
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
      } else if (document.documentElement.msRequestFullscreen) {
        document.documentElement.msRequestFullscreen();
      } else if (document.documentElement.mozRequestFullScreen) {
        document.documentElement.mozRequestFullScreen();
      } else if (document.documentElement.webkitRequestFullscreen) {
        document.documentElement.webkitRequestFullscreen(
          Element.ALLOW_KEYBOARD_INPUT
        );
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      }
    }
  }
//store-visit dropdown
    $('.r-click').on('click',function(){
    $('.store_dropdown').toggle();
    });
//table-2 dropdown
    $('.t-d_title-again').on('click',function(){
    $('.table-dropdown-again').toggle();
    });
//table-1 dropdown
    $('.t-d_header').on('click',function(){
    $('.table-dropdown').toggle();
    });
//chart-revenue-button
    $(".btn").hover(function(){
    $(this).css({"background-color": "#299cdb", "color": "white"});
    }, function(){
    $(this).css({"background-color":"#dff0fa" , "color":"#299cdb"});
    });
//rate button
    $(".r_btn").hover(function(){
    $(this).css({"background-color": "#299cdb", "color": "white"});
    }, function(){
    $(this).css({"background-color":"#dff0fa" , "color":"#299cdb"});
    });
//add-product button
    $(".p_btn").hover(function(){
    $(this).css({"background-color": "rgb(10,179,156)", "color": "white"});
    }, function(){
    $(this).css({"background-color":"rgb(196, 237, 231)" , "color":"rgb(10, 179, 156)"});
    });
//drop-down
    $('.profile').on('click',function(){
    $('.dropdown').toggle();
    });
//logo-change
    $('.bar').on('click',function(){
    $('aside').toggleClass('w-70');
    $('.main-banner').toggleClass('ml-70');
    $('header').toggleClass('ml-70');
    $('.input').toggleClass('w-auto');
    $('.nav_link > span').toggleClass('nav_link-span');
    $('.menu-title').toggleClass('t-menu_span');
    var img_1=$("img#home-btn");
    var img1_src="assets/images/2.png";
    var img2_src="assets/images/3.png";

    if(img_1.attr("src")== img1_src){
        img_1.attr("src",img2_src);
    }
    else{
        img_1.attr("src",img1_src);
    }
    });
//aside mobile-screen
$('.bar').on('click',function(){
  $('.a').toggleClass('d-inline-block');
});
});