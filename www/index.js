document.addEventListener('deviceready',onDeviceReady, false);
function onDeviceReady(){
hidefrontn();
ref = window.open('http://app.klikdieng.com', '_self','location=no,zoom=no,toolbar=no,hidden=no,hardwareback=no');
ref.addEventListener("loadstart", function() {
showspinner();
});
ref.addEventListener("loadstop", function() {
ref.show();
hidespinner();
});
navigator.app.overrideButton("menubutton", true);
document.addEventListener('menubutton', onMenuKeyDown, false);
}
function showspinner(){window.plugins.spinnerDialog.show(null, "loading bentar..");}
function hidespinner(){window.plugins.spinnerDialog.hide(); }
function onMenuKeyDown(){$('#menubot').show();}
function hidefrontn(){$('.listening').hide();}


