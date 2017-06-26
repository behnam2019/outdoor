
var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');



L.mapbox.accessToken = 'pk.eyJ1IjoiYmVobmFtMjAxOSIsImEiOiJjajBnaTBwa28wMDJlMzNuNTg1Y3NhdTU4In0.IvILYU3NM9Zr1DapXE0_qg';
    var map = L.mapbox.map('map', 'mapbox.streets');
    L.control.locate().addTo(map);






    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

app.initialize();