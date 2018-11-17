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

    $servicio = $_GET['s'];
    $vindex = $_GET['i'];
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
                  <h1 style="color: cyan;" onclick="seccion('serv')" class="menuh">Servicios</h1>
                </div>
                <div id="titlec"  class="div-xs-3 div-sm-3 div-md-3 div-lg-3 div-xl-3">
                  <h1 onclick="seccion('contact')" class="menuh">Contacto</h1>
                </div>

            </div>
        </div>
        <div class="body2">
            <div class="informacion">
                <div class="selector">
                    <div class="div-sm-1 div-md-1 div-lg-2 div-xl-2"></div>
                    <div class="div-xs-12 div-sm-10 div-md-10 div-lg-8 div-xl-8">
                        <div class="div-xs-2 div-sm-2 div-md-2 div-lg-2 div-xl-2" id="slc1" value="STANDS Y DISPLAYS"><span style="text-align: center !important;" class="secciones">STANDS Y DISPLAYS</p></div>
                        <div class="div-xs-2 div-sm-2 div-md-2 div-lg-2 div-xl-2" id="slc2" value="VINIL DE RECORTE"><span style="text-align: center !important;" class="secciones">VINIL PARA RECORTE</p> </div>
                        <div class="div-xs-2 div-sm-2 div-md-2 div-lg-2 div-xl-2" id="slc3" value="AUTOS, VINIL y ROTULACIÓN"><span style="text-align: center;" class="secciones">VINIL Y ROTULACIÓN </span> </div>
                        <div class="div-xs-2 div-sm-2 div-md-2 div-lg-2 div-xl-2" id="slc4" value="GRAN FORMATO"><span style="text-align: center !important;" class="secciones">GRAN FORMATO</span></div>
                        <div class="div-xs-2 div-sm-2 div-md-2 div-lg-2 div-xl-2" id="slc5" value="TELA"><span style="margin-top: 10%;" class="secciones">TELA</span></div>
                        <div class="div-xs-2 div-sm-2 div-md-2 div-lg-2 div-xl-2" id="slc6" value="LETREROS EN 3D, TOLDOS Y CAJAS DE LUZ "><span style="text-align: center !important;" class="secciones">LETREROS EN 3D y mas</span></div>
                        <div class="div-xs-2 div-sm-2 div-md-2 div-lg-2 div-xl-2" id="slc7" value="VOLUMETRICOS"><span style="margin-top: 10%;" class="secciones">VOLUMETRICOS</span></div>
                        <div class="div-xs-2 div-sm-2 div-md-2 div-lg-2 div-xl-2" id="slc8" value="PLAYERAS"><span style="margin-top: 10%;" class="secciones">PLAYERAS </span> </div>
                        <div class="div-xs-2 div-sm-2 div-md-2 div-lg-2 div-xl-2" id="slc9" value="IMPRESIÓN DIRECTA"><span style="text-align: center !important;" class="secciones">IMPRESIÓN DIRECTA </span> </div>
                        <div class="div-xs-2 div-sm-2 div-md-2 div-lg-2 div-xl-2" id="slc0" value="INSTALACIONES"><span style="margin-top: 10%;" class="secciones">INSTALACIONES</span> </div>
                    </div>
                    <div class="div-sm-1 div-md-1 div-lg-2 div-xl-2"></div>
                </div>
                <div class=“otro”>
                   <!-- AQUI VA LO QUE CORTASTE Y ESTA EN LA NOTA!!!!! DE TODAS FORMAS ESTA EN GIT SOLO ES COPIAR Y PEGAR SI NO FUNCIONA! -->
                       <?php if($vindex == 1) { 
                                if($servicio =="slc1") {?>  <!-- S T A N D -->                                  
                                    <div class="div-xs-12 div-sm-8 div-md-8 div-lg-8 div-xl-8 movgalery" id="galery">
                                        <div class="grid" id="servicios1"> </div>
                                        <div class="grid" id="servicios2">
                                            <div class=' div-xs-4 div-sm-6 div-md-6 div-lg-6 div-xl-3'>
                                                <img class='imgmuestraser' onclick='igs(this.id)' id='sd' src='images/servicios/sd.jpg'>
                                            </div>
                                            <div class=' div-xs-4 div-sm-6 div-md-6 div-lg-6 div-xl-3'>
                                                <img class='imgmuestraser' onclick='igs(this.id)' id='sd2' src='images/servicios/sd2.jpg'>
                                            </div>
                                            <div class=' div-xs-4 div-sm-6 div-md-6 div-lg-6 div-xl-3'> 
                                                <img class='imgmuestraser' onclick='igs(this.id)' id='sd3' src='images/servicios/sd3.jpg'>
                                            </div>
                                            <div class=' div-xs-4 div-sm-6 div-md-6 div-lg-6 div-xl-3'>
                                                <img class='imgmuestraser' onclick='igs(this.id)' id='sd4z' src='images/servicios/sd4.jpg'>
                                            </div>
                                            <div class=' div-xs-4 div-sm-6 div-md-6 div-lg-6 div-xl-3'>
                                                <img class='imgmuestraser' onclick='igs(this.id)' id='sd5z' src='images/servicios/sd5.jpg'>
                                            </div>
                                            <div class=' div-xs-4 div-sm-6 div-md-6 div-lg-6 div-xl-3'>
                                                <img class='imgmuestraser' onclick='igs(this.id)' id='sd6z' src='images/servicios/sd6.jpg'>
                                            </div>
                                            <div class=' div-xs-4 div-sm-6 div-md-6 div-lg-6 div-xl-3'>
                                                <img class='imgmuestraser' onclick='igs(this.id)' id='sd7' src='images/servicios/sd7.jpg'>
                                            </div>
                                            <div class=' div-xs-4 div-sm-6 div-md-6 div-lg-6 div-xl-3'>
                                                <img class='imgmuestraser' onclick='igs(this.id)' id='sd8' src='images/servicios/sd8.jpg'>
                                            </div>
                                            <div class=' div-xs-4 div-sm-6 div-md-6 div-lg-6 div-xl-3'>
                                                <img class='imgmuestraser' onclick='igs(this.id)' id='sd9' src='images/servicios/sd9.jpg'>
                                            </div>
                                            <div class=' div-xs-4 div-sm-6 div-md-6 div-lg-6 div-xl-3'>
                                                <img class='imgmuestraser' onclick='igs(this.id)' id='sd10' src='images/servicios/sd10.jpg'>
                                            </div> 
                                            <div class=' div-xs-4 div-sm-6 div-md-6 div-lg-6 div-xl-3'>
                                                <img class='imgmuestraser' onclick='igs(this.id)' id='sd11' src='images/servicios/sd11.jpg'>
                                            </div>
                                            <div class=' div-xs-4 div-sm-6 div-md-6 div-lg-6 div-xl-3'>
                                                <img class='imgmuestraser' onclick='igs(this.id)' id='sd12z' src='images/servicios/sd12.jpg'>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- AQUI HAY UN EFECTO CONFORME AL ANCHO DE LA VENTANA, HAY QUE VER SI FUNCIONA IGUAL PARA ESTE TIPO DE USOS -->
                                    <div class="qflex div-xs-12 div-sm-12 div-md-4 div-lg-4 div-xl-4 movflex" id="flex" style="opacity:1;">
                                        <div class="qflex div-xs-12 div-sm-12 div-md-12 div-lg-12 div-xl-12 movflex" id="flext" style="opacity:1;">
                                            <H1 id="title">STANDS Y DISPLAYS</H1><br>
                                            <p id="descrip" style="font-size: 1.4em;"><b> Materiales: <br> MDF, triplay, trovicel, coroplast, foamboard, lámina, microalambre, aluminio entre otros</b></p>
                                        </div>
                                    </div>
                        <?php   } if($servicio =="slc2") {?> <!-- V I N I L  D E  R E C O R T E -->                                
                                <div class="div-xs-12 div-sm-8 div-md-8 div-lg-8 div-xl-8 movgalery" id="galery">
                                        <div class="grid" id="servicios1"> </div>
                                        <div class="grid" id="servicios2">
                                            <div class=' div-xs-4 div-sm-6 div-md-6 div-lg-6 div-xl-3'>
                                                <img class='imgmuestraser' onclick='igs(this.id)' id='recort' src='images/servicios/recort.jpg'>
                                            </div>
                                            <div class=' div-xs-4 div-sm-6 div-md-6 div-lg-6 div-xl-3'>
                                                <img class='imgmuestraser' onclick='igs(this.id)' id='recort2' src='images/servicios/recort2.jpg'>
                                            </div>
                                            <div class=' div-xs-4 div-sm-6 div-md-6 div-lg-6 div-xl-3'>
                                                <img class='imgmuestraser' onclick='igs(this.id)' id='recort3' src='images/servicios/recort3.jpg'>
                                            </div>
                                            <div class=' div-xs-4 div-sm-6 div-md-6 div-lg-6 div-xl-3'>
                                                <img class='imgmuestraser' onclick='igs(this.id)' id='recort4z' src='images/servicios/recort4.jpg'>
                                            </div>
                                            <div class=' div-xs-4 div-sm-6 div-md-6 div-lg-6 div-xl-3'>
                                                <img class='imgmuestraser' onclick='igs(this.id)' id='recort5z' src='images/servicios/recort5.jpg'>
                                            </div>
                                            <div class=' div-xs-4 div-sm-6 div-md-6 div-lg-6 div-xl-3'>
                                                <img class='imgmuestraser' onclick='igs(this.id)' id='recort6' src='images/servicios/recort6.jpg'>
                                            </div>
                                            <div class=' div-xs-4 div-sm-6 div-md-6 div-lg-6 div-xl-3'>
                                                <img class='imgmuestraser' onclick='igs(this.id)' id='recort7' src='images/servicios/recort7.jpg'>
                                            </div>
                                            <div class=' div-xs-4 div-sm-6 div-md-6 div-lg-6 div-xl-3'>
                                                <img class='imgmuestraser' onclick='igs(this.id)' id='recort8' src='images/servicios/recort8.jpg'>
                                            </div>
                                            <div class=' div-xs-4 div-sm-6 div-md-6 div-lg-6 div-xl-3'>
                                                <img class='imgmuestraser' onclick='igs(this.id)' id='recort9' src='images/servicios/recort9.jpg'>
                                            </div>
                                            <div class=' div-xs-4 div-sm-6 div-md-6 div-lg-6 div-xl-3'>
                                                <img class='imgmuestraser' onclick='igs(this.id)' id='recort10' src='images/servicios/recort10.jpg'>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- AQUI HAY UN EFECTO CONFORME AL ANCHO DE LA VENTANA, HAY QUE VER SI FUNCIONA IGUAL PARA ESTE TIPO DE USOS -->
                                    <div class="qflex div-xs-12 div-sm-12 div-md-4 div-lg-4 div-xl-4 movflex" id="flex" style="opacity:1;">
                                        <div class="qflex div-xs-12 div-sm-12 div-md-12 div-lg-12 div-xl-12 movflex" id="flext" style="opacity:1;">
                                            <H1 id="title">VINIL DE RECORTE</H1><br>
                                            <p id="descrip" style="font-size: 1.4em;"><b>Materiales: <br> RECORTE </b> <br>(a uno o varios colores)<br><b>ESMERILADO </b> (recorte e impreso)</p>
                                        </div>
                                    </div>
                        <?php   } if($servicio =="slc3") {?> <!-- V I N I L  -->                                
                                <div class="div-xs-12 div-sm-8 div-md-8 div-lg-8 div-xl-8 movgalery" id="galery">
                                        <div class="grid" id="servicios1"> </div>
                                        <div class="grid" id="servicios2">
                                            <div class=' div-xs-4 div-sm-6 div-md-6 div-lg-6 div-xl-3'>
                                                <img class='imgmuestraser' onclick='igs(this.id)' id='vinil' src='images/servicios/vinil.jpg'>
                                            </div>
                                            <div class=' div-xs-4 div-sm-6 div-md-6 div-lg-6 div-xl-3'>
                                                <img class='imgmuestraser' onclick='igs(this.id)' id='vinil1' src='images/servicios/vinil1.jpg'>
                                            </div>
                                            <div class=' div-xs-4 div-sm-6 div-md-6 div-lg-6 div-xl-3'>
                                               <img class='imgmuestraser' onclick='igs(this.id)' id='vinil2' src='images/servicios/vinil2.jpg'>
                                            </div>
                                            <div class=' div-xs-4 div-sm-6 div-md-6 div-lg-6 div-xl-3'>
                                                <img class='imgmuestraser' onclick='igs(this.id)' id='vinil3' src='images/servicios/vinil3.jpg'>
                                            </div>
                                            <div class=' div-xs-4 div-sm-6 div-md-6 div-lg-6 div-xl-3'>
                                                <img class='imgmuestraser' onclick='igs(this.id)' id='vinil4' src='images/servicios/vinil4.jpg'>
                                            </div>
                                            <div class=' div-xs-4 div-sm-6 div-md-6 div-lg-6 div-xl-3'>
                                            <img class='imgmuestraser' onclick='igs(this.id)' id='vinil5' src='images/servicios/vinil5.jpg'>
                                            </div>
                                            <div class=' div-xs-4 div-sm-6 div-md-6 div-lg-6 div-xl-3'>
                                                <img class='imgmuestraser' onclick='igs(this.id)' id='vinil6' src='images/servicios/vinil6.jpg'>
                                            </div>
                                            <div class=' div-xs-4 div-sm-6 div-md-6 div-lg-6 div-xl-3'>
                                                <img class='imgmuestraser' onclick='igs(this.id)' id='vinil7' src='images/servicios/vinil7.jpg'>
                                            </div>
                                            <div class=' div-xs-4 div-sm-6 div-md-6 div-lg-6 div-xl-3'>
                                                <img class='imgmuestraser' onclick='igs(this.id)' id='vinil8' src='images/servicios/vinil8.jpg'>
                                            </div>
                                            <div class=' div-xs-4 div-sm-6 div-md-6 div-lg-6 div-xl-3'>
                                                <img class='imgmuestraser' onclick='igs(this.id)' id='vinil9' src='images/servicios/vinil9.jpg'>
                                            </div>
                                            <div class=' div-xs-4 div-sm-6 div-md-6 div-lg-6 div-xl-3'>
                                                <img class='imgmuestraser' onclick='igs(this.id)' id='vinil10' src='images/servicios/vinil10.jpg'>
                                            </div>
                                            <div class=' div-xs-4 div-sm-6 div-md-6 div-lg-6 div-xl-3'>
                                                <img class='imgmuestraser' onclick='igs(this.id)' id='vinil11' src='images/servicios/vinil11.jpg'>
                                            </div>
                                        </div>
                                </div>
                                    <!-- AQUI HAY UN EFECTO CONFORME AL ANCHO DE LA VENTANA, HAY QUE VER SI FUNCIONA IGUAL PARA ESTE TIPO DE USOS -->
                                    <div class="qflex div-xs-12 div-sm-12 div-md-4 div-lg-4 div-xl-4 movflex" id="flex" style="opacity:1;">
                                        <div class="qflex div-xs-12 div-sm-12 div-md-12 div-lg-12 div-xl-12 movflex" id="flext" style="opacity:1;">
                                            <H1 id="title">AUTOS, VINIL Y ROTULACIÓN</H1><br>
                                            <p id="descrip" style="font-size: 1.4em;"><b>Materiales: <br> WALL GRAPHIC <br> FLOOR GRAPHIC </b> <br><b>ELECTROESTÁTICO </b> (blanco, transparente)<br><b>AUTOADHERIBLE </b> (mate, blanco, covencional, con fondo gris o negro, microperforado)</p>
                                        </div>
                                    </div>
                        <?php   } if($servicio =="slc4") {?> <!-- G R A N  F O R M A T O -->                                
                                <div class="div-xs-12 div-sm-8 div-md-8 div-lg-8 div-xl-8 movgalery" id="galery">
                                        <div class="grid" id="servicios1"> </div>
                                        <div class="grid" id="servicios2">
                                            <div class=' div-xs-4 div-sm-6 div-md-6 div-lg-6 div-xl-3'>
                                                <img class='imgmuestraser' onclick='igs(this.id)' id='formato' src='images/servicios/formato.jpg'>
                                            </div>
                                            <div class=' div-xs-4 div-sm-6 div-md-6 div-lg-6 div-xl-3'>
                                                <img class='imgmuestraser' onclick='igs(this.id)' id='formato2' src='images/servicios/formato2.jpg'>
                                            </div>
                                            <div class=' div-xs-4 div-sm-6 div-md-6 div-lg-6 div-xl-3'>
                                                <img class='imgmuestraser' onclick='igs(this.id)' id='formato3' src='images/servicios/formato3.jpg'>
                                            </div>
                                            <div class=' div-xs-4 div-sm-6 div-md-6 div-lg-6 div-xl-3'>
                                                <img class='imgmuestraser' onclick='igs(this.id)' id='formato4' src='images/servicios/formato4.jpg'>
                                            </div>
                                            <div class=' div-xs-4 div-sm-6 div-md-6 div-lg-6 div-xl-3'>
                                                <img class='imgmuestraser' onclick='igs(this.id)' id='formato5' src='images/servicios/formato5.jpg'>
                                            </div>
                                            <div class=' div-xs-4 div-sm-6 div-md-6 div-lg-6 div-xl-3'>
                                                <img class='imgmuestraser' onclick='igs(this.id)' id='formato6z' src='images/servicios/formato6.jpg'>
                                            </div>
                                            <div class=' div-xs-4 div-sm-6 div-md-6 div-lg-6 div-xl-3'>
                                                <img class='imgmuestraser' onclick='igs(this.id)' id='formato7' src='images/servicios/formato7.jpg'>
                                            </div>
                                            <div class=' div-xs-4 div-sm-6 div-md-6 div-lg-6 div-xl-3'>
                                                <img class='imgmuestraser' onclick='igs(this.id)' id='formato8z' src='images/servicios/formato8.jpg'>
                                            </div>
                                            <div class=' div-xs-4 div-sm-6 div-md-6 div-lg-6 div-xl-3'>
                                                <img class='imgmuestraser' onclick='igs(this.id)' id='formato9' src='images/servicios/formato9.jpg'>
                                            </div>
                                        </div>
                                </div>
                                <!-- AQUI HAY UN EFECTO CONFORME AL ANCHO DE LA VENTANA, HAY QUE VER SI FUNCIONA IGUAL PARA ESTE TIPO DE USOS -->
                                <div class="qflex div-xs-12 div-sm-12 div-md-4 div-lg-4 div-xl-4 movflex" id="flex" style="opacity:1;">
                                    <div class="qflex div-xs-12 div-sm-12 div-md-12 div-lg-12 div-xl-12 movflex" id="flext" style="opacity:1;">
                                        <H1 id="title">GRAN FORMATO</H1><br>
                                        <p id="descrip" style="font-size: 1.4em;"><b>Materiales: <br> LONAS Tradicionales</b> (de 13 onzas) <b><br> APLICACIÓN DE LONAS</b> (en bastidores) <b><br> LONA BLACKLIGHT <br> LONA MESH <br> LONA BLACKOUT <br> LONA SOLIDA <br> PARA TOLDOS <br> VINIL </b> (blanco, con adhesivo gris o negro)</p>
                                    </div>
                                </div>
                        <?php   } if($servicio =="slc5") {?> <!-- T E L A -->
                                <div class="div-xs-12 div-sm-8 div-md-8 div-lg-8 div-xl-8 movgalery" id="galery">
                                    <div class="grid" id="servicios1"> </div>
                                    <div class="grid" id="servicios2">
                                        <div class=' div-xs-4 div-sm-6 div-md-12 div-lg-6 div-xl-3'>
                                            <img class='imgmuestraser' onclick='igs(this.id)' id='tela' src='images/servicios/tela.jpg'>
                                        </div>
                                        <div class=' div-xs-4 div-sm-6 div-md-6 div-lg-6 div-xl-3'>
                                            <img class='imgmuestraser' onclick='igs(this.id)' id='tela2z' src='images/servicios/tela2.jpg'>
                                        </div>
                                        <div class=' div-xs-4 div-sm-6 div-md-6 div-lg-6 div-xl-3'>
                                            <img class='imgmuestraser' onclick='igs(this.id)' id='tela3' src='images/servicios/tela3.jpg'>
                                        </div>
                                        <div class=' div-xs-4 div-sm-6 div-md-6 div-lg-6 div-xl-3'>
                                            <img class='imgmuestraser' onclick='igs(this.id)' id='tela4' src='images/servicios/tela4.jpg'>
                                        </div>
                                        <div class=' div-xs-4 div-sm-6 div-md-6 div-lg-6 div-xl-3'>
                                            <img class='imgmuestraser' onclick='igs(this.id)' id='tela5z' src='images/servicios/tela5.jpg'>
                                        </div>
                                        <div class=' div-xs-4 div-sm-6 div-md-6 div-lg-6 div-xl-3'>
                                            <img class='imgmuestraser' onclick='igs(this.id)' id='tela6' src='images/servicios/tela6.jpg'>
                                        </div>
                                        <div class=' div-xs-4 div-sm-6 div-md-6 div-lg-6 div-xl-3'>
                                            <img class='imgmuestraser' onclick='igs(this.id)' id='tela7z' src='images/servicios/tela7.jpg'>
                                        </div>
                                    </div>
                                </div>
                                <!-- AQUI HAY UN EFECTO CONFORME AL ANCHO DE LA VENTANA, HAY QUE VER SI FUNCIONA IGUAL PARA ESTE TIPO DE USOS -->
                                <div class="qflex div-xs-12 div-sm-12 div-md-4 div-lg-4 div-xl-4 movflex" id="flex" style="opacity:1;">
                                    <div class="qflex div-xs-12 div-sm-12 div-md-12 div-lg-12 div-xl-12 movflex" id="flext" style="opacity:1;">
                                        <H1 id="title">TELA</H1><br>
                                        <p id="descrip" style="font-size: 1.4em;"><b>Materiales: <br> SUBLIMACIÓN EN DIFERENTES TIPOS DE TELA</b> <br> (brillosa, mate y repelente al agua)</p>
                                    </div>
                                </div>
                        <?php   } if($servicio =="slc6") {?> <!-- L E T R E R O S -->
                                <div class="div-xs-12 div-sm-8 div-md-8 div-lg-8 div-xl-8 movgalery" id="galery">
                                    <div class="grid" id="servicios1"> </div>
                                    <div class="grid" id="servicios2">
                                        <div class=' div-xs-4 div-sm-6 div-md-6 div-lg-6 div-xl-3'>
                                            <img class='imgmuestraser' onclick='igs(this.id)' id='lt' src='images/servicios/lt.jpg'>
                                        </div>
                                        <div class=' div-xs-4 div-sm-6 div-md-6 div-lg-6 div-xl-3'>
                                            <img class='imgmuestraser' onclick='igs(this.id)' id='lt2' src='images/servicios/lt2.jpg'>
                                        </div>
                                        <div class=' div-xs-4 div-sm-6 div-md-6 div-lg-6 div-xl-3'>
                                            <img class='imgmuestraser' onclick='igs(this.id)' id='lt3' src='images/servicios/lt3.jpg'>
                                        </div>
                                        <div class=' div-xs-4 div-sm-6 div-md-6 div-lg-6 div-xl-3'>
                                            <img class='imgmuestraser' onclick='igs(this.id)' id='lt4' src='images/servicios/lt4.jpg'>
                                        </div>
                                        <div class=' div-xs-4 div-sm-6 div-md-6 div-lg-6 div-xl-3'>
                                            <img class='imgmuestraser' onclick='igs(this.id)' id='lt5' src='images/servicios/lt5.jpg'>
                                        </div>
                                        <div class=' div-xs-4 div-sm-6 div-md-6 div-lg-6 div-xl-3'>
                                            <img class='imgmuestraser' onclick='igs(this.id)' id='lt6' src='images/servicios/lt6.jpg'>
                                        </div>
                                        <div class=' div-xs-4 div-sm-6 div-md-6 div-lg-6 div-xl-3'>
                                            <img class='imgmuestraser' onclick='igs(this.id)' id='lt7' src='images/servicios/lt7.jpg'>
                                        </div>
                                        <div class=' div-xs-4 div-sm-6 div-md-6 div-lg-6 div-xl-3'>
                                            <img class='imgmuestraser' onclick='igs(this.id)' id='lt8' src='images/servicios/lt8.jpg'>
                                        </div>
                                        <div class=' div-xs-4 div-sm-6 div-md-6 div-lg-6 div-xl-3'>
                                            <img class='imgmuestraser' onclick='igs(this.id)' id='lt9' src='images/servicios/lt9.jpg'>
                                        </div>
                                        <div class=' div-xs-4 div-sm-6 div-md-6 div-lg-6 div-xl-3'>
                                            <img class='imgmuestraser' onclick='igs(this.id)' id='lt10' src='images/servicios/lt10.jpg'>
                                        </div>
                                        <div class=' div-xs-4 div-sm-6 div-md-6 div-lg-6 div-xl-3'>
                                            <img class='imgmuestraser' onclick='igs(this.id)' id='lt11' src='images/servicios/lt11.jpg'>
                                        </div>
                                        <div class=' div-xs-4 div-sm-6 div-md-6 div-lg-6 div-xl-3'>
                                            <img class='imgmuestraser' onclick='igs(this.id)' id='lt12' src='images/servicios/lt12.jpg'>
                                        </div>
                                    </div>
                                </div>
                                <!-- AQUI HAY UN EFECTO CONFORME AL ANCHO DE LA VENTANA, HAY QUE VER SI FUNCIONA IGUAL PARA ESTE TIPO DE USOS -->
                                <div class="qflex div-xs-12 div-sm-12 div-md-4 div-lg-4 div-xl-4 movflex" id="flex" style="opacity:1;">
                                    <div class="qflex div-xs-12 div-sm-12 div-md-12 div-lg-12 div-xl-12 movflex" id="flext" style="opacity:1;">
                                        <H1 id="title">LETREROS EN 3D, TOLDOS Y CAJAS DE LUZ</H1><br>
                                        <p id="descrip" style="font-size: 1.4em;"><b> LETREROS EN 3D <br> Materiales:<br> ROUTER FABRICACIÓN E INSTALACIÓN ANUNCIOSOS LUMINOSOS</b><br>(Estireno, coroplast, trovicel, foamboard, MDF) <b> TOLDOS <br> Materiales:<br> FABRICACIÓN DE ESTRUCTURAS E INSTALACIÓN DE LONAS</b><br>(Estireno, coroplast, trovicel, foamboard, MDF) <b> CAJAS DE LUZ <br> Materiales:<br> DISEÑO Y FABRICACIÓN DE CAJAS DE LUZ</b></p>
                                    </div>
                                </div>
                        <?php   } if($servicio =="slc7") {?> <!-- V O L U M E T R I C O -->
                            <div class="div-xs-12 div-sm-8 div-md-8 div-lg-8 div-xl-8 movgalery" id="galery">
                                    <div class="grid" id="servicios1"> </div>
                                    <div class="grid" id="servicios2">
                                        <div class=' div-xs-4 div-sm-6 div-md-6 div-lg-6 div-xl-3'>
                                            <img class='imgmuestraser' onclick='igs(this.id)' id='vol' src='images/servicios/vol.jpg'>
                                        </div>
                                        <div class=' div-xs-4 div-sm-6 div-md-6 div-lg-6 div-xl-3'>
                                            <img class='imgmuestraser' onclick='igs(this.id)' id='vol2z' src='images/servicios/vol2.jpg'>
                                        </div>
                                        <div class=' div-xs-4 div-sm-6 div-md-6 div-lg-6 div-xl-3'>
                                            <img class='imgmuestraser' onclick='igs(this.id)' id='vol3' src='images/servicios/vol3.jpg'>
                                        </div>
                                        <div class=' div-xs-4 div-sm-6 div-md-6 div-lg-6 div-xl-3'>
                                            <img class='imgmuestraser' onclick='igs(this.id)' id='vol4' src='images/servicios/vol4.jpg'>
                                        </div>
                                        <div class=' div-xs-4 div-sm-6 div-md-6 div-lg-6 div-xl-3'>
                                            <img class='imgmuestraser' onclick='igs(this.id)' id='vol5' src='images/servicios/vol5.jpg'>
                                        </div>
                                        <div class=' div-xs-4 div-sm-6 div-md-6 div-lg-6 div-xl-3'>
                                            <img class='imgmuestraser' onclick='igs(this.id)' id='vol6' src='images/servicios/vol6.jpg'>
                                        </div>
                                        <div class=' div-xs-4 div-sm-6 div-md-6 div-lg-6 div-xl-3'>
                                            <img class='imgmuestraser' onclick='igs(this.id)' id='vol7' src='images/servicios/vol7.jpg'>
                                        </div>
                                        <div class=' div-xs-4 div-sm-6 div-md-6 div-lg-6 div-xl-3'>
                                            <img class='imgmuestraser' onclick='igs(this.id)' id='vol8' src='images/servicios/vol8.jpg'>
                                        </div>
                                    </div>
                            </div>
                            <!-- AQUI HAY UN EFECTO CONFORME AL ANCHO DE LA VENTANA, HAY QUE VER SI FUNCIONA IGUAL PARA ESTE TIPO DE USOS -->
                            <div class="qflex div-xs-12 div-sm-12 div-md-4 div-lg-4 div-xl-4 movflex" id="flex" style="opacity:1;">
                                <div class="qflex div-xs-12 div-sm-12 div-md-12 div-lg-12 div-xl-12 movflex" id="flext" style="opacity:1;">
                                    <H1 id="title">VOLUMETRICOS</H1><br>
                                    <p id="descrip" style="font-size: 1.4em;"><b> DISEÑO Y PRODUCCIÓN</b></p>
                                </div>
                            </div>
                        <?php   } if($servicio =="slc8") {?> <!-- P L A Y E R A S -->
                            <div class="div-xs-12 div-sm-8 div-md-8 div-lg-8 div-xl-8 movgalery" id="galery">
                                    <div class="grid" id="servicios1"> </div>
                                    <div class="grid" id="servicios2">
                                        <div class=' div-xs-4 div-sm-6 div-md-12 div-lg-6 div-xl-3'>
                                            <img class='imgmuestraser' onclick='igs(this.id)' id='playera' src='images/servicios/playera.jpg'>
                                        </div>
                                        <div class=' div-xs-4 div-sm-6 div-md-6 div-lg-6 div-xl-3'>
                                            <img class='imgmuestraser' onclick='igs(this.id)' id='playera2' src='images/servicios/playera2.jpg'>
                                        </div>
                                        <div class=' div-xs-4 div-sm-6 div-md-6 div-lg-6 div-xl-3'>
                                            <img class='imgmuestraser' onclick='igs(this.id)' id='playera3' src='images/servicios/playera3.jpg'>
                                        </div>
                                        <div class=' div-xs-4 div-sm-6 div-md-6 div-lg-6 div-xl-3'>
                                            <img class='imgmuestraser' onclick='igs(this.id)' id='playera4' src='images/servicios/playera4.jpg'>
                                        </div>
                                        <div class=' div-xs-4 div-sm-6 div-md-6 div-lg-6 div-xl-3'>
                                            <img class='imgmuestraser' onclick='igs(this.id)' id='playera5' src='images/servicios/playera5.jpg'>
                                        </div>
                                    </div>
                            </div>
                            <!-- AQUI HAY UN EFECTO CONFORME AL ANCHO DE LA VENTANA, HAY QUE VER SI FUNCIONA IGUAL PARA ESTE TIPO DE USOS -->
                            <div class="qflex div-xs-12 div-sm-12 div-md-4 div-lg-4 div-xl-4 movflex" id="flex" style="opacity:1;">
                                <div class="qflex div-xs-12 div-sm-12 div-md-12 div-lg-12 div-xl-12 movflex" id="flext" style="opacity:1;">
                                    <H1 id="title">PLAYERAS</H1><br>
                                    <p id="descrip" style="font-size: 1.4em;"><b>Materiales: <br> PLAYERAS DE CUALQUIER TIPO DE SERIGRAFIA Y VINIL TEXTIL</b> <br> (brillosa, mate y repelente al agua)</p>
                                </div>
                            </div>
                        <?php   } if($servicio =="slc9") {?> <!-- I M P R E S I O N -->
                            <div class="div-xs-12 div-sm-8 div-md-8 div-lg-8 div-xl-8 movgalery" id="galery">
                                    <div class="grid" id="servicios1"> </div>
                                    <div class="grid" id="servicios2">
                                        <div class=' div-xs-4 div-sm-6 div-md-12 div-lg-6 div-xl-3'>
                                            <img class='imgmuestraser' onclick='igs(this.id)' id='id' src='images/servicios/id.jpg'>
                                        </div>
                                        <div class=' div-xs-4 div-sm-6 div-md-6 div-lg-6 div-xl-3'>
                                            <img class='imgmuestraser' onclick='igs(this.id)' id='id2' src='images/servicios/id2.jpg'>
                                        </div>
                                        <div class=' div-xs-4 div-sm-6 div-md-6 div-lg-6 div-xl-3'>
                                            <img class='imgmuestraser' onclick='igs(this.id)' id='id3' src='images/servicios/id3.jpg'>
                                        </div>
                                        <div class=' div-xs-4 div-sm-6 div-md-6 div-lg-6 div-xl-3'>
                                            <img class='imgmuestraser' onclick='igs(this.id)' id='id3' src='images/servicios/id4.jpg'>
                                        </div>
                                    </div>
                            </div>
                            <!-- AQUI HAY UN EFECTO CONFORME AL ANCHO DE LA VENTANA, HAY QUE VER SI FUNCIONA IGUAL PARA ESTE TIPO DE USOS -->
                            <div class="qflex div-xs-12 div-sm-12 div-md-4 div-lg-4 div-xl-4 movflex" id="flex" style="opacity:1;">
                                <div class="qflex div-xs-12 div-sm-12 div-md-12 div-lg-12 div-xl-12 movflex" id="flext" style="opacity:1;">
                                    <H1 id="title">IMPRESIÓN DIRECTA</H1><br>
                                    <p id="descrip" style="font-size: 1.4em;"><b>Materiales: <br>SUSTRATOS RIGIDOS</b> <br> (PVC, acrilico, vidrio, estireno, foamboard, coroplast, madera, MDF impreso)</p>
                                </div>
                            </div>
                        <?php   } if($servicio =="slc0") {?> <!-- I N S T A L A C I O N -->
                            <div class="div-xs-12 div-sm-8 div-md-8 div-lg-8 div-xl-8 movgalery" id="galery">
                                    <div class="grid" id="servicios1"> </div>
                                    <div class="grid" id="servicios2">
                                        <div class=' div-xs-4 div-sm-6 div-md-12 div-lg-6 div-xl-3'>
                                            <img class='imgmuestraser' onclick='igs(this.id)' id='iz' src='images/servicios/i.jpg'>
                                        </div>
                                        <div class=' div-xs-4 div-sm-6 div-md-6 div-lg-6 div-xl-3'>
                                            <img class='imgmuestraser' onclick='igs(this.id)' id='i2' src='images/servicios/i2.jpg'>
                                        </div>
                                        <div class=' div-xs-4 div-sm-6 div-md-6 div-lg-6 div-xl-3'>
                                            <img class='imgmuestraser' onclick='igs(this.id)' id='i3' src='images/servicios/i3.jpg'>
                                        </div>
                                        <div class=' div-xs-4 div-sm-6 div-md-6 div-lg-6 div-xl-3'>
                                            <img class='imgmuestraser' onclick='igs(this.id)' id='i4' src='images/servicios/i4.jpg'>
                                        </div>
                                        <div class=' div-xs-4 div-sm-6 div-md-6 div-lg-6 div-xl-3'>
                                            <img class='imgmuestraser' onclick='igs(this.id)' id='i5' src='images/servicios/i5.jpg'>
                                        </div>
                                        <div class=' div-xs-4 div-sm-6 div-md-6 div-lg-6 div-xl-3'>
                                            <img class='imgmuestraser' onclick='igs(this.id)' id='i6' src='images/servicios/i6.jpg'>
                                        </div>
                                    </div>
                            </div>
                            <!-- AQUI HAY UN EFECTO CONFORME AL ANCHO DE LA VENTANA, HAY QUE VER SI FUNCIONA IGUAL PARA ESTE TIPO DE USOS -->
                            <div class="qflex div-xs-12 div-sm-12 div-md-4 div-lg-4 div-xl-4 movflex" id="flex" style="opacity:1;">
                                <div class="qflex div-xs-12 div-sm-12 div-md-12 div-lg-12 div-xl-12 movflex" id="flext" style="opacity:1;">
                                    <H1 id="title">INSTALACIONES</H1><br>
                                    <p id="descrip" style="font-size: 1.4em;"><b>En cualquier lugar, con cualquier material</b></p>
                                </div>
                            </div>
                        <?php   } ?>

                       <?php } else { ?>
                            <div class="div-xs-12 div-sm-8 div-md-8 div-lg-8 div-xl-8" id="galery">
                                <div class="grid" id="servicios1">
                                <?php $arrayArchivos = ['formato',
                                                        'recort',
                                                        'sd',
                                                        'vinil',
                                                        'tela',
                                                        'id',
                                                        'playera',
                                                        'vol',
                                                        'lt',
                                                        'i',
                                                        'formato2',
                                                        'recort2',
                                                        'sd2',
                                                        'vinil1',
                                                        'tela2',
                                                        'id2',
                                                        'playera2',
                                                        'vol2',
                                                        'lt2',
                                                        'i2',
                                                        'formato3',
                                                        'vinil2',
                                                        'recort3',
                                                        'sd3',
                                                        'vinil3',
                                                        'tela3',
                                                        'playera3',
                                                        'vol3',
                                                        'lt3',
                                                        'i3',
                                                        'formato4',
                                                        'sd4',
                                                        'vinil4',
                                                        'tela4',
                                                        'id3',
                                                        'recort4',
                                                        'vol4',
                                                        'i4',
                                                        'lt4',
                                                        'formato5',
                                                        'playera4',
                                                        'recort5',
                                                        'tela5',
                                                        'sd5',
                                                        'vinil5',
                                                        'lt5',
                                                        'i5',
                                                        'vol5',
                                                        'formato6',
                                                        'id4',
                                                        'playera5',
                                                        'recort6',
                                                        'tela6',
                                                        'sd6',
                                                        'vinil6',
                                                        'lt6',
                                                        'vol6',
                                                        'playera6',
                                                        'i6',
                                                        'formato7',
                                                        'tela7',
                                                        'recort7',
                                                        'sd7',
                                                        'vinil7',
                                                        'vol7',
                                                        'lt7'];
                                        $arrayId =['formato',
                                                        'recort',
                                                        'sd',
                                                        'vinil',
                                                        'tela',
                                                        'id',
                                                        'playeraz',
                                                        'vol',
                                                        'lt',
                                                        'i',
                                                        'formato2',
                                                        'recort2',
                                                        'sd2',
                                                        'vinil1',
                                                        'tela2z',
                                                        'id2',
                                                        'playeraz',
                                                        'vol2z',
                                                        'lt2',
                                                        'i2',
                                                        'formato3',
                                                        'vinil2',
                                                        'recort3',
                                                        'sd3',
                                                        'vinil3',
                                                        'tela3',
                                                        'playera3',
                                                        'vol3',
                                                        'lt3',
                                                        'i3',
                                                        'formato4',
                                                        'sd4z',
                                                        'vinil4',
                                                        'tela4',
                                                        'id3',
                                                        'recort4z',
                                                        'vol4',
                                                        'i4',
                                                        'lt4',
                                                        'formato5z',
                                                        'playera4',
                                                        'recort5',
                                                        'tela5z',
                                                        'sd5z',
                                                        'vinil5',
                                                        'lt5',
                                                        'i5',
                                                        'vol5',
                                                        'formato6z',
                                                        'id4',
                                                        'playera5',
                                                        'recort6',
                                                        'tela6',
                                                        'sd6z',
                                                        'vinil6',
                                                        'lt6',
                                                        'vol6',
                                                        'playera6z',
                                                        'i6',
                                                        'formato7',
                                                        'tela7z',
                                                        'recort7',
                                                        'sd7',
                                                        'vinil7',
                                                        'vol7',
                                                        'lt7'];
                                for ($i=0; $i < 65; $i++) { 
                                    $archivo = "images/servicios/".$arrayArchivos[$i].".jpg";
                                    $img = getimagesize($archivo);
                                    $w = $img[0];
                                    $h = $img[1];
                                    if($h < $w) {?>
                                        <div class="outmarg div-xs-4 div-sm-6 div-md-4 div-lg-6 div-xl-3">
                                            <img class="imgmuestraser" id="<?php echo $arrayId[$i]?>" onclick="igs(this.id,1)" src="<?php echo $archivo; ?>" >
                                        </div>
                                    <?php }elseif ($h > $w) { ?>
                                        <div class="outmarg div-xs-4 div-sm-6 div-md-12 div-lg-6 div-xl-3">
                                            <img class="imgmuestraser imgp2" id="<?php echo $arrayId[$i]?>" onclick="igs(this.id,1)" src="<?php echo $archivo; ?>" >
                                        </div>
                                <?php } ?> <!-- FINAL DE  ELSEIF -->
                                <?php } ?> <!-- FINAL DE  FOR -->
                                </div>
                                <div class="grid" id="servicios2">
                                
                                </div>
                            </div>
                            <div class="qflex div-xs-12 div-sm-12 div-md-4 div-lg-4 div-xl-4" id="flex">
                                <div class="qflex div-xs-12 div-sm-12 div-md-12 div-lg-12 div-xl-12" id="flext">
                                    <H1 id="title">SERVICIO SELECCIONADO</H1><br>
                                    <p id="descrip" style="font-size: 1.4em;">Lorem ipsum dolor sit amet consectetur adipiscing elit, tortor nullam commodo nibh non aliquet senectus mi, tempus dictum inceptos habitant per class. Porttitor vulputate netus sagittis semper est ridiculus eleifend vestibulum, mus sociis magnis diam ligula nibh enim habitasse, fames pharetra proin et cum mattis mollis. Varius ultrices interdum feugiat donec taciti tincidunt, malesuada tempor commodo libero scelerisque, curabitur ullamcorper tristique enim inceptos. Ac conubia dictum facilisi nascetur et potenti dictumst, cum at vestibulum class sagittis interdum parturient urna, felis mollis donec torquent mauris suspendisse. Nec proin sociosqu dui faucibus quis curae cras semper fames ultricies tristique sollicitudin, rutrum nam magnis libero egestas accumsan eget cum suspendisse condimentum commodo, aliquet iaculis cursus dignissim suscipit viverra convallis netus mollis id habitant. Senectus porta auctor interdum dapibus elementum integer enim orci ornare quam, proin natoque gravida dictumst nostra ut suscipit ac. Inceptos habitasse sociosqu tellus purus nibh vestibulum condimentum id, dignissim curae tempus dictum nascetur egestas commodo metus congue, rutrum neque non curabitur varius platea vehicula. Porttitor nascetur consequat nunc mattis quis himenaeos dis sed imperdiet ac, laoreet curabitur eros convallis netus mauris orci gravida dignissim facilisis bibendum, erat tincidunt mi metus blandit tortor ligula inceptos nulla. Donec magna nam tristique dictumst aenean sodales augue dignissim pellentesque malesuada litora, mauris conubia convallis id a interdum sapien tellus cras cum. Nascetur montes per eget ridiculus ligula class quisque congue, ornare vulputate platea nam lectus blandit sem, lacus egestas velit facilisis ullamcorper volutpat fames. Rhoncus est quis metus feugiat vehicula eu, etiam odio platea proin libero morbi, magnis ridiculus elementum donec eros. Nulla taciti etiam tristique praesent tortor nullam volutpat, integer nisi metus ut dui phasellus, eleifend fermentum cubilia quisque platea magna. Pharetra massa morbi lacinia inceptos curabitur aliquet gravida, nisi diam ridiculus turpis orci ultrices, enim cras bibendum lacus nibh consequat.</p>
                                </div>
                            </div>

                       <?php } ?>
                </div>
            </div>
        </div>
    </div>
</body>

</html>

