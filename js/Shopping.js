




$(function(){
	var _this=this
	$.ajax({
   type: "get",
   url: "../index.json",
   dataType:"json",
   success: function(data){
   		var data = data.data;
             var str="";
             for(var i=0;i<12;i++){
             	str+=`<li>
						<img src="${data[i].imga}" style="width: 100px;"height="100px"/>
						<a href="#">${data[i].mame}</a>
						<p>${data[i].zhuo}</p>
					</li>`
             }
             $("#tj>ul").html(str)  
             var str1="";
             for(var i=0;i<localStorage.length;i++){
             	var key = localStorage.key(i);
             	str1+=`<tr ${data[i].id}>
						<td style="width: 525px;">${data[i].mame}</td>
						<td style="width: 135px;color: #B82803;">${data[i].zhuo}</td>
						<td style="width: 120px;">
							<button class="jian">-</button>
							<input type="text"value="1" style="width: 30px;"/>
							<button class="jia">+</button>
						</td>
						<td style="width: 120px;color: #B82803;">${data[i].zhuo}</td>
						<td><a href="" class="shan">删除</a></td>
					</tr>`
             }
             $("#list").html(str1)
   
   $(".shan").click(function(){
   	var td = $(this).parent().attr("id");
   	　localStorage.removeItem(key)
   })
   $(".jia").click(function(){
   	  var num=$(this).prev().val() 
   	  var num1= $(this).parent().prev().html()
   	  num++;
   	  $(this).prev().val(num)
   	  $(this).parent().next().html(num1*num)
   	  
   })
   
   $(".jian").click(function(){
   	  var num=$(this).next().val() 
   	  var num1= $(this).parent().prev().html()
   	  console.log(num1)
   	  num--;
   	  if(num==0){
   	  	num=1
   	  }
   	  $(this).next().val(num)
   	  $(this).parent().next().html(num1*num)   	  
   })

           }
	})
})