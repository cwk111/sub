$(function(){
	var _this=this
	var str="";
	$.ajax({
   type: "get",
   url: "../index.json",
   dataType:"json",
   success: function(data){
   		var data = data.data;
   		var len=data.length
   		function page(n){
   		var str="";
   		for(var i=(n-1)*12;i<Math.min(len,n*12);i++){
   			str+=`<li id="${data[i].id}">
						<img src="${data[i].imga}" />
						<a href="#" class="aa">${data[i].mame}</a>
						<p style="width: 120px;float: left;margin-top: 10px;display: block;color: #B82209;">¥${data[i].zhuo}元</p><a href="#"style="width: 100px;float: left;margin-top: 10px;">评论(9)</a>
						<div>
						<button>购买</button>
						<button>收藏</button>
						<button>对比</button>
						</div>
					</li>`
   		}
   		$("#x-2-3>ul").html(str)
   		 for(var i=0;i<data.length;i++){
		var _this=this
		$(".aa").click(function(){
					var id = $(this).parent().attr("id");
					location.href = "details.html?"+id;
		})
	}      
			}

   		layui.use('laypage', function(){
				  var laypage = layui.laypage;
				  
				  //执行一个laypage实例
				  laypage.render({
				    elem: 'btnList', //注意，这里的 test1 是 ID，不用加 # 号
				    count: len ,//数据总数，从服务端得到
				    limit:5,
				    groups:4,
				    theme:"red",
				    jump:function(obj){
				    	page(obj.curr)
				    }
				  });
			});
   		
   }
   
  })
	})