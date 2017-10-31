funcion main () {

  //document.getElementById('google').innerHTML = "Google";

  $('#google').html('Gooooogle');
  //let links = document.getElementsByClassName('my-link');
  let links = $('.my-link');
  links [0].innerHTML = "Twitter";
  links [0].href = "https://twitter.com";
  links [1].innerHTML = "LinkedIn"
  links [1].href = "https://linkedin.com";
  links [1].style.color = "red";

//button click event

$('#heading-button').click(function () {
  $('h1').style.color = "red";
  $('.my-link').hide();
});
  //toggle button click
  $('#toggle-button').click(function () {
    $('.my-link').hide();
  }
// hide and show main text
$('#main-text').hide ();
$('#main-text').fadeIn(5000);

$('.projects').hide();
}

$('.projects-button').click(function) () {
  $(this).next().slideToggle (500);

});
$(document).ready(main);
