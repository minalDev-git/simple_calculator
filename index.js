const input = document.getElementById("inputBox");
let buttons = document.querySelectorAll("button");

function moveCursorToEnd() {
    const valueLength = input.value.length;
    input.setSelectionRange(valueLength, valueLength);
}
  // Event listener to move cursor to end on input focus
input.addEventListener('focus', moveCursorToEnd);

let equalsTOBtn = document.getElementsByClassName("equalBtn");
// Event listener to hide cursor when input field is empty
let string = "";
let ans = "";
//Creates an array from an iterable object
let arr = Array.from(buttons);
arr.forEach((button)=>{
    button.addEventListener("click",(e)=>{
        if (e.target.innerHTML == '=') {
            if (input.value == "") {
                equalsTOBtn.disabled = true;
            }
            else{
                equalsTOBtn.disabled = false;
                //eval function Evaluates valid JavaScript code and executes it.
                ans = eval(string);
                //input ke tag mei value dikhe gi
                input.value = ans;
                string = ans; 
                moveCursorToEnd();
                input.style.caretColor = 'transparent';
                // string = "";
            }
        }
        else if (e.target.innerHTML == 'AC'){
            input.value = "";
            input.style.caretColor = 'transparent';
            string = "";
            ans = "";
        }
        else if (e.target.innerHTML == 'DEL'){
            string = string.substring(0,string.length-1);
            input.value = string;
            if (input.value === '') {
                input.style.caretColor = 'transparent';
            }
            input.focus();
        }
        else{
            if (ans == undefined || ans == "Infinity") {
                ans = "";
                string = "";
                input.value = "";
            }
            else{
                string += e.target.innerHTML;
                input.value = string;
                input.style.caretColor = '';
            }
        }
        input.focus();
    });
});
