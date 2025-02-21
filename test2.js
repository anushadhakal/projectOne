const user = {
    username : "anusha"

}
function myFunc (anyObj){
    return `the username is ${anyObj.username} `
}
console.log(myFunc(user));

const myArr = [200, 300, 400]
function returnSecondValue (newArr){
    return newArr[0];
}
console.log (returnSecondValue(myArr));

