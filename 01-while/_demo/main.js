// console.log(`start.........`);

// let i = 0
// while(++i<=10){
//     console.log(i);   
// }

// console.log(`end............`);


let i = 0

// while(++i<=20){
//     if(i%3==0 && i%5==0){
//         console.log('FizeBuzz');
//     }else if(i%3==0){
//         console.log('Fizz');
//     }else if(i%5==0){
//         console.log('Buzz');
//     }else{
//         console.log(i);
//     }
// }

while(++i<=20){
    let text = ``
    if(i%3==0){
        text += `Fizz`
    }
    if(i%5==0){
        text += `Buzz`
    }
    if(text==``){
        text = i
    }
    console.log(text);
    text = ``
}