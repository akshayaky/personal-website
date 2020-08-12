

window.onscroll = function() {navbarStick()};
window.onload = function() {changeBackground()}
navbar = document.getElementById("home");
navbarPos = navbar.offsetTop;
var i = 0;
function changetoUsername() {
    
    document.querySelector(".header-text > h1").innerHTML = "@akymaster";
    document.querySelector(".header-text").style.cursor = "move";
    
}

function changetoName() {
    
    document.querySelector(".header-text > h1").innerHTML = "Akshay V";
}

function changePos(e) {
    //console.log(e.clientX,e.clientY);
    document.querySelector(".header-text").style.left = e.clientX - 100 + "px";
    document.querySelector(".header-text").style.top = e.clientY - 50 + "px";
}



function navbarStick() {
    if (window.pageYOffset >= navbar.offsetTop + 1 && window.scrollY  > navbarPos * 0.90) {
        navbar.classList.add("stickToTop");
        
        // console.log(navbarPos,window.scrollY);
      } else {
        navbar.classList.remove("stickToTop");
        // console.log(navbarPos,window.scrollY);
      }
      //console.log(document.getElementById("home").offsetTop);

}


// form validation
function changeText(id, text) {
    document.querySelector(id).value = text;
    console.log(document.querySelector(id).value)
}
function validate(){
    changeText("#submitButton", "submitted");
    var name = document.querySelector("#name").value;
    var mobile = document.querySelector("#mobileno").value;
    var email = document.querySelector("#emailid").value;
    var city = document.querySelector("#city").value;
    var country = document.querySelector("#country").value;
    var data = {
        name : name,
        mobile : mobile,
        email : email,
        city : city,
        country : country
    };
    
    console.log(document.forms.length);
    const empty = "Field is empty";
    var  remark = "";
    for( var item in data){
        if(data.hasOwnProperty(item)){
            if(isEmpty(data[item])){
                remark = empty;
            }
            else{
                remark = "";
            }
            document.querySelector("#" + item + "Remark").innerHTML = remark;
        }
        
    }

    //validating name
    remark = document.querySelector("#nameRemark").innerHTML;
    if(containsNum(data.name))
    {
        remark  = "The name contains numbers";
    }
    else if(remark != empty){
        remark = "";
    }
    document.querySelector("#nameRemark").innerHTML = remark;
    
    //valiating mobile no.
    if(containsNotNum(data.mobile))
    {
        remark  = "The mobile contains non-number";
        document.querySelector("#mobileRemark").innerHTML = remark;
    }
    else if(numberOfDigits(data.mobile,10,"mobile")){
        
    }
    else if(remark != empty){
        remark = "";
    }

    //validating emailid
    if(!emailValidation(data.email))
    {
        remark  = "The email is not valid";
        document.querySelector("#emailRemark").innerHTML = remark;
    }
    
    
    
    
    return false;
}

function isEmpty(str){
    if(str == ""){
        return true;
    }
    return false;
}

function containsNum(str){
    return /\d/.test(str)
}

function containsNotNum(str){
    return /[^0-9]/.test(str)
}

function emailValidation(str) {
    //var th =  str.match(/[^A-Za-z0-9_][@]/)
    var th = /\S+@\S+\.\S+/.test(str);
    console.log(th)
    return th;
}
function numberOfDigits(item, number,str){
    var remark = "";
    if(item.length == 0)
        return 0;
    if(item.length != number){
        remark  = "needed " + number + " digits";
    }
    document.querySelector("#" + str + "Remark").innerHTML  = remark;
    return 1;
}

// for changing backgrtound color in Contact me tab

function changeBackground() {
    var className = document.getElementsByClassName("complete");
    if(className != null) {
        document.querySelector("body").style.backgroundColor = "#2c3531";
        //console.log(document.querySelector("body").style.backgroundColor);
    }
        
}