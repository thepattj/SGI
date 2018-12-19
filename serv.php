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
    <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
    <link rel="stylesheet" href="css/bootstrap.min.css">
    <link rel="stylesheet" type="text/css" href="css/styles.css">

    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
    <script src="https://code.jquery.com/jquery-3.3.1.min.js" ></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
    <!-- <script href="js/bootstrap.min.js"></script> -->
    <!-- <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script> -->
    <script src="js/bootstrap.min.js"></script>
    <script type="text/javascript" src="js/funciones.js"></script>
</head>
<?php
    $servicio = $_GET['s'];
    $vindex = $_GET['i'];
?>
<body>
<nav class="navbar navbar-expand-lg navbar-light" role="navigation">
    <a class="navbar-brand" href="#">
      <img id="logo" src="images/logo.png" width="45" height="30" class="d-inline-block align-top" alt="">
    </a>
    <span class="navbar-text" id="titulo";> <strong> SOLUCIONES GRÁFICAS E INDUSTRIALES </strong> </span>
      
    <span class="navbar-text" id="titulo"></span>
    <span class="navbar-text" id="titulo"></span>
    <span class="navbar-text" id="titulo"></span>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <a class="nav-link" style="color: black !important" onclick="seccion('us')" href="#">NOSOTROS</a>
        </li>
        <li class="nav-item active">
          <a class="nav-link" style="color: black !important"  onclick="seccion('serv')" href="#"><b>SERVICIOS</b></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" style="color: black !important"  onclick="seccion('contact')" href="#">CONTACTO</a>
        </li>
      </ul>
    </div>
  </nav>
    
    <!-- **** ESTE ES EL MODAL **** -->
    <div id="bg-negro" onclick="cerrar()"></div>
    <div id="modal"></div>
    
    <div class="bgs">
        <div class="body2">
            <div class="informacion">
                <div class="selector">
                    <div class="div-md-1"></div>
                    <div class="div-sm-12 div-md-10 div-lg-12 div-xl-12">
                        <div class="div-xs-2 div-sm-2 div-md-2 div-lg-2 div-xl-2" id="slc1" value="STANDS Y DISPLAYS"><span style="text-align: center !important;" class="secciones"><b>STANDS Y DISPLAYS</b></span></div>
                        <div class="div-xs-2 div-sm-2 div-md-2 div-lg-2 div-xl-2" id="slc2" value="VINIL DE RECORTE"><span style="text-align: center !important;" class="secciones"><b>VINIL PARA RECORTE</b></span></div>
                        <div class="div-xs-2 div-sm-2 div-md-2 div-lg-2 div-xl-2" id="slc3" value="AUTOS, VINIL y ROTULACIÓN"><span style="text-align: center;" class="secciones"><b>VINIL Y ROTULACIÓN</b> </span> </div>
                        <div class="div-xs-2 div-sm-2 div-md-2 div-lg-2 div-xl-2" id="slc4" value="GRAN FORMATO"><span style="text-align: center !important;" class="secciones"><b>GRAN FORMATO</b></span></div>
                        <div class="div-xs-2 div-sm-2 div-md-2 div-lg-2 div-xl-2" id="slc5" value="TELA"><span class="secciones"><b>TELA</b></span></div>
                        <div class="div-xs-2 div-sm-2 div-md-2 div-lg-2 div-xl-2" id="slc6" value="LETREROS EN 3D, TOLDOS Y CAJAS DE LUZ "><span style="text-align: center !important;" class="secciones"><b>LETREROS EN 3D y MÁS</b></span></div>
                        <div class="div-xs-2 div-sm-2 div-md-2 div-lg-2 div-xl-2" id="slc7" value="VOLUMÉTRICOS"><span  class="secciones"><b>VOLUMÉTRICOS</b></span></div>
                        <div class="div-xs-2 div-sm-2 div-md-2 div-lg-2 div-xl-2" id="slc8" value="PLAYERAS"><span  class="secciones"><b>PLAYERAS</b> </span> </div>
                        <div class="div-xs-2 div-sm-2 div-md-2 div-lg-2 div-xl-2" id="slc9" value="IMPRESIÓN DIRECTA"><span style="text-align: center !important;" class="secciones"><b>IMPRESIÓN DIRECTA</b> </span> </div>
                        <div class="div-xs-2 div-sm-2 div-md-2 div-lg-2 div-xl-2" id="slc0" value="INSTALACIONES"><span  class="secciones"><b>INSTALACIONES</b></span> </div>
                    </div>
                    <div class="div-md-1"></div>
                </div>
                <div class="menu">
                <div class="div-sm-12 div-md-12"> <H5> SELECCIONA UNO DE NUESTROS SERVICIOS </H5> </div>
                    <div class="div-sm-12 div-md-12" id="seleccion">
                        <select>
                            <option  value="">Selecciona una opción</option>
                            <option  value="">STANDS Y DISPLAYS</option>
                            <option  value="">VINIL DE RECORTE</option>
                            <option  value="">AUTOS, VINIL y ROTULACIÓN</option>
                            <option  value="">GRAN FORMATO</option>
                            <option  value="">TELA</option>
                            <option  value="">LETREROS EN 3D, TOLDOS Y CAJAS DE LUZ</option>
                            <option  value="">VOLUMÉTRICOS</option>
                            <option  value="">PLAYERAS</option>
                            <option  value="">IMPRESIÓN DIRECTA</option>
                            <option  value="">INSTALACIONES</option>
                        </select>
                    </div>
                    <div class="div-md-1 div-xl-2"></div>
                </div>
                <?php if($vindex == 0){?>
                <div class="otro" id="galerias">
                    <div class="div-sm-12 div-md-12 div-lg-12 div-xl-8" id="galery">
                        <div class="grid" id="servicios1">
                            <?php $arrayArchivos = ['formato', 'recort', 'sd', 'vinil', 'tela', 'id', 'vol','lt','in','formato2','recort2','sd2','vinil1','tela2','id2','playeraz','vol2','lt2','in2','formato3','vinil2','recort3','sd3','vinil3','tela3','playera3','vol3','lt3','in3','formato4','sd4','vinil4','tela4','id3','recort4','vol4','in4','lt4','formato5','playera4','recort5','tela5','sd5','vinil5','lt5','in5','vol5','formato6','id4','playera5','recort6','tela6','sd6','vinil6','lt6','vol6','playera6','in6','formato7','tela7','recort7','sd7','vinil7','vol7','lt7'];
                                  $arrayId =['formato','recort','sd','vinil','tela','id','vol','lt','in','formato2','recort2','sd2','vinil1','tela2z','id2','playeraz','vol2z','lt2','in2','formato3','vinil2','recort3','sd3','vinil3','tela3','playera3','vol3','lt3','in3','formato4','sd4z','vinil4','tela4','id3','recort4z','vol4','in4','lt4','formato5z','playera4','recort5z','tela5z','sd5z','vinil5','lt5','in5','vol5','formato6z','id4','playera5','recort6','tela6','sd6z','vinil6','lt6','vol6','playera6z','in6','formato7','tela7z','recort7','sd7','vinil7','vol7','lt7'];
                                  for ($i=0; $i < 64; $i++) { 
                                        $archivo = "images/servicios/".$arrayArchivos[$i].".jpg";
                                        /* $img = getimagesize($archivo);
                                        $w = $img[0];
                                        $h = $img[1];
                                        if($h < $w) { */?>
                                        <div class="outserm div-sm-6 div-md-4 div-lg-6 div-xl-3">
                                            <img class="imgmuestraser" id="<?php echo $arrayId[$i]?>" onclick="igs(this.id,1)" src="<?php echo $archivo; ?>" >
                                        </div>
                            <?php } ?> <!-- FINAL DE  FOR -->
                        </div>
                    </div>
                </div>
                <div class="row" id="unicoservi">
                    
                </div>
                <?php }else{ ?>
                    <div class="row" id="unicoservi">
                        <?php 
                            include 'envio.php';
                            
                            if($servicio == "slc1"){
                                stand();
                            } if($servicio == "slc2") { 
                                recorte(); 
                            } if($servicio == "slc3") {
                                vinil();
                            } if($servicio == "slc4") {
                                gran();
                            } if($servicio == "slc5") {
                                tela();
                            } if($servicio == "slc6") {
                                letrero();
                            } if($servicio == "slc7") {
                                volu();
                            } if($servicio == "slc8") {
                                play();
                            } if($servicio == "slc9") { 
                                impre();
                            } if($servicio == "slc0") { 
                                insta();
                            }?>
                    </div>
                <?php } ?>
            </div>
        </div> <!-- CIERRA BODY -->
        <!-- FOOTER -->
        <footer class="footer">
          <div class="row" id="rf" style="width:99%;">
            <div class="col-4 col-sm-4 col-md-3 col-lg-3 col-xl-3 ">
              <p id="face-foo" class="center-block" style=""><b>SÍGUENOS EN:</b> <a href="https://www.facebook.com/sgimexico/" target="_blank"> <img class="" id="imagfoo" src="images/icon/facebook.png" style="" > </a> </p>
            </div>
            <div class="col-4 col-sm-4 col-md-3 col-lg-3 col-xl-3" style="border-left: 2px solid white; margin-top: 1.5vh;" id="divfoo">
              <p id="title-foo" class="center-block" style=""><b>CONTÁCTANOS: </b></p>
            </div>
            <div id="col-foo1" class="col-4 col-sm-4 col-md-3 col-lg-3 col-xl-3 text-left">
               <p class="textofoo" style=""> <img class="iconfoo" id="" src="images/icon/contact.png" style="" > Ulises Reséndiz / Director Comercial</p>
               <p class="textofoo" style=""> <img class="iconfoo" id="" src="images/icon/phone.png" style="" > 55 4192 1881</p>
               <p class="textofoo" style=""> <img class="iconfoo" id="" src="images/icon/mail.png" style="" >  ulises@gruposgi.com.mx</p>              
            </div>
            <div id="col-foo" class="col-4 col-sm-4 col-md-3 col-lg-3 col-xl-3 text-left">
              <p class="textofoo" style=""> <img class="iconfoo" id="" src="images/icon/contact.png" style=""> Alberto Martínez / Director de Operaciones</p>
              <p class="textofoo" style=""> <img class="iconfoo" id="" src="images/icon/phone.png" style="" > 55 4056 098</p>
              <p class="textofoo" style=""> <img class="iconfoo" id="" src="images/icon/mail.png" style="" >  alberto@gruposgi.com.mx</p>              
            </div>
          </div>
        </footer>
    </div><!-- CIERRA DE BG -->
</body>

</html>

