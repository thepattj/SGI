var varible = 0;

$(document).ready(function () {
    $clic = 0;

    //alert("ESTE ES EL BOTON DE MENU");
    $('#icons').click(function () {
        verModal('grande', 'INICIO', 'NOSOTROS', 'SERVICIOS', 'CONTACTO', 'X', 'Platillo Preparado con tortillas previamente sazonadas con la salsa que el comensal selecciono, con una guarnición de Pollo o Huevo al gusto.');
    });
    //REDIRECCIONAMIENTO DE LOGO
    $('#logo').click(function () {
        $(location).attr('href', 'index.php');
    });

    $('#slc1').click(function () { //STANDS
        $('#servicios1').css({ "display": "none" });
        var imagenes = "<div class=' div-xs-4 div-sm-6 div-md-12 div-lg-6 div-xl-3'>" +
            "<img class='imgmuestraser imgp2' src='images/servicios/sd.jpg'>" +
            "</div>" +
            "<div class=' div-xs-4 div-sm-6 div-md-12 div-lg-6 div-xl-3'>" +
            "<img class='imgmuestraser imgp2' src='images/servicios/sd2.jpg'>" +
            "</div>" +
            "<div class=' div-xs-4 div-sm-6 div-md-12 div-lg-6 div-xl-3'>" +
            "<img class='imgmuestraser' src='images/servicios/sd3.jpg'>" +
            "</div>" +
            "<div class=' div-xs-4 div-sm-6 div-md-12 div-lg-6 div-xl-3'>" +
            "<img class='imgmuestraser' src='images/servicios/sd4.jpg'>" +
            "</div>";
        $('#servicios2').html(imagenes);

        var texto = $('#slc1').attr('value');
        $('#title').html(texto);
        var desc = "<b> DISEÑO Y PRODUCCIÓN </b> <br><br> <b> Materiales: <br> MDF, TRIPLAY, TROVICEL, COROPLAST, FOAMBOARD, LÁMINA, MICROALAMBRE, ALUMINIO</b>";
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
    $('#slc2').click(function () { //VINIL DE RECORTE
        $('#servicios1').css({ "display": "none" });
        var imagenes = "<div class=' div-xs-4 div-sm-6 div-md-12 div-lg-6 div-xl-3'>" +
            "<img class='imgmuestraser' src='images/servicios/recort.jpg'>" +
            "</div>" +
            "<div class=' div-xs-4 div-sm-6 div-md-12 div-lg-6 div-xl-3'>" +
            "<img class='imgmuestraser' src='images/servicios/recort2.jpg'>" +
            "</div>" +
            "<div class=' div-xs-4 div-sm-6 div-md-12 div-lg-6 div-xl-3'>" +
            "<img class='imgmuestraser imgp2' src='images/servicios/recort3.jpg'>" +
            "</div>";
        $('#servicios2').html(imagenes);

        var texto = $('#slc2').attr('value');
        $('#title').html(texto);
        var desc = "<b> IMPRESIÓN, RECORTE E INSTALACIÓN</b> <br><br> <b>Materiales: <br> AUTOADHERIBLE </b> (mate, blanco, transparente, microperforado)<br><b>ELECTROESTÁTICO </b> (blanco, transparente)";
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
    $('#slc3').click(function () { // VINIL PARA CUALQUIER SUPERFICIE
        $('#servicios1').css({ "display": "none" });
        var imagenes = "<div class=' div-xs-4 div-sm-6 div-md-12 div-lg-6 div-xl-3'>" +
            "<img class='imgmuestraser' src='images/servicios/sup.jpg'>" +
            "</div>" +
            "<div class=' div-xs-4 div-sm-6 div-md-12 div-lg-6 div-xl-3'>" +
            "<img class='imgmuestraser' src='images/servicios/sup1.jpg'>" +
            "</div>" +
            "<div class=' div-xs-4 div-sm-6 div-md-12 div-lg-6 div-xl-3'>" +
            "<img class='imgmuestraser' src='images/servicios/sup2.jpg'>" +
            "</div>" +
            "<div class=' div-xs-4 div-sm-6 div-md-12 div-lg-6 div-xl-3'>" +
            "<img class='imgmuestraser' src='images/servicios/sup3.jpg'>" +
            "</div>" +
            "<div class=' div-xs-4 div-sm-6 div-md-12 div-lg-6 div-xl-3'>" +
            "<img class='imgmuestraser' src='images/servicios/sup4.jpg'>" +
            "</div>" +
            "<div class=' div-xs-4 div-sm-6 div-md-12 div-lg-6 div-xl-3'>" +
            "<img class='imgmuestraser' src='images/servicios/sup5.jpg'>" +
            "</div>" +
            "<div class=' div-xs-4 div-sm-6 div-md-12 div-lg-6 div-xl-3'>" +
            "<img class='imgmuestraser imgp2' src='images/servicios/sup6.jpg'>" +
            "</div>";
        $('#servicios2').html(imagenes);

        var texto = $('#slc3').attr('value');
        $('#title').html(texto);
        var desc = "<b> IMPRESIÓN, RECORTE E INSTALACIÓN</b> <br><br> <b>Materiales: <br> AUTOADHERIBLE </b> (mate, blanco, transparente, microperforado)<br><b>ELECTROESTÁTICO </b> (blanco, transparente)";
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
    $('#slc4').click(function () { // LONAS
        $('#servicios1').css({ "display": "none" });
        var imagenes = "<div class=' div-xs-4 div-sm-6 div-md-12 div-lg-6 div-xl-3'>" +
            "<img class='imgmuestraser' src='images/servicios/lona.jpg'>" +
            "</div>" +
            "<div class=' div-xs-4 div-sm-6 div-md-12 div-lg-6 div-xl-3'>" +
            "<img class='imgmuestraser' src='images/servicios/lona2.jpg'>" +
            "</div>" +
            "<div class=' div-xs-4 div-sm-6 div-md-12 div-lg-6 div-xl-3'>" +
            "<img class='imgmuestraser imgp2' src='images/servicios/lona3.jpg'>" +
            "</div>" +
            "<div class=' div-xs-4 div-sm-6 div-md-12 div-lg-6 div-xl-3'>" +
            "<img class='imgmuestraser imgp2' src='images/servicios/lona4.jpg'>" +
            "</div>";
        $('#servicios2').html(imagenes);

        var texto = $('#slc4').attr('value');
        $('#title').html(texto);
        var desc = "<b> IMPRESIÓN E INSTALACIÓN</b> <br><br> <b>Materiales: <br> BLACKLIGHT <br> MESH <br> BLACKOUT <br> FRONT</b> (brillante y mate)";
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
    $('#slc5').click(function () { // TELA
        $('#servicios1').css({ "display": "none" });
        var imagenes = "<div class=' div-xs-4 div-sm-6 div-md-12 div-lg-6 div-xl-3'>" +
            "<img class='imgmuestraser' src='images/servicios/tela.jpg'>" +
            "</div>" +
            "<div class=' div-xs-4 div-sm-6 div-md-12 div-lg-6 div-xl-3'>" +
            "<img class='imgmuestraser imgp2' src='images/servicios/tela2.jpg'>" +
            "</div>" +
            "<div class=' div-xs-4 div-sm-6 div-md-12 div-lg-6 div-xl-3'>" +
            "<img class='imgmuestraser' src='images/servicios/tela3.jpg'>" +
            "</div>" +
            "<div class=' div-xs-4 div-sm-6 div-md-12 div-lg-6 div-xl-3'>" +
            "<img class='imgmuestraser' src='images/servicios/tela4.jpg'>" +
            "</div>";
        $('#servicios2').html(imagenes);


        var texto = $('#slc5').attr('value');
        $('#title').html(texto);
        var desc = "<b> SUBLIMACIÓN E IMPRESIÓN</b> <br><br> <b>Materiales: <br> TELA PLACK ART Y TEN CLOTH ACABADOS </b> (Dobladillo perimental, Jaretas, Hule para perfil de aluminio)";
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
    $('#slc6').click(function () { //SUSTRATOS
        $('#servicios1').css({ "display": "none" });
        var imagenes = "<div class=' div-xs-4 div-sm-6 div-md-12 div-lg-6 div-xl-3'>" +
            "<img class='imgmuestraser' src='images/servicios/subs.jpg'>" +
            "</div>";
        $('#servicios2').html(imagenes);

        var texto = $('#slc6').attr('value');
        $('#title').html(texto);
        var desc = "<b> IMPRESIÓN E INSTALACIÓN </b> <br><br> <b>Materiales:<br> ESTIRENO, COROPLAST, FOAMBOARD, MDF</b>";
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
    $('#slc7').click(function () { //VOLUMETRICOSD
        $('#servicios1').css({ "display": "none" });
        var imagenes = "<div class=' div-xs-4 div-sm-6 div-md-12 div-lg-6 div-xl-3'>" +
            "<img class='imgmuestraser' src='images/servicios/vol.jpg'>" +
            "</div>";
        $('#servicios2').html(imagenes);


        var texto = $('#slc7').attr('value');
        $('#title').html(texto);
        var desc = "<b> DISEÑO Y PRODUCCIÓN</b> <br><br> <b>Materiales :<br> </b>";
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
        "<h1 class='tmodal'>" + texto + "</h1></div>" +
        "<div onclick='seccion(this.id)' id='us' class='title col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12'>" +
        "<h1 class='tmodal'>" + texto2 + "</h1></div>" +
        "<div onclick='seccion(this.id)' id='serv' class='title col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12'>" +
        "<h1 class='tmodal'>" + texto3 + "</h1></div>" +
        "<div onclick='seccion(this.id)' id='contact' class='title col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12'>" +
        "<h1 class='tmodal'>" + texto4 + "</h1></div>" +
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