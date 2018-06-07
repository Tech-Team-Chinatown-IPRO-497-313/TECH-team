var map;

var pingtom;

var CAMoC;


        function initMap() {
        // Create a map object and specify the DOM element for display.
        var map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 41.8507, lng: -87.6340},
        scrollwheel: true,
        zoom: 18,
        mapTypeId: 'hybrid',
        });

         var pingtomMarker = new google.maps.Marker ({
            position: {lat: 41.857297, lng: -87.634385},
            map: map,
            title: 'Ping Tom Memorial Park',
            icon : 'Images/pinghut.svg',
            animation: google.maps.Animation.DROP,
			});

    	var CAMoCMarker = new google.maps.Marker ({
            position: {lat: 41.851330, lng: -87.633529},
            map: map,
            title: 'Chinese American Museum of Chicago',
            icon : 'Images/mask.svg',
            animation: google.maps.Animation.DROP,
			});

        }

