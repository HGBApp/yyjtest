<template>
	<div>
		<span>后备内容:</span>
		<submitbutton>save</submitbutton>
		<p>具名插槽</p>
		<baselayout>
			<template v-slot:header>
			    <h1>Here might be a page title</h1>
			  </template>
			  <p>A paragraph for the main content.</p>
			    <p>And another one.</p>
			  
			    <template>
			      <p>Here's some contact info</p>
			    </template>
		</baselayout>
		
	</div>
</template>

<script>
	import submitbutton from '../../components/submitButton'
	import baselayout from '../../components/slot/base-layout'
	export default{
		components:{
			submitbutton,
			baselayout
		}
	}
</script>

<style>
</style>
