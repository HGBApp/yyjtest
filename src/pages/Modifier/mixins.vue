<template>
	<div class='box'>
		<mixin1></mixin1>
		<mixin2></mixin2>
		<input class='input' type='text'>
		<div class='title'>字体的大小</div>
	</div>
</template>

<script>
	//import {myMixin} from '../../utils/mixins.js'
	import mixin1 from '../../components/mixin/mixin1.vue'
	import mixin2 from '../../components/mixin/mixin2.vue'
	export default {
		//mixins:[myMixin],
		components:{
			mixin1,
			mixin2
		},
		data(){
			return {
				
			}
		},
		created(){
			
		}
		
		
		
	}
</script>

<style lang='scss'>
@import '../../assets/css/index.scss';
.box{
	background:$uni-color-primary;
	width:300px;
	height:300px;
}
.input{
	@include setinput();
}
.title{
	//@include size();
	@include size(20px);
}
</style>
