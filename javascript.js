function play(playerChoice)
{
    let cpuChoice = getComputerChoice();
    playerChoice = formatPlayerChoice(playerChoice);
    if (playerChoice !== null)
    {
        console.log(GetWinner(cpuChoice, playerChoice));
    }

}

function GetWinner(cpuChoice, playerChoice)
{
    let playerWins = false;
    switch (playerChoice)
    {
        case "Rock":
            switch (cpuChoice)
            {
                case "Rock":
                    return declareDraw();
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
                    return declareDraw();                    
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
                    return declareDraw();
            }
            break;
    }
    if (playerWins)
    {
        return declareWinner("Player", playerChoice, "CPU", cpuChoice)
    }
    else
    {
        return declareWinner("CPU", cpuChoice, "Player", playerChoice)
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

function formatPlayerChoice(playerChoice)
{
    if (playerChoice && playerChoice.length >= 4)
    {
        playerChoice = playerChoice[0].toUpperCase() + playerChoice.substring(1).toLowerCase();
        if (playerChoice === "Rock" || playerChoice === "Paper" || playerChoice === "Scissors")
        {
            return playerChoice;
        }
    }
    return null;
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