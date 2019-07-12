/* function 1. new clolors: provide 6 different color each time
            2. easy mode : display 3 squares, hard mode: display 6 squares
            3. top display show a rgb color that player has to find
            4. 6 squares have different colors for player to pick
*/

// let colors = [
//     "rgb(255, 0, 0)",
//     "rgb(255, 255, 0)",
//     "rgb(0, 255, 0)",
//     "rgb(0, 255, 255)",
//     "rgb(0, 0, 255)",
//     "rgb(255, 0, 255)",
// ]

// initial colorList and pickedColor
let numSquares = 6;
let colors = generateRandomColors(numSquares);
let pickedColor = pickColor();

// Display the one color that player have to pick
let colorDisplay = document.querySelector("h1 span");
colorDisplay.textContent = pickedColor;


// let each square display the colors in colorList 
let squareList = document.querySelectorAll(".squares");
// give feedback when player clicked a color
let messageDisplay = document.getElementById("message");
refreshDisplay();



// New Colors button Or Reset button
let resetButton = document.querySelector("#stripe button");
resetButton.addEventListener("click",function(){
    reset(numSquares);
});



// EasyButton
let easyButton = document.querySelector("#easyMode");
easyButton.addEventListener("click", function(){
    numSquares = 3;
    removeSelected();
    removeOtherSquares(3);
    this.classList.add("selected");
    reset(numSquares);
});

function removeOtherSquares(numSquares){
    for (let i = numSquares; i < squareList.length; i ++ ){
        squareList[i].style.display = "none";
    }
}
function removeSelected(){
    easyButton.classList.remove("selected");
    hardButton.classList.remove("selected");
};
//##############################################################



// HardButton
let hardButton = document.querySelector("#hardMode");
hardButton.addEventListener("click", function(){
    numSquares = 6;
    removeSelected();
    addOtherSquares(3);
    this.classList.add("selected");
    reset(numSquares);
});
function addOtherSquares(numSquares){
    for (let i = numSquares; i < squareList.length; i ++ ){
        squareList[i].style.display = "block";
    }
}
//##############################################################




//reset colors, pickedColor, colorDisplay
function reset(num){
    colors = generateRandomColors(num);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    document.querySelector("h1").style.backgroundColor = "steelblue";
    refreshDisplay();
    messageDisplay.textContent = "";
    resetButton.textContent = "New Colors";
}




//This is the refresh display section
function refreshDisplay(){
    for (let i = 0; i<colors.length; i++){
        //add initial colors to squares
        squareList[i].style.backgroundColor = colors[i];
        //add click listeners to squares
        squareList[i].addEventListener("click",function(){
            //grab color of clicked square 
            let clickedColor = this.style.backgroundColor;
            //comapre color to picked color
            if (clickedColor === pickedColor){
                messageDisplay.textContent = "Correct!";
                changeColors(pickedColor);
                resetButton.textContent = "Play Again?";
            }else{
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try again!";
            }
        });
    }
}
function changeColors(color){
    for (let i = 0; i<colors.length; i++){
        squareList[i].style.backgroundColor = color;
    }
    //This change the background color for h1 as well
    document.querySelector("h1").style.backgroundColor = color;
}
//##############################################################




function pickColor(){
    return colors[Math.floor(Math.random() * colors.length)];
}



//This is the generate Random colors function 
function generateRandomColors(num){
    let arr = [];
    for (let i = 0; i<num ; i++){
        arr.push(randomColor());
    }
    return arr;
}
function randomColor(){
    let r = Math.floor(Math.random()*256);
    let g = Math.floor(Math.random()*256);
    let b = Math.floor(Math.random()*256);
    let rgb = "rgb(" + r + ", " + g + ", " + b + ")";
    return rgb;
}
//##############################################################