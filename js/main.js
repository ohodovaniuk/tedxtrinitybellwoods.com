/*=============================================*/
/*  Helper functions                           */
/*  Copyright (C) 2017 Oleh Hodovaniuk         */  
/*=============================================*/ 

var screenWidth = document.body.clientWidth;
var isToggled = "false"
var index; //holds the index of the class element

$(document).ready(function() {
	$(".nav li a").each(function() {
		if ($(this).next().length > 0) {
			$(this).addClass("parent");
		};
	})

	//onhover for toggle Menu on touch screen devices
	$(".toggle").on("touchstart mouseenter", function(e) {
		$(".toggle").css("background", "rgba(255, 255, 255, 0.1)");
	});

	$(".toggle").on("touchend mouseleave", function(e) {
		setTimeout(function(){
			$(".toggle").css("background", "none");
		}, 100);
	});

	//toggle the drop down menu on mobile devices
	var clicks = 0;
	$(".toggle").on("click", function(e) {
		e.preventDefault();
		$(this).toggleClass("open");
		$(".nav").toggle();
		isToggled = "true";
		
		if (clicks == 0) {
			// first click
			clicks += 1;
			isToggled = "true";
		}
		
		else { 
			// second click
			clicks -= 1
			isToggled = "false";
		}
	});
	adjustMenu(); 

	//onhover for more button on touch screen devices
	$(".more").on("touchstart mouseenter", function(e) {
		$(".more").css("background", "#e63b1e");
		$(".more").css("border", "2px solid #e63b1e");
	});

	$(".more").on("touchend", function(e) {
		setTimeout(function(){
			$(".more").css("background", "none");
			$(".more").css("border", "2px solid #b4b4b4");
		}, 200);
	});

	$(".more").on("mouseleave", function(e) {
		$(".more").css("background", "none");
		$(".more").css("border", "2px solid #b4b4b4");
	});

	//onhover for team icons on touch screen devices
	/*$(".img-circle.team-img").on("touchstart", function(e) {
		$(".img-circle.team-img").css("border", "none");
	});

	$(".img-circle.team-img").on("mouseenter", function(e) {
		$(".img-circle.team-img").css("border", "4px solid #e63b1e");
	});

	$(".img-circle.team-img").on("mouseleave", function(e) {
		$(".img-circle.team-img").css("border", "none");
	});*/

	//onhover for social media icons on touch screen devices
	$(".media_icon ul li").on("touchstart mouseenter", function(e) {
		index = $(".media_icon ul li").index(this);
		$(".media_icon ul li").eq(index).css("border", "5px solid #e63b1e");
		$(".media_icon ul li").eq(index).css("box-shadow", "0 0 15px #e63b1e");
		$(".media_icon ul li").eq(index).css("transition", " all 0.5s ease");
	});

	$(".media_icon ul li").on("touchend", function(e) {
		setTimeout(function(){
			$(".media_icon ul li").eq(index).css("border", "5px solid #D8E2DC");
			$(".media_icon ul li").eq(index).css("box-shadow", "none");
		}, 200);
	});

	$(".media_icon ul li").on("touchend mouseleave", function(e) {
		$(".media_icon ul li").eq(index).css("border", "5px solid #D8E2DC");
		$(".media_icon ul li").eq(index).css("box-shadow", "none");
	});
})

$(window).bind('resize orientationchange', function() {
	screenWidth = document.body.clientWidth;
	adjustMenu();
});

//adjust the view if the window resizes, etc
var adjustMenu = function() {
	if (screenWidth < 1050) {
		$(".toggleMenu").css("display", "inline-block");
		if (!$(".toggleMenu").hasClass("active")) {
			$(".nav").hide();
			$(".navigation-menu").show("block");
			$(".toggleMenu").show("block");
		} 
		else {
			$(".nav").show();
		}

		$(".nav li").unbind('mouseenter mouseleave');
		$(".nav li a.parent").unbind('click').bind('click', function(e) {
			// must be attached to anchor element to prevent bubbling
			e.preventDefault();
			$(this).parent("li").toggleClass("hover");
		});
	} 

	else if (screenWidth >= 768) {
		$(".toggleMenu").css("display", "none");
		$(".nav").show();
		$(".nav li").removeClass("hover");
		$(".nav li a").unbind('click');
		$(".nav li").unbind('mouseenter mouseleave').bind('mouseenter mouseleave', function() {
		 	// must be attached to li so that mouseleave is not triggered when hover over submenu
		 	$(this).toggleClass('hover');
		});
	}
}

//adjust the navigation menu when the view changes
$(window).resize(function() {
   	if(isToggled == "true") {	 
		$(".nav").show();
	}
	
	else {
		//$(".nav").hide();
	} 
});

//Scrolls the page down
$('a.page-scroll').click(function() {
	if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        	var target = $(this.hash);
        	target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        
		if (target.length) {
        	    	$('html,body').animate({
        	      		scrollTop: target.offset().top - 0    /*regulate the scroll down from thehom to about page*/
        	 	}, 900);
   		return false;
        	}
	}
});


$(document).ready(function() {
	$("#team").owlCarousel({ 
  		navigation : false, // Show next and prev buttons
  	      	slideSpeed : 300,
  	      	paginationSpeed : 400,
  	      	autoHeight : true,
  	      	itemsCustom : [
	        		[0, 1],
				[450, 2],
				[600, 2],
				[700, 3],
				[1000, 3],
				[1200, 3],
				[1400, 3],
				[1600, 3]
		],
					  
		/*itemsCustom : [
			        [0, 1],
			        [450, 2],
			        [600, 2],
			        [700, 2],
			        [1000, 4],
			        [1200, 4],
			        [1400, 4],
			        [1600, 4]
		],*/ //original one 
  	  });

       	/*$("#clients").owlCarousel({ 
  	      	navigation : false, // Show next and prev buttons
  	      	slideSpeed : 300,
  	      	paginationSpeed : 400,
  	      	autoHeight : true,
  	      	itemsCustom : [
			        [0, 1],
			        [450, 1],
			        [600, 1],
			        [700, 1],
			        [1000, 4],
			        [1200, 4],
			        [1400, 4],
			        [1600, 5]
		],
  	});*/
	
	$("#testimonial").owlCarousel({
        	navigation : false, // Show next and prev buttons
        	slideSpeed : 300,
        	paginationSpeed : 400,
        	singleItem:true
        });
});