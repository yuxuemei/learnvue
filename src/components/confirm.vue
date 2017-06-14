<template>
	 <div class="dialog is-center" v-if="isShow">
	 	 <div class="dialog-core">
	 	 	<div class="modal">
	 	 		<div class="modal-body" v-text="dialogText"></div>
	 	 		<div class="modal-footer">
		 	 		<button type="button" class="modal-button modal-button-cancel" @click="closeDialog">取消</button> 
		 	 		<button type="button" class="modal-button modal-button-confirm">确认</button>
	 	 		</div>
	 	 	</div>
	 	 </div>
	 	 <div class="dialog-mask" @click="closeDialog"></div>
	 </div>
</template>
<script>
	export default{
		data:function(){
            return {
            }
		},
		props:["dialogText","isShow"],
		methods:{
			closeDialog:function(){
                this.$emit('getChildMess',false);
			}
		}
	}
</script>
<style lang="less">
	.dialog{
		position: fixed;
	    left: 0;
	    top: 0;
	    right: 0;
	    bottom: 0;
	    z-index: 9900;
	    display: flex;
	}
	.is-center{
        -webkit-box-pack: center;
	    -webkit-justify-content: center;
	    -moz-box-pack: center;
	    -ms-flex-pack: center;
	    justify-content: center;
	    -webkit-box-align: center;
	    -webkit-align-items: center;
	    -moz-box-align: center;
	    -ms-flex-align: center;
	    align-items: center;
	}
	.dialog-core{
		position: relative;
	    z-index: 9902;
	    display: flex;
	    align-items: center;
	    justify-content: center;
	    width: 100%;
	}
	.modal{
		width: 70%;
	    word-wrap: break-word;
	    font-size: 0.28rem;
	    color: #666;
	    line-height: 1.5;
	    text-align: center;
	    border-radius: 0.06rem;
	    background-color: #fafafa;
	}
	.modal-body{
		font-size: 0.28rem;
        padding: 0.32rem;
	}
	.dialog-mask{
        position: absolute;
	    top: 0;
	    right: 0;
	    left: 0;
	    bottom: 0;
	    z-index: 9901;
	    background-color: rgba(0, 0, 0, .4)
	}
	.modal-footer{
		border-top: 1px solid #ccc;
        display: flex;
	}
	.modal-button{
        outline: none;
	    border: none;
	    font-size: inherit;
	    background-color: inherit;
	    padding: 0.2rem 0;
	    -webkit-box-flex: 1;
	    -webkit-flex: 1;
	    -moz-box-flex: 1;
	    -ms-flex: 1;
	    flex: 1;
	    display: block;
	}
	.modal-button-cancel{
		border-right: 1px solid #ccc;
        color: #666;
	}
	.modal-button-confirm{
		color: #ff5e7a;
	}
</style>