$(document).ready(function(){
 //Function to Center Popup Boxes
 jQuery.fn.center = function () {
    this.css("position","absolute");
    this.css("top", Math.max(0, (($(window).height() - $(this).outerHeight()) / 2) + 
                                                $(window).scrollTop()) + "px");
    this.css("left", Math.max(0, (($(window).width() - $(this).outerWidth()) / 2) + 
                                                $(window).scrollLeft()) + "px");
    return this;
}

  //Slider on Premium Home Page Listings
	$("#slider").carouFredSel({
       		width			: "100%",
       		items           : 3,
       		align			: "center", 
       		direction       : "left",
        	scroll : {
            items           : 1,
            easing          : "swing",
            duration        : 500,                        
            pauseOnHover    : true
        }                  
    }); // End Slider Carousel

    //Image Slider on Property Page
  $("#image_gallery").carouFredSel({
          width     : "100%",
          items           : 3,
          align     : "center", 
          direction       : "left",
          scroll : {
            items           : 1,
            easing          : "swing",
            duration        : 500,                        
            pauseOnHover    : true
        }                  
    }); // End Slider Carousel

 //Home Page USA Map
 $('#vmap').vectorMap({
          map: 'usa_en',
          backgroundColor: 'transparent',
          borderColor: '#6c481b',
          borderOpacity: 1,
          color: '#ecd1b8',
          enableZoom: false,
          hoverColor: '#6c481b',
          showTooltip: false,
          onRegionClick: function(element, code, region)
           {
                var message = 'You clicked "'
                  + region;
                alert(message);
    }});


//Top Links Login/Register jQuery Popup Boxes
 $('#login').click(function(evt){
    evt.preventDefault; 
    $('#login_form').toggle();
    $('#login_form').center(); 
 });

  $('#register').click(function(evt){
    evt.preventDefault; 
    $('#register_form').toggle(); 
    $('#register_form').center(); 
 });

  $('#exit_login').click(function(){
    $('#login_form').toggle(); 
  })

  $('#exit_register').click(function(){
    $('#register_form').toggle(); 
  })

  //Contact Us Popup Box
  $('#contactUs').click(function(evt){
    evt.preventDefault; 
    $('#contactUs_form').toggle(); 
    $('#contactUs_form').center(); 
  })

  $('#exit_contactUs').click(function(){
    $('#contactUs_form').toggle(); 
  })

  $('#find_land').click(function(){
    $('#find_land_content').slideToggle(); 
  })

  $('#lease_your_land').click(function(){
    $('#lease_your_land_content').slideToggle(); 
  })

  //Lease your Land Register and Login Buttons
   $('#log').click(function(evt){
    evt.preventDefault; 
    $('#login_form').toggle();
    $('#login_form').center(); 
 });

  $('#reg').click(function(evt){
    evt.preventDefault; 
    $('#register_form').toggle(); 
    $('#register_form').center(); 
 });


  //FAQ Questions 1-6 
  $('#faq_question1').click(function(){
    $('#faq_question1_content').slideToggle(); 
  })

  $('#faq_question2').click(function(){
    $('#faq_question2_content').slideToggle(); 
  })

  $('#faq_question3').click(function(){
    $('#faq_question3_content').slideToggle(); 
  })

  $('#faq_question4').click(function(){
    $('#faq_question4_content').slideToggle(); 
  })

  $('#faq_question5').click(function(){
    $('#faq_question5_content').slideToggle(); 
  })

  $('#faq_question6').click(function(){
    $('#faq_question6_content').slideToggle(); 
  })

}); //End Document.Ready
