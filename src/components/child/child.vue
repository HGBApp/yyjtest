<template>
	<div>我是子组件
		<sun></sun>
	</div>
</template>

<script>
	import sun from './sun'
	export default{
		
		components:{
			sun
		},
		inject:['getName'],
		data(){
			return {
				
			}
		},
		mounted(){
			this.getName();
		}
	}
</script>

<style>
</style>
