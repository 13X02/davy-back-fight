const buttons = document.querySelectorAll('.button');
const rounds = document.querySelectorAll('.stats');
let playerLives = 5;
let computerLives = 5;
let round = 0;

function computerPlay(){
    const options = ['rock','paper','scissor'];
    const computer = options[Math.floor(Math.random()*options.length)];
    console.log(computer);
    return computer;
}
function checkRound(){
    round+=1;
    rounds.textContent = `Round:${round}`;
    return round;
}
function resetGame(){
    playAgain.addEventListener('click',()=>{
        window.location.reload();
    });
}
function checkWin(player,computer){
    const result = document.querySelector('result');
    if(player===computer)
}
function playGame(){
    let player;
    buttons.forEach((button)=>{
        button.addEventListener('click',()=>{
            if(button.classList.contains('rock')){
                player='rock';
            }else if(button.classList.contains('scissor')){
                player='scissor';
            }else{
                player='paper';
            }
            checkRound();
            checkWin(player,computerPlay());
            endGame(playerLives,computerLives);
            resetGame();
        });
    });
}
playGame();
