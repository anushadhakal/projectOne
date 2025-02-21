function addTwoNumbers(number1 , number2){
    return number1 + number2
}
console.log(addTwoNumbers(3,4));

const user = {
    username : "Anusha",
    price : 399
}
function objectHandling (anyObject){
    return `the username is ${anyObject.username} and the price is ${anyObject.price}`
}
console.log(objectHandling(user))

const myArr = [100, 200, 300]
function returnSecondValue (anyArr){
    return anyArr[1]
}
console.log(returnSecondValue(myArr))