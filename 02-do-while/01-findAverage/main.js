// let ansNumber = prompt(`Enter number`)


// let isValid = ansNumber ==null||ansNumber.trim()===``||isNaN(ansNumber)
// let outOfRange = Number(ansNumber)<1||Number(ansNumber)>99
// let isInRange = Number(ansNumber)>=1||Number(ansNumber)<=99

// if(isValid){
//     alert(`Invalid Input`)
// }else if(outOfRange){
//     alert(`invalid Range`)
// }else if(isInRange){
//     alert(`guess number`)
// }


let ansNumber = ``
let isEmpty
let isNaN
let outOfRange
do{
    ansNumber=prompt(`Enter number`) || ``

    isEmpty = ansNumber.trim()===``
    isNan = isNaN(ansNumber)

    outOfRange = Number(ansNumber)<1||Number(ansNumber)>99
    if(isEmpty||isNaN){
        alert(`Invalid Input 1-99`)
    }else if(outOfRange){
        alert(`Invalid Range 1-99`)
    }
}while(isEmpty||isNan)