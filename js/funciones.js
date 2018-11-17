var varible = 0;
sessionStorage.setItem("ulrm",'a');

$(document).ready(function () {
    $clic = 0;
    /*$('.imgmuestraser').click(function(){
        var na= $('.imgmuestraser').attr('id')+".jpg";
        alert("esto va hacer que salga el modal con la imagen. El valor fue:"+na);
        verImagenModal('grande', na, 'X', '(C)')
    });*/

    //alert("ESTE ES EL BOTON DE MENU");
    $('#icons').click(function () {
        verModal('grande', 'INICIO', 'NOSOTROS', 'SERVICIOS', 'CONTACTO', 'X', 'Platillo Preparado con tortillas previamente sazonadas con la salsa que el comensal selecciono, con una guarnición de Pollo o Huevo al gusto.');
    });
    //REDIRECCIONAMIENTO DE LOGO
    $('#logo').click(function () {
        $(location).attr('href', 'index.php');
    });

    $('#slc1').click(function () { //STANDS bien
        $('#servicios1').css({ "display": "none" });
        var imagenes = "<div class=' div-xs-4 div-sm-6 div-md-6 div-lg-6 div-xl-3'>" +
            "<img class='imgmuestraser' onclick='igs(this.id,2)' id='sd' src='images/servicios/sd.jpg'>" +
            "</div>" +
            "<div class=' div-xs-4 div-sm-6 div-md-6 div-lg-6 div-xl-3'>" +
            "<img class='imgmuestraser' onclick='igs(this.id,2)' id='sd2' src='images/servicios/sd2.jpg'>" +
            "</div>" +
            "<div class=' div-xs-4 div-sm-6 div-md-6 div-lg-6 div-xl-3'>" +
            "<img class='imgmuestraser' onclick='igs(this.id,2)' id='sd3' src='images/servicios/sd3.jpg'>" +
            "</div>" +
            "<div class=' div-xs-4 div-sm-6 div-md-6 div-lg-6 div-xl-3'>" +
            "<img class='imgmuestraser' onclick='igs(this.id,2)' id='sd4z' src='images/servicios/sd4.jpg'>" +
            "</div>" +
            "<div class=' div-xs-4 div-sm-6 div-md-6 div-lg-6 div-xl-3'>" +
            "<img class='imgmuestraser' onclick='igs(this.id,2)' id='sd5z' src='images/servicios/sd5.jpg'>" +
            "</div>" +
            "<div class=' div-xs-4 div-sm-6 div-md-6 div-lg-6 div-xl-3'>" +
            "<img class='imgmuestraser' onclick='igs(this.id,2)' id='sd6z' src='images/servicios/sd6.jpg'>" +
            "</div>" +
            "<div class=' div-xs-4 div-sm-6 div-md-6 div-lg-6 div-xl-3'>" +
            "<img class='imgmuestraser' onclick='igs(this.id,2)' id='sd7' src='images/servicios/sd7.jpg'>" +
            "</div>" +
            "<div class=' div-xs-4 div-sm-6 div-md-6 div-lg-6 div-xl-3'>" +
            "<img class='imgmuestraser' onclick='igs(this.id,2)' id='sd8' src='images/servicios/sd8.jpg'>" +
            "</div>" +
            "<div class=' div-xs-4 div-sm-6 div-md-6 div-lg-6 div-xl-3'>" +
            "<img class='imgmuestraser' onclick='igs(this.id,2)' id='sd9' src='images/servicios/sd9.jpg'>" +
            "</div>" +
            "<div class=' div-xs-4 div-sm-6 div-md-6 div-lg-6 div-xl-3'>" +
            "<img class='imgmuestraser' onclick='igs(this.id,2)' id='sd10' src='images/servicios/sd10.jpg'>" +
            "</div>" +
            "<div class=' div-xs-4 div-sm-6 div-md-6 div-lg-6 div-xl-3'>" +
            "<img class='imgmuestraser' onclick='igs(this.id,2)' id='sd11' src='images/servicios/sd11.jpg'>" +
            "</div>"+
            "<div class=' div-xs-4 div-sm-6 div-md-6 div-lg-6 div-xl-3'>" +
            "<img class='imgmuestraser' onclick='igs(this.id,2)' id='sd12z' src='images/servicios/sd12.jpg'>" +
            "</div>";
        $('#servicios2').html(imagenes);

        var texto = $('#slc1').attr('value');
        $('#title').html(texto);
        var desc = "<b> Materiales: <br> MDF, triplay, trovicel, coroplast, foamboard, lámina, microalambre, aluminio entre otros</b>";
        $('#descrip').html(desc);

        $ventana_ancho = $(window).width();
        //alert($ventana_ancho);
        if ($ventana_ancho >=1024) {
            $('#galery').addClass("movgalery");
            $('#flex').addClass("movflex");
            $('#flext').addClass("movflex");
            setTimeout(function () { $('#flext').css({ "opacity": 1 }); $('#flex').css({ "opacity": 1 }); }, 3000);

        } else if ($ventana_ancho < 1024) {
            //alert("es un dispositivo movil");
            $('#flex').css({ "display": "block" });
            $('#flext').css({ "display": "block" });
            $('#flex').css({ "margin-left": "0%" });
            $('#flext').css({ "margin-left": "0%" });
            //alert($(".informacion").scrollTop() + " px INFO");
            $('.informacion').animate({ scrollTop: 9999 }, 2000);
            setTimeout(function () { $('#flext').css({ "opacity": 1 }); $('#flex').css({ "opacity": 1 }); }, 50);
            /* $('.informacion').scrollTop(); */
        }
    });
    $('#slc2').click(function () { //VINIL DE RECORTE bien
        $('#servicios1').css({ "display": "none" });
        var imagenes = "<div class=' div-xs-4 div-sm-6 div-md-6 div-lg-6 div-xl-3'>" +
            "<img class='imgmuestraser' onclick='igs(this.id,2)' id='recort' src='images/servicios/recort.jpg'>" +
            "</div>" +
            "<div class=' div-xs-4 div-sm-6 div-md-6 div-lg-6 div-xl-3'>" +
            "<img class='imgmuestraser' onclick='igs(this.id,2)' id='recort2' src='images/servicios/recort2.jpg'>" +
            "</div>" +
            "<div class=' div-xs-4 div-sm-6 div-md-6 div-lg-6 div-xl-3'>" +
            "<img class='imgmuestraser' onclick='igs(this.id,2)' id='recort3' src='images/servicios/recort3.jpg'>" +
            "</div>" +
            "<div class=' div-xs-4 div-sm-6 div-md-6 div-lg-6 div-xl-3'>" +
            "<img class='imgmuestraser' onclick='igs(this.id,2)' id='recort4z' src='images/servicios/recort4.jpg'>" +
            "</div>" +
            "<div class=' div-xs-4 div-sm-6 div-md-6 div-lg-6 div-xl-3'>" +
            "<img class='imgmuestraser' onclick='igs(this.id,2)' id='recort5z' src='images/servicios/recort5.jpg'>" +
            "</div>" +
            "<div class=' div-xs-4 div-sm-6 div-md-6 div-lg-6 div-xl-3'>" +
            "<img class='imgmuestraser' onclick='igs(this.id,2)' id='recort6' src='images/servicios/recort6.jpg'>" +
            "</div>" +
            "<div class=' div-xs-4 div-sm-6 div-md-6 div-lg-6 div-xl-3'>" +
            "<img class='imgmuestraser' onclick='igs(this.id,2)' id='recort7' src='images/servicios/recort7.jpg'>" +
            "</div>" +
            "<div class=' div-xs-4 div-sm-6 div-md-6 div-lg-6 div-xl-3'>" +
            "<img class='imgmuestraser' onclick='igs(this.id,2)' id='recort8' src='images/servicios/recort8.jpg'>" +
            "</div>" +
            "<div class=' div-xs-4 div-sm-6 div-md-6 div-lg-6 div-xl-3'>" +
            "<img class='imgmuestraser' onclick='igs(this.id,2)' id='recort9' src='images/servicios/recort9.jpg'>" +
            "</div>" +
            "<div class=' div-xs-4 div-sm-6 div-md-6 div-lg-6 div-xl-3'>" +
            "<img class='imgmuestraser' onclick='igs(this.id,2)' id='recort10' src='images/servicios/recort10.jpg'>" +
            "</div>";
        $('#servicios2').html(imagenes);

        var texto = $('#slc2').attr('value');
        $('#title').html(texto);
        var desc = "<b>Materiales: <br> RECORTE </b> <br>(a uno o varios colores)<br><b>ESMERILADO </b> (recorte e impreso)";
        $('#descrip').html(desc);

        $ventana_ancho = $(window).width();
        //alert($ventana_ancho);
        if ($ventana_ancho >=1024) {
            $('#galery').addClass("movgalery");
            $('#flex').addClass("movflex");
            $('#flext').addClass("movflex");
            setTimeout(function () { $('#flext').css({ "opacity": 1 }); $('#flex').css({ "opacity": 1 }); }, 3000);
        } else if ($ventana_ancho < 1024) {
            //alert("es un dispositivo movil");
            $('#flex').css({ "display": "block" });
            $('#flext').css({ "display": "block" });
            $('#flex').css({ "margin-left": "0%" });
            $('#flext').css({ "margin-left": "0%" });
            //alert($(".informacion").scrollTop() + " px INFO");
            $('.informacion').animate({ scrollTop: 9999 }, 2000);
            setTimeout(function () { $('#flext').css({ "opacity": 1 }); $('#flex').css({ "opacity": 1 }); }, 50);
            /* $('.informacion').scrollTop(); */
        }
    });
    $('#slc3').click(function () { // VINIL bien
        $('#servicios1').css({ "display": "none" });
        var imagenes = "<div class=' div-xs-4 div-sm-6 div-md-6 div-lg-6 div-xl-3'>" +
            "<img class='imgmuestraser' onclick='igs(this.id,2)' id='vinil' src='images/servicios/vinil.jpg'>" +
            "</div>" +
            "<div class=' div-xs-4 div-sm-6 div-md-6 div-lg-6 div-xl-3'>" +
            "<img class='imgmuestraser' onclick='igs(this.id,2)' id='vinil1' src='images/servicios/vinil1.jpg'>" +
            "</div>" +
            "<div class=' div-xs-4 div-sm-6 div-md-6 div-lg-6 div-xl-3'>" +
            "<img class='imgmuestraser' onclick='igs(this.id,2)' id='vinil2' src='images/servicios/vinil2.jpg'>" +
            "</div>" +
            "<div class=' div-xs-4 div-sm-6 div-md-6 div-lg-6 div-xl-3'>" +
            "<img class='imgmuestraser' onclick='igs(this.id,2)' id='vinil3' src='images/servicios/vinil3.jpg'>" +
            "</div>" +
            "<div class=' div-xs-4 div-sm-6 div-md-6 div-lg-6 div-xl-3'>" +
            "<img class='imgmuestraser' onclick='igs(this.id,2)' id='vinil4' src='images/servicios/vinil4.jpg'>" +
            "</div>" +
            "<div class=' div-xs-4 div-sm-6 div-md-6 div-lg-6 div-xl-3'>" +
            "<img class='imgmuestraser' onclick='igs(this.id,2)' id='vinil5' src='images/servicios/vinil5.jpg'>" +
            "</div>" +
            "<div class=' div-xs-4 div-sm-6 div-md-6 div-lg-6 div-xl-3'>" +
            "<img class='imgmuestraser' onclick='igs(this.id,2)' id='vinil6' src='images/servicios/vinil6.jpg'>" +
            "</div>"+
            "<div class=' div-xs-4 div-sm-6 div-md-6 div-lg-6 div-xl-3'>" +
            "<img class='imgmuestraser' onclick='igs(this.id,2)' id='vinil7' src='images/servicios/vinil7.jpg'>" +
            "</div>"+
            "<div class=' div-xs-4 div-sm-6 div-md-6 div-lg-6 div-xl-3'>" +
            "<img class='imgmuestraser' onclick='igs(this.id,2)' id='vinil8' src='images/servicios/vinil8.jpg'>" +
            "</div>" +
            "<div class=' div-xs-4 div-sm-6 div-md-6 div-lg-6 div-xl-3'>" +
            "<img class='imgmuestraser' onclick='igs(this.id,2)' id='vinil9' src='images/servicios/vinil9.jpg'>" +
            "</div>" +
            "<div class=' div-xs-4 div-sm-6 div-md-6 div-lg-6 div-xl-3'>" +
            "<img class='imgmuestraser' onclick='igs(this.id,2)' id='vinil10' src='images/servicios/vinil10.jpg'>" +
            "</div>" +
            "<div class=' div-xs-4 div-sm-6 div-md-6 div-lg-6 div-xl-3'>" +
            "<img class='imgmuestraser' onclick='igs(this.id,2)' id='vinil11' src='images/servicios/vinil11.jpg'>" +
            "</div>";
        $('#servicios2').html(imagenes);

        var texto = $('#slc3').attr('value');
        $('#title').html(texto);
        var desc = "<b>Materiales: <br> WALL GRAPHIC <br> FLOOR GRAPHIC </b> <br><b>ELECTROESTÁTICO </b> (blanco, transparente)<br><b>AUTOADHERIBLE </b> (mate, blanco, covencional, con fondo gris o negro, microperforado)";
        $('#descrip').html(desc);

        $ventana_ancho = $(window).width();
        //alert($ventana_ancho);
        if ($ventana_ancho >=1024) {
            $('#galery').addClass("movgalery");
            $('#flex').addClass("movflex");
            $('#flext').addClass("movflex");
            setTimeout(function () { $('#flext').css({ "opacity": 1 }); $('#flex').css({ "opacity": 1 }); }, 3000);
        } else if ($ventana_ancho < 1024) {
            //alert("es un dispositivo movil");
            $('#flex').css({ "display": "block" });
            $('#flext').css({ "display": "block" });
            $('#flex').css({ "margin-left": "0%" });
            $('#flext').css({ "margin-left": "0%" });
            //alert($(".informacion").scrollTop() + " px INFO");
            $('.informacion').animate({ scrollTop: 9999 }, 2000);
            setTimeout(function () { $('#flext').css({ "opacity": 1 }); $('#flex').css({ "opacity": 1 }); }, 50);
            /* $('.informacion').scrollTop(); */
        }
    });
    $('#slc4').click(function () { // GRAN FORMATO bien
        $('#servicios1').css({ "display": "none" });
        var imagenes = "<div class=' div-xs-4 div-sm-6 div-md-6 div-lg-6 div-xl-3'>" +
            "<img class='imgmuestraser' onclick='igs(this.id,2)' id='formato' src='images/servicios/formato.jpg'>" +
            "</div>" +
            "<div class=' div-xs-4 div-sm-6 div-md-6 div-lg-6 div-xl-3'>" +
            "<img class='imgmuestraser' onclick='igs(this.id,2)' id='formato2' src='images/servicios/formato2.jpg'>" +
            "</div>" +
            "<div class=' div-xs-4 div-sm-6 div-md-6 div-lg-6 div-xl-3'>" +
            "<img class='imgmuestraser' onclick='igs(this.id,2)' id='formato3' src='images/servicios/formato3.jpg'>" +
            "</div>" +
            "<div class=' div-xs-4 div-sm-6 div-md-6 div-lg-6 div-xl-3'>" +
            "<img class='imgmuestraser' onclick='igs(this.id,2)' id='formato4' src='images/servicios/formato4.jpg'>" +
            "</div>"+
            "<div class=' div-xs-4 div-sm-6 div-md-6 div-lg-6 div-xl-3'>" +
            "<img class='imgmuestraser' onclick='igs(this.id,2)' id='formato5' src='images/servicios/formato5.jpg'>" +
            "</div>" +
            "<div class=' div-xs-4 div-sm-6 div-md-6 div-lg-6 div-xl-3'>" +
            "<img class='imgmuestraser' onclick='igs(this.id,2)' id='formato6z' src='images/servicios/formato6.jpg'>" +
            "</div>"+
            "<div class=' div-xs-4 div-sm-6 div-md-6 div-lg-6 div-xl-3'>" +
            "<img class='imgmuestraser' onclick='igs(this.id,2)' id='formato7' src='images/servicios/formato7.jpg'>" +
            "</div>" +
            "<div class=' div-xs-4 div-sm-6 div-md-6 div-lg-6 div-xl-3'>" +
            "<img class='imgmuestraser' onclick='igs(this.id,2)' id='formato8z' src='images/servicios/formato8.jpg'>" +
            "</div>"+
            "<div class=' div-xs-4 div-sm-6 div-md-6 div-lg-6 div-xl-3'>" +
            "<img class='imgmuestraser' onclick='igs(this.id,2)' id='formato9' src='images/servicios/formato9.jpg'>" +
            "</div>";
        $('#servicios2').html(imagenes);

        var texto = $('#slc4').attr('value');
        $('#title').html(texto);
        var desc = "<b>Materiales: <br> LONAS Tradicionales</b> (de 13 onzas) <b><br> APLICACIÓN DE LONAS</b> (en bastidores) <b><br> LONA BLACKLIGHT <br> LONA MESH <br> LONA BLACKOUT <br> LONA SOLIDA <br> PARA TOLDOS <br> VINIL </b> (blanco, con adhesivo gris o negro)";
        $('#descrip').html(desc);

        $ventana_ancho = $(window).width();
        //alert($ventana_ancho);
        if ($ventana_ancho >=1024) {
            $('#galery').addClass("movgalery");
            $('#flex').addClass("movflex");
            $('#flext').addClass("movflex");
            setTimeout(function () { $('#flext').css({ "opacity": 1 }); $('#flex').css({ "opacity": 1 }); }, 3000);
        } else if ($ventana_ancho < 1024) {
            //alert("es un dispositivo movil");
            $('#flex').css({ "display": "block" });
            $('#flext').css({ "display": "block" });
            $('#flex').css({ "margin-left": "0%" });
            $('#flext').css({ "margin-left": "0%" });
            //alert($(".informacion").scrollTop() + " px INFO");
            $('.informacion').animate({ scrollTop: 9999 }, 2000);
            setTimeout(function () { $('#flext').css({ "opacity": 1 }); $('#flex').css({ "opacity": 1 }); }, 50);
            /* $('.informacion').scrollTop(); */
        }
    });
    $('#slc5').click(function () { // TELA bien
        $('#servicios1').css({ "display": "none" });
        var imagenes = "<div class=' div-xs-4 div-sm-6 div-md-6 div-lg-6 div-xl-3'>" +
            "<img class='imgmuestraser' onclick='igs(this.id,2)' id='tela' src='images/servicios/tela.jpg'>" +
            "</div>" +
            "<div class=' div-xs-4 div-sm-6 div-md-6 div-lg-6 div-xl-3'>" +
            "<img class='imgmuestraser' onclick='igs(this.id,2)' id='tela2z' src='images/servicios/tela2.jpg'>" +
            "</div>" +
            "<div class=' div-xs-4 div-sm-6 div-md-6 div-lg-6 div-xl-3'>" +
            "<img class='imgmuestraser' onclick='igs(this.id,2)' id='tela3' src='images/servicios/tela3.jpg'>" +
            "</div>" +
            "<div class=' div-xs-4 div-sm-6 div-md-6 div-lg-6 div-xl-3'>" +
            "<img class='imgmuestraser' onclick='igs(this.id,2)' id='tela4' src='images/servicios/tela4.jpg'>" +
            "</div>" +
            "<div class=' div-xs-4 div-sm-6 div-md-6 div-lg-6 div-xl-3'>" +
            "<img class='imgmuestraser' onclick='igs(this.id,2)' id='tela5z' src='images/servicios/tela5.jpg'>" +
            "</div>" +
            "<div class=' div-xs-4 div-sm-6 div-md-6 div-lg-6 div-xl-3'>" +
            "<img class='imgmuestraser' onclick='igs(this.id,2)' id='tela6' src='images/servicios/tela6.jpg'>" +
            "</div>" +
            "<div class=' div-xs-4 div-sm-6 div-md-6 div-lg-6 div-xl-3'>" +
            "<img class='imgmuestraser' onclick='igs(this.id,2)' id='tela7z' src='images/servicios/tela7.jpg'>" +
            "</div>";
        $('#servicios2').html(imagenes);


        var texto = $('#slc5').attr('value');
        $('#title').html(texto);
        var desc = "<b>Materiales: <br> SUBLIMACIÓN EN DIFERENTES TIPOS DE TELA</b> <br> (brillosa, mate y repelente al agua)";
        $('#descrip').html(desc);

        $ventana_ancho = $(window).width();
        //alert($ventana_ancho);
        if ($ventana_ancho >=1024) {
            $('#galery').addClass("movgalery");
            $('#flex').addClass("movflex");
            $('#flext').addClass("movflex");
            setTimeout(function () { $('#flext').css({ "opacity": 1 }); $('#flex').css({ "opacity": 1 }); }, 3000);
        } else if ($ventana_ancho < 1024) {
            //alert("es un dispositivo movil");
            $('#flex').css({ "display": "block" });
            $('#flext').css({ "display": "block" });
            $('#flex').css({ "margin-left": "0%" });
            $('#flext').css({ "margin-left": "0%" });
            //alert($(".informacion").scrollTop() + " px INFO");
            $('.informacion').animate({ scrollTop: 9999 }, 2000);
            setTimeout(function () { $('#flext').css({ "opacity": 1 }); $('#flex').css({ "opacity": 1 }); }, 50);
            /* $('.informacion').scrollTop(); */
        }
    });
    $('#slc6').click(function () { //LETREROS EN 3D
        $('#servicios1').css({ "display": "none" });
        var imagenes = "<div class=' div-xs-4 div-sm-6 div-md-6 div-lg-6 div-xl-3'>" +
            "<img class='imgmuestraser' onclick='igs(this.id,2)' id='lt' src='images/servicios/lt.jpg'>" +
            "</div>" +
            "<div class=' div-xs-4 div-sm-6 div-md-6 div-lg-6 div-xl-3'>" +
            "<img class='imgmuestraser' onclick='igs(this.id,2)' id='lt2' src='images/servicios/lt2.jpg'>" +
            "</div>" +
            "<div class=' div-xs-4 div-sm-6 div-md-6 div-lg-6 div-xl-3'>" +
            "<img class='imgmuestraser' onclick='igs(this.id,2)' id='lt3' src='images/servicios/lt3.jpg'>" +
            "</div>" +
            "<div class=' div-xs-4 div-sm-6 div-md-6 div-lg-6 div-xl-3'>" +
            "<img class='imgmuestraser' onclick='igs(this.id,2)' id='lt4' src='images/servicios/lt4.jpg'>" +
            "</div>" +
            "<div class=' div-xs-4 div-sm-6 div-md-6 div-lg-6 div-xl-3'>" +
            "<img class='imgmuestraser' onclick='igs(this.id,2)' id='lt5' src='images/servicios/lt5.jpg'>" +
            "</div>" +
            "<div class=' div-xs-4 div-sm-6 div-md-6 div-lg-6 div-xl-3'>" +
            "<img class='imgmuestraser' onclick='igs(this.id,2)' id='lt6' src='images/servicios/lt6.jpg'>" +
            "</div>" +
            "<div class=' div-xs-4 div-sm-6 div-md-6 div-lg-6 div-xl-3'>" +
            "<img class='imgmuestraser' onclick='igs(this.id,2)' id='lt7' src='images/servicios/lt7.jpg'>" +
            "</div>" +
            "<div class=' div-xs-4 div-sm-6 div-md-6 div-lg-6 div-xl-3'>" +
            "<img class='imgmuestraser' onclick='igs(this.id,2)' id='lt8' src='images/servicios/lt8.jpg'>" +
            "</div>" +
            "<div class=' div-xs-4 div-sm-6 div-md-6 div-lg-6 div-xl-3'>" +
            "<img class='imgmuestraser' onclick='igs(this.id,2)' id='lt9' src='images/servicios/lt9.jpg'>" +
            "</div>" +
            "<div class=' div-xs-4 div-sm-6 div-md-6 div-lg-6 div-xl-3'>" +
            "<img class='imgmuestraser' onclick='igs(this.id,2)' id='lt10' src='images/servicios/lt10.jpg'>" +
            "</div>" +
            "<div class=' div-xs-4 div-sm-6 div-md-6 div-lg-6 div-xl-3'>" +
            "<img class='imgmuestraser' onclick='igs(this.id,2)' id='lt11' src='images/servicios/lt11.jpg'>" +
            "</div>" +
            "<div class=' div-xs-4 div-sm-6 div-md-6 div-lg-6 div-xl-3'>" +
            "<img class='imgmuestraser' onclick='igs(this.id,2)' id='lt12' src='images/servicios/lt12.jpg'>" +
            "</div>";
        $('#servicios2').html(imagenes);

        var texto = $('#slc6').attr('value');
        $('#title').html(texto);
        var desc = "<b> LETREROS EN 3D <br> Materiales:<br> ROUTER FABRICACIÓN E INSTALACIÓN ANUNCIOSOS LUMINOSOS</b><br>(Estireno, coroplast, trovicel, foamboard, MDF)"+
                    "<b> TOLDOS <br> Materiales:<br> FABRICACIÓN DE ESTRUCTURAS E INSTALACIÓN DE LONAS</b><br>(Estireno, coroplast, trovicel, foamboard, MDF)"+
                    "<b> CAJAS DE LUZ <br> Materiales:<br> DISEÑO Y FABRICACIÓN DE CAJAS DE LUZ</b>";
        $('#descrip').html(desc);

        $ventana_ancho = $(window).width();
        //alert($ventana_ancho);
        if ($ventana_ancho >=1024) {
            $('#galery').addClass("movgalery");
            $('#flex').addClass("movflex");
            $('#flext').addClass("movflex");
            setTimeout(function () { $('#flext').css({ "opacity": 1 }); $('#flex').css({ "opacity": 1 }); }, 3000);
        } else if ($ventana_ancho < 1024) {
            //alert("es un dispositivo movil");
            $('#flex').css({ "display": "block" });
            $('#flext').css({ "display": "block" });
            $('#flex').css({ "margin-left": "0%" });
            $('#flext').css({ "margin-left": "0%" });
            //alert($(".informacion").scrollTop() + " px INFO");
            $('.informacion').animate({ scrollTop: 9999 }, 2000);
            setTimeout(function () { $('#flext').css({ "opacity": 1 }); $('#flex').css({ "opacity": 1 }); }, 50);
            /* $('.informacion').scrollTop(); */
        }
    });
    $('#slc7').click(function () { //VOLUMETRICOS
        $('#servicios1').css({ "display": "none" });
        var imagenes = "<div class=' div-xs-4 div-sm-6 div-md-6 div-lg-6 div-xl-3'>" +
            "<img class='imgmuestraser' onclick='igs(this.id,2)' id='vol' src='images/servicios/vol.jpg'>" +
            "</div>" +
            "<div class=' div-xs-4 div-sm-6 div-md-6 div-lg-6 div-xl-3'>" +
            "<img class='imgmuestraser' onclick='igs(this.id,2)' id='vol2z' src='images/servicios/vol2.jpg'>" +
            "</div>" +
            "<div class=' div-xs-4 div-sm-6 div-md-6 div-lg-6 div-xl-3'>" +
            "<img class='imgmuestraser' onclick='igs(this.id,2)' id='vol3' src='images/servicios/vol3.jpg'>" +
            "</div>" +
            "<div class=' div-xs-4 div-sm-6 div-md-6 div-lg-6 div-xl-3'>" +
            "<img class='imgmuestraser' onclick='igs(this.id,2)' id='vol4' src='images/servicios/vol4.jpg'>" +
            "</div>" +
            "<div class=' div-xs-4 div-sm-6 div-md-6 div-lg-6 div-xl-3'>" +
            "<img class='imgmuestraser' onclick='igs(this.id,2)' id='vol5' src='images/servicios/vol5.jpg'>" +
            "</div>" +
            "<div class=' div-xs-4 div-sm-6 div-md-6 div-lg-6 div-xl-3'>" +
            "<img class='imgmuestraser' onclick='igs(this.id,2)' id='vol6' src='images/servicios/vol6.jpg'>" +
            "</div>" +
            "<div class=' div-xs-4 div-sm-6 div-md-6 div-lg-6 div-xl-3'>" +
            "<img class='imgmuestraser' onclick='igs(this.id,2)' id='vol7' src='images/servicios/vol7.jpg'>" +
            "</div>" +
            "<div class=' div-xs-4 div-sm-6 div-md-6 div-lg-6 div-xl-3'>" +
            "<img class='imgmuestraser' onclick='igs(this.id,2)' id='vol8' src='images/servicios/vol8.jpg'>" +
            "</div>";
        $('#servicios2').html(imagenes);


        var texto = $('#slc7').attr('value');
        $('#title').html(texto);
        var desc = "<b> DISEÑO Y PRODUCCIÓN</b>";
        $('#descrip').html(desc);

        $ventana_ancho = $(window).width();
        //alert($ventana_ancho);
        if ($ventana_ancho >=1024) {
            $('#galery').addClass("movgalery");
            $('#flex').addClass("movflex");
            $('#flext').addClass("movflex");
            setTimeout(function () { $('#flext').css({ "opacity": 1 }); $('#flex').css({ "opacity": 1 }); }, 3000);
        } else if ($ventana_ancho < 1024) {
            //alert("es un dispositivo movil");
            $('#flex').css({ "display": "block" });
            $('#flext').css({ "display": "block" });
            $('#flex').css({ "margin-left": "0%" });
            $('#flext').css({ "margin-left": "0%" });
            //alert($(".informacion").scrollTop() + " px INFO");
            $('.informacion').animate({ scrollTop: 9999 }, 2000);
            setTimeout(function () { $('#flext').css({ "opacity": 1 }); $('#flex').css({ "opacity": 1 }); }, 50);
            /* $('.informacion').scrollTop(); */
        }
    });
    $('#slc8').click(function () { // PLAYERAS bien
        $('#servicios1').css({ "display": "none" });
        var imagenes = "<div class=' div-xs-4 div-sm-6 div-md-6 div-lg-6 div-xl-3'>" +
            "<img class='imgmuestraser' onclick='igs(this.id,2)' id='playera' src='images/servicios/playera.jpg'>" +
            "</div>" +
            "<div class=' div-xs-4 div-sm-6 div-md-6 div-lg-6 div-xl-3'>" +
            "<img class='imgmuestraser' onclick='igs(this.id,2)' id='playera2' src='images/servicios/playera2.jpg'>" +
            "</div>" +
            "<div class=' div-xs-4 div-sm-6 div-md-6 div-lg-6 div-xl-3'>" +
            "<img class='imgmuestraser' onclick='igs(this.id,2)' id='playera3' src='images/servicios/playera3.jpg'>" +
            "</div>" +
            "<div class=' div-xs-4 div-sm-6 div-md-6 div-lg-6 div-xl-3'>" +
            "<img class='imgmuestraser' onclick='igs(this.id,2)' id='playera4' src='images/servicios/playera4.jpg'>" +
            "</div>" +
            "<div class=' div-xs-4 div-sm-6 div-md-6 div-lg-6 div-xl-3'>" +
            "<img class='imgmuestraser' onclick='igs(this.id,2)' id='playera5' src='images/servicios/playera5.jpg'>" +
            "</div>";
        $('#servicios2').html(imagenes);


        var texto = $('#slc8').attr('value');
        $('#title').html(texto);
        var desc = "<b>Materiales: <br> PLAYERAS DE CUALQUIER TIPO DE SERIGRAFIA Y VINIL TEXTIL</b> <br> (brillosa, mate y repelente al agua)";
        $('#descrip').html(desc);

        $ventana_ancho = $(window).width();
        //alert($ventana_ancho);
        if ($ventana_ancho >= 1024) {
            $('#galery').addClass("movgalery");
            $('#flex').addClass("movflex");
            $('#flext').addClass("movflex");
            setTimeout(function () { $('#flext').css({ "opacity": 1 }); $('#flex').css({ "opacity": 1 }); }, 3000);
        } else if ($ventana_ancho < 1024) {
            //alert("es un dispositivo movil");
            $('#flex').css({ "display": "block" });
            $('#flext').css({ "display": "block" });
            $('#flex').css({ "margin-left": "0%" });
            $('#flext').css({ "margin-left": "0%" });
            //alert($(".informacion").scrollTop() + " px INFO");
            $('.informacion').animate({ scrollTop: 9999 }, 2000);
            setTimeout(function () { $('#flext').css({ "opacity": 1 }); $('#flex').css({ "opacity": 1 }); }, 50);
            /* $('.informacion').scrollTop(); */
        }
    });
    $('#slc9').click(function () { // IMPRESION DIRECTA bien
        $('#servicios1').css({ "display": "none" });
        var imagenes = "<div class=' div-xs-4 div-sm-6 div-md-6 div-lg-6 div-xl-3'>" +
            "<img class='imgmuestraser' onclick='igs(this.id,2)' id='id' src='images/servicios/id.jpg'>" +
            "</div>" +
            "<div class=' div-xs-4 div-sm-6 div-md-6 div-lg-6 div-xl-3'>" +
            "<img class='imgmuestraser' onclick='igs(this.id,2)' id='id2' src='images/servicios/id2.jpg'>" +
            "</div>" +
            "<div class=' div-xs-4 div-sm-6 div-md-6 div-lg-6 div-xl-3'>" +
            "<img class='imgmuestraser' onclick='igs(this.id,2)' id='id3' src='images/servicios/id3.jpg'>" +
            "</div>" +
            "<div class=' div-xs-4 div-sm-6 div-md-6 div-lg-6 div-xl-3'>" +
            "<img class='imgmuestraser' onclick='igs(this.id,2)' id='id3' src='images/servicios/id4.jpg'>" +
            "</div>";
        $('#servicios2').html(imagenes);


        var texto = $('#slc9').attr('value');
        $('#title').html(texto);
        var desc = "<b>Materiales: <br>SUSTRATOS RIGIDOS</b> <br> (PVC, acrilico, vidrio, estireno, foamboard, coroplast, madera, MDF impreso)";
        $('#descrip').html(desc);

        $ventana_ancho = $(window).width();
        //alert($ventana_ancho);
        if ($ventana_ancho >=1024) {
            $('#galery').addClass("movgalery");
            $('#flex').addClass("movflex");
            $('#flext').addClass("movflex");
            setTimeout(function () { $('#flext').css({ "opacity": 1 }); $('#flex').css({ "opacity": 1 }); }, 3000);
        } else if ($ventana_ancho < 1024) {
            //alert("es un dispositivo movil");
            $('#flex').css({ "display": "block" });
            $('#flext').css({ "display": "block" });
            $('#flex').css({ "margin-left": "0%" });
            $('#flext').css({ "margin-left": "0%" });
            //alert($(".informacion").scrollTop() + " px INFO");
            $('.informacion').animate({ scrollTop: 9999 }, 2000);
            setTimeout(function () { $('#flext').css({ "opacity": 1 }); $('#flex').css({ "opacity": 1 }); }, 50);
            /* $('.informacion').scrollTop(); */
        }
    });
    $('#slc0').click(function () { // INSTALACIONES bien
        $('#servicios1').css({ "display": "none" });
        var imagenes = "<div class=' div-xs-4 div-sm-6 div-md-6 div-lg-6 div-xl-3'>" +
            "<img class='imgmuestraser' onclick='igs(this.id,2)' id='iz' src='images/servicios/i.jpg'>" +
            "</div>" +
            "<div class=' div-xs-4 div-sm-6 div-md-6 div-lg-6 div-xl-3'>" +
            "<img class='imgmuestraser' onclick='igs(this.id,2)' id='i2' src='images/servicios/i2.jpg'>" +
            "</div>"+
            "<div class=' div-xs-4 div-sm-6 div-md-6 div-lg-6 div-xl-3'>" +
            "<img class='imgmuestraser' onclick='igs(this.id,2)' id='i3' src='images/servicios/i3.jpg'>" +
            "</div>" +
            "<div class=' div-xs-4 div-sm-6 div-md-6 div-lg-6 div-xl-3'>" +
            "<img class='imgmuestraser' onclick='igs(this.id,2)' id='i4' src='images/servicios/i4.jpg'>" +
            "</div>" +
            "<div class=' div-xs-4 div-sm-6 div-md-6 div-lg-6 div-xl-3'>" +
            "<img class='imgmuestraser' onclick='igs(this.id,2)' id='i5' src='images/servicios/i5.jpg'>" +
            "</div>" +
            "<div class=' div-xs-4 div-sm-6 div-md-6 div-lg-6 div-xl-3'>" +
            "<img class='imgmuestraser' onclick='igs(this.id,2)' id='i6' src='images/servicios/i6.jpg'>" +
            "</div>";
        $('#servicios2').html(imagenes);


        var texto = $('#slc0').attr('value');
        $('#title').html(texto);
        var desc = "<b>En cualquier lugar, con cualquier material</b>";
        $('#descrip').html(desc);

        $ventana_ancho = $(window).width();
        //alert($ventana_ancho);
        if ($ventana_ancho >=1024) {
            $('#galery').addClass("movgalery");
            $('#flex').addClass("movflex");
            $('#flext').addClass("movflex");
            setTimeout(function () { $('#flext').css({ "opacity": 1 }); $('#flex').css({ "opacity": 1 }); }, 3000);
        } else if ($ventana_ancho < 1024) {
            //alert("es un dispositivo movil");
            $('#flex').css({ "display": "block" });
            $('#flext').css({ "display": "block" });
            $('#flex').css({ "margin-left": "0%" });
            $('#flext').css({ "margin-left": "0%" });
            //alert($(".informacion").scrollTop() + " px INFO");
            $('.informacion').animate({ scrollTop: 9999 }, 2000);
            setTimeout(function () { $('#flext').css({ "opacity": 1 }); $('#flex').css({ "opacity": 1 }); }, 50);
            /* $('.informacion').scrollTop(); */
        }
    });

    $('#senema').click(function () {
        var contenido = $('#cuerpo').val();
        var envia = $('#mail').val();
        alert("envia el correo: "+envia+" el texto:"+contenido);

        $.ajax({
            method: 'POST',
            url: 'envio.php',
            data: {'cuerpo':contenido, 'remi':envia},
        })
        .done(function( msg ) {
            alert( "Data Saved: " + msg );
          });
    });
});

