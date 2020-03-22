<template>
		<el-menu :default-active="this.$router.path" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :router="true">
				<template v-for='(item,index) in routeData'>
					<el-menu-item :index='item.path' :key="index">
						{{item.name}}
					</el-menu-item>
				</template>
				
			</el-menu>	
</template>

<script>
	export default{
		data(){
			return {
				routeData:[
					{
						path:'slot',
						name:'slot插槽'
					},
					{
						path:'Modifier',
						name:'vue修饰符'
					},
					{
						path:'vfor',
						name:'vue组件上使用v-for'
					},
					{
						path:'inject',
						name:'依赖注入'
					},
					{
						path:'mixins',
						name:'vue混入'
					},
					
				]
			}
		},
		methods: {
		      handleOpen(key, keyPath) {
		        console.log(key, keyPath);
		      },
		      handleClose(key, keyPath) {
		        console.log(key, keyPath);
		      }
		    }
	}
</script>

<style>
</style>
