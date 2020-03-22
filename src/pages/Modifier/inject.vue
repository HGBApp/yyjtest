<template>
	<div>
		<p>依赖注入</p>
		<child></child>
		<button @click="toggleShow">点击</button>
			<span>{{num}}</span>
	</div>
</template>

<script>
	import child from '../../components/child/child.vue'
	import {myMixin} from '../../utils/mixins.js'
	export default{
		mixins:[myMixin],
		components:{
			child
		},
		provide:function(){
			return {
				getName:this.getName
			}
		},
		methods:{
			getName(){
				console.log("后代组件都能访问我");
			}
		}
		
	}
</script>

<style>
</style>