function igs(url,lugar){
    enunc = "";
    cadena = '';
    if (url == "playeraz") {
        cadena == 'a'
        cant = url.length;
    }else{
        cant = url.length;
        cadena = url.split("");
    }

    if(cadena[cant-1] == 'z'){
        if(url == 'sd' || url == 'sd2' || url == 'sd3' || url == 'sd4z' || url =='sd5z' || url == 'sd6z' || url == 'sd7' || url == 'sd8' || url == 'sd9' || url == 'sd10' || url == 'sd11' || url == 'sd12z' ){
            enunc = "Utilizamos Router numerico CNC para mayor calidad";    
        }else{
            enunc = "Calidades de impresión desde 720 dpis hasta 1440 dpis o calidad fotográfica";
        }
        modo = "vertical";
    }else{
        if(url == 'sd' || url == 'sd2' || url == 'sd3' || url == 'sd4z' || url =='sd5z' || url == 'sd6z' || url == 'sd7' || url == 'sd8' || url == 'sd9' || url == 'sd10' || url == 'sd11' || url == 'sd12z' ){
            enunc = "Utilizamos Router numerico CNC para mayor calidad";    
        }else{
            enunc = "Calidades de impresión desde 720 dpis hasta 1440 dpis o calidad fotográfica";
        }
        modo = "horizontal"; 
    }    
    var na= url+".jpg";
    sessionStorage.setItem("ulrm", na);
    //alert("esto va hacer que salga el modal con la imagen. El valor fue: "+na+" esto es el enunciado: "+enunc+" tipo: "+modo);
    //alert("vengo de: "+lugar);
    verImagenModal('grande', na, 'X', enunc, modo, lugar);
};

