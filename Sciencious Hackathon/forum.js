var str1 = `<div class="flexbox">
<div class="flexbox_account">
    <img src="accountCircle.png">
    User
</div>
<div class="flexbox_main">`

var str2 = `            </div>
<div class = "flex_like">
    <img src = "like.png"/>
    <img src="comment.png"/>
</div>
</div>`

function post(){
        let text1 = document.getElementById('textArea').value;
        let text2 = str1 + text1 + str2
        var flexcont = document.querySelector('#mainPage');
        flexcont.insertAdjacentHTML("afterbegin",text2);
        add();
}
function add(){
    let vis = document.getElementById("postMain").style.visibility;
    if(vis=="hidden"){
        document.getElementById("postMain").style.visibility = "visible";
    }else{
        document.getElementById("postMain").style.visibility = "hidden";
    }
}
