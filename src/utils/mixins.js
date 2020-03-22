export const myMixin = {
	data(){
		return{
			isshowing:false,
			num:0
		}
	},
	methods:{
		toggleShow(){
			this.isshowing=!this.isshowing
			this.num++
		}
	}
}