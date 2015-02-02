$(document).ready(function(){

	/* input the name of folder */
	var folderName = "content_ver1" ;

	/* #menu_mousedown effect */
	$('#menu .title, #menu .nav_list').mousedown(function(){
		$('#menu').stop();
		$('#menu').animate({
			backgroundColor:'#F0F0E8',
			opacity:'0.9'
		},250);
		$('#menu').animate({
			backgroundColor:'#FFFFFF',
			opacity:'0.8'
		},1000);
	});

	/* set up the cover page */
	var addr = "homeCover";
	$(function(){
		$('#content').load("./" + folderName + "/homeCover.html", function(){
			$(this).children(':first').unwrap();       //'#content' within 'content' ==> need to unwrap
		}); 
	});

	/* setup content-linking function */
	var linkContent = function( linkID, fileName ){
		var filePosition = "./" + folderName + "/"+ fileName + ".html"
		$(linkID).click(function(){
			if( addr != fileName) {
				$('#content').load(filePosition, function() {
					$(this).children(':first').unwrap();
				});
				addr = fileName;
			};
			//scroll back to origin
			$('html, body').animate({scrollLeft:0},400);
			$('html, body').animate({scrollTop: 0},400);
//			$('html, body').stop();    //!!!!!!!!!PROBLEM for tab
		});
	};

	/* content-linking */
	linkContent( '#link_content_homeCover, #link_content_homeCoverName', "homeCover" );
	linkContent( '#link_content_work_2x2_2015', "work_2x2_2015" );
	linkContent( '#link_content_about', "about" );
	linkContent( '#link_content_contact', "contact" );
	linkContent( '#link_content_message', "message" );


	/* preload images */
	$.preloadImages = function() {
		for (var i = 0; i < arguments.length; i++) {
			$("<img />").attr("src", arguments[i]);
		};
	};
	//preload_content_about
	$.preloadImages(
        "https://lh6.googleusercontent.com/-d3zuH9rbIsU/VKL64j-v5LI/AAAAAAAAT-o/2t2Yylqc6S8/w336-h500-no/about_self.jpg",
        "https://lh6.googleusercontent.com/-kPbtkY2t02E/VKkyHuiGBwI/AAAAAAAAUPU/FCWIGYT9CTo/w336-h500-no/about_self_invert.jpg"
    );
	//preload_content_contact
	$.preloadImages(
        "https://lh5.googleusercontent.com/-2AHtgNR2qG8/VMiAa3pEmLI/AAAAAAAAVMk/h3QIhB2grpQ/w333-h500-no/contact.jpg"
     );
	//preload_content_work_2x2_2015
	$.preloadImages(
        "https://lh5.googleusercontent.com/-3dLv4XcGFRo/VMdJFitbKZI/AAAAAAAAU-4/6fJ25vZf3pI/w504-h336-no/001.jpg",
        "https://lh5.googleusercontent.com/-XVfzWsiqyEs/VMdJFZCkHjI/AAAAAAAAU-s/ZETTzCm4aYs/w504-h336-no/002.jpg",
        "https://lh6.googleusercontent.com/-JnFopo_1qlc/VMdJFdbB_CI/AAAAAAAAVJs/wu6uQN3VAx8/w504-h336-no/003.jpg",
        "https://lh4.googleusercontent.com/-MWN36KYHqDk/VMdJGO2G-XI/AAAAAAAAU_A/CYM_BKGZioQ/w504-h336-no/004.jpg",

        "https://lh6.googleusercontent.com/-VWfq4fHisz8/VMdJGXwl3MI/AAAAAAAAVJs/kAbS8FM10CA/w506-h336-no/005.jpg",
        "https://lh3.googleusercontent.com/-WasPk9D0or8/VMdJG1PEVNI/AAAAAAAAVJs/wOftLKMPAzM/w504-h336-no/006.jpg",
        "https://lh3.googleusercontent.com/-ERp45VJ48sE/VMdJHJg3F-I/AAAAAAAAVJs/TWzxHpTkv0g/w504-h336-no/007.jpg",
        "https://lh3.googleusercontent.com/-vh54yJbmBz8/VMdJHmYtLWI/AAAAAAAAVJs/8alC-XEiZTs/w506-h336-no/008.jpg",

        "https://lh3.googleusercontent.com/-kLZzlVqzkmk/VMdJH36CZ-I/AAAAAAAAVJs/99B4x4HsOOM/w506-h336-no/009.jpg",
        "https://lh6.googleusercontent.com/-3dWmWctNETA/VMdJIGWQ-hI/AAAAAAAAU_k/soauJqzizfE/w504-h336-no/010.jpg",
        "https://lh4.googleusercontent.com/-g_0gjw8V_qc/VMdJIW4GurI/AAAAAAAAU_g/zLUGgcRVtFs/w507-h336-no/011.jpg",
        "https://lh3.googleusercontent.com/-mqlcaTvngIU/VMdJIulbHOI/AAAAAAAAU_4/9AnyUibMY3Y/w506-h336-no/012.jpg",

        "https://lh5.googleusercontent.com/-E1uNVK50QyQ/VMdJI-Q63HI/AAAAAAAAVAg/CceEaBnwtf8/w504-h336-no/013.jpg",
        "https://lh5.googleusercontent.com/-Ma0faGM7rzc/VMdJJepQMUI/AAAAAAAAU_w/D3ve5IBLPrk/w504-h336-no/014.jpg",
        "https://lh6.googleusercontent.com/-e7FDF6vtcPA/VMdJJkk0QjI/AAAAAAAAVAE/DpD94T7Yog4/w504-h336-no/015.jpg",
        "https://lh4.googleusercontent.com/-0ZA3_JNnelU/VMdJKIaQloI/AAAAAAAAVAA/jJpTE0eOklY/w504-h336-no/016.jpg"

        );


});
