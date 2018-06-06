var map;


        function initMap() {
        // Create a map object and specify the DOM element for display.
        var map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 41.8507, lng: -87.6340},
        scrollwheel: true,
        zoom: 18,
        mapTypeId: 'hybrid',
        });

        


        }