//MUESTRA MODAL CON DATOS DE ARRIBA
function verImagenModal(tipo, img, textoBtn, parrafo, modo, proce) { //MODAL DE ALERTA
    bgNegro = document.getElementById('bg-negro');
    modal = document.getElementById('modal');

    bgNegro.classList.add('verModal');
    modal.classList.add('verModal');

    if (tipo == 'chico') {
        parrafo = ""
    } else {
        parrafo = parrafo;
    }

    if(modo == 'horizontal'){ 
        modal.innerHTML = "<button onclick='cerrar()' id='cierra' class='bmodal col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12'><H1>" + textoBtn + "</H1></button>" +
            "<div class='col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12'>" +
                "<div class='col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12'>" +
                    "<img class='imgmodal modalhz' id='imgind' src='images/servicios/"+img+"'> </div>"+
                "<div class='col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12'>" +
                    "<p id='piefoto'>"+ parrafo +"</p> </div>"+
                "<div class='col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12'>" +
                    "<div class='col-xs-4 col-sm-4 col-md-4 col-lg-4 col-xl-4'></div>" +
                    "<div class='col-xs-4 col-sm-4 col-md-4 col-lg-4 col-xl-4'>"+
                        "<div class='col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6'>" +
                            "<img onclick=\"atr("+proce+",\'"+img+"\')\" id='at' src='images/flech.png'> </div>"  +
                        "<div class='col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6'>" +
                            "<img onclick=\"sig("+proce+",\'"+img+"\')\" id='ad' src='images/flecha.png'> </div>" +
                    "</div>" +
                    "<div class='col-xs-4 col-sm-4 col-md-4 col-lg-4 col-xl-4'></div>" +
                "</div>"+
            "</div>";

        modal.classList.add(tipo);

        tipo = tipo;
    }if(modo == 'vertical'){
        modal.innerHTML = "<button onclick='cerrar()' id='cierra' class='bmodal col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12'><H1>" + textoBtn + "</H1></button>" +
            "<div class='col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12'>" +
                "<div class='col-xs-2 col-sm-2 col-md-2 col-lg-2 col-xl-2'> <img onclick='atr("+proce+","+img+")' id='at' src='images/flech.png'> </div>"+ 
                "<div class='col-xs-8 col-sm-8 col-md-8 col-lg-8 col-xl-8'>" +
                    "<img class='imgmodal modalvert' src='images/servicios/"+img+"'> </div>"+
                "<div class='col-xs-2 col-sm-2 col-md-2 col-lg-2 col-xl-2'> <img onclick='sig("+proce+","+img+")' id='ad' src='images/flecha.png'> </div>"+
                "<div class='col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12'>" +
                    "<p id='piefoto'>"+ parrafo +"</p> </div>"+
            "</div>";

        modal.classList.add(tipo);

        tipo = tipo;
    }
}

