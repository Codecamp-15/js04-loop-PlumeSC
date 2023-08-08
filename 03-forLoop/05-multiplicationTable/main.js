let multiple = +prompt('Multiple')

for(let i=1;i<=multiple;i++){
    for(let j=1;j<=12;j++){
        console.log(`${i} * ${j} = ${i*j}`);
    }
    console.log(`============================================`);
}