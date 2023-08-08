// let input = +prompt(`Number`)



// if(!isNaN(input)){
//     let x= 1
//     let y=0
//     while(input>=10 && x<=20){
//         input = input/10
//         y += (input.toFixed(1)-input.toFixed(0)).toFixed(1)*10

//         x++

//         console.log(`${input.toFixed(1)} ${input.toFixed(0)} ${y}` );
//     }

//     console.log(`${(y+input).toFixed(0)}`);
    
// }else{
//     console.log(`not number`);
// }

let input = 111115
let sum = 0

while(input>1){
    sum+=input%10
    input /= 10
    input = Math.floor(input)
    // console.log(`${sum}      ${input}`);
}
console.log(sum);