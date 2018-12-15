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
</head>

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
        <li class="nav-item">
          <a class="nav-link" onclick="seccion('contact')" href="#">CONTACTO</a>
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
          <div class="row" id="grid">
          <?php 
            $arrayNombres = ['Vinil de recorte','Gran Formato','Stand y Display','Autos, Vinil y Rotulación','Playeras','Tela','Letreros en 3D, Cajas de luz y más','Impresiones','Instalaciones','Volumétricos','Más información sobre nosotros','Ubícanos'];
            $arraySeccion =['slc2','slc4','slc1','slc3','slc8','slc5','slc6','slc9','slc0','slc7','',''];
            $arrayArchivos = ['recorte','lona','stand','superficie','camisa','tela','letreros','impresion','instalacion','volumetrico','us','location'];
           for ($i=0; $i < 12; $i++) { 
              $archivo = "images/galeriain/".$arrayArchivos[$i].".jpg";
              /* $img = getimagesize($archivo);
              $w = $img[0];
              $h = $img[1]; */?> 
              <div class="outmarg col-sm-6 col-md-6 col-lg-3 col-xl-3">
                <?php if($i == 10) {?>
                  <div class="fig" onclick="seccion('us')">
                    <img class="imgmuestra" src="<?php echo $archivo; ?>" id="textimg" >
                    <div class="figcap">
                      <h5><?php echo $arrayNombres[$i]; ?> </h5> 
                    </div>
                  </div>
                <?php }else if($i==11) {?>
                  <div class="fig" onclick="seccion('contact')">
                      <img class="imgmuestra" src="<?php echo $archivo; ?>" id="textimg" >
                      <div class="figcap">
                        <h4><?php echo $arrayNombres[$i]; ?> </h4>
                      </div>
                  </div>
                <?php } else if($i <> 10 && $i <> 11 ) {?>
                  <div class="fig" onclick="pag('serv.php?s=<?php echo $arraySeccion[$i]; ?>&i=1')">
                    <img class="imgmuestra" src="<?php echo $archivo; ?>" id="textimg" >
                    <div class="figcap">

                      <?php if($i == 6){?> 
                        <h5><?php echo $arrayNombres[$i]; ?> </h4>
                      <?php } else { ?> 
                        <h4><?php echo $arrayNombres[$i]; ?> </h4>
                      <?php } ?>

                    </div>
                  </div>
                <?php }?>
              </div>
          <?php } ?> <!-- FINAL DE  FOR -->               
          </div>
        </div>

        
        
        <div class="footer">
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
        </div>
    </div>
</body>
</html>