document.addEventListener('deviceready', this.onDeviceReady, false);
function onDeviceReady(){
var klikdieng = window.open('http://app.klikdieng.com', '_blank','location=no,zoom=no,toolbar=no,hidden=yes');
klikdieng.addEventListener("loadstart", function() {
SpinnerPlugin.activityStart("bentar ya beb...");
});
klikdieng.addEventListener("loadstop", function() {
klikdieng.show();
SpinnerPlugin.activityStop();
});
};


