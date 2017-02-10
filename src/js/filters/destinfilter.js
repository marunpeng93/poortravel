app.filter("destinFilter",function(){
	return function(data,cnname,type){
		if(angular.isArray(data)&&angular.isString(cnname)){
			for(var i = 0;i < data.length;i++){
				if(data[i].cnname == cnname){
					return data[i][type]
				}
			}
		}else{
			return data;
		}
	}
})