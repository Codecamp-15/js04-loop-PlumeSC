let guessNumber

do{
    guessNumber = prompt(`Enter Number`) || ``
    isEmpty = ansNumber.trim()===``
    isNan = isNaN(ansNumber)

    outOfRange = Number(ansNumber)<1||Number(guessNumber)>99
    if(isEmpty||isNaN){
        alert(`Invalid Input 1-99`)
    }else if(outOfRange){
        alert(`Invalid Range 1-99`)
    }else if(+guessNumber> +ansNumber){
        alert(`Too Hight`)
    }else if(+guessNumber< +ansNumber){
        alert(`Too Low`)
    }else if(+guessNumber== +ansNumber){
        alert(`okokok`)
    }
    
}while(+guessNumber != +ansNumber)



