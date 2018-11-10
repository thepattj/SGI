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
              <H3 id="titulo" style="margin-top: 8%;font-size: 4em;font-weight: bold;">Soluciones Graficas e Industriales</H3>
            </div>
            <div class="extra div-xs-4 div-sm-4 div-md-4 div-lg-4 div-xl-4">
                <img id="icons" src="images/icon/menu.png">
                <div  id="titlen" class="div-xs-3 div-sm-3 div-md-3 div-lg-3 div-xl-3">
                  <h1 style="color: cyan;" onclick="seccion('us')" class="menuh">Nosotros</h1>
                </div>
                <div id="titles"  class="div-xs-3 div-sm-3 div-md-3 div-lg-3 div-xl-3">
                  <h1 onclick="seccion('serv')" class="menuh">Servicios</h1>
                </div>
                <div id="titlec"  class="div-xs-3 div-sm-3 div-md-3 div-lg-3 div-xl-3">
                  <h1 onclick="seccion('contact')" class="menuh">Contacto</h1>
                </div>

            </div>
        </div>
        <div class="body2">
            <div class="textn">
                <div class="div-xs-12 div-sm-12 div-md-12 div-lg-12 div-xl-12">
                    <H1 id="titulous">NOSOTROS</H1>
                </div>
                <div class="div-xs-12 div-sm-12 div-md-12 div-lg-12 div-xl-12">
                    <div class="div-xs-2 div-sm-2 div-md-2 div-lg-2 div-xl-2"></div>
                    <div class="dvi-xs-8 div-sm-8 div-md-8 div-lg-8 div-xl-8">
                        <p id="descr" align="justify">Nos dedicamos a dar Soluciones Publicitarias en cualquier formato o medio.</p>
                    </div>
                    <div class="div-xs-2 div-sm-2 div-md-2 div-lg-2 div-xl-2"></div>
                </div>
                <div class="div-xs-12 div-sm-12 div-md-12 div-lg-12 div-xl-12">
                    <div class="div-xs-2 div-sm-2 div-md-2 div-lg-2 div-xl-2"></div>
                    <div class="div-xs-8 div-sm-8 div-md-8 div-lg-8 div-xl-8">
                        <video playsinline autoplay muted loop src="video/w.mp4" id="imgus">   </video>
                    </div>
                    <div class="div-xs-2 div-sm-2 div-md-2 div-lg-2 div-xl-2"></div>
                </div>
            </div>
        </div>
    </div>
</body>
</html>
