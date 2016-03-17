document.addEventListener('deviceready',onDeviceReady, false);
function onDeviceReady(){
var ref = window.open('http://app.klikdieng.com', '_self','location=no,zoom=no,toolbar=no,hidden=yes,hardwareback=no');
ref.addEventListener("loadstart", function() {
showspinner();
});
ref.addEventListener("loadstop", function() {
ref.show();
hidespinner();
ref.addEventListener("menubutton",function(){console.log("The menu was clicked...");});
});

};
function showspinner(){window.plugins.spinnerDialog.show(null, "loading bentar..");}
function hidespinner(){window.plugins.spinnerDialog.hide(); }


