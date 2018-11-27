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

    <script type="text/javascript" src="js/bootstrap.js"></script>
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
        <div class="headeru" style="" >
            <div class="div-xs-4 div-sm-4 div-md-4 div-lg-4 div-xl-4">
              <img id="logo" src="images/logo.png">
            </div>
            <div class="div-xs-4 div-sm-4 div-md-4 div-lg-4 div-xl-4">
              <H3 id="titulo" style="margin-top: 8%;font-size: 4em;font-weight: bold;">Soluciones Gráficas e Industriales</H3>
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

            <div class="main" style="background-image: url('images/video_bg2.png')">
                    <video id="video_background" preload="auto" autoplay="true" loop="loop" muted="muted" volume="0">
                        <source src="video/video1.mp4" type="video/mp4">
                        video not support
                    </video>

                <div class="cover black" data-color="black"></div>

                <div class="container" style="color: white;">
                    <h1 class="logo cursive">
                        Nosotros
                    </h1>
            <!--  H1 can have 2 designs: "logo" and "logo cursive"           -->
                    <div class="content">
                        <h4 class="motto">Nuestra compañia se basa en: [texto faltante]</h4>
                        <div class="subscribe">
                            <h5 class="info-text">
                                Nos dedicamos a dar Soluciones Publicitarias en cualquier formato o medio.
                            </h5>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</body>
</html>
