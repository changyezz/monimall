$("#top").load("style.html #t",function(){
    let msg = getCookie("msg");

    var top_l = document.querySelector(".top-l")
    // console.log(msg)
    if(msg == ""){
        top_l.innerHTML = `<a href="land.html">欢迎光临本店请登录</a><span>|</span><a href="reg.html">免费注册</a>`
    }else{
         top_l.innerHTML =`欢迎<span class="yonghu">${msg}</span>登录,<b id="exit">退出</b>`;
         var exit = document.getElementById("exit");
         out();
    }
    function out(){
        exit.onclick = function(){
            removeCookie("msg");
            location.reload()

        }
    }
})
// $("#top").load("style.html #t")
$("header").load("style.html header")
$(".footer-t").load("style.html .footer-t")
$("footer").load("style.html footer")
$(".dibu").load("style.html .dibu")

// if(){

// }




// class Index{
//     constructor(){
//         this.top_l = document.querySelectorAll("top-l");
//         this.span = document.querySelector(".yonghu");
//         this.exit = document.getElementById("exit")
//         this.getData()
//         this.addEvent();
//     }
//     getData(){
//         this.data = localStorage.getItem("data");
//         // 读取localStorage，如果有就解析成数组，如果没有就给一个空数组，方便操作
//         if(this.data == null){
//             this.data = [];
//         }else{
//             this.data = JSON.parse(this.data)
//         }
//         this.panduan()
//     }
//     panduan(){
//         for(var i=0;i<this.data.length;i++){
//             if(this.data[i].onoff == 1){
//                 this.top_l[0].style.display = "none";
//                 this.top_l[1].style.display = "block";
//                 this.span.innerHTML = this.data[i].user;
//                 this.successUser = this.data[i].user;
//                 return;
//             }
//         }
//         this.top_l[0].style.display = "block";
//         this.top_l[1].style.display = "none";
//         this.span.innerHTML = "";
//     }
//     addEvent(){
//         var that = this;
//         this.exit.onclick = function(){
//             if(that.successUser){
//                 for(var i=0;i<that.data.length;i++){
//                     if(that.data[i].user === that.successUser){
//                         that.data[i].onoff = 0;
//                         localStorage.setItem("data",JSON.stringify(that.abc))
//                         that.panduan();
//                     }
//                 }
//             }
//         }
//     }
// }

// new Index();




