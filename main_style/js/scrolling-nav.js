(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 54)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 54
  });

})(jQuery); // End of use strict





























body {
/*  background-image: url(images/sunset.jpg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;*/
background-image: url(images/grid.jpg);
background-position: center;
background-repeat: no-repeat;
background-size: cover;
background-position: top;
opacity: 1;
 width: 100%;
 height: 100%;
 letter-spacing: 0.02em;
  font-weight: 400;
 -webkit-font-smoothing: antialiased; 
}

*{
  margin: 0;
  padding: 0;
}

html {
  width: 100vw;
    height: 100vh;
}


#bg {

/*https://mdbootstrap.com/img/Photos/Horizontal/Nature/full page/img(11).jpg*/
}


body {
    font-family: sans-serif;
}

/*a {
  color: -webkit-link;
    cursor: pointer;
    text-decoration: underline;
}*/

#container {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

}

.img-responsive {
    height: auto;
    width: auto;
    max-height: 72px;
    max-width: 250px;
}


/*.navbar {
    background-color: #326c92c4;
   
}
*/
/* #33374a;*/

/*.navbar {
    -o-transition: all .6s;
    -moz-transition: all .6s;
    -webkit-transition: all .6s;
    -ms-transition: all .6s;
    transition: all .6s;
    backface-visibility: hidden;
}
 
.navbar.navbar-no-bg {
    background: rgba(0, 0, 0, 0.2);
}
 
.navbar-dark .navbar-nav {
    font-size: 15px;
    color: #fff;
    text-transform: uppercase;
}
 
.navbar-dark .navbar-nav .nav-link {
    color: #fff;
    color: rgba(255, 255, 255, 0.8);
    border: 0;
}
 
.navbar-dark .navbar-nav .nav-link:hover {
    color: #fff;
}
 
.navbar-dark .navbar-nav .nav-link:focus {
    color: #fff;
    outline: 0;
}
 
.navbar-expand-md .navbar-nav .nav-link {
    padding-left: 1rem;
    padding-right: 1rem;
}
 
.navbar-brand {
    width: 105px;
    background: url(../img/logo.png) left center no-repeat;
    border: 0;
    text-indent: -99999px;
}*/





















/*button {
  margin-top : 50px;
}*/

.ag:hover {
  background-image: url(images/game_console.jpg);
  -webkit-transition: background 5s;
  transition: background 300ms ease-in 200ms;
}
.og:hover {
  background-image: url(images/train.jpg);
    transition: 7s;

}

#page-wrap { 
  background-color: gray;
  /*position: absolute;*/
  /*background-color: rgba(0,0,0,0);*/
  opacity: 0.7;
  /*width: 300px; margin: 40px auto;*/
}

.text{
  opacity: 1;
}

/*h2 {
  color: white;
  opacity: 1;
}*/

.full {
  opacity: 1;
}


/*
header {
  padding: 154px 0 100px;
}

@media (min-width: 992px) {
  header {
    padding: 156px 0 100px;
  }
}

section {
  padding: 150px 0;
}
*/

.blurred-box{
  position: relative;
  width: 300px;
  height: 250px;
  top: calc(50% - 175px);
  left: calc(50% - 125px);
  background: inherit;
  border-radius: 2px;
  overflow: hidden;
}

.blurred-box:after{
 content: '';
 width: 400px;
 height: 350px;
 background: inherit; 
 position: absolute;
 left: -25px;
 left position
 right: 0;
 top: -25px;  
 top position 
 bottom: 0;
 box-shadow: inset 0 0 0 200px rgba(255,255,255,0.05);
 filter: blur(3px);
}


.user-login-box{
  position: relative;
  margin-top: 50px;
  text-align: center;
  z-index: 1;
}

h2 {
  text-align: center;
  text-transform: uppercase;
  text-rendering: optimizeLegibility;
}

/*.deepshd {
  color: #e0dfdc;
  letter-spacing: .1em;
  text-shadow: 0 -1px 0 #fff, 0 1px 0 #2e2e2e, 0 2px 0 #2c2c2c, 0 3px 0 #2a2a2a, 0 4px 0 #282828, 0 5px 0 #262626, 0 6px 0 #242424, 0 7px 0 #222, 0 8px 0 #202020, 0 9px 0 #1e1e1e, 0 10px 0 #1c1c1c, 0 11px 0 #1a1a1a, 0 12px 0 #181818, 0 13px 0 #161616, 0 14px 0 #141414, 0 15px 0 #121212, 0 22px 30px rgba(0, 0, 0, 0.9);
}*/

.xbootstrap {
  color: #202020;
  letter-spacing: .1em;
  text-shadow: -1px -1px 1px #111, 2px 2px 1px #363636;
}


button{
    position: relative;
  top: 200px;
  right: 20px;
}





.split {
  height: 100%;
  width: 50%;
  position: fixed;
  z-index: 1;
  top: 0;
  overflow-x: hidden;
  padding-top: 20px;
}

.left {
  left: 0;
  background-color: transparent;
}

.right {
  right: 0;
  background-color: transparent;
}

.centered {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}


.pos{
  position: fixed;
  left: 50%;
  bottom: 20px;
  transform: translate(-50%, -50%);
  margin: 0 auto;

}