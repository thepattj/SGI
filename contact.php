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
    <!-- <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"> -->
    <link rel="stylesheet" href="css/bootstrap.min.css">
    <link rel="stylesheet" type="text/css" href="css/styles.css">

    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
    <!-- <script href="js/bootstrap.min.js"></script> -->
    <!-- <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script> -->
    <script src="js/bootstrap.min.js"></script>
    <script type="text/javascript" src="js/funciones.js"></script>

    <script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyASQKvbTGUZ1Ds6TTJJXJAuicT0ejXwNpw"></script>
</head>

<?php
    $arrayColores = ['#00ffff', '#ff00ff', '#ffff00'];
    $seleccion = rand(0,2);
    $colorsel = $arrayColores[$seleccion];
?>

<body>
    <nav class="navbar navbar-expand-lg navbar-light bg-light" role="navigation">
        <a class="navbar-brand" href="#">
        <img id="logo" src="images/logo.png" width="45" height="30" class="d-inline-block align-top" alt="">
        </a>
        <span class="navbar-text" id="titulo" style="font-weight: bolder;"> SOLUCIONES GRÁFICAS E INDUSTRIALES </span>
        
        <span class="navbar-text" id="titulo"></span>
        <span class="navbar-text" id="titulo"></span>
        <span class="navbar-text" id="titulo"></span>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
            <li class="nav-item">
            <a class="nav-link" onclick="seccion('us')" href="#">NOSOTROS </a>
            </li>
            <li class="nav-item">
            <a class="nav-link" onclick="seccion('serv')" href="#">SERVICIOS</a>
            </li>
            <li class="nav-item active">
            <a class="nav-link" onclick="seccion('contact')" href="#"><strong>CONTACTO</strong></a>
            </li>
        </ul>
        </div>
    </nav>
    <div class="bg">
        <!-- **** ESTE ES EL MODAL **** -->
        <!--  <div id="bg-negro" onclick="cerrar()"></div>
        <div id="modal"></div> -->

        <!-- *** AQUI INICIA LO QUE SE VE *** -->
        <div class="body">
          <div class="row" id="conta">
            <!-- AQUI PUEDE IR UN IF CON EL WIDTH PARA VER SI FUNCIONA Y DECIR QUE CUANDO SE MENOR A  992ENTRE -->
            <!-- PUEDE COLOCARSE AL IGUAL ALGUNA TRABA PARA HTML CON EL CSS Y LOS ID -->
            <div class="col-8 col-sm-8 col-md-8 col-lg-8 col-xl-8">
                <H5 style="margin-left: 9vh;">VISÍTANOS </H5>
            </div>
            <div class="col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4">
                <H5 style="margin-left: 3vw;"> ESCRÍBENOS</H5>
            </div>


            <div class="col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3">
                <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                    <h6 class="textoi">SUCURSAL QUERÉTARO</h6>
                </div>
                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                    <H6 class="textod"><img id="imgc" src="images/icon/mark.png">  Candiles 309-201, Valle Real Residencial.<br>Corregidora, Querétaro C.P. 07086</H6>
                    <H6 class="textod"> <img id="imgc" src="images/icon/phone2.png">(442) 195 5042</H6><br>
                </div>

                <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12"></div>


                <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                    <h6 class="textoi">SUCURSAL CDMX</h6>
                </div>
                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                    <H6 class="textod"><img id="imgc" src="images/icon/mark.png">  Enrique Rebsamen 22, Piedad Nararte<br>MUNICIPIO, CDMX C.P. 03000</H6>
                    <H6 class="textod"> <img id="imgc" src="images/icon/phone2.png">(55) 5530 7046</H6><br>
                </div>
            </div>

            <div class="col-5 col-sm-5 col-md-5 col-lg-5 col-xl-5">
                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12" id="map"></div>
                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12" id="map2"></div>
            </div>

            <div class="col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4">
                <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                    <input id="mail" type="text" placeholder="ejemplos@servidor.com">
                </div>
                <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                    <textarea id="cuerpo" placeholder="Mensaje"></textarea>
                </div>
                <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                <button id="senema">Enviar</button>
                </div>
            </div>            
          </div>

          <div class="row" id="mini">
            <!-- AQUI PUEDE IR UN IF CON EL WIDTH PARA VER SI FUNCIONA Y DECIR QUE CUANDO SE MENOR A  992ENTRE -->
            <!-- PUEDE COLOCARSE AL IGUAL ALGUNA TRABA PARA HTML CON EL CSS Y LOS ID -->
            <div class="col-12 col-sm-12 col-md-12 text-center">
                <H5 style="">VISÍTANOS </H5>
            </div>
            <div class="col-12 col-sm-12 col-md-12 text-center">
                <h6 class="textoi">SUCURSAL QUERÉTARO</h6>
            </div>
            <div class="col-12 col-sm-12 col-md-12 text-center">
                <H6 class="textod"><img id="imgc" src="images/icon/mark.png">  Candiles 309-201, Valle Real Residencial.<br>Corregidora, Querétaro C.P. 07086</H6>
                <H6 class="textod"> <img id="imgc" src="images/icon/phone2.png">(442) 195 5042</H6><br>
            </div>
            <div class="col-12 col-sm-12 col-md-12" id="map3"></div>

            <div class="col-12 col-sm-12 col-md-12 text-center">
                <h6 class="textoi">SUCURSAL CDMX</h6>
            </div>
            <div class="col-12 col-sm-12 col-md-12 text-center">
                <H6 class="textod"><img id="imgc" src="images/icon/mark.png">  Enrique Rebsamen 22, Piedad Nararte<br>MUNICIPIO, CDMX C.P. 03000</H6>
                <H6 class="textod"> <img id="imgc" src="images/icon/phone2.png">(55) 5530 7046</H6><br>
            </div>
            <div class="col-12 col-sm-12 col-md-12" id="map4"></div>





            <div class="col-12 col-sm-12 col-md-12 text-center">
                <H5 style="margin-left: 3vw;"> ESCRÍBENOS</H5>
            </div>
            <div class="col-12 col-sm-12 col-md-12">
                <input id="mail" type="text" placeholder="ejemplos@servidor.com">
            </div>
            <div class="col-12 col-sm-12 col-md-12">
                <textarea id="cuerpo" placeholder="Mensaje"></textarea>
            </div>
            <div class="col-12 col-sm-12 col-md-12">
                <button id="senema">Enviar</button>
            </div>
          </div>
        </div>

        <!-- FOOTER -->
        <footer class="footer">
          <div class="row" id="rf" style="width:99%;">
            <div class="col-4 col-sm-3 col-md-3 col-lg-3 col-xl-3 ">
              <p id="face-foo" class="center-block" style=""><b>SÍGUENOS EN:</b> <a href="https://www.facebook.com/sgimexico/" target="_blank"> <img class="" id="imagfoo" src="images/icon/facebook.png" style="" > </a> </p>
            </div>
            <div class="col-4 col-sm-3 col-md-3 col-lg-3 col-xl-3" style="border-left: 2px solid white; margin-top: 1.5vh;" id="divfoo">
              <p id="title-foo" class="center-block" style=""><b>CONTÁCTANOS: </b></p>
            </div>
            <div id="col-foo1" class="col-4 col-sm-3 col-md-3 col-lg-3 col-xl-3 text-left">
               <p class="textofoo" style=""> <img class="iconfoo" id="" src="images/icon/contact.png" style="" > Ulises Reséndiz / Director Comercial</p>
               <p class="textofoo" style=""> <img class="iconfoo" id="" src="images/icon/phone.png" style="" > 55 4192 1881</p>
               <p class="textofoo" style=""> <img class="iconfoo" id="" src="images/icon/mail.png" style="" >  ulises@gruposgi.com.mx</p>              
            </div>
            <div id="col-foo" class="col-4 col-sm-3 col-md-3 col-lg-3 col-xl-3 text-left">
              <p class="textofoo" style=""> <img class="iconfoo" id="" src="images/icon/contact.png" style=""> Alberto Martínez / Director de Operaciones</p>
              <p class="textofoo" style=""> <img class="iconfoo" id="" src="images/icon/phone.png" style="" > 55 4056 098</p>
              <p class="textofoo" style=""> <img class="iconfoo" id="" src="images/icon/mail.png" style="" >  alberto@gruposgi.com.mx</p>              
            </div>
          </div>
        </footer>
        
        <!-- <div class="footer">
           <div class="row" id="f">
            <div class="col-sm-4 col-lg-4 col-xl-4" id="f1">
              <img style="width:48%;" src="images/foot1.png">
            </div>
            <div class="col-sm-4 col-lg-4 col-xl-4" id="f2">
              <img style="width:80%;" src="images/foot2.png">
            </div>
            <div class="col-sm-4 col-lg-4 col-xl-4" id="f3">
              <img style="width:55%;" src="images/foot3.png">
            </div>
        </div> -->
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

        var map3 = new google.maps.Map(document.getElementById('map3'), {
          center: myLatLng,
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


         // Create a map object and specify the DOM element
        // for display.
       

        var map4 = new google.maps.Map(document.getElementById('map4'), {
          center: myLatLng2,
          zoom: 14
        });

        // Create a marker and set its position.
        var marker3 = new google.maps.Marker({
          map: map3,
          position: myLatLng,
          icon: 'images/icon/markg.png'
        });

        var marker4 = new google.maps.Marker({
          map: map4,
          position: myLatLng2,
          icon: 'images/icon/markg.png'
        });
        
}
</script>

    




    