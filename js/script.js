// WEB303 Assignment 3
// Script File
// Author: Manveet Kaur
// Student Id: W0782002
// Date: 2022/06/10
// Filename: script.js
// Section: 065

$(document).ready(() => {
    //getJSONData();
    ajaxData();
})

function getJSONData() {
    $.getJSON("glitchTeam.json", (data) => {
      $.each(data.members, (index, value) => {
        $("div#glitch-team").append(`<h4>${value.fullname}</h2>`);
        $("div#glitch-team").append(`<h6>${value.position}</h5>`);
        $("div#glitch-team").append(`<p>${value.shortbio}</p>`);
      });
    });
  }