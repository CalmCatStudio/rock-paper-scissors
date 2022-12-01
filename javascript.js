function testComputerChoice()
{
    alert(getComputerChoice())
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