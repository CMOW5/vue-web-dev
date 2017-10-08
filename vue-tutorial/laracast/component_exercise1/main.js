Vue.component('message',{

	props : ['title', 'body'],

	data() {

		return {

			isVisible : true

		}

	},

	//the div is necesary because in a template you must have a single root element
	template: `
		
		<article class="message" v-show="isVisible">
		  <div class="message-header">
		    
		    {{ title }}

		    <button type="button" @click="hideModal">X</button>

		  </div>
		  
		  <div class="message-body">
		    {{ body }}
		  </div>
		</article>
	`
	,

	methods : {

		hideModal(){
			this.isVisible = false;
		}

	}

});

new Vue({

	el : '#root'

});