
// This var shows the date and time at the top of the page
var currentDT = moment().format('MM-DD-YYYY, HH:mm:ss a');
$("#currentDT").append(currentDT);

// Allows the user to edit the event
$(".event").click(function () {
    this.attr("contentEditable", "true");
});

// This will save the event to the local storage when the user clicks the save button
$(".saveEvent").click(function () {
    var eventItem=$(this).siblings(".event").val();
    var hour=$(this).parent().attr("id");
    localStorage.setItem(hour,eventItem);
});

// This will load the event from the user's local storage
$(document).ready(function () {
    var nine = localStorage.getItem("nine");
    var ten = localStorage.getItem("ten");
    var eleven = localStorage.getItem("eleven");
    var twelve = localStorage.getItem("twelve");
    var one = localStorage.getItem("one");
    var two = localStorage.getItem("two");
    var three = localStorage.getItem("three");
    var four = localStorage.getItem("four");
    var five = localStorage.getItem("five");

    $('#nine .event').val(nine);
    $('#ten .event').val(ten);
    $('#eleven .event').val(eleven);
    $('#twelve .event').val(twelve);
    $('#one .event').val(one);
    $('#two .event').val(two);
    $('#three .event').val(three);
    $('#four .event').val(four);
    $('#five .event').val(five);
});

// changes color relative to the current time

function getTime(){
    return parseInt(moment().format('k'));
}

function start(){
    var eventDescription=$('.event').toArray();
    eventDescription.forEach(changeColor);
}

function changeColor(el, index){
    var hour = index+9
    if(getTime()===hour){
        el.classList.add("present");
    } else if(getTime()>hour){
        el.classList.add("past");
    } else if(getTime()<hour){
        el.classList.add("future");
    }};

    start();
