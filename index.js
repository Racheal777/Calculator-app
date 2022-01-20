


//grabbing the id
let screen = document.getElementById('screen');
let clear = document.getElementById('clear')

let firstNumber;
let secondNumber;
let count = 0;

// function clearNum(){
//     clear.innerHTML = count
//     showScreen(count)
// }

function Number (e){

    //declaring a general variable
    let text = e.innerText
    showScreen(text)

    //declaring an if statement to see if the operator clicked on is addition
    //symbol
    if(text == "+"){
        operation = "addition"
        return
    
    }else if(text == "-"){
        operation = "subtraction"
        return
    } else if(text == "*"){
        operation = "multiplication"
        return
    } else if(text == "/"){
        operation = "division"
        return
    }


    //declaring an if statement to see if firstnumber exist, if not
    //then it changes the firstnumber to integer
    if(!firstNumber){
        firstNumber = parseInt(text)

    }else{
        secondNumber = parseInt(text)
    }
}

//Addition
function addition(a,b){
    return a + b
}

//Subtraction
function sub(a,b){
    return a - b
}

function multiplication(a,b){
    return a * b
}

function division(a,b){
    return a / b
}

//showing items on the screen
function showScreen(b){
    screen.innerHTML += " " + b
    // screen.innerHTML = clearNum
    screen.classList.add("content")
}

//function declared to save the data
function submit(){
    if(operation == "addition"){
        let total = addition(firstNumber,secondNumber)
        screen.innerHTML = total

    }

    else if (operation == "subtraction"){
        let sumTotal = sub(firstNumber,secondNumber)
        screen.innerHTML = sumTotal
    }

    else if (operation == "multiplication"){
        let sumsTotal = multiplication(firstNumber,secondNumber)
        screen.innerHTML = sumsTotal
    }

    else if (operation == "division"){
        let sumTotall = division(firstNumber,secondNumber)
        screen.innerHTML = sumTotall
    }
        
    
}




