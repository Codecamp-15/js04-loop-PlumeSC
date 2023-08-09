// for(let i=1;i<=100;i++){
//     let count = 0
//     for(let j=1;j<=i;j++){
//         if(i%j==0)count++
//         if(count==3) continue
//     }
//     if(count==2) console.log(i);
// }




for(let n=2 ;n<=100;n++){
    let isPrime = true
    for(let divider = 2 ;divider <n;divider++){
        if(n%divider == 2) isPrime=false
    }
    if (isPrime) console.log(n);
}