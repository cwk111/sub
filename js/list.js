
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
			  			<a href="javascript:;" class="aa">${data[i].mame}</a>
			  			<p>抢购价：<i>¥${data[i].zhuo}元</i></p>
			  			<button id="m">马上抢购</button>
			  			<div class="time-item">
						    <span id="day_show">0天</span>
						    <strong id="hour_show">0时</strong>
						    <strong id="minute_show">0分</strong>
						    <strong id="second_show">0秒</strong>
						</div>
			  		</li>`
   		}
   		$("#qg-2-1>ul").html(str)
   		 for(var i=0;i<data.length;i++){
		var _this=this
		$(".aa").click(function(){
			console.log(1)
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

var intDiff = parseInt(1000000);//倒计时总秒数量
function timer(intDiff){
    window.setInterval(function(){
    var day=0,
        hour=0,
        minute=0,
        second=0;//时间默认值        
    if(intDiff > 0){
        day = Math.floor(intDiff / (60 * 60 * 24));
        hour = Math.floor(intDiff / (60 * 60)) - (day * 24);
        minute = Math.floor(intDiff / 60) - (day * 24 * 60) - (hour * 60);
        second = Math.floor(intDiff) - (day * 24 * 60 * 60) - (hour * 60 * 60) - (minute * 60);
    }
    if (minute <= 9) minute = '0' + minute;
    if (second <= 9) second = '0' + second;
    $('#day_show').html(day+"天");
    $('#hour_show').html('<s id="h"></s>'+hour+'时');
    $('#minute_show').html('<s></s>'+minute+'分');
    $('#second_show').html('<s></s>'+second+'秒');
    intDiff--;
    }, 1000);
} 
$(function(){
    timer(intDiff);
}); 
