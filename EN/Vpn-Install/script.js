function adjust_box( document_width, document_height, box_width, box_height ) {

	if ( document_height > (box_height + (box_height) / 2) && document_width <= 480 || document_height > box_height && document_width > 480 ) {

		document.getElementById( "wrap" ).style.position = "absolute";
		document.getElementById( "wrap" ).style.top = "0px";
		document.getElementById( "wrap" ).style.left = "0px";
		document.getElementById( "wrap" ).style.width = "auto";
		document.getElementById( "wrap" ).style.height = "auto";

		document.getElementById( "container" ).style.margin = - (box_height / 2) + "px 0 0 0";
		document.getElementById( "container" ).style.top = "50%";
		document.getElementById( "container" ).style.width = "auto";
		document.getElementById( "container" ).style.height = "auto";

	} else {

		document.getElementById( "wrap" ).style.position = "";
		document.getElementById( "wrap" ).style.top = "";
		document.getElementById( "wrap" ).style.left = "";
		document.getElementById( "wrap" ).style.width = "";
		document.getElementById( "wrap" ).style.height = "";

		document.getElementById( "container" ).style.margin = "";
		document.getElementById( "container" ).style.top = "";
		document.getElementById( "container" ).style.width = "";
		document.getElementById( "container" ).style.height = "";

	}

}

var sec = 45; // set the seconds
var min = 04; // set the minutes
function countDown() {
	sec--;
	if (sec == -01) {
		sec = 59;
		min = min - 01;
	} else {
		min = min;
	}

	if (sec<=9) { sec = "0" + sec; }

	time = (min<=9 ? "" + min : min) + " minute  " + sec + " seconds ";

	if (document.getElementById) { document.getElementById('countdown').innerHTML = time; }

	SD=window.setTimeout("countDown();", 1000);
	if (min == '00' && sec == '00') { sec = "00"; window.clearTimeout(SD); }
}
window.onload = countDown;

function get_url_parameter( name ) {

	name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
	var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
	var results = regex.exec(location.search);
	return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));

}

function set_ip_address( $ip_address ) {
	document.getElementById( "variable-ip-address" ).innerHTML = $ip_address;
}

function set_device_brand( $device_brand ) {
	document.getElementById( "variable-device-brand" ).innerHTML = $device_brand;
}

function set_device_model( $device_model ) {
	document.getElementById( "variable-device-model" ).innerHTML = $device_model;
}

document.addEventListener( 'DOMContentLoaded', function () {

	activate_blink();
	start_timer();

	var document_width = document.documentElement.clientWidth;
	var document_height = document.documentElement.clientHeight;
	var box_width = document.getElementById( "container" ).offsetWidth;
	var box_height = document.getElementById( "container" ).offsetHeight;

	adjust_box( document_width, document_height, box_width, box_height );

	window.addEventListener( 'resize', function ( event ) {

		var document_width = document.documentElement.clientWidth;
		var document_height = document.documentElement.clientHeight;
		var box_width = document.getElementById( "container" ).offsetWidth;
		var box_height = document.getElementById( "container" ).offsetHeight;

		adjust_box( document_width, document_height, box_width, box_height );

	}, false );

}, false );
