const buttons = document.querySelectorAll('.button');
const result = document.querySelector('.result');
const playAgain = document.querySelector('.play-again');
const endText = document.querySelector('.end-text');
const modal = document.querySelector('.end');
const endImage = document.querySelector('.end-image');
let playerLives = 5;
let computerLives = 5;

function computerPlay(){
    const options = ['rock','paper','scissor'];
    const computer = options[Math.floor(Math.random()*options.length)];
    console.log(computer);
    return computer;
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
    if(pl==0||cl==0){
        if(pl>cl){
            result.textContent = "Foxy Pirates Lost ,They don't have anymore Lives";
            endText.textContent="You Won this Fight";
            endImage.src = "images/luffysmiling.png"

            
        }else{
            result.textContent = "They Won You don't have anymore cre left :(";
            endText.textContent="You Lost this Fight";
            endImage.src="images/lost.png"
            endImage.style.height = "400px";
            endImage.style.width = "auto";
        }
        modal.style.display = "flex";
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
            const info = document.querySelector('.info');
            info.textContent = "";
            checkWin(player,computerPlay());
            endGame(playerLives,computerLives);
            resetGame();
        });
    });
}

playGame();
