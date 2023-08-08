let input = Number(prompt(`Enter your Number`))

if(!isNaN(input)){
    let x=1
    while ((input/=10)>1) {
        x++
    }
    console.log(x);
}else{
    console.log(`is not a number`);
}