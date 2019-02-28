// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************
/* global $ */

var api_request = "https://api.giphy.com/v1/gifs/search?q=puppy&rating=pg&api_key=dc6zaTOxFJmzC";

$("#search-button").click(function(){
    var input = $("input").val();
  $.ajax({
      url: "https://api.giphy.com/v1/gifs/search?q="+ input + "&rating=pg&api_key=dc6zaTOxFJmzC",
      method: "GET",
      success: function(response) {
          console.log("works");
          $("h3").html("<img src='" + response.data[0].images.fixed_width.url + "'>");
      }
  });
  
  
});

