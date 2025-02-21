// for (let i = 0; i < 10; i++){
//     const element = i;
//     console.log(element)
//     if (i==5){
//         console.log("5 is the best number");
        
//     }

// }

// for (let i = 0; i < 10; i++) {
//     const element = i;
//     console.log(`${i} is executed`);
//     for (let j=0; j<5; j++){
//         console.log(`${i} is executed and ${j} is also executed`)
//     }
    
    
// }
let i = 0
// while (i < 10){
//     console.log(i)
//     i++
// }

// object maa for in loop

const myObj = {
    js : "javascript",
    html : "hyper text markup language"
  
}
for (const key in myObj){
    console.log(`${key} shortcut is ${myObj[key]}`);
    
}