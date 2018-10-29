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
    <style type="text/css">
        #example-view-filters {
    overflow: hidden;
    position:relative;
    height:450px;
}
#example-trigger-toggle {
    cursor: pointer;
}
#example-element-toggle {
    display:none;
}
#example-toggled-element {
    position:absolute;
    right:0px;
    width:100%;  
    -webkit-transition: all 1s;
    -moz-transition: all 1s;
    -mos-transition: all 1s;
    -o-transition: all 1s;
    transition: all 1s;
}
#example-element-toggle:not(:checked) ~ #example-toggled-element {
    right:-1000px;
}



    </style>
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
        <div class="header" style="background: rgba( <?php echo $colorsel; ?> )  !important;">
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
                <div class="outmarg div-xlp-3">
                    <div id="example-view-filters">
                            <p>Para ver el efecto en acción pincha en el botón:</p>
                            <label for="example-element-toggle" id="example-trigger-toggle"><span class="btn btn-success">Disparador</span></label> <input id="example-element-toggle" type="checkbox">
                            <div id="example-toggled-element">
                                <div class="text-center"><i aria-hidden="true" class="fa fa-smile-o fa-5x">&nbsp;</i></div>
                                    &nbsp;
                                    <pre>&lt;div id="example-view-filters"&gt;
                                        &lt;p&gt;
                                        Para ver el efecto en acción pincha en el botón:
                                        &lt;/p&gt;
                                        &lt;label for="example-element-toggle" id="example-trigger-toggle"&gt;&lt;span class="btn btn-success"&gt;&amp;Disparador&lt;/span&gt;&lt;/label&gt; &lt;input id="example-element-toggle" type="checkbox" /&gt;
                                        &lt;div id="example-toggled-element"&gt;
                                            &lt;i aria-hidden="true" class="fa fa-smile-o fa-5x"&gt;&amp;nbsp;&lt;/i&gt;
                                        &lt;/div&gt;
                                        &lt;/div&gt;
                                    </pre>
                                </div>
                            </div>
                        </div>    
                </div>
            </div>
        </div>
        <div class="footer">
            <div class="div-xs-4 div-sm-4 div-md-4 div-lg-4 div-xl-4"></div>
            <div class="div-xs-4 div-sm-4 div-md-4 div-lg-4 div-xl-4">
                <div class="div-xs-6 div-sm-6 div-md-6 div-lg-6 div-xl-6">
                    <a href="https://www.facebook.com/sgimexico/" target="_blank"> <img id="redes" src="images/icon/facebook.png">
                    </a>
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