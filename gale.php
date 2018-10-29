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
    <script src="js/bootstrap.min.js"></script>
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
                <img id="logo" src="images/logo2.png">
            </div>
            <div class="div-xs-4 div-sm-4 div-md-4 div-lg-4 div-xl-4"></div>            
            <div class="extra div-xs-4 div-sm-4 div-md-4 div-lg-4 div-xl-4">
                <img id="icons" src="images/icon/menu.png">
            </div>
        </div>
        <div class="body2">
            <div class="informacion">
                <h1 align="center">CLIENTES</h1>
                <div class="otro">
                    <div class="div-xs-12 div-sm-12 div-md-12 div-lg-12 div-xl-12">
                        <div class="grid">
                            <img src="images/Clientes-logos.png" id="clientes">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>

</html>
