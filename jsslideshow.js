$(function(){
   // alert("TEST")
    var number_of_slides = -1;
    var current_slide = 0;
    $("#fwd_btn").click(function(){
	switch_slid_fwd(current_slide);
    });
    $( "#dialog-message" ).dialog({
	modal: true,
	buttons: {
            Ok: function() {
		
		if(validate_input(parseInt($("#number_of_sldes").val()))){
		    number_of_slides = parseInt($("#number_of_sldes").val());
		    $( this ).dialog( "close" );
		    hide_all_but_first(number_of_slides);
		}else{
		    alert("Enter a valid integer large than zero"); 
		}
            }
	}
    });
});

function validate_input(input){
    if(input > 0){
	return true;
    }else{
	return false;
	
    }
}

function hide_all_but_first(input){
    for(var i = 2; i <= input; i++){
	$("#slide"+i).hide();
    }
}

function switch_slid_fwd(input){
    alert("slide" + input);
    $("#slide"+input).hide(); 
    alert("deo");
    input++;    
    alert(input);
    $("#slide"+input).show();
    alert("deo");

}


