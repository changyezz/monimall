var json = [{
                "src":"images/dd1.jpg",
                "name":"进口头层牛皮",
                "deta":"真皮沙发",
                "price":"￥2222元",
                "id":"1"
            },{
                "src":"images/dd2.jpg",
                "name":"进口头层牛皮",
                "deta":"真皮沙发",
                "price":"￥2222元",
                "id":"2"

            }]


var str = ""
for(var i=0;i<json.length;i++){
    // ${json[i].src}

    // str.innHTML = 


    str += `<li class="dd">
                <a>
                    <img src="${json[i].src}">
                    <p>${json[i].name}</p>
                    <span>${json[i].deta}</span>
                    <b>${json[i].price}</b>
                </a>
            </li>`
}

$(".ul").append(str);

// div.addEventListener("click",function(eve){
//     var e = .....................
//     var target = ................

// })