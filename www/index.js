document.addEventListener('deviceready',onDeviceReady, false);
function checkConnection() {
           var networkState = navigator.network.connection.type;
           var states = {};
           states[Connection.UNKNOWN]  = 'Unknown connection';
           states[Connection.ETHERNET] = 'Ethernet connection';
           states[Connection.WIFI]     = 'WiFi connection';
           states[Connection.CELL_2G]  = 'Cell 2G connection';
           states[Connection.CELL_3G]  = 'Cell 3G connection';
           states[Connection.CELL_4G]  = 'Cell 4G connection';
           states[Connection.NONE]     = 'No network connection';

           return networkState;

       }
function onDeviceReady(){
var networkState = checkConnection();
/*load local files if there is not network connection */
                  if (networkState == Connection.NONE) {
                   navigator.notification.alert('This app requires an internet connection');
                  } else {
                 window.location="http://app.klikdieng.com";
                  }
document.addEventListener("menubutton",function(){console.log("The menu was clicked...");});

};
function showspinner(){window.plugins.spinnerDialog.show(null, "loading bentar..");}
function hidespinner(){window.plugins.spinnerDialog.hide(); }


