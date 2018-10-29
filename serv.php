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
                <div class="selector">
                    <div class="div-sm-1 div-md-1 div-lg-2 div-xl-2"></div>
                    <div class="div-xs-12 div-sm-10 div-md-10 div-lg-8 div-xl-8">
                        <div class="div-xs-2 div-sm-2 div-md-2 div-lg-2 div-xl-2" id="slc3" value="VINIL PARA CUALQUIER SUPERFICIE"><span class="secciones">VINIL </span> </div>
                        <div class="div-xs-2 div-sm-2 div-md-2 div-lg-2 div-xl-2" id="slc1" value="STANDS Y DISPLAYS"><span class="secciones">STANDS</p></div>
                        <div class="div-xs-2 div-sm-2 div-md-2 div-lg-2 div-xl-2" id="slc4" value="LONAS, Gran Formato"><span class="secciones">LONAS</span></div>
                        <div class="div-xs-2 div-sm-2 div-md-2 div-lg-2 div-xl-2" id="slc5" value="TELA"><span class="secciones">TELA</span></div>
                        <div class="div-xs-2 div-sm-2 div-md-2 div-lg-2 div-xl-2" id="slc2" value="VINIL DE RECORTE"><span class="secciones">VINIL PARA RECORTE</p> </div>
                        <div class="div-xs-2 div-sm-2 div-md-2 div-lg-2 div-xl-2" id="slc6" value="SUSTRATOS RIGIDOS TOLDOS, CAJAS DE LUZ Y LETREROS"><span class="secciones">SUSTRATOS</span></div>
                        <div class="div-xs-2 div-sm-2 div-md-2 div-lg-2 div-xl-2" id="slc7" value="VOLUMETRICOS"><span class="secciones">VOLUMETRICOS</span></div>
                    </div>
                    <div class="div-sm-1 div-md-1 div-lg-2 div-xl-2"></div>
                </div>
                <div class=“otro”>
                    <div class="div-xs-12 div-sm-8 div-md-8 div-lg-8 div-xl-8" id="galery">
                        <div class="grid" id="servicios1">
                        <?php $arrayArchivos = ['lona','recort','sd','sup','tela','lona2','recort2','sd2','sup1','tela2','lona3','recort3','sd3','sup2','tela3','lona4','sd4','sup3','tela4','sup4','vol','sup5','subs','sup6'];
                          for ($i=0; $i < 24; $i++) { ?>
                                <div class="outmarg div-xs-4 div-sm-6 div-md-12 div-lg-6 div-xl-3">
                                    <img class="imgmuestra" src="images/servicios/<?php echo $arrayArchivos[$i]; ?>.jpg" >
                                </div>
                        <?php } ?>
                        </div>
                        <div class="grid" id="servicios2">
                        
                        </div>
                    </div>
                    <div class="qflex div-xs-12 div-sm-12 div-md-4 div-lg-4 div-xl-4" id="flex">
                        <div class="qflex div-xs-12 div-sm-12 div-md-12 div-lg-12 div-xl-12" id="flext">
                            <H1 align="justify" id="title">SERVICIO SELECCIONADO</H1><br>
                            <p align="justify" id="descrip" style="font-size: 1.4em;">Lorem ipsum dolor sit amet consectetur adipiscing elit, tortor nullam commodo nibh non aliquet senectus mi, tempus dictum inceptos habitant per class. Porttitor vulputate netus sagittis semper est ridiculus eleifend vestibulum, mus sociis magnis diam ligula nibh enim habitasse, fames pharetra proin et cum mattis mollis. Varius ultrices interdum feugiat donec taciti tincidunt, malesuada tempor commodo libero scelerisque, curabitur ullamcorper tristique enim inceptos. Ac conubia dictum facilisi nascetur et potenti dictumst, cum at vestibulum class sagittis interdum parturient urna, felis mollis donec torquent mauris suspendisse. Nec proin sociosqu dui faucibus quis curae cras semper fames ultricies tristique sollicitudin, rutrum nam magnis libero egestas accumsan eget cum suspendisse condimentum commodo, aliquet iaculis cursus dignissim suscipit viverra convallis netus mollis id habitant. Senectus porta auctor interdum dapibus elementum integer enim orci ornare quam, proin natoque gravida dictumst nostra ut suscipit ac. Inceptos habitasse sociosqu tellus purus nibh vestibulum condimentum id, dignissim curae tempus dictum nascetur egestas commodo metus congue, rutrum neque non curabitur varius platea vehicula. Porttitor nascetur consequat nunc mattis quis himenaeos dis sed imperdiet ac, laoreet curabitur eros convallis netus mauris orci gravida dignissim facilisis bibendum, erat tincidunt mi metus blandit tortor ligula inceptos nulla. Donec magna nam tristique dictumst aenean sodales augue dignissim pellentesque malesuada litora, mauris conubia convallis id a interdum sapien tellus cras cum. Nascetur montes per eget ridiculus ligula class quisque congue, ornare vulputate platea nam lectus blandit sem, lacus egestas velit facilisis ullamcorper volutpat fames. Rhoncus est quis metus feugiat vehicula eu, etiam odio platea proin libero morbi, magnis ridiculus elementum donec eros. Nulla taciti etiam tristique praesent tortor nullam volutpat, integer nisi metus ut dui phasellus, eleifend fermentum cubilia quisque platea magna. Pharetra massa morbi lacinia inceptos curabitur aliquet gravida, nisi diam ridiculus turpis orci ultrices, enim cras bibendum lacus nibh consequat.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>

</html>
