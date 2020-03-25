<template>
   <div>
      <p>{{foo}}</p>
      <p>{{this.$attrs}}</p>
      <div>
          孙子组件：
           <base-input v-bind='$attrs' v-on='$listeners'></base-input>
      </div>
   
   </div>
</template>
<script>
import baseInput from './base-input'
export default {

 name:'child-dom',
 components:{
     baseInput
 },
  props:['foo','coo'],
inheritAttrs: false,
 created(){
     console.log(this.$attrs);
 }
 
}
</script>