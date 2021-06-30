const openGame = document.querySelector('.startGame');
const gameBody = document.querySelector('.game');
const climber = document.querySelector('.climberPic');
const flag = document.querySelector('.winGif');
const checkpoints = document.querySelectorAll('.checkpoint');

document.addEventListener('keydown', startGame);

function startGame(event) {
  if (event.keyCode === 13) {
    openGame.style.display = 'none'; 
    gameBody.style.visibility = 'visible';
 }
}

document.addEventListener('keydown', playGame);

let position = -1;
function playGame(event) { 
  if (event.key === 'w' && position < 8) {
      position += 1;
      checkpoints[position].append(climber);
    }  
  if  (event.key === 's' && position > 0) {
      position -= 1;
      checkpoints[position].append(climber);
    }  
  if (position === 8) {
    flag.style.visibility = 'visible';
  }
};
