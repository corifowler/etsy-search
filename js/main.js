(function () {

var templateString = $('#itemTemplate').text();
console.log(templateString);

var renderTemplate = _.template(templateString);

// bring up items I want


_.each( etsy.results, function(item){
  var itemInfo = renderTemplate(item);
  $('.results-area').append(itemInfo);
});


}());