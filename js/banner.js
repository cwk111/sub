   
   //轮播图
   var swiper = new Swiper('.swiper-container', {
	 
      slidesPerView: 1,
	  spaceBetween: 30,
      loop: true,
	  autoplay:true,
	  effect : 'cube',
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
//选项卡
$(function(){
		
		var btn2=$("#Sellers-2-2>ul>li")
		var dan=$("#dan>.dan-1")
		btn2.mouseover(function(){
			$(this).removeClass().siblings().addClass("active2")
			dan.eq($(this).index()).show().siblings().hide()
		})	
	})
//图蒙版
	$("#Create-1-2>a").hover(
  function () {
    $(this).children(".mo").css("transform","translate(0,0)");
  },
  function () {
    $(this).children(".mo").css("transform","translate(0,100%)");
  }
);
//点击向上
$(function(){
	$(window).scroll(function(){
		var srcoll=$(document).scrollTop()
		if(srcoll>300){
			$("#rocket").show()
		}else{
				$("#rocket").hide()
		}
	})
	$("#rocket").click(function(){
			var b = setInterval(function(){
				var a = $(document).scrollTop()
				a-=30;
				$(document).scrollTop(a)
				if($(document).scrollTop()==0){
					clearInterval(b);
				}
			})
		})
})
//商品
$(function(){
	var _this=this
	$.ajax({
   type: "get",
   url: "../index.json",
   dataType:"json",
   success: function(data){
   		var data = data.data;
             var str="";
             for(var i=0;i<5;i++){
             	str+=`<li id="${data[i].id}">
						<img src="${data[i].imga}" />
						<a href="javascript:;" class="aa">${data[i].mame}</a>
						<p>¥${data[i].zhuo}元</p>
						<a href="Shopping.html" class="mai">立即购买</a>
						<a href="javascript:;"class="liao">了解详情</a>
					</li>`
             }
             $("#box").html(str)
      		var str1="";
      		
      		for(var a=5;a<13;a++){
      			str1+=`<li class="xiao" id="${data[a].id}" >
						<img src="${data[a].imga}" />
						<a href="javascript:;" class="aa">尼康 D750 单反机身 独立包装 尼康官方典范店北京</a>
						<p>¥${data[i].zhuo}元</p>
						<a href="Shopping.html" class="mai"style="margin-left:20px;">立即购买</a>
						<a href="javascript:;"class="liao"style="margin-left: 0;">了解详情</a>
					</li>`
      		}
      		$(".oname").html(str1)
      		
      		var btn=$("#Sellers-1>ul>li")
		    var oname=$(".oname")
		 btn.mouseover(function(){
			$(this).removeClass().siblings().addClass("active")
			var str2="";
			var num=$(this).index()
			if(num==0){
				for(var b=5;b<13;b++){
      			str2+=`<li class="xiao" id="${data[b].id}">
						<img src="${data[b].imga}" />
						<a href="javascript:;" class="aa">尼康 D750 单反机身 独立包装 尼康官方典范店北京</a>
						<p>¥${data[i].zhuo}元</p>
						<a href="Shopping.html" class="mai"style="margin-left:20px;">立即购买</a>
						<a href="details.html"class="liao"style="margin-left: 0;">了解详情</a>
					</li>`
      		}
				$(".oname").html(str2)
			}else if(num==1){
				var str3=""
				for(var c=13;c<21;c++){			
			
      			str3+=`<li class="xiao" id="${data[c].id}">
						<img src="${data[c].imga}" />
						<a href="javascript:;" class="aa">尼康 D750 单反机身 独立包装 尼康官方典范店北京</a>
						<p>¥${data[i].zhuo}元</p>
						<a  href="Shopping.html" class="mai"style="margin-left:20px;">立即购买</a>
						<a href="details.html"class="liao"style="margin-left: 0;">了解详情</a>
					</li>`
      		}
				$(".oname").html(str3)
			}else if(num==2){
				var str4=""
				for(var d=21;d<29;d++){				
      			str4+=`<li class="xiao" id="${data[d].id}">
						<img src="${data[d].imga}" />
						<a href="javascript:;" class="aa">尼康 D750 单反机身 独立包装 尼康官方典范店北京</a>
						<p>¥${data[i].zhuo}元</p>
						<a href="Shopping.html" class="mai"style="margin-left:20px;">立即购买</a>
						<a href="details.html"class="liao"style="margin-left: 0;">了解详情</a>
					</li>`
      		}
				$(".oname").html(str4)
			}else if(num==3){
				var str5=""
				for(var e=29;e<37;e++){				
      			str5+=`<li class="xiao" id="${data[e].id}">
						<img src="${data[e].imga}" />
						<a href="javascript:;" class="aa">尼康 D750 单反机身 独立包装 尼康官方典范店北京</a>
						<p>¥${data[i].zhuo}元</p>
						<a href="Shopping.html" class="mai"style="margin-left:20px;">立即购买</a>
						<a href="details.html"class="liao"style="margin-left: 0;">了解详情</a>
					</li>`
      		}
				$(".oname").html(str5)
			}else if(num==4){
				var str6=""
				for(var f=37;f<45;f++){				
      			str6+=`<li class="xiao" id="${data[f].id}">
						<img src="${data[f].imga}" />
						<a href="javascript:;" class="aa">尼康 D750 单反机身 独立包装 尼康官方典范店北京</a>
						<p>¥${data[i].zhuo}元</p>
						<a href="Shopping.html" class="mai"style="margin-left:20px;">立即购买</a>
						<a href="details.html"class="liao"style="margin-left: 0;">了解详情</a>
					</li>`
      		}
				$(".oname").html(str6)
			}else if(num==5){
				var str7=""
				for(var g=45;g<53;g++){				
      			str7+=`<li class="xiao" id="${data[g].id}">
						<img src="${data[g].imga}" />
						<a href="javascript:;" class="aa">尼康 D750 单反机身 独立包装 尼康官方典范店北京</a>
						<p>¥${data[i].zhuo}元</p>
						<a href="#"class="mai"style="margin-left:20px;">立即购买</a>
						<a href="details.html"class="liao"style="margin-left: 0;">了解详情</a>
					</li>`
      		}
				$(".oname").html(str7)
			}else if(num==6){
				var str8=""
				for(var h=53;h<61;h++){				
      			str8+=`<li class="xiao" id="${data[h].id}">
						<a href="detaails.html"><img src="${data[h].imga}" /></a>
						<a href="javascript:;" class="aa">尼康 D750 单反机身 独立包装 尼康官方典范店北京</a>
						<p>¥${data[i].zhuo}元</p>
						<a href="#"class="mai"style="margin-left:20px;">立即购买</a>
						<a href="details.html"class="liao"style="margin-left: 0;">了解详情</a>
					</li>`
      		}
				$(".oname").html(str8)
			}
			//cookie

		})
		 
		 
		 //右边选项卡
		 var btn2=$("#Sellers-2-2>ul>li")
		var dan=$("#dan>.dan-1")
		var stt="";
		for(var p=0;p<9;p++){
			stt+=`<a href="details.html">${data[p].mame}</a>`
		}
		$(".dan-1>ul").html(stt)
		btn2.mouseover(function(){
			$(this).removeClass().siblings().addClass("active2")
			var num=$(this).index()
			if(num==0){
				var stt1="";
		for(var l=0;l<9;l++){
			stt1+=`<a href="details.html">${data[l].mame}</a>`
							}
		$(".dan-1>ul").html(stt1)
			}else if(num==1){
				var stt2=""
				for(var u=9;u<18;u++){
			stt2+=`<a href="details.html">${data[u].mame}</a>`
							}
					$(".dan-1>ul").html(stt2)
			}else if(num==2){
				var stt3="";
				for(var m=18;m<27;m++){
			stt3+=`<a href="details.html">${data[m].mame}</a>`
							}
					$(".dan-1>ul").html(stt3)
			}
		})	
		 
		 //location	
		var liao=$(".liao")
		var _this=this
		$(".aa").click(function(){
					var id = $(this).parent().attr("id");
					location.href = "details.html?"+id;
					
		})
		$(".liao").click(function(){
					var id = $(this).parent().attr("id");
					location.href = "details.html?"+id;
		})
		var a = 0;
		$(".mai").click(function(){
			var id = $(this).parent().attr("id");
			a++;
			localStorage.setItem(id,a);
		})
		
   }
})
	})
//楼层
$(function() {
	var list = {
		item:$(".floor-item"),
		ul:$("#btn"),
		aLi:$("#btn>li"),
		iH:$(window).height(),		//可视区高度
		init:function(){
			var _this = this;
			$(document).scroll(function(){	//滚动条事件
				var scroll = $(document).scrollTop();
				if(scroll>680-_this.iH/2){	//当区域超过可视区一半的时候
					_this.ul.fadeIn();
				}else{
					_this.ul.fadeOut()
				}
				_this.item.each(function(i){
					var t = $(this).offset().top;
					var H = $(this).height();

					if((t<=_this.iH/2+scroll)&&(t+H>=_this.iH/2+scroll)){
						_this.aLi.eq(i).addClass('active').siblings().removeClass();
					}
				})

			})
			this.on();
		},
		on:function(){
			var _this = this;
			_this.aLi.click(function(){
				var index = $(this).index();
				var t = _this.item.eq(index).offset().top-_this.iH/2+10;
				$("html").stop(true).animate({
					scrollTop:t
				})
			})
		}
	}

	list.init();
});








 