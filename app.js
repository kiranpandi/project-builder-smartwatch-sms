var today = new Date();
var time = today.getHours() + ":" + today.getMinutes();
document.getElementById('small-time').innerHTML = time;
document.getElementById('big-time').innerHTML = time;
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var dayNames = days[new Date().getDay()];
document.getElementById('day-name').innerHTML = dayNames;

let message = document.getElementById("display-message")
let msgContainer1 = document.getElementById("msg-container1")
let msgContainer2 = document.getElementById("msg-container2")
let msgContainer3 = document.getElementById("msg-container3")

let button = document.getElementById("button")


function showMsg() {
    document.getElementById('big-time').style.display = 'none'
    document.getElementById('day-name').style.display = 'none'
    document.getElementById('display-message').style.visibility = 'visible'
    document.getElementById('music').style.color = 'gray'
    document.getElementById('time').style.color = 'gray'
}

function showJavaMsg() {
    document.getElementById('btnMessage').disabled = true
    message.style.display = 'none'
    button.style.display = 'none'
    msgContainer1.style.visibility = 'visible'
}

function showHtmlMsg() {
    document.getElementById('btnMessage').disabled = true
    message.style.display = 'none'
    button.style.display = 'none'
    msgContainer2.style.visibility = 'visible'
}
function showCssMsg() {
    document.getElementById('btnMessage').disabled = true
    message.style.display = 'none'
    button.style.display = 'none'
    msgContainer3.style.visibility = 'visible'
}