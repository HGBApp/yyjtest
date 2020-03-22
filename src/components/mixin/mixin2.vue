<template>
	<div>
		<button @click='toggleShow'>点击2</button>
		<span v-if="isshowing">显示2</span>
	</div>
	
</template>

<script>
	import {myMixin} from '../../utils/mixins.js'
	export default{
		mixins:[myMixin],
		
	}
</script>

<style>
</style>
