let signedOn = false;
let username;
let password;
let from;
let to;
let progress1 = 0;
let progress2 = 0;

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
          value: progress1
      } );
      
      $( "#progress-bar2" ).progressbar({
        value: progress2
    } );

    $( "#dialog1" ).dialog({ autoOpen: false });
//AFTER INITIALIZATION
});



    $( "#sign-up-btn" ).click(function() {
        username = $("#new-username").val();
        password = $("#new-password").val();
        signedOn = true;
        if($("#new-username").val() == "" || $("#new-password").val() == "" || $("#new-email").val() == ""){
            $( "#dialog1" ).dialog( "open" );
        }
});

    $("#new-username").change(function(){
        if($("#new-username").val() != ""){
            progress2 += 35;
            $( "#progress-bar2" ).progressbar({
                value: progress2
            } );
        }
        else{
            progress2 -= 35;
            $( "#progress-bar2" ).progressbar({
                value: progress2
            } );
        }
    });

    $("#new-password").change(function(){
        if($("#new-password").val() != ""){
            progress2 += 35;
            $( "#progress-bar2" ).progressbar({
                value: progress2
            } );
        }
        else{
            progress2 -= 35;
            $( "#progress-bar2" ).progressbar({
                value: progress2
            } );
        }
    });

    $("#new-email").change(function(){
        if($("#new-email").val() != ""){
            progress2 += 35;
            $( "#progress-bar2" ).progressbar({
                value: progress2
            } );
        }
        else{
            progress2 -= 35;
            $( "#progress-bar2" ).progressbar({
                value: progress2
            } );
        }
    });


