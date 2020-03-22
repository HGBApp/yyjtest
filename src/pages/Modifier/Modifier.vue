<template>
	<div>
		<p>1、.lazy:</p>
		<input type="text" v-model.lazy="value" @input="input" @keyup.enter='enter' @change="change" @blur="blur">
		<p>2、.number</p>
		<input type='text' v-model.number="number" >
		<p>3、.trim</p>
		<input v-model.trim="msg" >
		<p>4、.stop</p>
		<div>
			<div @click='outer'>
				<div @click='middle'>
					<button @click.stop='inner'>点击我</button>
				</div>
			</div>
		</div>
		<p>5、 .prevent</p>
		<a href.prevent='http://www.baidu.com'>a链接跳转</a>
		
		<p>6、.capture</p>
		<div>
			<div class='outeer' @click.capture='c_outer'>
				<div class='middle' @click.capture='c_middle'>
					<button @click.capture="c_inner">点击我</button>
				</div>
			</div>
		</div>
		<p>7、.once</p>
		<div @click.once='click'>点击我</div>
		
	</div>
</template>

<script>
	export default{
		data(){
			return{
				value:"yanyajun",
				number:'',
				msg:''
			}
		},
		mounted(){
			
		},
		methods:{
			click(){
				alert(0);
			},
			clickOwn(){
				alert(0);
			},
			input(){
				console.log(this.value);
			},
			enter(){
				console.log('enter事件：'+this.value);
			},
			change(){
				console.log("change事件:"+this.value);
			},
			blur(){
				console.log("blur事件："+this.value);
			},
			inner(){
				alert(0);
			},
			middle(){
				alert(1);
			},
			outer(){
				alert(2);
			},
			c_inner(){
				alert('c_inner');
			},
			c_middle(){
				alert('c_middle');
			},
			c_outer(){
				alert('c_outer');
			}
			
			
			
		}
	}
</script>

<style>
</style>
