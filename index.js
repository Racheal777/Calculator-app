


//grabbing the id
let screen = document.getElementById('screen');
let clear = document.getElementById('clear')

let firstNumber;
let secondNumber;
let count = 0;
let operation;
let mathArray = []

// function clearNum(a){
//     screen.innerHTML = a.toString()
//     showScreen ()
// }

function Number (e){

    //declaring a general variable
    let text = e.innerText

    //if the text clicked is equal sign then it should go ahead and perform the
    //submit function
    if(text == "="){
        submit()
        return
    }
    //pushing the text which is the number that has been clicked to the array
    mathArray.push(text)
    showScreen(text)
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

//function to clear the screen and bring the total
function clearScreen(g){
    screen.innerHTML = g.toString()
}


//showing items on the screen
function showScreen(b){
    screen.innerHTML += " " + b
    // screen.innerHTML = clearNum
    screen.classList.add("content")
}

//function declared to save the data
function submit(){
    //declaring a variable and looping through it the check if the button clicked
    //is any of the operation sign and also check if the number in the array is any
    //of the operation sign
   let operations = []
   for(let i = 0; i < mathArray.length; i++){
        if(operations.length && (operations[operations.length -1] != "+" && 
        operations[operations.length -1] != "-" && operations[operations.length -1] != "*"
        && operations[operations.length -1] != "/") && (mathArray[i] != "+" && 
        mathArray[i] != "-" && mathArray[i] != "*" && mathArray[i] != "/")) {

            console.log(operations[i])
            //declaring a variable to get the last item added in the array
            //then add that number to the mathArray
            //afterwards we assign the new array to the first variable
            //else we push the mathArray which is an empty array to the operations
            let first = operations[operations.length -1]
            first += mathArray[i]
            operations[operations.length -1] = first
        }else{
            operations.push(mathArray[i])
        }
   }
   
   //declaring a global variable
   //looping through the array that we got
   //checking if the number passed is equal to any operation symbol
   //if not then the number is changed to an integer
   
   let fg;
   let lastOp;
   for(let y = 0; y < operations.length; y++){
       let numb = operations[y]
       console.log(operations[y])
       if(numb != "+" && numb != "-" && numb != "*" && numb != "/")
       if(y == 0){
           fg = parseInt(numb)

        //    console.log(fg)
       }else{
           if(lastOp == "+"){
               fg = fg + parseInt(numb)

           }else if(lastOp == "-"){
            fg = fg - parseInt(numb)

           }else if(lastOp == "*"){
            fg = fg * parseInt(numb)

            }else if(lastOp == "/"){
                fg = fg / parseInt(numb)
            }
   
    }else if(numb == "+"){
        lastOp = "+"

    }else if(numb == "-"){
        lastOp = "-"

    }else if(numb == "*"){
        lastOp = "*"
    }else if(numb == "/"){
        lastOp = "/"
    }

    console.log(numb)
// console.log(lastOp)
   }
   clearScreen(fg)
   
   
}











    