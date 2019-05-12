<?php
    // 接收到的信息
    $t = @$_REQUEST["tel"];
    $p = @$_REQUEST["pass"];
    // echo $t;
    // echo $p;
    // 连接mysql
    $link = @mysql_connect("localhost:3307","root","123456");
    if(!$link){
        echo '{"code":0,"msg":"'.mysql_error().'"}';
    }
    // 选择数据库
    $db = @mysql_select_db("test");
    if(!$db){
        echo '{"code":0,"msg":"'.mysql_error().'"}';
    }
    // 设置字符集
    $utf = @mysql_query("set names utf8");
    if(!$utf){
        echo '{"code":0,"msg":"'.mysql_error().'"}';
    }

    $sql = "SELECT * FROM zhuce WHERE tel = '$t'";//检测数据库是否有对应的username和password的sql
    $result = mysql_query($sql);//执行sql
    $rows=mysql_num_rows($result);//返回一个数值
    if ($rows) {
        echo '{"code":0,"msg":"此账号已注册"}';
        exit;
    } else {
        $q = @mysql_query('INSERT zhuce (tel,pass) VALUES("'.$t.'","'.$p.'")');
        if($q){
            echo select();
        }else{
            echo '{"code":0,"msg":"'.mysql_error().'"}';
        }
    }
    function select(){
        $data = mysql_query("SELECT * FROM zhuce");
        $str = "";
        while($arr = mysql_fetch_assoc($data)){
            $str = $str . json_encode($arr) . ",";
        }
        return "[".substr($str,0,-1)."]";
    }
?>










