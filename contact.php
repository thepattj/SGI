<!DOCTYPE html>
<html>

<head>
    <title>SGI - Soluciones Gráficas e Industriales</title>
    <meta name="description" content="Damos Soluciones Publicitarias en cualquier formato o medio.">
    <meta name="keywords" content="palabras claves separadas por comas, introduce frases cortas de dos o más palabras. Unos 1000 caracteres.">
    <meta charset="utf-8">
    <meta http-equiv="Content-Language" content="es"/>
    <meta http-equiv="Content-Type"content="text/html; charset=windows-1252">
    <meta name="robots" content="index,follow">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link rel="icon" href="images/lmin.png" sizes="32x32">

    <!-- <link rel="stylesheet" href="css/bootstrap.min.css"> -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <link rel="stylesheet" type="text/css" href="styles.css">
    
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
    <!-- <script href="js/bootstrap.min.js"></script> -->
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
    <script type="text/javascript" src="js/funciones.js"></script>
    <script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyASQKvbTGUZ1Ds6TTJJXJAuicT0ejXwNpw"></script>

</head>
<?php
    $arrayColores = ['#00ffff', '#ff00ff', '#ffff00'];
    $seleccion = rand(0,2);
    $colorsel = $arrayColores[$seleccion];
?>

<body>
    <div class="bg">
        <nav class="navbar navbar-expand-lg navbar-light">
            <a class="navbar-brand" href="#">
                <img id="logo" src="images/logo.png" width="45" height="30" class="d-inline-block align-top" alt="">
            </a>
            <span class="navbar-text" id="titulo">
                Soluciones Gráficas e Industriales
            </span>
            <span class="navbar-text" id="titulo"></span>
            <span class="navbar-text" id="titulo"></span>
            <span class="navbar-text" id="titulo"></span>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                <li class="nav-item">
                    <a class="nav-link" onclick="seccion('us')" href="#">Nosotros </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" onclick="seccion('serv')" href="#">Servicios</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" onclick="seccion('contact')" href="#">Contacto</a>
                </li>
                </ul>
            </div>
        </nav>
        <div class="body2">
            <div class="row">
                <!-- Letrero -->
                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <H1 id="titlecnt">CONTACTANOS</H1>
                </div>
                <!-- Primer mapa -->
                <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xl-3">
                    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                        <h2 class="textoi">SUCURSAL QUERÉTARO</h2>
                    </div>
                    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12" id="map"></div>
                    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                        <H6 class="textod"><img id="imgc" src="images/icon/mark.png">  Candiles 309-201, Valle Real Residencial.<br>Corregidora, Querétaro C.P. 07086</H6>
                        <H6 class="textod"> <img id="imgc" src="images/icon/phone.png">(442) 195 5042</H6><br>
                    </div>
                </div>

                <!-- Segundo Mapa -->
                <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xl-3">
                    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                        <h2 class="textoi">SUCURSAL CD. MÉXICO</h2>
                    </div>
                    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12" id="map2"></div>
                    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                        <H6 class="textod"><img id="imgc" src="images/icon/mark.png"> Enrique Rebsamen 22. Col. Piedad Narvarte C.P. 03000</H6>
                        <H6 class="textod"><img id="imgc" src="images/icon/phone.png"> (55) 5530 7046</H6><br>
                    </div>
                </div>

                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12" id="foot">
                    <a href="https://www.facebook.com/sgimexico/" target="_blank"> <img id="reds" src="images/icon/facebook.png"> </a> <p id="titface"> SOLUCIONES GRÁFICAS E INDUSTRIALES </p> 
                </div>
            </div>
        </div>

    </div>
</body>
</html>

<script>
function sf(pf) {
    window.location.href = pf;
}

window.onload = initMap(); // cargar esta funcion enseguida del dom
/*window.onload = obtenerdireccion;*/
    
var map = null;
var marker = null;
var geocoder = new google.maps.Geocoder();
  
function initMap() { //FUNCION QUE CARGA EL MAPA CON LA GEOLOCALIZACION ACTUAL
    var myLatLng = {lat: 20.5472674, lng: -100.4013637};
    var myLatLng2 = {lat: 19.4026276, lng: -99.1603794};
        // Create a map object and specify the DOM element
        // for display.
        var map = new google.maps.Map(document.getElementById('map'), {
          center: myLatLng,
          zoom: 14
        });

        var map2 = new google.maps.Map(document.getElementById('map2'), {
          center: myLatLng2,
          zoom: 14
        });

        // Create a marker and set its position.
        var marker = new google.maps.Marker({
          map: map,
          position: myLatLng,
          icon: 'images/icon/markg.png'
        });

        var marker2 = new google.maps.Marker({
          map: map2,
          position: myLatLng2,
          icon: 'images/icon/markg.png'
        });
}
</script>
