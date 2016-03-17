var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },

    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },

    onDeviceReady: function() {
    window.open = cordova.InAppBrowser.open;
      var klikdieng = window.open('http://app.klikdieng.com', '_self', 'location=no','zoom=no','disallowoverscroll=yes');
         klikdieng.addEventListener('loadstart', klikLoadStart);
         klikdieng.addEventListener('loadstop', klikLoadStop);
         klikdieng.removeEventListener('loaderror', klikLoadError);
    }
};

function klikLoadStart(){
klikdieng.hide;
}
function klikLoadStop(){
klikdieng.show;
klikdieng.executeScript({file: "index.js"});

}
