


import {sum} from "./math.js"
import {number1,number2,result} from "./variables.js"

number2.addEventListener("input", ()=>{
    console.log(number1.value);
    console.log(number2.value);
    result.value = sum(+number1.value, +number2.value)

})

