<template>
  <div>
      <template v-for="(item,index) in message">
          <div :key="index">  {{item | farr}}</div>
      </template>
    
  </div>
</template>

<script>
export default {
    data(){
        return{
            message:[1,2,3,4]
        }
    },
    filters:{
        farr:function(value){
            if(value>2){
                return value
            }
         
        }
    }

}
</script>

<style>

</style>