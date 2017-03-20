<template>
  <div>
  	<h1 class="logo" v-text="title"></h1>
  	<ul class="list">
  		<li v-for="item in lists" v-text="item.title"></li>
  	</ul>
  </div>
</template>
<script>
	export default {
	    data:function(){
		    return{
		       title:"this is a todo list",
		       lists:[{
                  id:1,
                  title:"test title 1"
				},{
                  id:2,
                  title:"test title 2"
				},{
                  id:3,
                  title:"test title 3"
				}]
		    }
	    }
	}
</script>
<style>
.logo {color: red;}
.list {
  line-height: 2;
  li {border-bottom: 1px solid #ddd;}
}
</style>