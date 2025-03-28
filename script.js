let signedOn = false;


$(document).ready(function() {
    $(".nav-item").hover(
        function() {
            $(this).css("color", "lightblue");
        }, 
        function() {
            $(this).css("color", "white");
        }
    );

    $(function() {
        $("#datepicker").datepicker();
    });

    $( function() {
        $( "#progressbar" ).progressbar({
          value: 20
        });
      } );

      
});

