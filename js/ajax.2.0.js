function ajaxGet(url,data){
    data = data ? data : {};
    var str = ""
    for(var i in data){
        str = str + i + "=" + data[i] + "&";
    }
    var d = new Date();
    url = url + "?" + str + "_qft=" + d.getTime();

    var p = new Promise(function(success,error){
        var ajax = new XMLHttpRequest();
        ajax.open("get",url);
        ajax.onreadystatechange = function(){
            if(ajax.readyState == 4 && ajax.status == 200){
                success(ajax.responseText)
            }else if(ajax.readyState == 4 && ajax.status != 200){
                error(ajax.status)
            }
        }
        ajax.send(null);
    })
    return p;
}

function ajaxPost(url,data){
    data = data ? data : {};
    var str = "";
    for(var i in data){
        str = str + i + "=" + data[i] + "&";
    }
    var p = new Promise(function(success,error){
        var ajax = new XMLHttpRequest();
        ajax.open("post",url);
        ajax.onreadystatechange = function(){
            if(ajax.readyState == 4 && ajax.status == 200){
                success(ajax.responseText)
                console.log(1);
            }else if(ajax.readyState == 4 && ajax.status != 200){
                error(ajax.status)
                console.log(2);

            }
        }
        ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
        ajax.send(str.slice(0,str.length-1));
        // console.log(str.slice(0,str.length-1))
        console.log(3);
        console.log(ajax.readyState);

    })
    return p;
}



// ajaxGet(url,{}).then(function(){
// },function(){
// })


// function jsonp(url,callback,data){
//     var str = ""
//     for(var i in data){
//         str = str + i + "=" + data[i] + "&";
//     }
//     var d = new Date();
//     url = url + "?" + str + "_qft=" + d.getTime()

//     var script = document.createElement("script");
//     script.src = url;
//     document.body.appendChild(script)

//     window[data[data.column]] = function(res){
//         callback(res)
//     }
// }

function jsonp(url,callback,data){
    var str = "";
    for(var i in data){
        str += i + "=" + data[i] + "&";
    }
    var d = new Date();
    url = url +"?"+str+"_lyt="+d.getTime();

    var script = document.createElement("script")
    script.src = url;
    document.body.appendChild(script)

    window[data[data.column]] = function(res){
        callback(res)
    }
}

