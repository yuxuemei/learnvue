<template>
	<div>
		<form action="" class="center">
			<input v-model="dir1" v-my-directive1="dir1"/>
　　　　    <input v-model="dir2" v-my-directive2="dir2"/>
            <input v-focus type="text" />
		</form>
	</div>
</template>
<script>
    export default {
        data(){
            return {
　　　　　　　　　dir1:'qqqqq1111',
　　　　　　　　　dir2:'',
                  username:""
　　　　　　　}
        },
        directives:{
　　　　　　　//直接绑定函数，作用等同于update,不做准备工作和扫尾工作
            myDirective1(val){
                //console.log(val)
            },
　　　　　　myDirective2:{
　　　　　　　　　　bind(){
　　　　　　　　　　　　　//第一次绑定到元素的准备工作
　　　　　　　　　　},
　　　　　　　　　　update(val,old){
　　　　　　　　　　　　//在绑定到元素后立即以初始值第一次调用，然后每次example2变化都会调用update
　　　　　　　　　　　　console.log(old.oldValue,old.value)
　　　　　　　　　　},　　
　　　　　　　　　　unbind(){
　　　　　　　　　　　　//销毁前的清理工作
　　　　　　　　　　}
　　　　　　　}
        }
    }
</script>   