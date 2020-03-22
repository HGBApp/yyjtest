<template>
	<el-container>
	   <el-aside>
		   <leftNav></leftNav>
	   </el-aside>
	   <el-container style='overflow-y: auto;
    width: 100%;'>
		   <el-main>
			   <router-view/>
		   </el-main>
	   </el-container>
	</el-container>
</template>

<script>
	import leftNav from './pages/leftNav.vue'
	export default{
		components:{
			leftNav
		},
		data(){
			return{
				
			}
		},
		methods:{
			
		}
	}
</script>

<style>
	.el-aside>ul>li{list-style: none;}
	
</style>
