var varible = 0;

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
        var imagenes = "<div class=' div-xs-4 div-sm-6 div-md-12 div-lg-6 div-xl-3'>" +
            "<img class='imgmuestraser' onclick='igs(this.id)' id='sd' src='images/servicios/sd.jpg'>" +
            "</div>" +
            "<div class=' div-xs-4 div-sm-6 div-md-6 div-lg-6 div-xl-3'>" +
            "<img class='imgmuestraser' onclick='igs(this.id)' id='sd2' src='images/servicios/sd2.jpg'>" +
            "</div>" +
            "<div class=' div-xs-4 div-sm-6 div-md-6 div-lg-6 div-xl-3'>" +
            "<img class='imgmuestraser' onclick='igs(this.id)' id='sd3' src='images/servicios/sd3.jpg'>" +
            "</div>" +
            "<div class=' div-xs-4 div-sm-6 div-md-6 div-lg-6 div-xl-3'>" +
            "<img class='imgmuestraser' onclick='igs(this.id)' id='sd4z' src='images/servicios/sd4.jpg'>" +
            "</div>" +
            "<div class=' div-xs-4 div-sm-6 div-md-6 div-lg-6 div-xl-3'>" +
            "<img class='imgmuestraser' onclick='igs(this.id)' id='sd5z' src='images/servicios/sd5.jpg'>" +
            "</div>" +
            "<div class=' div-xs-4 div-sm-6 div-md-6 div-lg-6 div-xl-3'>" +
            "<img class='imgmuestraser' onclick='igs(this.id)' id='sd6' src='images/servicios/sd6.jpg'>" +
            "</div>" +
            "<div class=' div-xs-4 div-sm-6 div-md-6 div-lg-6 div-xl-3'>" +
            "<img class='imgmuestraser' onclick='igs(this.id)' id='sd7' src='images/servicios/sd7.jpg'>" +
            "</div>" +
            "<div class=' div-xs-4 div-sm-6 div-md-6 div-lg-6 div-xl-3'>" +
            "<img class='imgmuestraser' onclick='igs(this.id)' id='sd8' src='images/servicios/sd8.jpg'>" +
            "</div>" +
            "<div class=' div-xs-4 div-sm-6 div-md-6 div-lg-6 div-xl-3'>" +
            "<img class='imgmuestraser' onclick='igs(this.id)' id='sd9' src='images/servicios/sd9.jpg'>" +
            "</div>" +
            "<div class=' div-xs-4 div-sm-6 div-md-6 div-lg-6 div-xl-3'>" +
            "<img class='imgmuestraser' onclick='igs(this.id)' id='sd10' src='images/servicios/sd10.jpg'>" +
            "</div>" +
            "<div class=' div-xs-4 div-sm-6 div-md-6 div-lg-6 div-xl-3'>" +
            "<img class='imgmuestraser' onclick='igs(this.id)' id='sd11' src='images/servicios/sd11.jpg'>" +
            "</div>"+
            "<div class=' div-xs-4 div-sm-6 div-md-6 div-lg-6 div-xl-3'>" +
            "<img class='imgmuestraser' onclick='igs(this.id)' id='sd12z' src='images/servicios/sd12.jpg'>" +
            "</div>";
        $('#servicios2').html(imagenes);

        var texto = $('#slc1').attr('value');
        $('#title').html(texto);
        var desc = "<b> Materiales: <br> MDF, triplay, trovicel, coroplast, foamboard, lámina, microalambre, aluminio entre otros</b>";
        $('#descrip').html(desc);

        $ventana_ancho = $(window).width();
        //alert($ventana_ancho);
        if ($ventana_ancho > 1025) {
            $('#galery').addClass("movgalery");
            $('#flex').addClass("movflex");
            $('#flext').addClass("movflex");
            setTimeout(function () { $('#flext').css({ "opacity": 1 }); $('#flex').css({ "opacity": 1 }); }, 3000);

        } else if ($ventana_ancho <= 1024) {
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
            "<img class='imgmuestraser' onclick='igs(this.id)' id='recort' src='images/servicios/recort.jpg'>" +
            "</div>" +
            "<div class=' div-xs-4 div-sm-6 div-md-6 div-lg-6 div-xl-3'>" +
            "<img class='imgmuestraser' onclick='igs(this.id)' id='recort2' src='images/servicios/recort2.jpg'>" +
            "</div>" +
            "<div class=' div-xs-4 div-sm-6 div-md-6 div-lg-6 div-xl-3'>" +
            "<img class='imgmuestraser' onclick='igs(this.id)' id='recort3' src='images/servicios/recort3.jpg'>" +
            "</div>";
        $('#servicios2').html(imagenes);

        var texto = $('#slc2').attr('value');
        $('#title').html(texto);
        var desc = "<b>Materiales: <br> RECORTE </b> <br>(a uno o varios colores)<br><b>ESMERILADO </b> (recorte e impreso)";
        $('#descrip').html(desc);

        $ventana_ancho = $(window).width();
        //alert($ventana_ancho);
        if ($ventana_ancho > 1025) {
            $('#galery').addClass("movgalery");
            $('#flex').addClass("movflex");
            $('#flext').addClass("movflex");
            setTimeout(function () { $('#flext').css({ "opacity": 1 }); $('#flex').css({ "opacity": 1 }); }, 3000);
        } else if ($ventana_ancho <= 1024) {
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
            "<img class='imgmuestraser' onclick='igs(this.id)' id='vinil' src='images/servicios/vinil.jpg'>" +
            "</div>" +
            "<div class=' div-xs-4 div-sm-6 div-md-6 div-lg-6 div-xl-3'>" +
            "<img class='imgmuestraser' onclick='igs(this.id)' id='vinil1' src='images/servicios/vinil1.jpg'>" +
            "</div>" +
            "<div class=' div-xs-4 div-sm-6 div-md-6 div-lg-6 div-xl-3'>" +
            "<img class='imgmuestraser' onclick='igs(this.id)' id='vinil2' src='images/servicios/vinil2.jpg'>" +
            "</div>" +
            "<div class=' div-xs-4 div-sm-6 div-md-6 div-lg-6 div-xl-3'>" +
            "<img class='imgmuestraser' onclick='igs(this.id)' id='vinil3' src='images/servicios/vinil3.jpg'>" +
            "</div>" +
            "<div class=' div-xs-4 div-sm-6 div-md-6 div-lg-6 div-xl-3'>" +
            "<img class='imgmuestraser' onclick='igs(this.id)' id='vinil4' src='images/servicios/vinil4.jpg'>" +
            "</div>" +
            "<div class=' div-xs-4 div-sm-6 div-md-6 div-lg-6 div-xl-3'>" +
            "<img class='imgmuestraser' onclick='igs(this.id)' id='vinil5' src='images/servicios/vinil5.jpg'>" +
            "</div>" +
            "<div class=' div-xs-4 div-sm-6 div-md-6 div-lg-6 div-xl-3'>" +
            "<img class='imgmuestraser' onclick='igs(this.id)' id='vinil6' src='images/servicios/vinil6.jpg'>" +
            "</div>"+
            "<div class=' div-xs-4 div-sm-6 div-md-6 div-lg-6 div-xl-3'>" +
            "<img class='imgmuestraser' onclick='igs(this.id)' id='vinil7' src='images/servicios/vinil7.jpg'>" +
            "</div>";
        $('#servicios2').html(imagenes);

        var texto = $('#slc3').attr('value');
        $('#title').html(texto);
        var desc = "<b>Materiales: <br> WALL GRAPHIC <br> FLOOR GRAPHIC </b> <br><b>ELECTROESTÁTICO </b> (blanco, transparente)<br><b>AUTOADHERIBLE </b> (mate, blanco, covencional, con fondo gris o negro, microperforado)";
        $('#descrip').html(desc);

        $ventana_ancho = $(window).width();
        //alert($ventana_ancho);
        if ($ventana_ancho > 1025) {
            $('#galery').addClass("movgalery");
            $('#flex').addClass("movflex");
            $('#flext').addClass("movflex");
            setTimeout(function () { $('#flext').css({ "opacity": 1 }); $('#flex').css({ "opacity": 1 }); }, 3000);
        } else if ($ventana_ancho <= 1024) {
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
            "<img class='imgmuestraser' onclick='igs(this.id)' id='formato' src='images/servicios/formato.jpg'>" +
            "</div>" +
            "<div class=' div-xs-4 div-sm-6 div-md-6 div-lg-6 div-xl-3'>" +
            "<img class='imgmuestraser' onclick='igs(this.id)' id='formato2' src='images/servicios/formato2.jpg'>" +
            "</div>" +
            "<div class=' div-xs-4 div-sm-6 div-md-6 div-lg-6 div-xl-3'>" +
            "<img class='imgmuestraser' onclick='igs(this.id)' id='formato3' src='images/servicios/formato3.jpg'>" +
            "</div>" +
            "<div class=' div-xs-4 div-sm-6 div-md-6 div-lg-6 div-xl-3'>" +
            "<img class='imgmuestraser' onclick='igs(this.id)' id='formato4' src='images/servicios/formato4.jpg'>" +
            "</div>"+
            "<div class=' div-xs-4 div-sm-6 div-md-6 div-lg-6 div-xl-3'>" +
            "<img class='imgmuestraser' onclick='igs(this.id)' id='formato5' src='images/servicios/formato5.jpg'>" +
            "</div>";
        $('#servicios2').html(imagenes);

        var texto = $('#slc4').attr('value');
        $('#title').html(texto);
        var desc = "<b>Materiales: <br> LONAS Tradicionales</b> (de 13 onzas) <b><br> APLICACIÓN DE LONAS</b> (en bastidores) <b><br> LONA BLACKLIGHT <br> LONA MESH <br> LONA BLACKOUT <br> LONA SOLIDA <br> PARA TOLDOS <br> VINIL </b> (blanco, con adhesivo gris o negro)";
        $('#descrip').html(desc);

        $ventana_ancho = $(window).width();
        //alert($ventana_ancho);
        if ($ventana_ancho > 1025) {
            $('#galery').addClass("movgalery");
            $('#flex').addClass("movflex");
            $('#flext').addClass("movflex");
            setTimeout(function () { $('#flext').css({ "opacity": 1 }); $('#flex').css({ "opacity": 1 }); }, 3000);
        } else if ($ventana_ancho <= 1024) {
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
        var imagenes = "<div class=' div-xs-4 div-sm-6 div-md-12 div-lg-6 div-xl-3'>" +
            "<img class='imgmuestraser' onclick='igs(this.id)' id='tela' src='images/servicios/tela.jpg'>" +
            "</div>" +
            "<div class=' div-xs-4 div-sm-6 div-md-6 div-lg-6 div-xl-3'>" +
            "<img class='imgmuestraser' onclick='igs(this.id)' id='tela2' src='images/servicios/tela2.jpg'>" +
            "</div>" +
            "<div class=' div-xs-4 div-sm-6 div-md-6 div-lg-6 div-xl-3'>" +
            "<img class='imgmuestraser' onclick='igs(this.id)' id='tela3' src='images/servicios/tela3.jpg'>" +
            "</div>" +
            "<div class=' div-xs-4 div-sm-6 div-md-6 div-lg-6 div-xl-3'>" +
            "<img class='imgmuestraser' onclick='igs(this.id)' id='tel4' src='images/servicios/tela4.jpg'>" +
            "</div>";
        $('#servicios2').html(imagenes);


        var texto = $('#slc5').attr('value');
        $('#title').html(texto);
        var desc = "<b>Materiales: <br> SUBLIMACIÓN EN DIFERENTES TIPOS DE TELA</b> <br> (brillosa, mate y repelente al agua)";
        $('#descrip').html(desc);

        $ventana_ancho = $(window).width();
        //alert($ventana_ancho);
        if ($ventana_ancho > 1025) {
            $('#galery').addClass("movgalery");
            $('#flex').addClass("movflex");
            $('#flext').addClass("movflex");
            setTimeout(function () { $('#flext').css({ "opacity": 1 }); $('#flex').css({ "opacity": 1 }); }, 3000);
        } else if ($ventana_ancho <= 1024) {
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
            "<img class='imgmuestraser' onclick='igs(this.id)' id='subs' src='images/servicios/lt.jpg'>" +
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
        if ($ventana_ancho > 1025) {
            $('#galery').addClass("movgalery");
            $('#flex').addClass("movflex");
            $('#flext').addClass("movflex");
            setTimeout(function () { $('#flext').css({ "opacity": 1 }); $('#flex').css({ "opacity": 1 }); }, 3000);
        } else if ($ventana_ancho <= 1024) {
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
            "<img class='imgmuestraser' onclick='igs(this.id)' id='vol' src='images/servicios/vol.jpg'>" +
            "</div>";
        $('#servicios2').html(imagenes);


        var texto = $('#slc7').attr('value');
        $('#title').html(texto);
        var desc = "<b> NINGUNA INFORMACIÓN </b>";
        $('#descrip').html(desc);

        $ventana_ancho = $(window).width();
        //alert($ventana_ancho);
        if ($ventana_ancho > 1025) {
            $('#galery').addClass("movgalery");
            $('#flex').addClass("movflex");
            $('#flext').addClass("movflex");
            setTimeout(function () { $('#flext').css({ "opacity": 1 }); $('#flex').css({ "opacity": 1 }); }, 3000);
        } else if ($ventana_ancho <= 1024) {
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
        var imagenes = "<div class=' div-xs-4 div-sm-6 div-md-12 div-lg-6 div-xl-3'>" +
            "<img class='imgmuestraser' onclick='igs(this.id)' id='playera' src='images/servicios/playera.jpg'>" +
            "</div>" +
            "<div class=' div-xs-4 div-sm-6 div-md-6 div-lg-6 div-xl-3'>" +
            "<img class='imgmuestraser imgp2' onclick='igs(this.id)' id='playera2' src='images/servicios/playera2.jpg'>" +
            "</div>";
        $('#servicios2').html(imagenes);


        var texto = $('#slc8').attr('value');
        $('#title').html(texto);
        var desc = "<b>Materiales: <br> PLAYERAS DE CUALQUIER TIPO DE SERIGRAFIA Y VINIL TEXTIL</b> <br> (brillosa, mate y repelente al agua)";
        $('#descrip').html(desc);

        $ventana_ancho = $(window).width();
        //alert($ventana_ancho);
        if ($ventana_ancho > 1025) {
            $('#galery').addClass("movgalery");
            $('#flex').addClass("movflex");
            $('#flext').addClass("movflex");
            setTimeout(function () { $('#flext').css({ "opacity": 1 }); $('#flex').css({ "opacity": 1 }); }, 3000);
        } else if ($ventana_ancho <= 1024) {
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
        var imagenes = "<div class=' div-xs-4 div-sm-6 div-md-12 div-lg-6 div-xl-3'>" +
            "<img class='imgmuestraser' onclick='igs(this.id)' id='id' src='images/servicios/id.jpg'>" +
            "</div>" +
            "<div class=' div-xs-4 div-sm-6 div-md-6 div-lg-6 div-xl-3'>" +
            "<img class='imgmuestraser imgp2' onclick='igs(this.id)' id='id2' src='images/servicios/id2.jpg'>" +
            "</div>"+
            "<div class=' div-xs-4 div-sm-6 div-md-6 div-lg-6 div-xl-3'>" +
            "<img class='imgmuestraser imgp2' onclick='igs(this.id)' id='id3' src='images/servicios/id3.jpg'>" +
            "</div>";
        $('#servicios2').html(imagenes);


        var texto = $('#slc9').attr('value');
        $('#title').html(texto);
        var desc = "<b>Materiales: <br>SUSTRATOS RIGIDOS</b> <br> (PVC, acrilico, vidrio, estireno, foamboard, coroplast, madera, MDF impreso)";
        $('#descrip').html(desc);

        $ventana_ancho = $(window).width();
        //alert($ventana_ancho);
        if ($ventana_ancho > 1025) {
            $('#galery').addClass("movgalery");
            $('#flex').addClass("movflex");
            $('#flext').addClass("movflex");
            setTimeout(function () { $('#flext').css({ "opacity": 1 }); $('#flex').css({ "opacity": 1 }); }, 3000);
        } else if ($ventana_ancho <= 1024) {
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
        var imagenes = "<div class=' div-xs-4 div-sm-6 div-md-12 div-lg-6 div-xl-3'>" +
            "<img class='imgmuestraser' onclick='igs(this.id)' id='i' src='images/servicios/i.jpg'>" +
            "</div>" +
            "<div class=' div-xs-4 div-sm-6 div-md-6 div-lg-6 div-xl-3'>" +
            "<img class='imgmuestraser imgp2' onclick='igs(this.id)' id='i2' src='images/servicios/i2.jpg'>" +
            "</div>"+
            "<div class=' div-xs-4 div-sm-6 div-md-6 div-lg-6 div-xl-3'>" +
            "<img class='imgmuestraser imgp2' onclick='igs(this.id)' id='i3' src='images/servicios/i3.jpg'>" +
            "</div>";
        $('#servicios2').html(imagenes);


        var texto = $('#slc0').attr('value');
        $('#title').html(texto);
        var desc = "<b>En cualquier lugar, con cualquier material</b>";
        $('#descrip').html(desc);

        $ventana_ancho = $(window).width();
        //alert($ventana_ancho);
        if ($ventana_ancho > 1025) {
            $('#galery').addClass("movgalery");
            $('#flex').addClass("movflex");
            $('#flext').addClass("movflex");
            setTimeout(function () { $('#flext').css({ "opacity": 1 }); $('#flex').css({ "opacity": 1 }); }, 3000);
        } else if ($ventana_ancho <= 1024) {
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
});
function igs(url){
    var na= url+".jpg";
    alert("esto va hacer que salga el modal con la imagen. El valor fue:"+na);
    verImagenModal('grande', na, 'X', '(C)')
};


//MUESTRA MODAL CON DATOS DE ARRIBA
function verImagenModal(tipo, img, textoBtn, parrafo) { //MODAL DE ALERTA
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
        "<div class='col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12'>" +
            "<div class='col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12'>" +
                "<img class='imgmodal' style='margin-left:25%; margin-top:8%;' src='images/servicios/"+img+"'> </div>"+
        "</div>";

    modal.classList.add(tipo);

    tipo = tipo;
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
        "<h1 style='text-aling: center !important;' class='tmodal'>" + texto + "</h1></div>" +
        "<div onclick='seccion(this.id)' id='us' class='title col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12'>" +
        "<h1 style='text-aling: center !important;' class='tmodal'>" + texto2 + "</h1></div>" +
        "<div onclick='seccion(this.id)' id='serv' class='title col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12'>" +
        "<h1 style='text-aling: center !important;' class='tmodal'>" + texto3 + "</h1></div>" +
        "<div onclick='seccion(this.id)' id='contact' class='title col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12'>" +
        "<h1 style='text-aling: center !important;' class='tmodal'>" + texto4 + "</h1></div>" +
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