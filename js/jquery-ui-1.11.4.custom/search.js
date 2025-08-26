$(document).ready(function () {
  var cache = {};
  $('#keyword').autocomplete({
    //source: '/search/tipword',
    source: function(request, response) {
      $.ajax({
        url: '/search/tipword',
        data: {
          term: encodeURIComponent(request.term),
        },
        success: function(data) {
          // console.log('data:', data);
          response(data);
        }
      });
    },
    /*
    source: function( request, response ) {
      var term = request.term;
      if (term in cache) {
        response(cache[term]);
        return;
      }

      $.getJSON("/search/tipword", request, function( data, status, xhr ) {
        cache[term] = data;
        response(data);
      });
    },
    */
    minLength: 2,
    autoFocus: true,
  });
});
