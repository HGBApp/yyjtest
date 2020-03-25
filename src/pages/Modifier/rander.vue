

<script>
export default {
    render:function(h){
        var self=this;
        return h('div',[
            h('button',{
            'class':'vvv',
            on:{
                click:() =>{
                    alert(1);
                }
            }
            },'点击我')
        ])
    }
}
</script>

<style>

</style>