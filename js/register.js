$(function(){
		$("#User").blur(function(){
			var _user=$("#User").val()
			var a=/\w{5,15}/.test(_user)
			if(a==false){
		User.value="你的输入有误"
	}
		})
		
		$("#youxiang").blur(function(){
			var _youxiang=$("#youxiang").val()
			var b=/^\w+@\w+\.(cn|com)$/.test(_youxiang)
			if(b==false){
		youxiang.value="你的输入有误"
	}
		})
		
		
		$("#iPassword").blur(function(){
			var Password=$("#Password").val()
			var _iPassword=$("#iPassword").val()
			if(_iPassword==Password){
			$("#iPassword").value=Password
			}else{
				iPassword.value="密码不同"
			}
		})
	})
	// $('#zc').click(function(){
		
	// })
