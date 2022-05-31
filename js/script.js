// WEB303 Assignment 2
// Script File
// Author: Manveet Kaur
// Student Id: W0782002
// Date: 2022/05/31
// Filename: script.js
// Section: 065
$(document).ready(function(){
$("#prospect").on("click", function(){        
    $("#content").empty();
    $("#content").hide().fadeIn(1000);
    $("#content").load("./prospect.html");
    $("#content").css("display:block");
});
$("#convert").on("click", function(){
    $("#content").empty();
    $("#content").hide().fadeIn(1000);
    $("#content").load("./convert.html");
    $("#content").css("display:block");

});
$("#retain").on("click", function(){
    $("#content").empty();
    $("#content").hide().fadeIn(1000);
    $("#content").load("./retain.html");
    $("#content").css("display:block");
});
});
