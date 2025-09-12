$(function(){
    $("#MPCopyright").append('<p> &copy; <span id="year"></span> All rights reserved.</p>');
    
    $('#MPCopyright #year').html(new Date().getFullYear());
    });