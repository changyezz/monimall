class Land{
    constructor(){
        this.tel = document.getElementById("tel");
        this.pass = document.getElementById("pass");
        this.denglu = document.querySelector(".denglu");

        this.init();
        this.getData();
    }
    init(){
        var that = this;
        this.denglu.onclick = function(){
            that.yanzheng();
        }
    }
    getData(){
        this.data = localStorage.getItem("data")
    
        if(this.data == null){
            this.data = [];
        }else{
            this.data = JSON.parse(this.data)
        }
    }
    yanzheng(){
        for(var i=0;i<this.data.length;i++){
            if(this.data[i].tel == this.tel.value && this.data[i].pass == this.pass.value){
                // console.log(this.data[i].tel == this.tel.value,this.data[i].pass == this.pass.value)
                this.data[i].onoff = 1;
                localStorage.setItem("data",JSON.stringify(this.data));
                setCookie("msg",this.tel.value)
                setTimeout(()=>{
                    location.href = "index.html";
                },3000)
                return;
                // location.href = "./index.html";
                // return;
            }
        }
        // alert("用户名密码不符")
    }

}
new Land();