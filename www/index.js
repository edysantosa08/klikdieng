var klikdieng
document.addEventListener('deviceready', this.onDeviceReady, false);
function onDeviceReady(){
klikdieng = window.open('http://app.klikdieng.com', '_blank', 'location=no','zoom=no','toolbar=no');
klikdieng.addEventListener("loadstart", function() {
klikdieng.hide();
window.plugins.spinnerDialog.show(null, "sabar..tunggu sebentar");
});
klikdieng.addEventListener("loadstop", function() {
window.plugins.spinnerDialog.hide();
klikdieng.show();
});
};


