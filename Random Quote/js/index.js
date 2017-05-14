(function($, window, document) {
  $(function() {
    $data = $.getJSON("http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=30&callback", function(d) {
    return d;
  });
    $("#newQuote").on('click', function() {
      
      
      var dataArray = $data.responseJSON;
      
      random = dataArray[Math.floor(Math.random() * dataArray.length) + 1];
      console.log(random);    
      $(".quote").html(random.content);
      $(".author").html(random.title)
      cleanContent = random.content.replace(/<[^>]+>/ig, "");
    });
  });
   $('#tweet').click(function(){
		$(this).attr("href", 'https://twitter.com/intent/tweet?text="' + $( '.quote' ).text() + '" ' + $( '.author' ).text() + ' #quotes');
	});
}(window.jQuery, window, document));