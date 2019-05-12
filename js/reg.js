function Register(options){
    this.tel = options.tel;
    this.pass = options.pass;
    this.pass2 = options.pass2;
    this.land = options.land;
    this.isTelOk = false;
    this.isPassOk = false;
    this.isPass2Ok = false;
    this.insertUrl = "./../php/reg.php";

    this.regTest();
}
Register.prototype.regTest = function(){
    var that = this;

    var telReg = /^1(3|4|5|7|8)\d{9}$/;
    this.tel.onkeyup = function(){
        if(telReg.test(that.tel.value)){
            that.isTelOk = true;
            this.nextElementSibling.innerHTML = "";
        }else{
            that.isTelOk = false;
            this.nextElementSibling.innerHTML = "* 请输入11位手机号码";
        }
    };
    
    var passReg = /^[a-zA-Z0-9]{6,10}$/;
    this.pass.onkeyup = function(){
        if(passReg.test(that.pass.value)){
            that.isPassOk = true;
            this.nextElementSibling.innerHTML = "";
        }else{
            that.isPassOk = false;
            this.nextElementSibling.innerHTML = "* 数字英文6-10位";
        }
    };

    this.pass2.onkeyup = function(){
        if(that.pass.value == that.pass2.value){
            that.isPass2Ok = true;
            this.nextElementSibling.innerHTML = "";
        }else{
            that.isPass2Ok = false;
            this.nextElementSibling.innerHTML = "* 两次输入密码不同";
        }
    };

    this.land.onclick = function(){
        if (that.isTelOk && that.isPassOk && that.isPass2Ok) {
            that.regSuccess();
        } else {
            alert("* 以上输入有误");
        }
    }
}
Register.prototype.regSuccess = function(){
    var that = this;
    // console.log(this.insertUrl)
    ajaxPost(this.insertUrl,{
        tel:this.tel.value,
        pass:this.pass.value
    }).then(function(res){
        that.res = JSON.parse(res);
        if(that.res.code === 0){
            alert("注册失败，错误信息为:"+that.res.msg)
        }else{
            that.tel.value = that.pass.value = that.pass2.value = "";
            alert("注册成功");       
            // location.href = "./land.html";
        }
    })
}
new Register({
    tel: document.getElementById("tel"),
    pass: document.getElementById("pass"),
    pass2: document.getElementById("pass2"),
    land:document.getElementById("land")
});
class Reg{
    constructor(){
        this.tel = document.getElementById("tel");
        this.pass = document.getElementById("pass");
        this.land = document.getElementById("land");
        this.em = document.querySelector("em");
        this.init();
        this.getData();
    }
    init(){
        var that = this;
        this.land.onclick = function(){
            that.setData();
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
    setData(){
        if(this.data.length == 0){
            this.data.push({
                tel:this.tel.value,
                pass:this.pass.value,
                onoff:0
            })
            this.em.innerHTML = "注册成功";
            console.log(this.em)
            localStorage.setItem("data",JSON.stringify(this.data))
        }else{
            for(var i=0;i<this.data.length;i++){
                if(this.data[i].tel === this.tel.value){
                    this.em.innerHTML = "账号已注册";
                    console.log(this.em)
                    // location.href = "land.html";
                    return;
                }
            }
            this.data.push({
                tel:this.tel.value,
                pass:this.pass.value,
                onoff:0
            })
            this.em.innerHTML = "注册成功";
            localStorage.setItem("data",JSON.stringify(this.data))
            // location.href = "land.html";    

            
        }
    }
}
new Reg()


