const burger = document.getElementById('toggle'),
    nav = document.getElementById( 'navigation' );
burger.onclick = function () {
  this.classList.toggle('active');
  nav.classList.toggle('active');
};