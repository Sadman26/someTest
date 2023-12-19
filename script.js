//get name from input when i click on submit it will show alert say hello name

var iname = document.getElementById("name").value;
var submit = document.getElementById("submit-btn");

submit.onclick = function () {
    alert("Hello " + iname);
};