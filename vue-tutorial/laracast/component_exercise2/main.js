 Vue.component('modal',{

	//the div is necesary because in a template you must have a single root element
	template: `
		
		<div class="modal is-active" >

		  <div class="modal-background"></div>
		
		  <div class="modal-content">
		    <!-- Any other Bulma elements you want -->
		    <div class="box">
		    	<slot></slot>
		    </div>
		  </div>
		
		  <button @click="$emit('close')" class="modal-close is-large" aria-label="close">
		  </button>
		
		</div>
	`

});

new Vue({

	el : '#root',

	data : {

		showModal : false

	}

});