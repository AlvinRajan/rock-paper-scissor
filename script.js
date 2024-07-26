const choices = ["rock","paper","scissor"];

function playgame(){
    playround();
}

function playround(){
    const humanselection = getHumanchoice();
    const computerselection = getComputerchoice();
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
}

function getComputerchoice(){
    return choices[Math.floor (Math.random() * choices.length)];
}

function validateInput(choice){
    if(choices.includes(choice)){
        return true;
    }else{
        return false;
    }
}

playgame();