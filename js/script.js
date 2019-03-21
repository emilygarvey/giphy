// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************
/* global $ */

var api_request = "https://api.giphy.com/v1/gifs/search?q=puppy&rating=pg&api_key=dc6zaTOxFJmzC";

$("#search-button").click(function(){
    var input = $("#search-term").val();
  $.ajax({
      url: "https://api.giphy.com/v1/gifs/search?q="+ input + "&rating=pg&api_key=dc6zaTOxFJmzC",
      method: "GET",
      success: function(response) {
          console.log("works");
          $(".img").html("<img src='" + response.data[0].images.fixed_width.url + "'>");
          $(".link").show();
          $("#copyLink").show();
          $("#copyLink").val(response.data[0].embed_url);
      }
  });

});

function myFunction() {
              /* Get the text field */
              var copyText = document.getElementById("copyLink");
            
              /* Select the text field */
              copyText.select();
            
              /* Copy the text inside the text field */
              document.execCommand("copy");
            
              /* Alert the copied text */
              alert("Copied the text: " + copyText.value);
        }
        
        //$("body").text("hi");        
        