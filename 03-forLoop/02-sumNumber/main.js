let sum = null
let even = 0
let odd = 0
let mul2 = 0
let mul3 = 0

for(let i=1;i<=100;i++){
    sum+=i
    if(i%2==0){
        even +=i
        mul2+= i**2
    }else{
        odd +=i
    }
    if(i%3==0){
        mul3+= i**2
    }
}
console.log(`sum : ${sum}, even : ${even}, odd : ${odd}, mul2-mul3 : ${mul2-mul3}`);