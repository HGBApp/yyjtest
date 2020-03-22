<template>
	<div>我是后代元素

	</div>
</template>

<script>
	
	export default{
		inject:['getName'],
		mounted(){
			console.log("我是后代");
			this.getName()
		}
	}
</script>

<style>
</style>
