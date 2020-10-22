

			function Zoom(imgbox, hoverbox, l, t, x, y, h_w, h_h, showbox) {
    var moveX = x - l - (h_w / 2);
    //鼠标区域距离
    var moveY = y - t - (h_h / 2);
    //鼠标区域距离
    if (moveX < 0) {
        moveX = 0
    }
    if (moveY < 0) {
        moveY = 0
    }
    if (moveX > imgbox.width() - h_w) {
        moveX = imgbox.width() - h_w
    }
    if (moveY > imgbox.height() - h_h) {
        moveY = imgbox.height() - h_h
    }
    //判断鼠标使其不跑出图片框
    var zoomX = showbox.width() / imgbox.width()
    //求图片比例
    var zoomY = showbox.height() / imgbox.height()

    showbox.css({
        left: -(moveX * zoomX),
        top: -(moveY * zoomY)
    })
    hoverbox.css({
        left: moveX,
        top: moveY
    })
    //确定位置

}

function Zoomhover(imgbox, hoverbox, showbox) {
    var l = imgbox.offset().left;
    var t = imgbox.offset().top;
    var w = hoverbox.width();
    var h = hoverbox.height();
    var time;
    $(".probox img,.hoverbox").mouseover(function(e) {
        var x = e.pageX;
        var y = e.pageY;
        $(".hoverbox,.showbox").show();
        hoverbox.css("opacity", "0.3")
        time = setTimeout(function() {
            Zoom(imgbox, hoverbox, l, t, x, y, w, h, showbox)
        }, 1)
    }).mousemove(function(e) {
        var x = e.pageX;
        var y = e.pageY;
        time = setTimeout(function() {
            Zoom(imgbox, hoverbox, l, t, x, y, w, h, showbox)
        }, 1)
    }).mouseout(function() {
        showbox.parent().hide()
        hoverbox.hide();
    })
}

   var num = location.href.split("?")[1]
   var num = num -1;
$(function(){
	var _this=this
	var str="";
	$.ajax({
   type: "get",
   url: "../index.json",
   dataType:"json",
   success: function(data){
   		var data = data.data;
   			str=`<div id="details-1">
				<li>当前页面 :</li>
				<li><a href="index.html">首页 ></a></li>
				<li>${data[num].mame}</li>
			</div>
			<div id="details-2">
				<p>${data[num].mame}</p>
				<p>${data[num].zuoo}</p>
			</div>
			<div id="details-3">
				<div class="imgbox">
    <div class="probox">
        <img src="${data[num].imga}" alt="">
        <div class="hoverbox"></div>
    </div>
    <div class="showbox">
        <img src="${data[num].imga}" alt="">
    </div>
		</div>
				<div id="xx">
					<img src="${data[num].imga}"  />
					<img src="${data[num].imgb}" />
					<img src="${data[num].imgc}" />
				</div>
			</div>
			
			<div id="details-4">
				<p>卓美价格：<i style="color: #BD2313;">¥${data[num].zhuo}元</i></p>
				<p>商品货号：${data[num].shang}</p>
				<p style="font-size: 20px;color: #B82803;">促销价：${data[num].zuo}</p>
				<p>商品品牌：${data[num].shangg}</p>
				<p>累计售出：${data[num].lei}</p>
				<p>超级优惠:</p>
				<div><input type="checkbox" /><a href="#">${data[num].chaoa}</a></div>
				<div><input type="checkbox" /><a href="#"> ${data[num].chaob}</a></div>
				<div id="taochan"><p>优惠套装:</p><a href="#">官方标配</a><a href="#">优惠套餐1</a><a href="#">优惠套餐2</a></div>
				<p style="color: #B82803;width: 200px;margin-top: 8px;">本店不可使用红包</p>
				<p>原价:<i style="color: #BD2313;">${data[num].zhuo}</i></p>
				<div id="gou"style="height: 70px;">
					<a href="Shopping.html" class="li">立马购买</a>
					<a href="Shopping.html"><i class="iconfont bb"style="color: #FFFFFF;margin-right: 5px;font-size: 17px;">&#xe601;</i>加入购物车</a>
				</div>
			</div>
			<div id="miao">
				<div>
					<h3 id="Create-1-1">商品描述</h3>
				</div>				
					<img src="${data[num].imgb}" />
					<img src="${data[num].imgc}" />				
			</div>`
			$("#details").html(str)
			$("#xx>img").each(function(){
			$(this).mouseover(function(){
				var a=$(this).attr("src");
				$(".probox>img").attr("src",a)
				$(".showbox>img").attr("src",a)
			})
		})
 			Zoomhover($(".probox img"), $(".hoverbox"), $(".showbox img"));
		}
	})	
	})
