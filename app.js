/**
 * Created by prathamesh on 3/16/17.
 */
function startgame() {
    document.turn="X";
    document.winner=false;
}

function setMsg(msg) {
    document.getElementById("message").innerText=msg;
}

function nextmove(param) {
    if(document.winner == false) {
        if (param.innerText == '') {
            param.innerText = document.turn;
            if (!checkWinner(document.turn)) {
                switchturn(param.innerText);
                console.log("Next Move");
            } else {
                setMsg("We have a winner! Congratulations " + document.turn);
                document.winner = true;
            }
        }
        else {
            setMsg("This box is already taken.Choose another box");
        }
    }
}

function switchturn(turn) {
    if(turn == "X"){
        document.turn="O";
    }else{
        document.turn="X";
    }
    setMsg("This is "+document.turn+"'s turn.");
}

function checkWinner(move){
    var result=false;
    if(validateCombinations(1,2,3,move) ||
        validateCombinations(4,5,6,move) ||
        validateCombinations(7,8,9,move) ||
        validateCombinations(1,5,9,move) ||
        validateCombinations(3,5,7,move) ||
        validateCombinations(1,4,7,move) ||
        validateCombinations(2,5,8,move) ||
        validateCombinations(3,6,9,move)){
        return !result;
    }
    else{
        return result;
    }
}

function validateCombinations(a,b,c,move) {
    var result=false;
    if(getBoxValue(a) == move && getBoxValue(b) == move && getBoxValue(c) == move){
        return !result;
    }else{
        return result;
    }
}

function getBoxValue(number){
    return document.getElementById("box"+number).innerText;
}