<template>
  <div>
      <div v-tip="abc" @click='click'>鼠标移入</div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            abc:'哈哈哈'
        }
    },
    methods:{
        click(){
            this.abc='dfd'
        }
    },

    directives:{
        tip:{
             bind:function(el,binding){
               console.log("bind:"+el);
            },
            inserted:function(el,binding){
                console.log("inserted"+el);
                 var box=document.createElement('div');
                 box.style.display='none'
                 box.setAttribute('class','newClass')
                 box.append(binding.value);
                 el.appendChild(box);
                 el.onmouseover=function(){
                    box.style.display='block'
                 }
                  el.onmouseleave=function(){
                      box.style.display='none'
                  }
            },
            update:function(el,binding){
                console.log("update:"+el);
            },
            componentUpdated(el,binding){
                console.log("componentUpdated:"+el);
            },
            unbind:function(el,binding){
                console.log("unbind:"+el);
            }
        }
    }

}
</script>

<style>
.newClass{
    border: 1px solid #ccc;
    border-radius: 4px;
    text-align: center;
    line-height: 40px;
    padding: 2px 20px;
}
</style>