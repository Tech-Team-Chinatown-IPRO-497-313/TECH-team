var map;

var pingtomIcon = '<h3>Ping Tom Park</h3><p>Come visit the amazing scenery that this park has to offer</p><a href="PingTomPark.html"><strong>Ping Tom Park</strong></a>';

var CAMoCIcon = '<h3>Chinese American Museum of Chicago</h3><p>Come explore the history of Chinatown!</p><a href="location/Chinese-AmericanMuseum.html"><strong>Chinese-American Museum</strong></a>';

var libraryIcon = '<h3>Chinatown Public Library</h3><p>Come visit the library for books and free wifi</p><a href="library.html"><strong>ChinaTown Library</strong></a>';


        function initMap() {
        // Create a map object and specify the DOM element for display.
      var map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 41.852726, lng: -87.632948},
        scrollwheel: true,
        zoom: 15.9,
        mapTypeId: 'hybrid',
      });

     
      var pingtom = new google.maps.Marker ({
            position: {lat: 41.857297, lng: -87.634385},
            map: map,
            title: 'Ping Tom Memorial Park',
            icon : 'Images/pinghut.png',
            animation: google.maps.Animation.DROP,
			});

      
      var pingtomMarker = new google.maps.InfoWindow({
          content: pingtomIcon
          });

          pingtom.addListener('click', function() {
          pingtomMarker.open(map, pingtom);

          setTimeout(function () { pingtomMarker.close(); }, 8000);
      });



    	var CAMoC = new google.maps.Marker ({
            position: {lat: 41.851330, lng: -87.633529},
            map: map,
            title: 'Chinese American Museum of Chicago',
            icon : 'Images/dragon1.png',
            animation: google.maps.Animation.BOUNCE,
			});

      
      var CAMoCMarker = new google.maps.InfoWindow({
          content: CAMoCIcon
          });

          CAMoC.addListener('click', function() {
          CAMoCMarker.open(map, CAMoC);

          setTimeout(function () { CAMoCMarker.close(); }, 8000);
      });


      var library = new google.maps.Marker ({
            position: {lat: 41.853844, lng: -87.632182},
            map: map,
            title: 'Chinatown Public Library',
            icon : 'Images/books.png',
            animation: google.maps.Animation.DROP,
      });

      
      var libraryMarker = new google.maps.InfoWindow({
          content: libraryIcon
          });

          library.addListener('click', function() {
          libraryMarker.open(map, library);

          setTimeout(function () { ;ibraryMarker.close(); }, 8000);
          });


        }

