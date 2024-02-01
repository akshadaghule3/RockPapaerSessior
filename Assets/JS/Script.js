
let userScore = parseInt(localStorage.getItem('humanScore')) || 0;
let computerScore = parseInt(localStorage.getItem('computerScore')) || 0;
let computerChooseImages = ''
let userChooseImage = ''
let resultShow = ''

function play(playerChoice) {
  userChooseImage = playerChoice;
  const choices = ['rock', 'paper', 'scissors'];
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];
  computerChooseImages = computerChoice ;
  switch(userChooseImage) {
    case 'rock':
      userChooseImage = {img:'./Assets/Images/icon-3.png',
                        borderColor:'15px solid #0074B6'}
      break;
    case 'paper':
      userChooseImage = {img:'./Assets/Images/icon-1.png',
                        borderColor:' 15px solid #FFA943'}
      break;
    default:
      userChooseImage = {img:'./Assets/Images/icon-2.png',
                        borderColor:' 15px solid #BD00FF'}
  }
  switch(computerChooseImages) {
    case 'rock':
      computerChooseImages = {img:'./Assets/Images/icon-3.png',
                              borderColor:'15px solid #0074B6'}
      break;
    case 'paper':
      computerChooseImages = {img:'./Assets/Images/icon-1.png',
                               borderColor:' 15px solid #FFA943'}
      break;
    default:
      computerChooseImages = {img:'./Assets/Images/icon-2.png',
                              borderColor:' 15px solid #BD00FF'}
  }

  displayResult(playerChoice, computerChoice);
  showResult(userChooseImage, computerChooseImages)
  document.getElementById('human-score').textContent = userScore;
  document.getElementById('computer-score').textContent = computerScore;

  localStorage.setItem('userScore', userScore);
  localStorage.setItem('computerScore', computerScore);
}

function displayResult(playerChoice, computerChoice) {
  const game = document.getElementById('game');
  document.getElementById('next-button').style.display = 'none'

  if (playerChoice === computerChoice) {
    resultShow = 'TIE UP'
  } else if (
    (playerChoice === 'rock' && computerChoice === 'scissors') ||
    (playerChoice === 'paper' && computerChoice === 'rock') ||
    (playerChoice === 'scissors' && computerChoice === 'paper')
    
  ) {
    userScore = userScore + 1;
    resultShow= 'YOU WIN'
  } else {
    resultShow = 'YOU LOST'
    computerScore = computerScore + 1;
  }
  if(userScore>computerScore){
    document.getElementById('next-button').style.display = 'inline'
  }
}

function showResult(userImag, computerImg){
  document.getElementById('game').style.display = 'none';
  document.getElementById('resultElement').style.display = 'flex';
  document.getElementById('userimg').src=userImag.img;
  document.getElementById('user-choice').style.border = userImag.borderColor;
  document.getElementById('pc-choice').style.border = computerImg.borderColor;
  document.getElementById('computerImg').src=computerImg.img;
  document.getElementById('resultShow').innerHTML=resultShow;
  
}

function showRules() {
  document.getElementById('rules-board').style.display = 'inline';
}

function playAgain(){
  document.getElementById('game').style.display = 'inline';
  document.getElementById('resultElement').style.display = 'none';
}

function closeRules() {
  document.getElementById('rules-board').style.display = 'none';
}

