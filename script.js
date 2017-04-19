console.log('script sourced');

$(document).ready(onDocReady);

function onDocReady(){
console.log('onDocReady function');

$.ajax({
  url: 'http://www.omdbapi.com/?t=moonrise+kingdom',
  success: function (response){
    console.log('Ajax successful response function');
    $('#movie-holder').append( '<img src="'+ response.Poster +'">');
  }//end success function

});//end ajax function

}//end onDocReady
