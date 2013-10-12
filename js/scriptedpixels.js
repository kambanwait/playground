// DOC ready 
$(document).ready(function(){

  // test for touch screen support, if there's no support then add the class no touch
  if (!("ontouchstart" in document.documentElement)) {
    document.documentElement.className += "no-touch";

    $(".containCard").hover(function(){
        var tags          = $(this).children('.tags');
        var HeightToMove  = $(tags).outerHeight()+10;

        if (HeightToMove > 15 ) {
          
          $(tags).css('bottom', '-'+HeightToMove+'px');
          
          $(this).addClass('hover').children('.card').stop(true, false).animate({
            marginTop   : '-'+ HeightToMove
          }, 250);
          
          $(tags).stop(true, false).css('display','inline-block').animate({
            bottom    : '0px',
            opacity   : '1'
          }, 450);
        }
    }, function() {
        var tags          = $(this).children('.tags');
        var HeightToMove  = $(tags).outerHeight()+10;
        
        $(tags).stop(true, false).animate({
          bottom    : '-'+HeightToMove,
          opacity   : '0'
        }, 250, function(){
          $(tags).css('display','none');
        });
        
        $(this).removeClass('hover').children('.card').stop(true, false).animate({
          marginTop : "0px"
        }, 450);
    });
  };
  
  $(".slideItDown").click(function() {      
    $('.slideMeDown').slideToggle('slow', 'easeInOutQuart');
  });

  // Home / Mastech / Services / Contact - click to go to section
  $('li.jumpDown a').click(function(event){
    event.preventDefault();
    var whereTo = '#' + $(this).attr('title');
    $('html, body').animate({
      scrollTop: $(whereTo).offset().top
    }, 1500, 'easeInOutQuart' );
  });  
  // $('.card').click(function(e){
  //   var current = $(this);
  //   if (!(current).hasClass('hover')) {
  //     $(current).addClass('hover');
  //     $('.hover').not(current).removeClass('hover')
  //   };
  // });
  var menu    = $("#menuContainer");
  var share   = $('#shareContainer');

    $("#mobilemenubutton").click(function() {
      if (share.is(":visible")) {
        $('#mobilesharebutton').removeClass('hover');
        share.stop().slideUp( 'medium' );
      };

      if( $(this).hasClass('hover')){
        $(this).removeClass('hover');
        menu.stop().slideUp('medium');
      } else {
        $(this).addClass('hover');
        menu.stop().slideDown('medium');
      }
    });

    $("#mobilesharebutton").click(function() {
      
      if (menu.is(":visible")) {
       menu.stop().slideUp( 'medium' );
        $('#mobilemenubutton').removeClass('hover');
      };

      if( $(this).hasClass('hover')){
        $(this).removeClass('hover');
        share.stop().slideUp('medium');
      } else {
        $(this).addClass('hover');
        share.stop().slideDown('medium');
      }
    });

    // HOME PAGE SLIDER 
      // only init slider if there's more than one slide
      if ( $('.Slider li').length > 1 ) {
        $('.Slider').bxSlider({
          adaptiveHeight      : false,
          adaptiveHeightSpeed : 500
        });
      };
    
    // ROLL SHIT IN
    // var win = $(window);
    // var allMods = $(".containCard");

    // allMods.each(function(i, el) {
    //   var el = $(el);
    //   if (el.visible(true)) {
    //     el.addClass("already-visible"); 
    //   } 
    // });

    // win.scroll(function(event) {
      
      // allMods.each(function(i, el) {
      //   var el = $(el);
      //   if (el.visible(true)) {
      //     el.addClass("come-in"); 
      //   } 
      // });      
    // });

    // IE FIX FOR PLACEHOLDER - http://www.hagenburger.net/BLOG/HTML5-Input-Placeholder-Fix-With-jQuery.html
    $('[placeholder]').focus(function() {
      var input = $(this);
      if (input.val() == input.attr('placeholder')) {
        input.val('');
        input.removeClass('placeholder');
      }
    }).blur(function() {
      var input = $(this);
      if (input.val() == '' || input.val() == input.attr('placeholder')) {
        input.addClass('placeholder');
        input.val(input.attr('placeholder'));
      }
    }).blur();

    $('[placeholder]').parents('form').submit(function() {
      $(this).find('[placeholder]').each(function() {
        var input = $(this);
        if (input.val() == input.attr('placeholder')) {
          input.val('');
        }
      })
    });

    // $('#simple-contact-form').find('input#scf_response').each(function(){
    //   $(this).val('');
    //   $(this).attr('placeholder', '');
    // });
    
    // Back to top text click
    $('#tothetop').click(function(e){
        $('html, body').animate({
          scrollTop:0
        }, 1000, 'easeInOutQuart');
        e.preventDefault();
    });

    // Sroll down and make the side bar STICK!
    //Calculate the height of when shit should stick
    // var aboveHeight   = $('#sidebar').offset().top;
    // var sideBarHeight = $('#sidebar').outerHeight();

    // $(window).scroll(function(){

    //   var marginTop =  sideBarHeight;

    //   //if scrolled down more than the header’s height
    //   if ($(window).scrollTop() > aboveHeight){
    //         // if yes, add “fixed” class to the <nav>
    //       $('#sidebar').addClass('fixed').css( 'margin-top', marginTop );
    //   } else {       
    //       // when scroll up or less than aboveHeight,
    //         // remove the “fixed” class, and the padding-top
    //       $('#sidebar').removeClass('fixed').css( 'margin-top', '4rem');;
    //   ;}
    // });

}); // end of Doc load

// ON WINDOW LOAD 
$(window).load(function() {
  // FADE IN THE CAROUSEL
  $('#spinningSquaresG').animate({
    opacity : 0
  }, 100, function(){
    $('#spinningSquaresG').css( 'display', 'none');
    $('#carousel').animate({
      opacity: 1.0
    }, 2000 );
  });
}); // end of window load