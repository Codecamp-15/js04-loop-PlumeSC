// () : parenthesis
// {} : bracket
// [] : square bracket


// for(let i=1;i<=3;i++){
//     console.log(`Hello`);
// }

// for(let i=1;i<=20;i++){
//     let text = ``
//     if(i%3==0)text+=`Fizz`
//     if(i%5==0)text+=`Buzz`
//     if(text==``)text=i
//     console.log(text);
//     text=``
// }

// let text = `codecamp`
// let re=``


// for(let i=0;i<text.length;i++){
//     if(text[i]==`a`||text[i]==`e`||text[i]==`i`||text[i]==`o`||text[i]==`u`) continue
//     re+=text[i]
// }
// console.log(re);


// let multiple = 2

// for(let i =1;i<=12;i++){
//     console.log(`${i} * ${multiple} = ${i*multiple}`);
// }

// let multiple = +prompt('Multiple')

// for(let i=1;i<=multiple;i++){
//     for(let j=1;j<=12;j++){
//         console.log(`${i} * ${j} = ${i*j}`);
//     }
//     console.log(`============================================`);
// }



let count = 15
let text = ``
let i = 0
let x = 0

while(i>=0){
    if(x==0){
        i++
        if(i==Math.round(count/2)) x=1
    }else{
        i--
        if(i==0) break
    }

    for(let j=1;j<=Math.round(count/2)-i;j++){
        text+=` `
        }
        for(let j=1;j<=(2*i)-1;j++){
            text+= `*`
        }
      
      console.log(`${text}`);
      text=``
}