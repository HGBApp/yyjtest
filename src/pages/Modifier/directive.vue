<template>
  <div class='box'>
     <div class='div' v-for='(item,index) in list' :key='index' v-img='item.src'>

     </div>

  </div>

</template>

<script>
export default {
    directives:{
        img:{
            bind:function(el,binding){
                console.log(binding);
            },
            inserted:function(el,binding){
                var color=Math.floor(Math.random()*100000);
                el.style.backgroundColor='#'+color;
                var img=new Image();
                img.src=binding.value
                img.onload=function(){
                    el.style.backgroundImage='url('+binding.value+')'
                }

            }
        }
    },
    data(){
        return{
            list:[
                {src:'http://img4.imgtn.bdimg.com/it/u=2588111137,2818876915&fm=26&gp=0.jpg'},
                {src:'http://img4.imgtn.bdimg.com/it/u=3702648800,3967102116&fm=26&gp=0.jpg'},
                {src:'http://pic1.win4000.com/wallpaper/b/55597435bb036.jpg'}
            ]
        }
    }

}
</script>

<style>
.box{width:1200px;height:300px;display: flex;}
.div{width:300px;height:300px;}
</style>