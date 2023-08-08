let year = 2
let money = 100000
let interest = 2.5

for(let i = 1;i<=year;i++){
    money+=money*((interest)/100)
}
console.log(money);
