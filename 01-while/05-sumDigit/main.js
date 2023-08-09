let input = +prompt(`Number`)
let sum = 0

while(input>1){
    sum+=input%10
    input /= 10
    input = Math.floor(input)
}
console.log(sum+input);