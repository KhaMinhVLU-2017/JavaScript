(function() {
"use strict";

var state = document.getElementById('s-state');
var meo1= document.getElementById('txt-q-bball').value;
var meo2= document.getElementById('txt-q-jersey').value;
var meo3= document.getElementById('txt-q-power').value;
var meo4= state.check;
var meo5= document.getElementById('r-method-pickup').value;
document.addEventListener('DOMContentLoaded', function() {
	document.getElementById('cart-hplus').addEventListener('submit', estimateTotal);

	var btnEstimate = document.getElementById('btn-estimate');

	btnEstimate.disabled = true;

	state.addEventListener('change', function() {

		if (state.value === '') {
			btnEstimate.disabled = true;
		} else {
			btnEstimate.disabled = false;
				  console.log(meo1,meo2,meo3,meo4,meo5);
		}

	});
});

function estimateTotal(event) {
	event.preventDefault();

	if (state.value === '') {
		alert('Please choose your shipping state.');

		state.focus();
	}
}







})();