function sig(proce, url){
    arrarInicial =['formato.jpg','recort.jpg','sd.jpg','vinil.jpg','tela.jpg','id.jpg','playera.jpg','vol.jpg','lt.jpg','i.jpg','formato2.jpg','recort2.jpg','sd2.jpg','vinil1.jpg','tela2.jpg','id2.jpg','playera2.jpg','vol2.jpg','lt2.jpg','i2.jpg','formato3.jpg','vinil2.jpg','recort3.jpg','sd3.jpg','vinil3.jpg','tela3.jpg','playera3.jpg','vol3.jpg','lt3.jpg','i3.jpg','formato4.jpg','sd4.jpg','vinil4.jpg','tela4.jpg','id3.jpg','recort4.jpg','vol4.jpg','i4.jpg','lt4.jpg','formato5.jpg','playera4.jpg','recort5.jpg','tela5.jpg','sd5.jpg','vinil5.jpg','lt5.jpg','i5.jpg','vol5.jpg','formato6.jpg','id4.jpg','playera5.jpg','recort6.jpg','tela6.jpg','sd6.jpg','vinil6.jpg','lt6.jpg','vol6.jpg','playera6.jpg','i6.jpg','formato7.jpg','tela7.jpg','recort7.jpg','sd7.jpg','vinil7.jpg','vol7.jpg','lt7.jpg'];
    final = 64;
    
    if(proce == 1){
        verurl = sessionStorage.getItem("ulrm");
        for(i=0; i<= final; i ++){
            if(verurl == arrarInicial[i]){
                //alert("YA LA ENCONTRO");
                if(i != final){
                    //alert("de aqui vengo"+verurl+ " esta es la imagen a la cual va a pasar images/servicios/"+arrarInicial[i+1])
                    document.getElementById("imgind").src = "images/servicios/"+arrarInicial[i+1];
                    nueva = arrarInicial[i+1];
                }                
            }
        }            
        //alert(nueva);
        sessionStorage.setItem("ulrm", nueva);
        
    }if (proce == 2){ }
    // document.getElementById("img").src="image/"+cars[1]+".png"
} 
function atr(proce, url){
    arrarInicial =['formato.jpg','recort.jpg','sd.jpg','vinil.jpg','tela.jpg','id.jpg','playera.jpg','vol.jpg','lt.jpg','i.jpg','formato2.jpg','recort2.jpg','sd2.jpg','vinil1.jpg','tela2.jpg','id2.jpg','playera2.jpg','vol2.jpg','lt2.jpg','i2.jpg','formato3.jpg','vinil2.jpg','recort3.jpg','sd3.jpg','vinil3.jpg','tela3.jpg','playera3.jpg','vol3.jpg','lt3.jpg','i3.jpg','formato4.jpg','sd4.jpg','vinil4.jpg','tela4.jpg','id3.jpg','recort4.jpg','vol4.jpg','i4.jpg','lt4.jpg','formato5.jpg','playera4.jpg','recort5.jpg','tela5.jpg','sd5.jpg','vinil5.jpg','lt5.jpg','i5.jpg','vol5.jpg','formato6.jpg','id4.jpg','playera5.jpg','recort6.jpg','tela6.jpg','sd6.jpg','vinil6.jpg','lt6.jpg','vol6.jpg','playera6.jpg','i6.jpg','formato7.jpg','tela7.jpg','recort7.jpg','sd7.jpg','vinil7.jpg','vol7.jpg','lt7.jpg'];
    final = 64;
    
    if(proce == 1){
        verurl = sessionStorage.getItem("ulrm");
        for(i=0; i<= final; i ++){
            if(verurl == arrarInicial[i]){
                //alert("YA LA ENCONTRO");
                if(i != final){
                    //alert("de aqui vengo"+verurl+ " esta es la imagen a la cual va a pasar images/servicios/"+arrarInicial[i-1])
                    document.getElementById("imgind").src = "images/servicios/"+arrarInicial[i-1];
                    nueva = arrarInicial[i-1];
                }                
            }
        }            
        //alert(nueva);
        sessionStorage.setItem("ulrm", nueva);
    }if (proce == 2){ }
    //document.getElementById("img").src="image/"+cars[0]+".png"
}

