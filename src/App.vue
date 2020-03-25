<template>
  <div id="app">
<!--    <div @click="exportExcel()">导出</div>
	<div @click="importFile()">导入</div> -->
    <router-view/>
  </div>
</template>

<script>
	// import excel from './utils/excel.js'
export default {
  name: 'App'
 //  data(){
	//   return{
	// 	  jsonData:[
	// 		     {
	// 		            name: "路人甲",
	// 		            phone: "123456789",
	// 		            email: "000@123456.com"
	// 		          },
	// 		          {
	// 		            name: "炮灰乙",
	// 		            phone: "123456789",
	// 		            email: "000@123456.com"
	// 		          },
	// 		          {
	// 		            name: "土匪丙",
	// 		            phone: "123456789",
	// 		            email: "000@123456.com"
	// 		          },
	// 		          {
	// 		            name: "流氓丁",
	// 		            phone: "123456789",
	// 		            email: "000@123456.com"
	// 		          }
			        
	// 	  ]
	//   }
 //  },
	// methods:{
	// 	exportExcel() {
	// 	      excel.exportExcel(this.jsonData, "文件");
	// 	    },
	// 	importFile() {
	// 	      excel.importExcel((data, dataRef) => {
	// 	        alert("数据已经打印在控制台");
	// 	        console.log(data);
	// 	        console.log(dataRef);
	// 	      });
	// 	    }
	// }
}
</script>

<style>

section {
    display: flex;
}
#app {
		width: 1200px;
		height: 500px;
		border: 1px solid #ccc;
	}
	.el-aside{height:500px;border-right: 1px solid #ccc;}
	.el-main{height:440px;}


</style>
