// Create a path `Object`
var path = anime.path('#motionPath path');

var lineDrawing = anime({
  targets: '#flow .lines path',
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: 'easeInOutSine',
  duration: 1500,
  delay: function(el, i) { return i * 250 },
  direction: 'alternate',
  loop: false
});

var cssProperties = anime({
  targets: '.fill',
  fill: '#202020' ,
  easing:'easeInOutSine',
  duration: 1500,
  delay: 3300,
  direction: 'alternate',
  loop: false
});
var trey = document.querySelector ('.appCover');

window.onload = function() {
  trey.classList.add('slideLeft');
}
