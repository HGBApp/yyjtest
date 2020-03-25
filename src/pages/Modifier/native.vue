<template>
   <div>
     <child-dom
      :foo="foo"
      :coo="coo"
      type='text'
      number='dfd'
      class='dfdf'
      @testChangeName='changeName'
     >
     </child-dom>
   </div>
</template>
<script>
   import childDom from "../../components/ChildDom";
   export default {
     data() {
        return {
          foo:"Hello, world",
          coo:"Hello,rui"
        }
     },
     methods:{
         changeName(val){
             this.foo=val
         },
         get(){
             console.log("ddd");
         }
     },
     components:{childDom},
   }
</script>