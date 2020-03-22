<template>
	<div>
		<mixin1></mixin1>
		<mixin2></mixin2>
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

<style>
</style>
