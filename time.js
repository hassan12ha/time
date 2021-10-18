function UpdateData() {
    var date = new Date();
    var setetime = document.getElementById("setTime");
    setetime.innerHTML = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    var setdate = document.getElementById("setDate");
    setdate.innerHTML = date.getDate()+"-"+parseInt(date.getMonth()+1)+"-"+date.getFullYear();
}
setInterval(UpdateData,100);
onload = UpdateData();

function getColor(){
    //fi input color id makikhdimch fiha likikhdim howa l class
    var getColor = document.querySelector(".setcolor").value;
    localStorage.setItem("Color",getColor);
    document.getElementById("date").style.background = localStorage.getItem("Color");
    }
    
    function setColor(){
    //fi input color id makikhdimch fiha likikhdim howa l class
    document.getElementById("date").style.background = localStorage.getItem("Color");
    }
    
    setInterval(setColor,100);