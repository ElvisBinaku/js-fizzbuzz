let number;
let multipli3;
let multipli5;
let multipli3e5;

for (let number = 1; number <= 100; number++){ 

    if (number % 3 === 0) {
        console.log("Fizz");
    } else if (number % 5 === 0) { 
        console.log("Buzz")
    } else if (number % 3 === 0 && number % 5 === 0) {
        console.log("FizzBuzz")
    } else {
        console.log(number)
    }
}

