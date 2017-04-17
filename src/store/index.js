import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
	//负责存储整个应用的状态数据
	state:{
		user_name:"yuxuemei"
	},
	//更改状态，本质就是用来处理数据的函数，其接收唯一参数值state
	mutations:{
		showUserName(state){
            console.log(state.user_name);
        }
	},
	//也可改变状态,通过触发mutation实现，可包含异步操作。其辅助函数是mapActions与mapMutations类似，也是绑定在组件的methods上的。直接触发的话，使用this.$store.dispatch(actionName)方法
	actions:{

	},
	//状态二次处理，可使用getters
	getters:{

	},
	//插件
	Plugins:{

	}
})

//必须要导出才能用
export default store