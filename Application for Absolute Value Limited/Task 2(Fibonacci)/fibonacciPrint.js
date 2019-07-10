// A simple Javascript file with a function of 1 parameter: x, and the result of the function is the Fibonacci sequence string till that number. Please use clean code and commas to separate the numbers. For example if x=6 than the result should be “1,1,2,3,5”.

// This scirpt can be run at the nodejs runtime 
function printFibonacciSeq(userInput){
    if (userInput < 2){
        console.log("User input should be >= 2 to print the sequence!");
    }
    else if (userInput >= 2){
        let resultArray = [1, 1];
        let i = 0;
        let j = 1;
        let newFib = resultArray[i] + resultArray[j];
        while (newFib < userInput){
            resultArray.push(newFib);
            i++;
            j++;
            newFib = resultArray[i] + resultArray[j];
        }
        print(resultArray);
    }
    else{
        console.log("Invaid input, please try run the script agian!");
    }
}


function print(arr){
    process.stdout.write(arr[0].toString());
    for (let i = 1; i < arr.length; i++){
        process.stdout.write(",");
        process.stdout.write(arr[i].toString());
    }
    process.stdout.write("\n");
}


function main(){
    // This piece of code below about taking console user input is from link: https://stackoverflow.com/questions/8128578/reading-value-from-console-interactively/37417063 , author: Patrick.SE
    const readline = require('readline');

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question("Please enter a integer number to print Fibonacci sequence: ", (userInput) => {
        printFibonacciSeq(userInput);
        rl.close();
    });

    // Another alternative way to take user input 
    
    // var stdin = process.openStdin();
    // process.stdout.write("Please enter a number to print Fibonacci sequence: ");

    // stdin.addListener("data", function(userInput) {
    //     printFibonacciSeq(userInput);
    //     return null;
    // });
}



main();
