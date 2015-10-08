(function () {

var templateString = $('#itemTemplate').text();

var renderTemplate = _.template(templateString);

// bring up items I want


_.each( etsy.results, function(item){
  var itemInfo = renderTemplate(item);
  $('.results-area').append(itemInfo);
});

// make hover images appear & disappear

$('.results-area').on('mouseenter', '.item-display', function(){
   $(this).find('.heart').toggleClass('show');
   $(this).find('.hamburger').toggleClass('show');
    console.log('maybe toggling?');
});

$('.results-area').on('mouseleave', '.item-display', function(){
   $(this).find('.heart').toggleClass('show');
      $(this).find('.hamburger').toggleClass('show');
    console.log('maybe toggling?');
});

}());