 $.ajax({
        url:'../sh.json',
        type:'post',
        asyac:true,
        success:function(data){
            
            console.log(data);
//获取三个下拉框对象
var province=document.querySelector('[name="province"]')
var city=document.querySelector('[name="city"]')
var area=document.querySelector('[name="area"]')

addProvince()
//打开页面时，加载省份
function addProvince(){
    //遍历数组中的省份对象
    for(var i in data){
        //给省份下拉框添加省份选项
        province.add(new Option(data[i].name,data[i].name))
    }
}

//给省份绑定change事件,当省份选项发生变化时，获取对应的城市
province.onchange=function(){
    //获取当前被选中的省份
    var provinceValue=this.value
    //清空当前城市
    city.options.length=1
    //清空前面区域
    area.options.length=1
    //遍历数组
    for(var i in data){
        //判断被选中的省份是否等于遍历出来的省份
        if(data[i].name===provinceValue){
            //如果条件满足，那么就遍历该省份对应的城市
            for(var j in data[i].cityList){
                //给城市的下拉框添加属性
                city.add(new Option(data[i].cityList[j].name,data[i].cityList[j].name))
            }
        }
    }
}

//给城市绑定change事件
city.onchange=function(){
    //获取当前被选中的省份
    var provinceValue=province.value
    //获取当前被选中的城市
    var cityValue=this.value
    area.options.length=1
    //遍历数组对象
    for(var i in data){
        //判断被选中的省份是否等于遍历出来的省份
        if(data[i].name===provinceValue){
            //如果条件满足，那么就遍历该省份对应的城市
            for(var j in data[i].cityList){
                //判断城市
                if(data[i].cityList[j].name===cityValue){
                    //遍历对应的区
                    for(var z in data[i].cityList[j].areaList){
                        var qu=data[i].cityList[j].areaList[z]
                        area.add(new Option(qu,qu))
                    }
                }
            }
        }
    }
}

        }
    })

