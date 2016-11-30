window.onload = function() {

//replaces "Brief Biography" with "Other things have happened too though, come on.." when clicked

document.getElementById("titleSwitch1").onclick = function() {changeFirst()};

function changeFirst() {
    document.getElementById("titleSwitch1").innerHTML = "Other things have happened too though, come on..";
}

//same functionality as previous code, but replaces the second subtitle in the About Me section

document.getElementById("titleSwitch2").onclick = function() {changeSecond()};

function changeSecond() {
    document.getElementById("titleSwitch2").innerHTML = "When not busy enjoying a little cheeky bagel..";
}

}