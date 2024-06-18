let input = document.getElementById("inputBox");
let buttons = document.querySelectorAll("button");

let string = "";
let ans = "";
//Creates an array from an iterable object
let arr = Array.from(buttons);
arr.forEach((button)=>{
    button.addEventListener("click",(e)=>{
        if (e.target.innerHTML == '=') {
            //eval function Evaluates valid JavaScript code and executes it.
            ans = eval(string);
            //input ke tag mei value dikhe gi
            input.value = ans;
            string = ans; 
            // string = "";
        }
        else if (e.target.innerHTML == 'AC'){
            input.value = "";
            string = "";
        }
        else if (e.target.innerHTML == 'DEL'){
            string = string.substring(0,string.length-1);
            input.value = string;
        }
        else{
            string += e.target.innerHTML;
            input.value = string;
        }
    });
});