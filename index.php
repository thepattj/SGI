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
    $arrayColores = ['0,255,255,.8', '255,0,255,.8', '255,255,0,.8'];
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
                  <h1 onclick="seccion('contact')" class="menuh">Contacto</h1>
                </div>

            </div>
        </div>
        <div class="body">
          <div class="div-xs-12 div-sm-12 div-md-12 div-lg-12 div-xl-12">
              <H3 id="eslo" style="display:none;">Soluciones Graficas e Industriales</H3>
          </div>
          <div class="grid">
                <?php $arrayNombres = ['Vinil de recorte',
                                       'Gran Formato',
                                       'Stand y Display', 
                                       'Autos, Vinil y Rotulación',
                                       'Playeras',
                                       'Tela',
                                       'Letreros en 3D, Cajas de luz y mas',
                                       'Impresiones',
                                       'Instalaciones',
                                       'Volumetricos',
                                       'Mas informacion sobre nosotros',
                                       'Ubicanos'];
                      $arraySeccion =['slc2',
                                      'slc4',
                                      'slc1',
                                      'slc3',
                                      'slc8',
                                      'slc5',
                                      'slc6',
                                      'slc9',                                      
                                      'slc0',
                                      'slc7',
                                      '',
                                      ''];
                      $arrayArchivos = ['recorte', 
                                        'lona',
                                        'stand',
                                        'superficie',
                                        'camisa',
                                        'tela',
                                        'letreros',
                                        'impresion',                                        
                                        'instalacion',
                                        'volumetrico',
                                        'us',
                                        'location'];
                for ($i=0; $i < 12; $i++) { 
                  $archivo = "images/galeriain/".$arrayArchivos[$i].".jpg";
                  $img = getimagesize($archivo);
                  $w = $img[0];
                  $h = $img[1];
                  
                  if($h < $w) {?> 
                    <div class="outmarg div-xsp-6 div-smp-6 div-mdp-6 div-lgp-3 div-xlp-3">
                      <?php if($i == 10) {?>
                          <div class="fig" onclick="seccion('us')">
                            <img class="imgmuestra" src="<?php echo $archivo; ?>" id="textimg" >
                            <div class="figcap">
                                  <h3><?php echo $arrayNombres[$i]; ?> </h3> 
                            </div>
                          </div>
                      <?php }else if($i==11) {?>
                          <div class="fig" onclick="seccion('contact')">
                            <img class="imgmuestra" src="<?php echo $archivo; ?>" id="textimg" >
                            <div class="figcap">
                                  <h3><?php echo $arrayNombres[$i]; ?> </h3>
                            </div>
                          </div>
                      <?php } else if($i <> 10 && $i <> 11 ) {?>
                          <div class="fig" onclick="pag('serv.php?s=<?php echo $arraySeccion[$i]; ?>&i=1')">
                            <img class="imgmuestra" src="<?php echo $archivo; ?>" id="textimg" >
                            <div class="figcap">
                                  <h3><?php echo $arrayNombres[$i]; ?> </h3> 
                            </div>
                          </div>
                      <?php }?>
                    </div>
                  <?php }elseif ($h > $w) { ?>
                    <div class="outmarg div-xsp-6 div-smp-6 div-mdp-6 div-lgp-3 div-xlp-3">
                        <div class="fig">
                          <img class="imgmuestra imgp" src="<?php echo $archivo; ?>" id="textimg" >
                          <div class="figcap">
                                <h3><?php echo $arrayNombres[$i]; ?> </h3> 
                                <?php if($i == 8) {?>
                                    <a href="us.php">Click aqui</a>
                                <?php }else if($i==11) {?>
                                    <a href="contact.php">Click aqui</a>
                                <?php } else if($i <> 8 && $i <> 11 ) {?>
                                    <a href="serv.php?s=<?php echo $arraySeccion[$i]; ?>&i=1">Click aqui</a>
                                <?php }?>
                          </div>
                        </div>
                    </div>
                  <?php } ?> <!-- FINAL DE  ELSEIF -->
                <?php } ?> <!-- FINAL DE  FOR -->
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