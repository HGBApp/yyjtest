<template>
	<div>
		<li>{{data.name}}<button @click='$emit("remove")'>remove</button></li>
	</div>
	
</template>

<script>
	export default{
		props:{
			data:Object
		},
		data(){
			return {
				msg:3
				
			}
		},
		mounted(){
			var arr=[1,2,3,4];
			var arr2=[2,3];
			
			arr.filter(function(val,index){
				return val > this
			},this.msg);
			console.log("huangguangao:"+arr);
			//console.log("ddfd:"+this.$root.yyj)
		},
		methods:{
			
		}
	}
	
</script>

<style>
</style>
