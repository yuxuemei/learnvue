<template>
  <div>
  	<span>文章id：{{$route.params.id}}</span>
  	<span>文章类型：{{$route.params.name}}</span>
  </div>
</template>
<script>
	export default {
	    data:function(){
		    return{
		    }
	    }
	}
</script>