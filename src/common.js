export default{
	BASE_URL:'http://192.168.1.77:8080',
	//图片根目录
    IMG_BASEURL:"http://f.elnplus.com",
	getUser(){
        var userObj = localStorage.getItem("user");
        return JSON.parse(userObj);
    },
    getOrg(){
        ORGID = localStorage.getItem("orgId");
        if(ORGID){
            ORGID = "o="+ORGID;
            return ORGID;
        }else{
            return "";
        }
    },
    getToken(){
        tokenVal = localStorage.getItem("token");
        if(tokenVal){
            tokenVal = "t="+tokenVal;
            return tokenVal;
        }else{
            return "";
        }
    },
	pingUrl(url,newParam){
        if(url.indexOf("?") >= 0){
            if(url.substring(url.length-1,url.length) == "&"){
                url += newParam;
            }else{
                url += ("&"+newParam);
            }
        }else{
            url += ("?"+newParam); 
        }
        return url;
    },
    /**
     * @description 默认值控制
     * @param param 需要控制的默认参数
     * @param defaultVal 默认值
     * @author yuxuemei
     * @date 2016-08-05
     */
    defaultSet(param,defaultVal){
        if(param == undefined){
            param = defaultVal;
            return param;
        }else{
            return param;
        }
    },
    checkUrlHasParam(url,needToken){
        var user = this.getUser();
        if(user && user.currentOrg){
            var o = "o="+user.currentOrg.orgId;
            if(o){
                url = this.pingUrl(url,o);
            }
        }
        if(needToken){
            var t = this.getToken();
            if(t){
                url = this.pingUrl(url,t);
            }
        }
        return url;
    },
    publicRequest(type,url,remind,callback){
        var requestObject = new XMLHttpRequest();;
        requestObject.open(type,url);
        requestObject.onload=function(){
            var data = jQuery.parseJSON(requestObject.responseText);
	        //执行回调函数
	        if(callback){
	        	callback(data);
	        }
	        //弹出成功提示信息
	        if(remind){ 
	            alert(data.msg);
	        }
        }
        requestObject.send();
    },
    getDataComb(obj) {
        //提交类型，默认post
        var type = this.defaultSet(obj.type,"post");
        //是否需要提示：默认需要
        var remind = this.defaultSet(obj.needRemind,true);
        //是否需要TOKEN参数，默认需要
        var needToken = this.defaultSet(obj.needToken,true);
        //当前页数 默认0不翻页，需要翻页时给1
        var current = this.defaultSet(obj.current,0);
        //请求参数，默认为空
        var data = this.defaultSet(obj.data,"");
        //当前页大于0时才加上翻页参数
        if(current){
            //翻页参数 
            var pageParam = "pageNum="+current+"&pageSize="+pageSize;
            if(data){
                data = data + "&" + pageParam;
            }else{
                data = pageParam;
            }
        }
        var url = this.checkUrlHasParam(this.BASE_URL + obj.url + data,needToken);
        this.publicRequest(type,url,remind,obj.callback);
    }
}