//get name from input when i click on submit it will show alert say hello name

var iname = document.getElementById("name").value;
var submit = document.getElementById("submit-btn");
//added a comment

submit.onclick = function () {
    alert("Hello " + iname);
};