//MUESTRA MODAL CON DATOS DE ARRIBA
function verModal(tipo, texto, texto2, texto3, texto4, textoBtn, parrafo) { //MODAL DE ALERTA
    bgNegro = document.getElementById('bg-negro');
    modal = document.getElementById('modal');

    bgNegro.classList.add('verModal');
    modal.classList.add('verModal');

    if (tipo == 'chico') {
        parrafo = ""
    } else {
        parrafo = parrafo;
    }

    modal.innerHTML = "<button onclick='cerrar()' id='cierra' class='bmodal col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12'><H1>" + textoBtn + "</H1></button>" +
        "<div class='cmodal col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12'>" +
        "<div onclick='seccion(this.id)' id='index' class='title col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12'>" +
        "<h1 style='text-align: center !important;' class='tmodal'>" + texto + "</h1></div>" +
        "<div onclick='seccion(this.id)' id='us' class='title col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12'>" +
        "<h1 style='text-align: center !important;' class='tmodal'>" + texto2 + "</h1></div>" +
        "<div onclick='seccion(this.id)' id='serv' class='title col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12'>" +
        "<h1 style='text-align: center !important;' class='tmodal'>" + texto3 + "</h1></div>" +
        "<div onclick='seccion(this.id)' id='contact' class='title col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12'>" +
        "<h1 style='text-align: center !important;' class='tmodal'>" + texto4 + "</h1></div>" +
        "</div>";

    modal.classList.add(tipo);

    tipo = tipo;
}
//REDIRECCIONA
function seccion(pagina) {
    if(pagina == "serv"){
        dir= "serv.php?s=0&i=0";
        window.location.href = dir;
    }else{
        dir = pagina + ".php"
        //alert(dir);
        window.location.href = dir;
    }
}
//REDIRECCIONA PERO SOLO DEL INDEX, YA QUE SE AGREGO ALGO DIFERENTE DE LO QUE TENIA EN EL CLIC
function pag(pagi) {
    dir = pagi + ".php"
    //alert(dir);
    window.location.href = dir;
}

function sf(pf) {
    //window.location.href = pf;
    window.open('pf', '_blank');
}

//BOTON QUE CIERRA EL MODAL
function cerrar() { //BOTON QUE SE CREA
    bgNegro.classList.remove('verModal');
    modal.classList.remove('verModal');

    if (modal.classList.contains('chico')) {
        modal.classList.remove('chico');
    } else {
        modal.classList.remove('grande');
    }
}