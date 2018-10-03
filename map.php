<!DOCTYPE html>
<html>

<head>
    <title>SGI</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link rel="stylesheet" href="css/bootstrap.min.css">
    <link rel="stylesheet" type="text/css" href="stylez.css">
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyASQKvbTGUZ1Ds6TTJJXJAuicT0ejXwNpw"></script>
    <script type="text/javascript" src="js/funciones.js"></script>
</head>

<body>
	<div id="map"> </div>
</body>
</html>

<script>
  window.onload = initMap(); // cargar esta funcion enseguida del dom
  /*window.onload = obtenerdireccion;*/
    
  var map = null;
  var marker = null;
  var geocoder = new google.maps.Geocoder();
  
 /* function geoloca(){ //FUNCION DE LA GEOLOCALIZACION QUE DARA LA VARIABLE myLatlng
    navigator.geolocation.getCurrentPosition(initMap);
  }*/

  function initMap() { //FUNCION QUE CARGA EL MAPA CON LA GEOLOCALIZACION ACTUAL
 
    
    var myLatlng = new google.maps.LatLng(20.6912786,-100.4456878);
    var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 14,
          center: myLatlng,
          //mapTypeId: google.maps.MapTypeId.ROADMAP
        });
    var marker = new google.maps.Marker({
        position: myLatlng,
        map: map
    });
  }
</script>