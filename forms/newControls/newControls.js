drpdown.onclick = function(i) {
    if (typeof(i) == "object") {
        return;
    }
    NSB.MsgBox(i + " Drowdown works" );
};


Checkbox1.onchange = function() {
    let response = "Checkbox works";
    for (i = 0; i <= Checkbox1.length - 1; i++) {
        if (Checkbox1.getValue(i)) {
            response == response;
        }
    }
    NSB.MsgBox(response);
};




slt.onchange=function(){
    NSB.MsgBox("Choice is " + slt.value);
};



Navs1.onclick = function(i) {
  if (typeof i == "object") return;
  NSB.MsgBox("Item clicked: " + Navs1.value);
};
