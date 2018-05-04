/* Button Animation */
var signUp = document.querySelector('#signUp');

function animateButton (scale, duration, elasticity){

  anime({
    targets: '#signUp',
    scale: scale,
    duration: duration,
    elasticity: elasticity
  });
}
function enterButton(){ animateButton(1.1, 800, 400)};
function leaveButton(){ animateButton(1.0, 600, 300)};

signUp.addEventListener('mouseenter', enterButton, false,);
signUp.addEventListener('mouseleave', leaveButton, false);