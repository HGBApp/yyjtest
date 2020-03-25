<template>
  <div>
      <mychild :show.sync='show'></mychild>
      <button @click='show=!show'>toggle</button>
  </div>
</template>

<script>
import mychild from '../../components/mychild'
export default {
    data(){
        return{
            show:'true'
        }
       
    },
    components:{
        mychild
    }
}
</script>

<style>

</style>