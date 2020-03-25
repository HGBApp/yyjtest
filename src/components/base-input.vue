<template>
  <div>
      我是孙子组件
      <label>
          <input :value='value' @input='$emit("input",$event.target.value)'>
          {{this.$attrs}}
          <button @click="$emit('testChangeName','kkkk')">改变值</button>
      </label>
  </div>
</template>

<script>
export default {
    data(){
        return{
            value:'000'
        }
    },
    methods:{
      
    }

}
</script>

<style>

</style>