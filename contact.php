<!DOCTYPE html>
<html>

<head>
    <title>SGI</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link rel="stylesheet" href="css/bootstrap.min.css">
    <link rel="stylesheet" type="text/css" href="styles.css">
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyASQKvbTGUZ1Ds6TTJJXJAuicT0ejXwNpw"></script>
    <script type="text/javascript" src="js/funciones.js"></script>
</head>

<body>
    <div class="bg">
        <!-- **** ESTE ES EL MODAL **** -->
        <div id="bg-negro" onclick="cerrar()"></div>
        <div id="modal"></div>

        <!-- *** AQUI INICIA LO QUE SE VE *** -->
        <div class="header">
            <div class="div-xl-4">
                <img id="logo" src="images/logo2.png">
            </div>
            <div class="div-xl-4"></div>            
            <div class="extra div-xl-4">
                <img id="icons" src="images/icon/menu.png">
            </div>
        </div>
        <div class="body2">
            <div class="text">
                <div class="div-xl-12">
                    <H1>CONTACTANOS</H1>
                </div>

                <!-- ==== ESTE ES EL DIV DE LA INFORMACION ==== -->
                <div class="qflex div-xl-6">
                    <div class="qflex dats div-xl-12">
                        <h2>SUCURSAL QUERÉTARO</h2>
                        <H4><img id="imgc" src="images/icon/mark.png">  Candiles 309-201, Valle Real Residencial.<br>Corregidora, Querétaro C.P. 07086</H4>
                        <H4> <img id="imgc" src="images/icon/phone.png">(442) 195 5042</H4><br>
                    </div>
                    <div class="qflex dats  div-xl-12">
                        <h2>SUCURSAL CIUDAD DE MÉXICO</h2>
                        <H4><img id="imgc" src="images/icon/mark.png"> Enrique Rebsamen 22. Col. Piedad Narvarte C.P. 03000</H4>
                        <H4><img id="imgc" src="images/icon/phone.png"> (55) 5530 7046</H4><br>
                    </div>
                    <div class="qflex dats  div-xl-12">
                        <h2>WHATSAPP-CORREO</h2>
                        <H4>Ulises Reséndiz<br> (Director Comercial)<br><img id="imgc" src="images/icon/whatsapp.png">55 4192 1881<br><img id="imgc" src="images/icon/mail.png">ulises@gruposgi.com.mx</H4><br>
                        <H4>Alberto Martínez<br> (Director de Operaciones)<br><img id="imgc" src="images/icon/whatsapp.png">55 4056 098<br><img id="imgc" src="images/icon/mail.png">alberto@gruposgi.com.mx</H4><br>
                    </div>
                </div>
                <!-- *** ES EL MAPA *** -->
                <div class="div-xl-6" id="map"></div>
                <!-- *** ES LA PARTE DE LOS ICONOS *** -->
                <div class="div-xl-12">
                    <div class="div-xl-4"></div>
                    <div class="div-xl-4">
                        <div class="div-xl-6">
                            <img id="icons" src="images/icon/facebook.png">
                        </div>
                        <div class="div-xl-6">
                            <img id="icons" src="images/icon/instagram.png">
                        </div>
                    </div>
                    <div class="div-xl-4"></div>
                </div>
            </div>
        </div>
    </div>
</body>
</html>

<script>
window.onload = initMap(); // cargar esta funcion enseguida del dom
/*window.onload = obtenerdireccion;*/
    
var map = null;
var marker = null;
var geocoder = new google.maps.Geocoder();
  
function initMap() { //FUNCION QUE CARGA EL MAPA CON LA GEOLOCALIZACION ACTUAL
    var marcadores = [
        ['', 20.5472674,-100.4013637], //QUERETARO
        ['', 19.4026276,-99.1603794] //
    ];  
    
    var myLatlng = new google.maps.LatLng(19.9722964,-99.7348477);
    var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 8,
          center: myLatlng,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        });

    google.maps.event.trigger(map, 'resize');
    var infowindow = new google.maps.InfoWindow();
    var marker, i;
    for (i = 0; i < marcadores.length; i++) {  
        marker = new google.maps.Marker({
            position: new google.maps.LatLng(marcadores[i][1], marcadores[i][2]),
            icon: 'images/icon/markg.png',
            map: map
        });
    }
  }
</script>
