window.onload = function () {
    var oTxt1 = document.getElementById('txt1');
    var oTxt2 = document.getElementById('txt2');
    var oBtn = document.getElementById('btn1');

    oBtn.onclick = function () { 
        alert(parseInt(oTxt1.value) + parseInt(oTxt2.value));
    
    };

}