$(document).ready(function() {
    var $offcanvasNavbar = $('#offcanvasNavbar');
    var $navbar = $('.navbar-nav');

    $(window).resize(function() {
      moveLoginButtons();
    });
    function moveLoginButtons() {
      if ($(window).width() <= 280) {
        $('.login-button').appendTo($offcanvasNavbar.find('.navbar-nav'));
      } else {

        $('.login-button').appendTo($navbar);
      }
    }

    moveLoginButtons();
  });
  