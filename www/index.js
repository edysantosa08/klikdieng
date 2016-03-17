document.addEventListener('deviceready',onDeviceReady, false);
function onDeviceReady(){
var klikdieng = window.open('http://app.klikdieng.com', '_blank','location=no,zoom=no,toolbar=no,hidden=yes');
klikdieng.addEventListener("loadstart", function() {
showspinner();
});
klikdieng.addEventListener("loadstop", function() {
klikdieng.show();
hidespinner();
klikdieng.executeScript({ file: "ext.js" });
});
};
function showspinner(){window.plugins.spinnerDialog.show(null, "bentar ya beb");}
function hidespinner(){window.plugins.spinnerDialog.hide(); }
