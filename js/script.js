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

function ajaxData() {
    $.ajax({
      url: "glitchTeam.json",
      type: "GET",
      beforeSend: ()=> {
        $("div#glitch-team").html("Loading team...");
      },
      error: (error)=> {
        $("div#glitch-team").html("The content could not be retrieved.");
      },
      success: (data) => {
        setTimeout(() => {
          $("div#glitch-team").empty();
          $.each(data.members, (index, value) => {
            $("div#glitch-team").append(`<h4>${value.fullname}</h2>`);
            $("div#glitch-team").append(`<h6>${value.position}</h5>`);
            $("div#glitch-team").append(`<p>${value.shortbio}</p>`);
          });
        }, 3000);
      }
    })
}