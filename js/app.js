window.onload = function() {

document.getElementById("titleSwitch1").onclick = function() {changeFirst()};

function changeFirst() {
    document.getElementById("titleSwitch1").innerHTML = "Other things have happened too though, come on..";
}


document.getElementById("titleSwitch2").onclick = function() {changeSecond()};

function changeSecond() {
    document.getElementById("titleSwitch2").innerHTML = "When not busy enjoying a little cheeky bagel";
}

}