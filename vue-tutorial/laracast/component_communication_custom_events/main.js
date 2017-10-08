Vue.component('coupon',{

	template: `
		
		<input placeholder="enter your coupon code" @blur="applyCoupon">'

		`
	,	
	methods: {

		applyCoupon(){

			this.$emit('applied');

		}

	}

});

new Vue({

	el : '#root',

	data : {

		couponApplied : false

	},

	methods: {

		onCouponApplied(){

			this.couponApplied = true;

		}

	}

});

