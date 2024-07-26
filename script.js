const choices = ["rock","paper","scissor"];
const winners= [];

function playgame(){
    for(let i=1; i<=5; i++){
        playround(i);
    }
    Score();
}

function playround(round){
    const humanselection = getHumanchoice();
    const computerselection = getComputerchoice();
    const winner =checkWinner(humanselection,computerselection);
    winners.push(winner);
    logRound(humanselection,computerselection,winner,round);
}

function getHumanchoice(){
    let input = prompt("TYPE ROCK PAPER SCISSSOR");
    while (input == null ){
        input = prompt("TYPE ROCK PAPER SCISSSOR");
    }
    input = input.toLowerCase();
    let check = validateInput(input)
    while(check == false){
        input = prompt(
            "Type rock paper or scissor , or  you have spelling mistake"
        );
        while (input == null){
            input = prompt("TYPE ROCK PAPER SCISSSOR");
        }
        input = input.toLowerCase();
        check =validateInput(input);
    }
    return input;
}

function getComputerchoice(){
    return choices[Math.floor (Math.random() * choices.length)];
}

function checkWinner(choiceH , choiceC){
    if(choiceH === choiceC){
        return "Tie"
    }else if((choiceH === "rock" && choiceC === "scissor") || 
    (choiceH === "paper" && choiceC === "rock") ||
    (choiceH === "scissor" && choiceC === "paper")
    ){ 
        return "Human"  
    }else{
        return "Computer"
    }
}

function validateInput(choice){
    if(choices.includes(choice)){
        return true;
    }else{
        return false;
    }
}

function Score(){
    let HumanWin = winners.filter((item) => item == "Human").length;
    let ComputerWin = winners.filter((item) => item == "Computer").length;
    let Tie = winners.filter((item) => item == "Tie").length;
    console.log("Result");
    console.log('Human wins:' ,HumanWin);
    console.log('Computer wins:' ,ComputerWin);
    console.log('Tie',Tie);
}

function logRound(getHumanchoice,getComputerchoice,winner,round){
    console.log('Round ',round);
    console.log('Human choice:',getHumanchoice);
    console.log('Computer choice:',getComputerchoice);
    console.log(winner,'won the round');
    console.log("----------------------");

}