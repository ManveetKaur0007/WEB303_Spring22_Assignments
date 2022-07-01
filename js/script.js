/*
WEB303 Assignment 4
Script File
Author: Manveet Kaur
Student Id: W0782002
Date: 2022/07/01
Filename: script.js
Section: 065
*/

$(`.accordion`).on(`click`, `control`, function(e) { 
    e.preventDefault(); 
    $(this) 
        .next(`.panel`) 
        .not(`:animated`) 
        .slideToggle(); 
});