(function() {
  // Toggle navigation
  const triggers = document.getElementsByClassName('js-toggle-nav');
  for (var i = 0; i < triggers.length; i++) {
    triggers[i].addEventListener('click', function() {
      document.getElementsByClassName('navigation__container')[0].classList.toggle('navigation__container--active');
    });
  }
})();