(function() {
"use strict";
var state = document.getElementById('s-state');
var btnREun = document.getElementById('btn-estimate');
document.addEventListener('DOMContentLoaded',function(){

	btnREun.disabled=true;
	state.addEventListener('change',function(){
		if(state.value===''){
				btnREun.disabled=true;
		}else{
				btnREun.disabled=false;
		}

	});
});
})();
