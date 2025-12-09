for (let number = 1; number <= 100; number++){ 
// controllo se il numero è divisibile per 3  e per 5
    if (number % 3 === 0 && number % 5 === 0) {
        console.log("FizzBuzz");
        // controllo se il numero è divisibile per 5
    } else if (number % 5 === 0) { 
        console.log("Buzz");
        //controllo se il numero è divisibile per 3
    } else if (number % 3 === 0) {
        console.log("Fizz");
    } else {
        console.log(number);
    }
}

