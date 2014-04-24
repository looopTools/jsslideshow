/**
    This file is part of jsslideshow.

    jsslideshow is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    jsslideshow is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with jsslideshow.  If not, see <http://www.gnu.org/licenses/>.
*/
$(function(){
   // alert("TEST")
    var number_of_slides = -1;
    var current_slide = 1;
    $("#fwd_btn").click(function(){
	if((current_slide + 1) <= number_of_slides){
	    current_slide = switch_slid_fwd(current_slide);
	}
    });

    $("#bwd_btn").click(function(){
	if((current_slide - 1) > 0){
	    current_slide = switch_slid_bwd(current_slide);
	}
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
    $("#slide"+input).hide(); 
    input++;   
    $("#slide"+input).show();
    return input;
}

function switch_slid_bwd(input){
    $("#slide"+input).hide(); 
    input--;   
    $("#slide"+input).show();
    return input;
}

