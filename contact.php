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
<?php
    $arrayColores = ['#00ffff', '#ff00ff', '#ffff00'];
    $seleccion = rand(0,2);
    $colorsel = $arrayColores[$seleccion];
?>

<body>
    <div class="bg">
        <!-- **** ESTE ES EL MODAL **** -->
        <div id="bg-negro" onclick="cerrar()"></div>
        <div id="modal"></div>

        <!-- *** AQUI INICIA LO QUE SE VE *** -->
        <div class="header" style="" >
            <div class="div-xs-4 div-sm-4 div-md-4 div-lg-4 div-xl-4">
              <img id="logo" src="images/logo.png">
            </div>
            <div class="div-xs-4 div-sm-4 div-md-4 div-lg-4 div-xl-4">
              <H3 id="titulo" style="margin-top: 8%;font-size: 4em;font-weight: bold;">Soluciones Gráficas e Industriales</H3>
            </div>
            <div class="extra div-xs-4 div-sm-4 div-md-4 div-lg-4 div-xl-4">
                <img id="icons" src="images/icon/menu.png">
                <div  id="titlen" class="div-xs-3 div-sm-3 div-md-3 div-lg-3 div-xl-3">
                  <h1 onclick="seccion('us')" class="menuh">Nosotros</h1>
                </div>
                <div id="titles"  class="div-xs-3 div-sm-3 div-md-3 div-lg-3 div-xl-3">
                  <h1 onclick="seccion('serv')" class="menuh">Servicios</h1>
                </div>
                <div id="titlec"  class="div-xs-3 div-sm-3 div-md-3 div-lg-3 div-xl-3">
                  <h1 style="color: cyan;" onclick="seccion('contact')" class="menuh">Contacto</h1>
                </div>

            </div>
        </div>
        <div class="body2">
            <div class="text">
                <div class="div-xs-12 div-sm-12 div-md-12 div-lg-12 div-xl-12">
                    <H1 id="titlecnt">CONTACTANOS</H1>
                </div>
                <!-- *** ES EL MAPA *** -->
                <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xl-3">
                    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                        <h2 class="textoi">SUCURSAL QUERÉTARO</h2>
                    </div>
                    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12" id="map"></div>
                    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                        <H4 class="textod"><img id="imgc" src="images/icon/mark.png">  Candiles 309-201, Valle Real Residencial.<br>Corregidora, Querétaro C.P. 07086</H4>
                        <H4 class="textod"> <img id="imgc" src="images/icon/phone.png">(442) 195 5042</H4><br>
                    </div>
                </div>
                <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xl-3">
                    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                    <h2 class="textoi">SUCURSAL CD. MÉXICO</h2>
                    </div>
                    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12" id="map2"></div>
                    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                        <H4 class="textod"><img id="imgc" src="images/icon/mark.png"> Enrique Rebsamen 22. Col. Piedad Narvarte C.P. 03000</H4>
                        <H4 class="textod"><img id="imgc" src="images/icon/phone.png"> (55) 5530 7046</H4><br>
                    </div>
                </div>
                <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                        <h2 style="text-align:center;" class="textoi">CELULAR - CORREO</h2>
                    </div>

                    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                        <H4 class="textod"><b> Ulises Reséndiz (Director Comercial)</b><br> <img id="imgc" src="images/icon/whatsapp.png">55 4192 1881<br><img id="imgc" src="images/icon/mail.png">ulises@gruposgi.com.mx</H4><br>
                        <H4 class="textod"><b> Alberto Martínez (Director de Operaciones)</b><br> <img id="imgc" src="images/icon/whatsapp.png">55 4056 098<br><img id="imgc" src="images/icon/mail.png">alberto@gruposgi.com.mx</H4><br>
                    </div>
                </div>


                <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                        <div id="renglon" class="col-xs-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
                            <p id="textem" style="margin-top:3.5%; text-align:center;"> Coloca tu correo: </p>
                        </div>
                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-8 col-xl-4">
                            <input id="mail" type="text" placeholder="ejemplos@servidor.com">
                        </div>
                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-4 col-xl-4"></div>
                    </div>

                    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-4 col-xl-4"></div>
                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-8 col-xl-4">
                        <textarea id="cuerpo"></textarea>
                        </div>
                    </div>

                    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-4 col-xl-4"></div>
                    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-4 col-xl-4"></div>
                    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
                        <button id="senema">Enviar</button>
                    </div>
                </div>
                

                

                <!-- *** ES LA PARTE DE LOS ICONOS *** -->
                <div class="div-xs-12 div-sm-12 div-md-12 div-lg-12 div-xl-12" id="foot">
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
