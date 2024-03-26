function openNav() {
    document.getElementById("mySidenavs").style.width = "280px";
}

function closeNav() {
    document.getElementById("mySidenavs").style.width = "0";
}


$(function(){

    //Scroll event
    $(window).scroll(function(){
      var scrolled = $(window).scrollTop();
      if (scrolled > 200) $('.go-top').fadeIn('slow');
      if (scrolled < 200) $('.go-top').fadeOut('slow');
    });
    
    //Click event
    $('.go-top').click(function () {
      $("html, body").animate({ scrollTop: "0" },  500);
    });
  
  });
  
