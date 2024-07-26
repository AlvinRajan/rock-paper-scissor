const choices = ["rock","paper","scissor"];

function playgame(){
    playround();
}

function playround(){
    const humanselection = getHumanchoice();
    const computerselection = getComputerchoice();
    console.log(computerselection);
    const winner =checkWinner(humanselection,computerselection);
    console.log(winner);
}

function getHumanchoice(){
    let input = prompt("TYPE ROCK PAPER SCISSSOR");
    while (input == null ){
        input = prompt("TYPE ROCK PAPER SCISSSOR");
    }
    input = input.toLocaleLowerCase();
    let check = validateInput(input)
    if(check == true){
        console.log(input)
    }
    return input;
}

function getComputerchoice(){
    return choices[Math.floor (Math.random() * choices.length)];
}

function checkWinner(choiceH , choiceC){
    console.log(choiceH,choiceC);
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

playgame();