const rock = document.querySelector('#rock');
rock.addEventListener('click', play);
rock.myParam = "Rock";
const paper = document.querySelector('#paper');
paper.addEventListener('click', play);
paper.myParam = "Paper";
const scissors = document.querySelector('#scissors');
scissors.addEventListener('click', play);
scissors.myParam = "Scissors";

let winner;
let playerScore = 0;
let cpuScore = 0;
let actionText = "";

const playerUI = document.querySelector("#player");
const actionTextUI = document.querySelector("#action");
const cpuUI = document.querySelector("#cpu");

function setUI(actionText)
{
    playerUI.textContent = `Player: ${playerScore}`;
    cpuUI.textContent = `CPU: ${cpuScore}`;
    actionTextUI.textContent = actionText;
}

function resetUI()
{
    playerUI.textContent =`Player: 0`;
    cpuUI.textContent = `CPU: 0`;
    actionTextUI.textContent = "Starting new";
}

function play(evt)
{
    if (playerScore >= 5 || cpuScore >= 5)
    {
        playerScore = cpuScore = 0;
        resetUI();
        return;
    }

    let cpuChoice = getComputerChoice();
    let playerChoice = evt.currentTarget.myParam;

    let winner = getWinner(cpuChoice, playerChoice);
    
    
    if (winner === "player")
    {
        actionText = declareWinner("Player", playerChoice, "Cpu", cpuChoice);
        playerScore++;

    }
    else if (winner === "cpu")
    {
        actionText = declareWinner("CPU", cpuChoice,
        "Player", playerChoice);
        cpuScore++;
    }
    else
    {
        actionText = declareDraw();
    }

    setUI(actionText);
}

function getWinner(cpuChoice, playerChoice)
{
    let playerWins = false;
    switch (playerChoice)
    {
        case "Rock":
            switch (cpuChoice)
            {
                case "Rock":
                    return "draw";
                case "Paper":
                    playerWins = false;
                    break;
                case "Scissors":
                    playerWins = true;
                    break;
            }
            break;
        case "Paper":
            switch (cpuChoice)
            {
                case "Rock":
                    playerWins = true;
                    break;
                case "Paper":
                    return "draw";  
                case "Scissors":
                    playerWins = false;
                    break;
            }
            break;
        case "Scissors":
            switch (cpuChoice)
            {
                case "Rock":
                    playerWins = false;
                    break;
                case "Paper":
                    playerWins = true;
                    break;
                case "Scissors":
                    return "draw";
            }
            break;
    }

    if (playerWins)
    {
        return "player"
    }
    else
    {
        return "cpu"
    }
}

function declareWinner(winner, winnerChoice, loser, loserChoice)
{
    return `${winner} beats ${loser}: ${winnerChoice} beats ${loserChoice}`;
}

function declareDraw()
{
    return "Draw";
}

function getComputerChoice()
{
    let choice = Math.floor(Math.random() * 3);
    switch (choice)
    {
        case 0:
            return "Rock";
            
        case 1:
            return "Paper";
        case 2: 
        return "Scissors"
        default:
            return null;
    }
}