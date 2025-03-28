$(function() {
    $("#datepicker").datepicker();
});

$(document).ready(function() {
    $(".nav-item").hover(
        function() {
            $(this).css("color", "blue");
        }, 
        function() {
            $(this).css("color", "white");
        }
    );
});
