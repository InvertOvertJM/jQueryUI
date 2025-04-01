let signedOn = false;
let username;
let password;
let from;
let to;


$(document).ready(function() {
    $(".nav-item").hover(
        function() {
            $(this).css("color", "lightblue");
        }, 
        function() {
            $(this).css("color", "white");
        }
    );
        $("#datepicker").datepicker();

        $( "#progress-bar1" ).progressbar({
          value: 0
      } );

      $( "#progress-bar2" ).progressbar({
        value: 0
    } );

    $( "#dialog" ).dialog();
});

