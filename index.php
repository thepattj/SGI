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

<body>
    <div class="bg">
        <!-- **** ESTE ES EL MODAL **** -->
        <div id="bg-negro" onclick="cerrar()"></div>
        <div id="modal"></div>

        <!-- *** AQUI INICIA LO QUE SE VE *** -->
        <div class="header">
            <div class="div-xs-4 div-sm-4 div-md-4 div-lg-4 div-xl-4"></div>
            <div class="div-xs-4 div-sm-4 div-md-4 div-lg-4 div-xl-4">
                <img id="logo" src="images/logo2.png">
            </div>
            <div class="extra div-xs-4 div-sm-4 div-md-4 div-lg-4 div-xl-4">
                <img id="icons" src="images/icon/menu.png">
            </div>
        </div>
        <div class="body">
            <div class="grid">
                <?php $arrayNombres = ['']; $arrayArchivos = [''];
                for ($i=0; $i < 12; $i++) { ?>
                    <div class="outmarg div-xsp-6 div-smp-6 div-mdp-6 div-lgp-3 div-xlp-3">
                        <img class="imgmuestra" src="images/mike-wilson-96168-unsplash.jpg" id="textimg" >
                    </div>
                <?php } ?>
            </div>
        </div>
        <div class="footer">
            <div class="div-xs-4 div-sm-4 div-md-4 div-lg-4 div-xl-4"></div>
            <div class="div-xs-4 div-sm-4 div-md-4 div-lg-4 div-xl-4">
                <div class="div-xs-6 div-sm-6 div-md-6 div-lg-6 div-xl-6">
                    <a href="https://www.facebook.com/sgimexico/" target="_blank"> <img id="redes" src="images/icon/facebook.png"> </a>
                </div>
                <div class="div-xs-6 div-sm-6 div-md-6 div-lg-6 div-xl-6">
                    <a href="contact.php"> <img id="redes" src="images/icon/phone.png"> </a>
                </div>
            </div>
            <div class="div-xs-4 div-sm-4 div-md-4 div-lg-4 div-xl-4"></div>
        </div>
    </div>
</body>

</html>