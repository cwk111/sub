<?php
header('content-type:text/html;charset=utf-8');
//连接数据库
$link=mysqli_connect('localhost','root','','abc');
//设置编码
mysqli_set_charset($link,'utf8');
$u=$_POST['user'];
$s=$_POST['youxing'];
$p=$_POST['pass'];
$pr=$_POST['quren'];

//先查询该账号是否被注册过
//SQL语句
$sql="select * from login where name='$u'";
//执行SQL
$result=mysqli_query($link,$sql);
//判断
if(mysqli_fetch_row($result)){
    echo "该数据已存在，请重新填写";
}else{
    //SQL语句2
    $sql2="insert into login(yonghu,youx,pass,quepass) values('$u','$s','$p',$pr)";
    //执行
    mysqli_query($link,$sql2);
    echo "注册成功";
}


?>