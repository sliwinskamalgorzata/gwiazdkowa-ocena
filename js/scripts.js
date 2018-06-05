(function($){


$(document).ready(function(){

  var stars = $("#rating .rating__star"),
      radios= $(" :radio[name='rating']");


      stars.hover(
                  function() {

                      var that = $(this);
                      // $(this).prevAll().andSelf().css('background', 'red');

                      that.prevAll().addBack().addClass("rating__star--hovered");

                  },
                  function() {

                      var that = $(this);

                      that.prevAll().addBack().removeClass("rating__star--hovered");

                  }
              );

      stars.on("click", function(){

        $(this).siblings().removeClass("rating__star--selected");

        $(this).prevAll().addClass("rating__star--selected");




      })


});


})(jQuery);
