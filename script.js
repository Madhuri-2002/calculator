function clearScreen() {
    document.getElementById("result").value = "";
}
 
// This function display values
function display(value) {
    document.getElementById("result").value += value;
}
function del(){
    document.getElementById("result").value=document.getElementById("result").value.substr(0,document.getElementById("result").value.length-1);
}
 
// This function evaluates the expression and returns result
function calculate() {
    var p = document.getElementById("result").value;
    var q = eval(p);
    document.getElementById("result").value = q;
}