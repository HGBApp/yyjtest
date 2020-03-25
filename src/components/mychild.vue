<template>
  <div v-if='show'>
      初始状态为true显示
      <button @click='close'>关闭</button>
  </div>
</template>

<script>
export default {
        props:['show'],
       data(){
           return{
              
           }
       },
    methods:{
     
        close(){
            console.log("guanbi");
            this.$emit('update:show',false)
        }
    }

}
</script>

<style>

</style>