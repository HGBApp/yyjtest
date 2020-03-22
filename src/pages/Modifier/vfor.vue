<template>
	<div>
		<form @submit.prevent='add'>
			<input v-model='text'>
			<button>Add</button>
		</form>
		<ul v-for='(item,index) in list' :key='index'>
			<li is='vFor' :data='item' @remove='list.splice(index,1)'>
				
			</li>
		</ul>
	</div>
</template>

<script>
	import vFor from '../../components/v-for.vue'
	export default{
		components:{
			vFor
		},
		data(){
			return{
				text:'fdf',
				list:[
					{name:'yyj'},
					{name:'jjj'},
					{name:'mkd'}
				]
			}
		},
		methods:{
			add(){
				//this.list.push({name:this.text})
				this.list.splice(2)
				console.log(this.list.length);
			}
		}
		
	}
</script>

<style>
</style>
