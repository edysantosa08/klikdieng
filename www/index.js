document.addEventListener('deviceready',onDeviceReady, false);
function onDeviceReady(){
var klikdieng = window.open('http://app.klikdieng.com', '_self','location=no,zoom=no,toolbar=no,hidden=yes,hardwareback=yes');
klikdieng.addEventListener("loadstart", function() {
showspinner();
});
klikdieng.addEventListener("loadstop", function() {
klikdieng.show();
hidespinner();
klikdieng.executeScript({ file: "ext.js" });
});
document.addEventListener("menubutton", onMenuKeyDown, false);
};
function showspinner(){window.plugins.spinnerDialog.show(null, "loading bentar..");}
function hidespinner(){window.plugins.spinnerDialog.hide(); }

function onMenuKeyDown(){console.log("The menu was clicked...");}
