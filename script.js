const buttons = document.querySelectorAll('.button');
const rounds = document.querySelectorAll('.round');
const result = document.querySelector('.result');
const playAgain = document.querySelector('.play-again');
const endText = document.querySelector('end-text');
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
    console.log(round);
    rounds.textContent = `Round:${round}`;
    
}
function resetGame(){
    playAgain.addEventListener('click',()=>{
        window.location.reload();
    });
}
function checkWin(player,computer){
    
    if(player===computer){
        result.textContent = "Its a Tie,No crew members were lost";
    }else if((computer==='rock'&&player==='paper')||(computer==='paper'&&player==='scissor')||(computer==='scissor'&&player==='rock')){
        result.textContent = "Yay! You won ,you got a crew member ";
        computerLives-=1;
    }else{
        result.textContent ="Play safe ,You lost a crew member";
        playerLives-=1;
    }
    const stat = document.querySelector('.stats');
    stat.textContent = `Your crew ${playerLives} | Foxy Pirates ${computerLives}`

}
function endGame(pl,cl){
    if(pl===0||cl===0){
        buttons.forEach((button)=>()=>{
            button.setAttribute('disabled','');
            button.classList.add('disabled-button','opacity');
        });
        if(pl>cl){
            result.textContent = "Foxy Pirates Lost ,They don't have anymore Lives";
            endText.textContent = "You won this Fight,Lets Party !!";
        }else{
            result.textContent = "They Won You don't have anymore cre left :(";
            endText.textContent="You Lost this fight";
        }
        playAgain.style.visibility = 'visible';
    }
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
