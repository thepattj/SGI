var varible = 0;
sessionStorage.setItem("ulrm",'a');
nueva = "";

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
        $('#galerias').css({ "display": "none" });
        $('#slc2').css({"border-bottom":"", "font-weight":""});
        $('#slc3').css({"border-bottom":"", "font-weight":""});
        $('#slc4').css({"border-bottom":"", "font-weight":""});
        $('#slc5').css({"border-bottom":"", "font-weight":""});
        $('#slc6').css({"border-bottom":"", "font-weight":""});
        $('#slc7').css({"border-bottom":"", "font-weight":""});
        $('#slc8').css({"border-bottom":"", "font-weight":""});
        $('#slc9').css({"border-bottom":"", "font-weight":""});
        $('#slc0').css({"border-bottom":"", "font-weight":""});
        
        var texto = $('#slc1').attr('value');
        var imagenes = "<div class='col-sm-12 col-md-12 col-lg-7 col-xl-7'>"+
                            "<div id='fotosdservi' class='row'>"+
                                "<div class='outmarg col-sm-6 col-md-6 col-lg-6 col-xl-6'> <img class='imgserviunico' onclick='igs(this.id,2)' id='sd' src='images/servicios/sd.jpg'> </div>"+
                                "<div class='outmarg col-sm-6 col-md-6 col-lg-6 col-xl-6'> <img class='imgserviunico' onclick='igs(this.id,2)' id='sd2' src='images/servicios/sd2.jpg'> </div>"+
                                "<div class='outmarg col-sm-6 col-md-6 col-lg-6 col-xl-6'> <img class='imgserviunico' onclick='igs(this.id,2)' id='sd3' src='images/servicios/sd3.jpg'> </div>"+
                                "<div class='outmarg col-sm-6 col-md-6 col-lg-6 col-xl-6'> <img class='imgserviunico' onclick='igs(this.id,2)' id='sd4z' src='images/servicios/sd4.jpg'> </div>"+
                                "<div class='outmarg col-sm-6 col-md-6 col-lg-6 col-xl-6'> <img class='imgserviunico' onclick='igs(this.id,2)' id='sd5z' src='images/servicios/sd5.jpg'> </div>"+
                                "<div class='outmarg col-sm-6 col-md-6 col-lg-6 col-xl-6'> <img class='imgserviunico' onclick='igs(this.id,2)' id='sd6z' src='images/servicios/sd6.jpg'> </div>"+
                                "<div class='outmarg col-sm-6 col-md-6 col-lg-6 col-xl-6'> <img class='imgserviunico' onclick='igs(this.id,2)' id='sd7' src='images/servicios/sd7.jpg'> </div>"+
                                "<div class='outmarg col-sm-6 col-md-6 col-lg-6 col-xl-6'> <img class='imgserviunico' onclick='igs(this.id,2)' id='sd8' src='images/servicios/sd8.jpg'> </div>"+
                                "<div class='outmarg col-sm-6 col-md-6 col-lg-6 col-xl-6'> <img class='imgserviunico' onclick='igs(this.id,2)' id='sd10' src='images/servicios/sd10.jpg'> </div>"+
                                "<div class='outmarg col-sm-6 col-md-6 col-lg-6 col-xl-6'> <img class='imgserviunico' onclick='igs(this.id,2)' id='sd11' src='images/servicios/sd11.jpg'> </div>"+
                            "</div>"+
                        "</div>"+
                        "<div class='col-sm-12 col-md-12 col-lg-5 col-xl-5'>"+
                            "<div id='infoservicio' class='row'>"+
                                "<div class='col-sm-12 col-md-12 col-lg-12 col-xl-12' id='tituloserv'>"+
                                    "<h4>"+texto+"</h4>"+
                                "</div>"+
                                "<div class='col-sm-12 col-md-12 col-lg-12 col-xl-12 text-justify' id='infoser'>"+
                                    "<h6><b> Materiales: </b> <br> MDF, triplay, trovicel, coroplast, foamboard, lámina, microalambre, aluminio entre otros </h6>"+
                                "</div>"+
                            "</div>"+
                        "</div>";
        $('#unicoservi').html(imagenes);
        $('#slc1').css({"border-bottom":"3px solid #00FFFF", "font-weight":"bold"});
        $ventana_ancho = $(window).width();
        if ($ventana_ancho < 1024) {
            //alert("es un dispositivo movil");
            $('#seleccion').css({"float":"none"});
            $('.informacion').animate({ scrollTop: 9999 }, 2000);
        }
    });
    $('#slc2').click(function () { //VINIL DE RECORTE bien
        $('#galerias').css({ "display": "none" });
        var texto = $('#slc2').attr('value');
        $('#slc1').css({"border-bottom":"", "font-weight":""});
        $('#slc3').css({"border-bottom":"", "font-weight":""});
        $('#slc4').css({"border-bottom":"", "font-weight":""});
        $('#slc5').css({"border-bottom":"", "font-weight":""});
        $('#slc6').css({"border-bottom":"", "font-weight":""});
        $('#slc7').css({"border-bottom":"", "font-weight":""});
        $('#slc8').css({"border-bottom":"", "font-weight":""});
        $('#slc9').css({"border-bottom":"", "font-weight":""});
        $('#slc0').css({"border-bottom":"", "font-weight":""});
        var imagenes = "<div class='col-sm-12 col-md-12 col-lg-7 col-xl-7'>"+
                            "<div id='fotosdservi' class='row'>"+
                                "<div class='outmarg col-sm-6 col-md-6 col-lg-6 col-xl-6'> <img class='imgserviunico' onclick='igs(this.id,2)' id='recort' src='images/servicios/recort.jpg'> </div>"+
                                "<div class='outmarg col-sm-6 col-md-6 col-lg-6 col-xl-6'> <img class='imgserviunico' onclick='igs(this.id,2)' id='recort2' src='images/servicios/recort2.jpg'> </div>"+
                                "<div class='outmarg col-sm-6 col-md-6 col-lg-6 col-xl-6'> <img class='imgserviunico' onclick='igs(this.id,2)' id='recort3' src='images/servicios/recort3.jpg'> </div>"+
                                "<div class='outmarg col-sm-6 col-md-6 col-lg-6 col-xl-6'> <img class='imgserviunico' onclick='igs(this.id,2)' id='recort4z' src='images/servicios/recort4.jpg'> </div>"+
                                "<div class='outmarg col-sm-6 col-md-6 col-lg-6 col-xl-6'> <img class='imgserviunico' onclick='igs(this.id,2)' id='recort5z' src='images/servicios/recort5.jpg'> </div>"+
                                "<div class='outmarg col-sm-6 col-md-6 col-lg-6 col-xl-6'> <img class='imgserviunico' onclick='igs(this.id,2)' id='recort6' src='images/servicios/recort6.jpg'> </div>"+
                                "<div class='outmarg col-sm-6 col-md-6 col-lg-6 col-xl-6'> <img class='imgserviunico' onclick='igs(this.id,2)' id='recort7' src='images/servicios/recort7.jpg'> </div>"+
                                "<div class='outmarg col-sm-6 col-md-6 col-lg-6 col-xl-6'> <img class='imgserviunico' onclick='igs(this.id,2)' id='recort8' src='images/servicios/recort8.jpg'> </div>"+
                                "<div class='outmarg col-sm-6 col-md-6 col-lg-6 col-xl-6'> <img class='imgserviunico' onclick='igs(this.id,2)' id='recort9' src='images/servicios/recort9.jpg'> </div>"+
                                "<div class='outmarg col-sm-6 col-md-6 col-lg-6 col-xl-6'> <img class='imgserviunico' onclick='igs(this.id,2)' id='recort10' src='images/servicios/recort10.jpg'> </div>"+
                            "</div>"+
                        "</div>"+
                        "<div class='col-sm-12 col-md-12 col-lg-5 col-xl-5'>"+
                            "<div id='infoservicio' class='row'>"+
                                "<div class='col-sm-12 col-md-12 col-lg-12 col-xl-12' id='tituloserv'>"+
                                    "<h4>"+texto+"</h4>"+
                                "</div>"+
                                "<div class='col-sm-12 col-md-12 col-lg-12 col-xl-12 text-justify' id='infoser'>"+
                                    "<h6><b> Materiales: </b>  <br> RECORTE (a uno o varios colores)<br>ESMERILADO (recorte e impreso)</h6>"+
                                "</div>"+
                            "</div>"+
                        "</div>";
        $('#unicoservi').html(imagenes);
        $('#slc2').css({"border-bottom":"3px solid #FF00FF", "font-weight":"bold"});
        $ventana_ancho = $(window).width();
        if ($ventana_ancho < 1024) {
            //alert("es un dispositivo movil");
            $('#seleccion').css({"float":"none"});
            $('.informacion').animate({ scrollTop: 9999 }, 2000);
        }
    });
    $('#slc3').click(function () { // VINIL bien
        $('#galerias').css({ "display": "none" });
        var texto = $('#slc3').attr('value');
        $('#slc1').css({"border-bottom":"", "font-weight":""});
        $('#slc2').css({"border-bottom":"", "font-weight":""});
        $('#slc4').css({"border-bottom":"", "font-weight":""});
        $('#slc5').css({"border-bottom":"", "font-weight":""});
        $('#slc6').css({"border-bottom":"", "font-weight":""});
        $('#slc7').css({"border-bottom":"", "font-weight":""});
        $('#slc8').css({"border-bottom":"", "font-weight":""});
        $('#slc9').css({"border-bottom":"", "font-weight":""});
        $('#slc0').css({"border-bottom":"", "font-weight":""});
        var imagenes = "<div class='col-sm-12 col-md-12 col-lg-7 col-xl-7'>"+
                            "<div id='fotosdservi' class='row'>"+
                                "<div class='outmarg col-sm-6 col-md-6 col-lg-6 col-xl-6'> <img class='imgserviunico' onclick='igs(this.id,2)' id='vinil' src='images/servicios/vinil.jpg'> </div>"+
                                "<div class='outmarg col-sm-6 col-md-6 col-lg-6 col-xl-6'> <img class='imgserviunico' onclick='igs(this.id,2)' id='vinil1' src='images/servicios/vinil1.jpg'> </div>"+
                                "<div class='outmarg col-sm-6 col-md-6 col-lg-6 col-xl-6'> <img class='imgserviunico' onclick='igs(this.id,2)' id='vinil2' src='images/servicios/vinil2.jpg'> </div>"+
                                "<div class='outmarg col-sm-6 col-md-6 col-lg-6 col-xl-6'> <img class='imgserviunico' onclick='igs(this.id,2)' id='vinil3' src='images/servicios/vinil3.jpg'> </div>"+
                                "<div class='outmarg col-sm-6 col-md-6 col-lg-6 col-xl-6'> <img class='imgserviunico' onclick='igs(this.id,2)' id='vinil4' src='images/servicios/vinil4.jpg'> </div>"+
                                "<div class='outmarg col-sm-6 col-md-6 col-lg-6 col-xl-6'> <img class='imgserviunico' onclick='igs(this.id,2)' id='vinil5' src='images/servicios/vinil5.jpg'> </div>"+
                                "<div class='outmarg col-sm-6 col-md-6 col-lg-6 col-xl-6'> <img class='imgserviunico' onclick='igs(this.id,2)' id='vinil6' src='images/servicios/vinil6.jpg'> </div>"+
                                "<div class='outmarg col-sm-6 col-md-6 col-lg-6 col-xl-6'> <img class='imgserviunico' onclick='igs(this.id,2)' id='vinil7' src='images/servicios/vinil7.jpg'> </div>"+
                                "<div class='outmarg col-sm-6 col-md-6 col-lg-6 col-xl-6'> <img class='imgserviunico' onclick='igs(this.id,2)' id='vinil8' src='images/servicios/vinil8.jpg'> </div>"+
                                "<div class='outmarg col-sm-6 col-md-6 col-lg-6 col-xl-6'> <img class='imgserviunico' onclick='igs(this.id,2)' id='vinil9' src='images/servicios/vinil9.jpg'> </div>"+
                            "</div>"+
                        "</div>"+
                        "<div class='col-sm-12 col-md-12 col-lg-5 col-xl-5'>"+
                            "<div id='infoservicio' class='row'>"+
                                "<div class='col-sm-12 col-md-12 col-lg-12 col-xl-12' id='tituloserv'>"+
                                    "<h4>"+texto+"</h4>"+
                                "</div>"+
                                "<div class='col-sm-12 col-md-12 col-lg-12 col-xl-12 text-justify' id='infoser'>"+
                                    "<h6><b>Materiales:</b>  <br> WALL GRAPHIC <br> FLOOR GRAPHIC <br>ELECTROESTÁTICO  (blanco, transparente)<br>AUTOADHERIBLE (mate, blanco, covencional, con fondo gris o negro, microperforado)</h6>"+
                                "</div>"+
                            "</div>"+
                        "</div>";
        $('#unicoservi').html(imagenes);
        $('#slc3').css({"border-bottom":"3px solid #FFFF00", "font-weight":"bold"}); 
        $ventana_ancho = $(window).width();
        if ($ventana_ancho < 1024) {
            //alert("es un dispositivo movil");
            $('#seleccion').css({"float":"none"});
            $('.informacion').animate({ scrollTop: 9999 }, 2000);
        }
    });
    $('#slc4').click(function () { // GRAN FORMATO bien
        $('#galerias').css({ "display": "none" });
        $('#slc1').css({"border-bottom":"", "font-weight":""});
        $('#slc2').css({"border-bottom":"", "font-weight":""});
        $('#slc3').css({"border-bottom":"", "font-weight":""});
        $('#slc5').css({"border-bottom":"", "font-weight":""});
        $('#slc6').css({"border-bottom":"", "font-weight":""});
        $('#slc7').css({"border-bottom":"", "font-weight":""});
        $('#slc8').css({"border-bottom":"", "font-weight":""});
        $('#slc9').css({"border-bottom":"", "font-weight":""});
        $('#slc0').css({"border-bottom":"", "font-weight":""});
        var texto = $('#slc4').attr('value');
        var imagenes = "<div class='col-sm-12 col-md-12 col-lg-7 col-xl-7'>"+
                            "<div id='fotosdservi' class='row'>"+
                                "<div class='outmarg col-sm-6 col-md-6 col-lg-6 col-xl-6'> <img class='imgserviunico' onclick='igs(this.id,2)' id='formato' src='images/servicios/formato.jpg'> </div>"+
                                "<div class='outmarg col-sm-6 col-md-6 col-lg-6 col-xl-6'> <img class='imgserviunico' onclick='igs(this.id,2)' id='formato2' src='images/servicios/formato2.jpg'> </div>"+
                                "<div class='outmarg col-sm-6 col-md-6 col-lg-6 col-xl-6'> <img class='imgserviunico' onclick='igs(this.id,2)' id='formato3' src='images/servicios/formato3.jpg'> </div>"+
                                "<div class='outmarg col-sm-6 col-md-6 col-lg-6 col-xl-6'> <img class='imgserviunico' onclick='igs(this.id,2)' id='formato4' src='images/servicios/formato4.jpg'> </div>"+
                                "<div class='outmarg col-sm-6 col-md-6 col-lg-6 col-xl-6'> <img class='imgserviunico' onclick='igs(this.id,2)' id='formato5' src='images/servicios/formato5.jpg'> </div>"+
                                "<div class='outmarg col-sm-6 col-md-6 col-lg-6 col-xl-6'> <img class='imgserviunico' onclick='igs(this.id,2)' id='formato6z' src='images/servicios/formato6.jpg'> </div>"+
                                "<div class='outmarg col-sm-6 col-md-6 col-lg-6 col-xl-6'> <img class='imgserviunico' onclick='igs(this.id,2)' id='formato7' src='images/servicios/formato7.jpg'> </div>"+
                                "<div class='outmarg col-sm-6 col-md-6 col-lg-6 col-xl-6'> <img class='imgserviunico' onclick='igs(this.id,2)' id='formato8' src='images/servicios/formato8.jpg'> </div>"+
                            "</div>"+
                        "</div>"+
                        "<div class='col-sm-12 col-md-12 col-lg-5 col-xl-5'>"+
                            "<div id='infoservicio' class='row'>"+
                                "<div class='col-sm-12 col-md-12 col-lg-12 col-xl-12' id='tituloserv'>"+
                                    "<h4>"+texto+"</h4>"+
                                "</div>"+
                                "<div class='col-sm-12 col-md-12 col-lg-12 col-xl-12 text-justify' id='infoser'>"+
                                    "<h6><b>Materiales:</b>  <br> LONAS Tradicionales (de 13 onzas) <br> APLICACIÓN DE LONAS (en bastidores) <br> LONA BLACKLIGHT <br> LONA MESH <br> LONA BLACKOUT <br> LONA SOLIDA <br> PARA TOLDOS <br> VINIL (blanco, con adhesivo gris o negro)</h6>"+
                                "</div>"+
                            "</div>"+
                        "</div>";
        $('#unicoservi').html(imagenes);
        $('#slc4').css({"border-bottom":"3px solid #00FFFF", "font-weight":"bold"}); 
        $ventana_ancho = $(window).width();
        if ($ventana_ancho < 1024) {
            //alert("es un dispositivo movil");
            $('#seleccion').css({"float":"none"});
            $('.informacion').animate({ scrollTop: 9999 }, 2000);
        }
    });
    $('#slc5').click(function () { // TELA bien
        $('#galerias').css({ "display": "none" });
        $('#slc1').css({"border-bottom":"", "font-weight":""});
        $('#slc2').css({"border-bottom":"", "font-weight":""});
        $('#slc3').css({"border-bottom":"", "font-weight":""});
        $('#slc4').css({"border-bottom":"", "font-weight":""});
        $('#slc6').css({"border-bottom":"", "font-weight":""});
        $('#slc7').css({"border-bottom":"", "font-weight":""});
        $('#slc8').css({"border-bottom":"", "font-weight":""});
        $('#slc9').css({"border-bottom":"", "font-weight":""});
        $('#slc0').css({"border-bottom":"", "font-weight":""});
        var texto = $('#slc5').attr('value');
        var imagenes = "<div class='col-sm-12 col-md-12 col-lg-7 col-xl-7'>"+
                            "<div id='fotosdservi' class='row'>"+
                                "<div class='outmarg col-sm-6 col-md-6 col-lg-6 col-xl-6'> <img class='imgserviunico' onclick='igs(this.id,2)' id='tela' src='images/servicios/tela.jpg'> </div>"+
                                "<div class='outmarg col-sm-6 col-md-6 col-lg-6 col-xl-6'> <img class='imgserviunico' onclick='igs(this.id,2)' id='tela2z' src='images/servicios/tela2.jpg'> </div>"+
                                "<div class='outmarg col-sm-6 col-md-6 col-lg-6 col-xl-6'> <img class='imgserviunico' onclick='igs(this.id,2)' id='tela3' src='images/servicios/tela3.jpg'> </div>"+
                                "<div class='outmarg col-sm-6 col-md-6 col-lg-6 col-xl-6'> <img class='imgserviunico' onclick='igs(this.id,2)' id='tela4' src='images/servicios/tela4.jpg'> </div>"+
                                "<div class='outmarg col-sm-6 col-md-6 col-lg-6 col-xl-6'> <img class='imgserviunico' onclick='igs(this.id,2)' id='tela5z' src='images/servicios/tela5.jpg'> </div>"+
                                "<div class='outmarg col-sm-6 col-md-6 col-lg-6 col-xl-6'> <img class='imgserviunico' onclick='igs(this.id,2)' id='tela6' src='images/servicios/tela6.jpg'> </div>"+
                            "</div>"+
                        "</div>"+
                        "<div class='col-sm-12 col-md-12 col-lg-5 col-xl-5'>"+
                            "<div id='infoservicio' class='row'>"+
                                "<div class='col-sm-12 col-md-12 col-lg-12 col-xl-12' id='tituloserv'>"+
                                    "<h4>"+texto+"</h4>"+
                                "</div>"+
                                "<div class='col-sm-12 col-md-12 col-lg-12 col-xl-12 text-justify' id='infoser'>"+
                                    "<h6><b>Materiales:</b>  <br> SUBLIMACIÓN EN DIFERENTES TIPOS DE TELA<br> (brillosa, mate y repelente al agua)</h6>"+
                                "</div>"+
                            "</div>"+
                        "</div>";
        $('#unicoservi').html(imagenes);
        $('#slc5').css({"border-bottom":"3px solid #FF00FF", "font-weight":"bold"});
        $ventana_ancho = $(window).width();
        if ($ventana_ancho < 1024) {
            //alert("es un dispositivo movil");
            $('#seleccion').css({"float":"none"});
            $('.informacion').animate({ scrollTop: 9999 }, 2000);
        }
    });
    $('#slc6').click(function () { //LETREROS EN 3D
        $('#galerias').css({ "display": "none" });
        $('#slc1').css({"border-bottom":"", "font-weight":""});
        $('#slc2').css({"border-bottom":"", "font-weight":""});
        $('#slc3').css({"border-bottom":"", "font-weight":""});
        $('#slc4').css({"border-bottom":"", "font-weight":""});
        $('#slc5').css({"border-bottom":"", "font-weight":""});
        $('#slc7').css({"border-bottom":"", "font-weight":""});
        $('#slc8').css({"border-bottom":"", "font-weight":""});
        $('#slc9').css({"border-bottom":"", "font-weight":""});
        $('#slc0').css({"border-bottom":"", "font-weight":""});
        var texto = $('#slc6').attr('value');
        var imagenes = "<div class='col-sm-12 col-md-12 col-lg-7 col-xl-7'>"+
                            "<div id='fotosdservi' class='row'>"+
                                "<div class='outmarg col-sm-6 col-md-6 col-lg-6 col-xl-6'> <img class='imgserviunico' onclick='igs(this.id,2)' id='lt' src='images/servicios/lt.jpg'> </div>"+
                                "<div class='outmarg col-sm-6 col-md-6 col-lg-6 col-xl-6'> <img class='imgserviunico' onclick='igs(this.id,2)' id='lt2' src='images/servicios/lt2.jpg'> </div>"+
                                "<div class='outmarg col-sm-6 col-md-6 col-lg-6 col-xl-6'> <img class='imgserviunico' onclick='igs(this.id,2)' id='lt3' src='images/servicios/lt3.jpg'> </div>"+
                                "<div class='outmarg col-sm-6 col-md-6 col-lg-6 col-xl-6'> <img class='imgserviunico' onclick='igs(this.id,2)' id='lt4' src='images/servicios/lt4.jpg'> </div>"+
                                "<div class='outmarg col-sm-6 col-md-6 col-lg-6 col-xl-6'> <img class='imgserviunico' onclick='igs(this.id,2)' id='lt5' src='images/servicios/lt5.jpg'> </div>"+
                                "<div class='outmarg col-sm-6 col-md-6 col-lg-6 col-xl-6'> <img class='imgserviunico' onclick='igs(this.id,2)' id='lt6' src='images/servicios/lt6.jpg'> </div>"+
                                "<div class='outmarg col-sm-6 col-md-6 col-lg-6 col-xl-6'> <img class='imgserviunico' onclick='igs(this.id,2)' id='lt7' src='images/servicios/lt7.jpg'> </div>"+
                                "<div class='outmarg col-sm-6 col-md-6 col-lg-6 col-xl-6'> <img class='imgserviunico' onclick='igs(this.id,2)' id='lt8' src='images/servicios/lt8.jpg'> </div>"+
                                "<div class='outmarg col-sm-6 col-md-6 col-lg-6 col-xl-6'> <img class='imgserviunico' onclick='igs(this.id,2)' id='lt9' src='images/servicios/lt9.jpg'> </div>"+
                                "<div class='outmarg col-sm-6 col-md-6 col-lg-6 col-xl-6'> <img class='imgserviunico' onclick='igs(this.id,2)' id='lt10' src='images/servicios/lt10.jpg'> </div>"+
                            "</div>"+
                        "</div>"+
                        "<div class='col-sm-12 col-md-12 col-lg-5 col-xl-5'>"+
                            "<div id='infoservicio' class='row'>"+
                                "<div class='col-sm-12 col-md-12 col-lg-12 col-xl-12' id='tituloserv'>"+
                                    "<h4>"+texto+"</h4>"+
                                "</div>"+
                                "<div class='col-sm-12 col-md-12 col-lg-12 col-xl-12 text-justify' id='infoser'>"+
                                    "<h6><b>Materiales:</b>  <br> SUBLIMACIÓN EN DIFERENTES TIPOS DE TELA <br> (brillosa, mate y repelente al agua)</h6>"+
                                "</div>"+
                            "</div>"+
                        "</div>";
        $('#unicoservi').html(imagenes);
        $('#slc6').css({"border-bottom":"3px solid #FFFF00", "font-weight":"bold"}); 
        $ventana_ancho = $(window).width();
        if ($ventana_ancho < 1024) {
            //alert("es un dispositivo movil");
            $('#seleccion').css({"float":"none"});
            $('.informacion').animate({ scrollTop: 9999 }, 2000);
        } 
    });
    $('#slc7').click(function () { //VOLUMETRICOS
        $('#slc1').css({"border-bottom":"", "font-weight":""});
        $('#slc2').css({"border-bottom":"", "font-weight":""});
        $('#slc3').css({"border-bottom":"", "font-weight":""});
        $('#slc4').css({"border-bottom":"", "font-weight":""});
        $('#slc5').css({"border-bottom":"", "font-weight":""});
        $('#slc6').css({"border-bottom":"", "font-weight":""});
        $('#slc8').css({"border-bottom":"", "font-weight":""});
        $('#slc9').css({"border-bottom":"", "font-weight":""});
        $('#slc0').css({"border-bottom":"", "font-weight":""});
        $('#galerias').css({ "display": "none" });
        var texto = $('#slc7').attr('value');
        var imagenes = "<div class='col-sm-12 col-md-12 col-lg-7 col-xl-7'>"+
                            "<div id='fotosdservi' class='row'>"+
                                "<div class='outmarg col-sm-6 col-md-6 col-lg-6 col-xl-6'> <img class='imgserviunico' onclick='igs(this.id,2)' id='vol' src='images/servicios/vol.jpg'> </div>"+
                                "<div class='outmarg col-sm-6 col-md-6 col-lg-6 col-xl-6'> <img class='imgserviunico' onclick='igs(this.id,2)' id='vol2z' src='images/servicios/vol2.jpg'> </div>"+
                                "<div class='outmarg col-sm-6 col-md-6 col-lg-6 col-xl-6'> <img class='imgserviunico' onclick='igs(this.id,2)' id='vol3' src='images/servicios/vol3.jpg'> </div>"+
                                "<div class='outmarg col-sm-6 col-md-6 col-lg-6 col-xl-6'> <img class='imgserviunico' onclick='igs(this.id,2)' id='vol4' src='images/servicios/vol4.jpg'> </div>"+
                                "<div class='outmarg col-sm-6 col-md-6 col-lg-6 col-xl-6'> <img class='imgserviunico' onclick='igs(this.id,2)' id='vol5' src='images/servicios/vol5.jpg'> </div>"+
                                "<div class='outmarg col-sm-6 col-md-6 col-lg-6 col-xl-6'> <img class='imgserviunico' onclick='igs(this.id,2)' id='vol6' src='images/servicios/vol6.jpg'> </div>"+
                                "<div class='outmarg col-sm-6 col-md-6 col-lg-6 col-xl-6'> <img class='imgserviunico' onclick='igs(this.id,2)' id='vol7' src='images/servicios/vol7.jpg'> </div>"+
                                "<div class='outmarg col-sm-6 col-md-6 col-lg-6 col-xl-6'> <img class='imgserviunico' onclick='igs(this.id,2)' id='vol8' src='images/servicios/vol8.jpg'> </div>"+
                            "</div>"+
                        "</div>"+
                        "<div class='col-sm-12 col-md-12 col-lg-5 col-xl-5'>"+
                            "<div id='infoservicio' class='row'>"+
                                "<div class='col-sm-12 col-md-12 col-lg-12 col-xl-12' id='tituloserv'>"+
                                    "<h4>"+texto+"</h4>"+
                                "</div>"+
                                "<div class='col-sm-12 col-md-12 col-lg-12 col-xl-12 text-justify' id='infoser'>"+
                                    "<h6><b> DISEÑO Y PRODUCCIÓN</b></h6>"+
                                "</div>"+
                            "</div>"+
                        "</div>";
        $('#unicoservi').html(imagenes);
        $('#slc7').css({"border-bottom":"3px solid #00ffff", "font-weight":"bold"});  
        $ventana_ancho = $(window).width();
        if ($ventana_ancho < 1024) {
            //alert("es un dispositivo movil");
            $('#seleccion').css({"float":"none"});
            $('.informacion').animate({ scrollTop: 9999 }, 2000);
        }
    });
    $('#slc8').click(function () { // PLAYERAS bien
        $('#galerias').css({ "display": "none" });
        $('#slc1').css({"border-bottom":"", "font-weight":""});
        $('#slc2').css({"border-bottom":"", "font-weight":""});
        $('#slc3').css({"border-bottom":"", "font-weight":""});
        $('#slc4').css({"border-bottom":"", "font-weight":""});
        $('#slc5').css({"border-bottom":"", "font-weight":""});
        $('#slc6').css({"border-bottom":"", "font-weight":""});
        $('#slc7').css({"border-bottom":"", "font-weight":""});
        $('#slc9').css({"border-bottom":"", "font-weight":""});
        $('#slc0').css({"border-bottom":"", "font-weight":""});
        var texto = $('#slc8').attr('value');
        var imagenes = "<div class='col-sm-12 col-md-12 col-lg-7 col-xl-7'>"+
                            "<div id='fotosdservi' class='row'>"+
                                "<div class='outmarg col-sm-6 col-md-6 col-lg-6 col-xl-6'> <img class='imgserviunico' onclick='igs(this.id,2)' id='playeraz' src='images/servicios/playeraz.jpg'> </div>"+
                                "<div class='outmarg col-sm-6 col-md-6 col-lg-6 col-xl-6'> <img class='imgserviunico' onclick='igs(this.id,2)' id='playera3' src='images/servicios/playera3.jpg'> </div>"+
                                "<div class='outmarg col-sm-6 col-md-6 col-lg-6 col-xl-6'> <img class='imgserviunico' onclick='igs(this.id,2)' id='playera4' src='images/servicios/playera4.jpg'> </div>"+
                                "<div class='outmarg col-sm-6 col-md-6 col-lg-6 col-xl-6'> <img class='imgserviunico' onclick='igs(this.id,2)' id='playera5' src='images/servicios/playera5.jpg'> </div>"+
                            "</div>"+
                        "</div>"+
                        "<div class='col-sm-12 col-md-12 col-lg-5 col-xl-5'>"+
                            "<div id='infoservicio' class='row'>"+
                                "<div class='col-sm-12 col-md-12 col-lg-12 col-xl-12' id='tituloserv'>"+
                                    "<h4>"+texto+"</h4>"+
                                "</div>"+
                                "<div class='col-sm-12 col-md-12 col-lg-12 col-xl-12 text-justify' id='infoser'>"+
                                    "<h6><b>Materiales:</b>  <br> PLAYERAS DE CUALQUIER TIPO DE SERIGRAFIA Y VINIL TEXTIL <br> (brillosa, mate y repelente al agua)</h6>"+
                                "</div>"+
                            "</div>"+
                        "</div>";
        $('#unicoservi').html(imagenes);
        $('#slc8').css({"border-bottom":"3px solid #FF00FF", "font-weight":"bold"});  
        $ventana_ancho = $(window).width();
        if ($ventana_ancho < 1024) {
            //alert("es un dispositivo movil");
            $('#seleccion').css({"float":"none"});
            $('.informacion').animate({ scrollTop: 9999 }, 2000);
        }
    });
    $('#slc9').click(function () { // IMPRESION DIRECTA bien
        $('#slc1').css({"border-bottom":"", "font-weight":""});
        $('#slc2').css({"border-bottom":"", "font-weight":""});
        $('#slc3').css({"border-bottom":"", "font-weight":""});
        $('#slc4').css({"border-bottom":"", "font-weight":""});
        $('#slc5').css({"border-bottom":"", "font-weight":""});
        $('#slc6').css({"border-bottom":"", "font-weight":""});
        $('#slc7').css({"border-bottom":"", "font-weight":""});
        $('#slc8').css({"border-bottom":"", "font-weight":""});
        $('#slc0').css({"border-bottom":"", "font-weight":""});
        $('#galerias').css({ "display": "none" });
        var texto = $('#slc9').attr('value');
        var imagenes = "<div class='col-sm-12 col-md-12 col-lg-7 col-xl-7'>"+
                            "<div id='fotosdservi' class='row'>"+
                                "<div class='outmarg col-sm-6 col-md-6 col-lg-6 col-xl-6'> <img class='imgserviunico' onclick='igs(this.id,2)' id='id' src='images/servicios/id.jpg'> </div>"+
                                "<div class='outmarg col-sm-6 col-md-6 col-lg-6 col-xl-6'> <img class='imgserviunico' onclick='igs(this.id,2)' id='id2' src='images/servicios/id2.jpg'> </div>"+
                                "<div class='outmarg col-sm-6 col-md-6 col-lg-6 col-xl-6'> <img class='imgserviunico' onclick='igs(this.id,2)' id='id3' src='images/servicios/id3.jpg'> </div>"+
                                "<div class='outmarg col-sm-6 col-md-6 col-lg-6 col-xl-6'> <img class='imgserviunico' onclick='igs(this.id,2)' id='id4' src='images/servicios/id4.jpg'> </div>"+
                            "</div>"+
                        "</div>"+
                        "<div class='col-sm-12 col-md-12 col-lg-5 col-xl-5'>"+
                            "<div id='infoservicio' class='row'>"+
                                "<div class='col-sm-12 col-md-12 col-lg-12 col-xl-12' id='tituloserv'>"+
                                    "<h4>"+texto+"</h4>"+
                                "</div>"+
                                "<div class='col-sm-12 col-md-12 col-lg-12 col-xl-12 text-justify' id='infoser'>"+
                                    "<h6><b>Materiales:</b>  <br>SUSTRATOS RIGIDOS <br> (PVC, acrilico, vidrio, estireno, foamboard, coroplast, madera, MDF impreso)</h6>"+
                                "</div>"+
                            "</div>"+
                        "</div>";
        $('#unicoservi').html(imagenes);
        $('#slc9').css({"border-bottom":"3px solid #FFFF00", "font-weight":"bold"}); 
        $ventana_ancho = $(window).width();
        if ($ventana_ancho < 1024) {
            //alert("es un dispositivo movil");
            $('#seleccion').css({"float":"none"});
            $('.informacion').animate({ scrollTop: 9999 }, 2000);
        }
    });
    $('#slc0').click(function () { // INSTALACIONES bien
        $('#slc1').css({"border-bottom":"", "font-weight":""});
        $('#slc2').css({"border-bottom":"", "font-weight":""});
        $('#slc3').css({"border-bottom":"", "font-weight":""});
        $('#slc4').css({"border-bottom":"", "font-weight":""});
        $('#slc5').css({"border-bottom":"", "font-weight":""});
        $('#slc6').css({"border-bottom":"", "font-weight":""});
        $('#slc7').css({"border-bottom":"", "font-weight":""});
        $('#slc8').css({"border-bottom":"", "font-weight":""});
        $('#slc9').css({"border-bottom":"", "font-weight":""});
        $('#galerias').css({ "display": "none" });
        var texto = $('#slc0').attr('value');
        var imagenes = "<div class='col-sm-12 col-md-12 col-lg-7 col-xl-7'>"+
                            "<div id='fotosdservi' class='row'>"+
                                "<div class='outmarg col-sm-6 col-md-6 col-lg-6 col-xl-6'> <img class='imgserviunico' onclick='igs(this.id,2)' id='in' src='images/servicios/in.jpg'> </div>"+
                                "<div class='outmarg col-sm-6 col-md-6 col-lg-6 col-xl-6'> <img class='imgserviunico' onclick='igs(this.id,2)' id='in2' src='images/servicios/in2.jpg'> </div>"+
                                "<div class='outmarg col-sm-6 col-md-6 col-lg-6 col-xl-6'> <img class='imgserviunico' onclick='igs(this.id,2)' id='in3' src='images/servicios/in3.jpg'> </div>"+
                                "<div class='outmarg col-sm-6 col-md-6 col-lg-6 col-xl-6'> <img class='imgserviunico' onclick='igs(this.id,2)' id='in4' src='images/servicios/in4.jpg'> </div>"+
                                "<div class='outmarg col-sm-6 col-md-6 col-lg-6 col-xl-6'> <img class='imgserviunico' onclick='igs(this.id,2)' id='in5' src='images/servicios/in5.jpg'> </div>"+
                                "<div class='outmarg col-sm-6 col-md-6 col-lg-6 col-xl-6'> <img class='imgserviunico' onclick='igs(this.id,2)' id='in6' src='images/servicios/in6.jpg'> </div>"+
                            "</div>"+
                        "</div>"+
                        "<div class='col-sm-12 col-md-12 col-lg-5 col-xl-5'>"+
                            "<div id='infoservicio' class='row'>"+
                                "<div class='col-sm-12 col-md-12 col-lg-12 col-xl-12' id='tituloserv'>"+
                                    "<h4>"+texto+"</h4>"+
                                "</div>"+
                                "<div class='col-sm-12 col-md-12 col-lg-12 col-xl-12 text-justify' id='infoser'>"+
                                    "<h6><b>En cualquier lugar, con cualquier material</b></h6>"+
                                "</div>"+
                            "</div>"+
                        "</div>";
        $('#unicoservi').html(imagenes);
        $('#slc0').css({"border-bottom":"3px solid #00ffff", "font-weight":"bold"});
        $ventana_ancho = $(window).width();
        if ($ventana_ancho < 1024) {
            //alert("es un dispositivo movil");
            $('#seleccion').css({"float":"none"});
            $('.informacion').animate({ scrollTop: 9999 }, 2000);
        } 
    });

    $( "select" )
    .change(function() {
        var str = "";
        $( "select option:selected" ).each(function() {
            str += $( this ).text(); //variable que trae el titulo
            if(str == "STANDS Y DISPLAYS"){
                //alert(str);
                $('#galerias').css({ "display": "none" });
                $('#slc2').css({"border-bottom":"", "font-weight":""});
                $('#slc3').css({"border-bottom":"", "font-weight":""});
                $('#slc4').css({"border-bottom":"", "font-weight":""});
                $('#slc5').css({"border-bottom":"", "font-weight":""});
                $('#slc6').css({"border-bottom":"", "font-weight":""});
                $('#slc7').css({"border-bottom":"", "font-weight":""});
                $('#slc8').css({"border-bottom":"", "font-weight":""});
                $('#slc9').css({"border-bottom":"", "font-weight":""});
                $('#slc0').css({"border-bottom":"", "font-weight":""});
                
                var texto = $('#slc1').attr('value');
                var imagenes = "<div class='col-sm-12 col-md-12 col-lg-7 col-xl-7'>"+
                                    "<div id='fotosdservi' class='row'>"+
                                        "<div class='outmarg col-sm-6 col-md-6 col-lg-6 col-xl-6'> <img class='imgserviunico' onclick='igs(this.id,2)' id='sd' src='images/servicios/sd.jpg'> </div>"+
                                        "<div class='outmarg col-sm-6 col-md-6 col-lg-6 col-xl-6'> <img class='imgserviunico' onclick='igs(this.id,2)' id='sd2' src='images/servicios/sd2.jpg'> </div>"+
                                        "<div class='outmarg col-sm-6 col-md-6 col-lg-6 col-xl-6'> <img class='imgserviunico' onclick='igs(this.id,2)' id='sd3' src='images/servicios/sd3.jpg'> </div>"+
                                        "<div class='outmarg col-sm-6 col-md-6 col-lg-6 col-xl-6'> <img class='imgserviunico' onclick='igs(this.id,2)' id='sd4z' src='images/servicios/sd4.jpg'> </div>"+
                                        "<div class='outmarg col-sm-6 col-md-6 col-lg-6 col-xl-6'> <img class='imgserviunico' onclick='igs(this.id,2)' id='sd5z' src='images/servicios/sd5.jpg'> </div>"+
                                        "<div class='outmarg col-sm-6 col-md-6 col-lg-6 col-xl-6'> <img class='imgserviunico' onclick='igs(this.id,2)' id='sd6z' src='images/servicios/sd6.jpg'> </div>"+
                                        "<div class='outmarg col-sm-6 col-md-6 col-lg-6 col-xl-6'> <img class='imgserviunico' onclick='igs(this.id,2)' id='sd7' src='images/servicios/sd7.jpg'> </div>"+
                                        "<div class='outmarg col-sm-6 col-md-6 col-lg-6 col-xl-6'> <img class='imgserviunico' onclick='igs(this.id,2)' id='sd8' src='images/servicios/sd8.jpg'> </div>"+
                                        "<div class='outmarg col-sm-6 col-md-6 col-lg-6 col-xl-6'> <img class='imgserviunico' onclick='igs(this.id,2)' id='sd10' src='images/servicios/sd10.jpg'> </div>"+
                                        "<div class='outmarg col-sm-6 col-md-6 col-lg-6 col-xl-6'> <img class='imgserviunico' onclick='igs(this.id,2)' id='sd11' src='images/servicios/sd11.jpg'> </div>"+
                                    "</div>"+
                                "</div>"+
                                "<div class='col-sm-12 col-md-12 col-lg-5 col-xl-5'>"+
                                    "<div id='infoservicio' class='row'>"+
                                        "<div class='col-sm-12 col-md-12 col-lg-12 col-xl-12' id='tituloserv'>"+
                                            "<h4>"+texto+"</h4>"+
                                        "</div>"+
                                        "<div class='col-sm-12 col-md-12 col-lg-12 col-xl-12 text-justify' id='infoser'>"+
                                            "<h6><b> Materiales:</b>  <br> MDF, triplay, trovicel, coroplast, foamboard, lámina, microalambre, aluminio entre otros </h6>"+
                                        "</div>"+
                                    "</div>"+
                                "</div>";
                $('#unicoservi').html(imagenes);
                $('#slc1').css({"border-bottom":"3px solid #00FFFF", "font-weight":"bold"});
                $ventana_ancho = $(window).width();
                if ($ventana_ancho < 1024) {
                    //alert("es un dispositivo movil");
                    $('#seleccion').css({"float":"none"});
                    $('.informacion').animate({ scrollTop: 9999 }, 2000);
                }
            }if(str == "VINIL DE RECORTE"){
                $('#galerias').css({ "display": "none" });
                var texto = $('#slc2').attr('value');
                $('#slc1').css({"border-bottom":"", "font-weight":""});
                $('#slc3').css({"border-bottom":"", "font-weight":""});
                $('#slc4').css({"border-bottom":"", "font-weight":""});
                $('#slc5').css({"border-bottom":"", "font-weight":""});
                $('#slc6').css({"border-bottom":"", "font-weight":""});
                $('#slc7').css({"border-bottom":"", "font-weight":""});
                $('#slc8').css({"border-bottom":"", "font-weight":""});
                $('#slc9').css({"border-bottom":"", "font-weight":""});
                $('#slc0').css({"border-bottom":"", "font-weight":""});
                var imagenes = "<div class='col-sm-12 col-md-12 col-lg-7 col-xl-7'>"+
                                    "<div id='fotosdservi' class='row'>"+
                                        "<div class='outmarg col-sm-6 col-md-6 col-lg-6 col-xl-6'> <img class='imgserviunico' onclick='igs(this.id,2)' id='recort' src='images/servicios/recort.jpg'> </div>"+
                                        "<div class='outmarg col-sm-6 col-md-6 col-lg-6 col-xl-6'> <img class='imgserviunico' onclick='igs(this.id,2)' id='recort2' src='images/servicios/recort2.jpg'> </div>"+
                                        "<div class='outmarg col-sm-6 col-md-6 col-lg-6 col-xl-6'> <img class='imgserviunico' onclick='igs(this.id,2)' id='recort3' src='images/servicios/recort3.jpg'> </div>"+
                                        "<div class='outmarg col-sm-6 col-md-6 col-lg-6 col-xl-6'> <img class='imgserviunico' onclick='igs(this.id,2)' id='recort4z' src='images/servicios/recort4.jpg'> </div>"+
                                        "<div class='outmarg col-sm-6 col-md-6 col-lg-6 col-xl-6'> <img class='imgserviunico' onclick='igs(this.id,2)' id='recort5z' src='images/servicios/recort5.jpg'> </div>"+
                                        "<div class='outmarg col-sm-6 col-md-6 col-lg-6 col-xl-6'> <img class='imgserviunico' onclick='igs(this.id,2)' id='recort6' src='images/servicios/recort6.jpg'> </div>"+
                                        "<div class='outmarg col-sm-6 col-md-6 col-lg-6 col-xl-6'> <img class='imgserviunico' onclick='igs(this.id,2)' id='recort7' src='images/servicios/recort7.jpg'> </div>"+
                                        "<div class='outmarg col-sm-6 col-md-6 col-lg-6 col-xl-6'> <img class='imgserviunico' onclick='igs(this.id,2)' id='recort8' src='images/servicios/recort8.jpg'> </div>"+
                                        "<div class='outmarg col-sm-6 col-md-6 col-lg-6 col-xl-6'> <img class='imgserviunico' onclick='igs(this.id,2)' id='recort9' src='images/servicios/recort9.jpg'> </div>"+
                                        "<div class='outmarg col-sm-6 col-md-6 col-lg-6 col-xl-6'> <img class='imgserviunico' onclick='igs(this.id,2)' id='recort10' src='images/servicios/recort10.jpg'> </div>"+
                                    "</div>"+
                                "</div>"+
                                "<div class='col-sm-12 col-md-12 col-lg-5 col-xl-5'>"+
                                    "<div id='infoservicio' class='row'>"+
                                        "<div class='col-sm-12 col-md-12 col-lg-12 col-xl-12' id='tituloserv'>"+
                                            "<h4>"+texto+"</h4>"+
                                        "</div>"+
                                        "<div class='col-sm-12 col-md-12 col-lg-12 col-xl-12 text-justify' id='infoser'>"+
                                            "<h6><b>Materiales:</b>  <br> RECORTE (a uno o varios colores)<br>ESMERILADO (recorte e impreso)</h6>"+
                                        "</div>"+
                                    "</div>"+
                                "</div>";
                $('#unicoservi').html(imagenes);
                $('#slc2').css({"border-bottom":"3px solid #FF00FF", "font-weight":"bold"});
                $ventana_ancho = $(window).width();
                if ($ventana_ancho < 1024) {
                    //alert("es un dispositivo movil");
                    $('#seleccion').css({"float":"none"});
                    $('.informacion').animate({ scrollTop: 9999 }, 2000);
                }
            }if(str == "AUTOS, VINIL y ROTULACIÓN"){
                $('#galerias').css({ "display": "none" });
                var texto = $('#slc3').attr('value');
                $('#slc1').css({"border-bottom":"", "font-weight":""});
                $('#slc2').css({"border-bottom":"", "font-weight":""});
                $('#slc4').css({"border-bottom":"", "font-weight":""});
                $('#slc5').css({"border-bottom":"", "font-weight":""});
                $('#slc6').css({"border-bottom":"", "font-weight":""});
                $('#slc7').css({"border-bottom":"", "font-weight":""});
                $('#slc8').css({"border-bottom":"", "font-weight":""});
                $('#slc9').css({"border-bottom":"", "font-weight":""});
                $('#slc0').css({"border-bottom":"", "font-weight":""});
                var imagenes = "<div class='col-sm-12 col-md-12 col-lg-7 col-xl-7'>"+
                                    "<div id='fotosdservi' class='row'>"+
                                        "<div class='outmarg col-sm-6 col-md-6 col-lg-6 col-xl-6'> <img class='imgserviunico' onclick='igs(this.id,2)' id='vinil' src='images/servicios/vinil.jpg'> </div>"+
                                        "<div class='outmarg col-sm-6 col-md-6 col-lg-6 col-xl-6'> <img class='imgserviunico' onclick='igs(this.id,2)' id='vinil1' src='images/servicios/vinil1.jpg'> </div>"+
                                        "<div class='outmarg col-sm-6 col-md-6 col-lg-6 col-xl-6'> <img class='imgserviunico' onclick='igs(this.id,2)' id='vinil2' src='images/servicios/vinil2.jpg'> </div>"+
                                        "<div class='outmarg col-sm-6 col-md-6 col-lg-6 col-xl-6'> <img class='imgserviunico' onclick='igs(this.id,2)' id='vinil3' src='images/servicios/vinil3.jpg'> </div>"+
                                        "<div class='outmarg col-sm-6 col-md-6 col-lg-6 col-xl-6'> <img class='imgserviunico' onclick='igs(this.id,2)' id='vinil4' src='images/servicios/vinil4.jpg'> </div>"+
                                        "<div class='outmarg col-sm-6 col-md-6 col-lg-6 col-xl-6'> <img class='imgserviunico' onclick='igs(this.id,2)' id='vinil5' src='images/servicios/vinil5.jpg'> </div>"+
                                        "<div class='outmarg col-sm-6 col-md-6 col-lg-6 col-xl-6'> <img class='imgserviunico' onclick='igs(this.id,2)' id='vinil6' src='images/servicios/vinil6.jpg'> </div>"+
                                        "<div class='outmarg col-sm-6 col-md-6 col-lg-6 col-xl-6'> <img class='imgserviunico' onclick='igs(this.id,2)' id='vinil7' src='images/servicios/vinil7.jpg'> </div>"+
                                        "<div class='outmarg col-sm-6 col-md-6 col-lg-6 col-xl-6'> <img class='imgserviunico' onclick='igs(this.id,2)' id='vinil8' src='images/servicios/vinil8.jpg'> </div>"+
                                        "<div class='outmarg col-sm-6 col-md-6 col-lg-6 col-xl-6'> <img class='imgserviunico' onclick='igs(this.id,2)' id='vinil9' src='images/servicios/vinil9.jpg'> </div>"+
                                    "</div>"+
                                "</div>"+
                                "<div class='col-sm-12 col-md-12 col-lg-5 col-xl-5'>"+
                                    "<div id='infoservicio' class='row'>"+
                                        "<div class='col-sm-12 col-md-12 col-lg-12 col-xl-12' id='tituloserv'>"+
                                            "<h4>"+texto+"</h4>"+
                                        "</div>"+
                                        "<div class='col-sm-12 col-md-12 col-lg-12 col-xl-12 text-justify' id='infoser'>"+
                                            "<h6><b>Materiales:</b>  <br> WALL GRAPHIC <br> FLOOR GRAPHIC <br>ELECTROESTÁTICO (blanco, transparente)<br>AUTOADHERIBLE (mate, blanco, covencional, con fondo gris o negro, microperforado)</h6>"+
                                        "</div>"+
                                    "</div>"+
                                "</div>";
                $('#unicoservi').html(imagenes);
                $('#slc3').css({"border-bottom":"3px solid #FFFF00", "font-weight":"bold"});
                $ventana_ancho = $(window).width();
                if ($ventana_ancho < 1024) {
                    //alert("es un dispositivo movil");
                    $('#seleccion').css({"float":"none"});
                    $('.informacion').animate({ scrollTop: 9999 }, 2000);
                } 
            }if(str == "GRAN FORMATO"){
                $('#galerias').css({ "display": "none" });
                $('#slc1').css({"border-bottom":"", "font-weight":""});
                $('#slc2').css({"border-bottom":"", "font-weight":""});
                $('#slc3').css({"border-bottom":"", "font-weight":""});
                $('#slc5').css({"border-bottom":"", "font-weight":""});
                $('#slc6').css({"border-bottom":"", "font-weight":""});
                $('#slc7').css({"border-bottom":"", "font-weight":""});
                $('#slc8').css({"border-bottom":"", "font-weight":""});
                $('#slc9').css({"border-bottom":"", "font-weight":""});
                $('#slc0').css({"border-bottom":"", "font-weight":""});
                var texto = $('#slc4').attr('value');
                var imagenes = "<div class='col-sm-12 col-md-12 col-lg-7 col-xl-7'>"+
                                    "<div id='fotosdservi' class='row'>"+
                                        "<div class='outmarg col-sm-6 col-md-6 col-lg-6 col-xl-6'> <img class='imgserviunico' onclick='igs(this.id,2)' id='formato' src='images/servicios/formato.jpg'> </div>"+
                                        "<div class='outmarg col-sm-6 col-md-6 col-lg-6 col-xl-6'> <img class='imgserviunico' onclick='igs(this.id,2)' id='formato2' src='images/servicios/formato2.jpg'> </div>"+
                                        "<div class='outmarg col-sm-6 col-md-6 col-lg-6 col-xl-6'> <img class='imgserviunico' onclick='igs(this.id,2)' id='formato3' src='images/servicios/formato3.jpg'> </div>"+
                                        "<div class='outmarg col-sm-6 col-md-6 col-lg-6 col-xl-6'> <img class='imgserviunico' onclick='igs(this.id,2)' id='formato4' src='images/servicios/formato4.jpg'> </div>"+
                                        "<div class='outmarg col-sm-6 col-md-6 col-lg-6 col-xl-6'> <img class='imgserviunico' onclick='igs(this.id,2)' id='formato5' src='images/servicios/formato5.jpg'> </div>"+
                                        "<div class='outmarg col-sm-6 col-md-6 col-lg-6 col-xl-6'> <img class='imgserviunico' onclick='igs(this.id,2)' id='formato6z' src='images/servicios/formato6.jpg'> </div>"+
                                        "<div class='outmarg col-sm-6 col-md-6 col-lg-6 col-xl-6'> <img class='imgserviunico' onclick='igs(this.id,2)' id='formato7' src='images/servicios/formato7.jpg'> </div>"+
                                        "<div class='outmarg col-sm-6 col-md-6 col-lg-6 col-xl-6'> <img class='imgserviunico' onclick='igs(this.id,2)' id='formato8' src='images/servicios/formato8.jpg'> </div>"+
                                    "</div>"+
                                "</div>"+
                                "<div class='col-sm-12 col-md-12 col-lg-5 col-xl-5'>"+
                                    "<div id='infoservicio' class='row'>"+
                                        "<div class='col-sm-12 col-md-12 col-lg-12 col-xl-12' id='tituloserv'>"+
                                            "<h4>"+texto+"</h4>"+
                                        "</div>"+
                                        "<div class='col-sm-12 col-md-12 col-lg-12 col-xl-12 text-justify' id='infoser'>"+
                                            "<h6><b>Materiales:</b>  <br> LONAS Tradicionales (de 13 onzas) <br> APLICACIÓN DE LONAS (en bastidores) <br> LONA BLACKLIGHT <br> LONA MESH <br> LONA BLACKOUT <br> LONA SOLIDA <br> PARA TOLDOS <br> VINIL  (blanco, con adhesivo gris o negro)</h6>"+
                                        "</div>"+
                                    "</div>"+
                                "</div>";
                $('#unicoservi').html(imagenes);
                $('#slc4').css({"border-bottom":"3px solid #00FFFF", "font-weight":"bold"});
                $ventana_ancho = $(window).width();
                if ($ventana_ancho < 1024) {
                    //alert("es un dispositivo movil");
                    $('#seleccion').css({"float":"none"});
                    $('.informacion').animate({ scrollTop: 9999 }, 2000);
                }
            }if(str == "TELA"){
                $('#galerias').css({ "display": "none" });
                $('#slc1').css({"border-bottom":"", "font-weight":""});
                $('#slc2').css({"border-bottom":"", "font-weight":""});
                $('#slc3').css({"border-bottom":"", "font-weight":""});
                $('#slc4').css({"border-bottom":"", "font-weight":""});
                $('#slc6').css({"border-bottom":"", "font-weight":""});
                $('#slc7').css({"border-bottom":"", "font-weight":""});
                $('#slc8').css({"border-bottom":"", "font-weight":""});
                $('#slc9').css({"border-bottom":"", "font-weight":""});
                $('#slc0').css({"border-bottom":"", "font-weight":""});
                var texto = $('#slc5').attr('value');
                var imagenes = "<div class='col-sm-12 col-md-12 col-lg-7 col-xl-7'>"+
                                    "<div id='fotosdservi' class='row'>"+
                                        "<div class='outmarg col-sm-6 col-md-6 col-lg-6 col-xl-6'> <img class='imgserviunico' onclick='igs(this.id,2)' id='tela' src='images/servicios/tela.jpg'> </div>"+
                                        "<div class='outmarg col-sm-6 col-md-6 col-lg-6 col-xl-6'> <img class='imgserviunico' onclick='igs(this.id,2)' id='tela2z' src='images/servicios/tela2.jpg'> </div>"+
                                        "<div class='outmarg col-sm-6 col-md-6 col-lg-6 col-xl-6'> <img class='imgserviunico' onclick='igs(this.id,2)' id='tela3' src='images/servicios/tela3.jpg'> </div>"+
                                        "<div class='outmarg col-sm-6 col-md-6 col-lg-6 col-xl-6'> <img class='imgserviunico' onclick='igs(this.id,2)' id='tela4' src='images/servicios/tela4.jpg'> </div>"+
                                        "<div class='outmarg col-sm-6 col-md-6 col-lg-6 col-xl-6'> <img class='imgserviunico' onclick='igs(this.id,2)' id='tela5z' src='images/servicios/tela5.jpg'> </div>"+
                                        "<div class='outmarg col-sm-6 col-md-6 col-lg-6 col-xl-6'> <img class='imgserviunico' onclick='igs(this.id,2)' id='tela6' src='images/servicios/tela6.jpg'> </div>"+
                                    "</div>"+
                                "</div>"+
                                "<div class='col-sm-12 col-md-12 col-lg-5 col-xl-5'>"+
                                    "<div id='infoservicio' class='row'>"+
                                        "<div class='col-sm-12 col-md-12 col-lg-12 col-xl-12' id='tituloserv'>"+
                                            "<h4>"+texto+"</h4>"+
                                        "</div>"+
                                        "<div class='col-sm-12 col-md-12 col-lg-12 col-xl-12 text-justify' id='infoser'>"+
                                            "<h6><b>Materiales:</b> <br> SUBLIMACIÓN EN DIFERENTES TIPOS DE TELA <br> (brillosa, mate y repelente al agua)</h6>"+
                                        "</div>"+
                                    "</div>"+
                                "</div>";
                $('#unicoservi').html(imagenes);
                $('#slc5').css({"border-bottom":"3px solid #FF00FF", "font-weight":"bold"}); 
                $ventana_ancho = $(window).width();
                if ($ventana_ancho < 1024) {
                    //alert("es un dispositivo movil");
                    $('#seleccion').css({"float":"none"});
                    $('.informacion').animate({ scrollTop: 9999 }, 2000);
                }
            }if(str == "LETREROS EN 3D, TOLDOS Y CAJAS DE LUZ"){
                $('#galerias').css({ "display": "none" });
                $('#slc1').css({"border-bottom":"", "font-weight":""});
                $('#slc2').css({"border-bottom":"", "font-weight":""});
                $('#slc3').css({"border-bottom":"", "font-weight":""});
                $('#slc4').css({"border-bottom":"", "font-weight":""});
                $('#slc5').css({"border-bottom":"", "font-weight":""});
                $('#slc7').css({"border-bottom":"", "font-weight":""});
                $('#slc8').css({"border-bottom":"", "font-weight":""});
                $('#slc9').css({"border-bottom":"", "font-weight":""});
                $('#slc0').css({"border-bottom":"", "font-weight":""});
                var texto = $('#slc6').attr('value');
                var imagenes = "<div class='col-sm-12 col-md-12 col-lg-7 col-xl-7'>"+
                                    "<div id='fotosdservi' class='row'>"+
                                        "<div class='outmarg col-sm-6 col-md-6 col-lg-6 col-xl-6'> <img class='imgserviunico' onclick='igs(this.id,2)' id='lt' src='images/servicios/lt.jpg'> </div>"+
                                        "<div class='outmarg col-sm-6 col-md-6 col-lg-6 col-xl-6'> <img class='imgserviunico' onclick='igs(this.id,2)' id='lt2' src='images/servicios/lt2.jpg'> </div>"+
                                        "<div class='outmarg col-sm-6 col-md-6 col-lg-6 col-xl-6'> <img class='imgserviunico' onclick='igs(this.id,2)' id='lt3' src='images/servicios/lt3.jpg'> </div>"+
                                        "<div class='outmarg col-sm-6 col-md-6 col-lg-6 col-xl-6'> <img class='imgserviunico' onclick='igs(this.id,2)' id='lt4' src='images/servicios/lt4.jpg'> </div>"+
                                        "<div class='outmarg col-sm-6 col-md-6 col-lg-6 col-xl-6'> <img class='imgserviunico' onclick='igs(this.id,2)' id='lt5' src='images/servicios/lt5.jpg'> </div>"+
                                        "<div class='outmarg col-sm-6 col-md-6 col-lg-6 col-xl-6'> <img class='imgserviunico' onclick='igs(this.id,2)' id='lt6' src='images/servicios/lt6.jpg'> </div>"+
                                        "<div class='outmarg col-sm-6 col-md-6 col-lg-6 col-xl-6'> <img class='imgserviunico' onclick='igs(this.id,2)' id='lt7' src='images/servicios/lt7.jpg'> </div>"+
                                        "<div class='outmarg col-sm-6 col-md-6 col-lg-6 col-xl-6'> <img class='imgserviunico' onclick='igs(this.id,2)' id='lt8' src='images/servicios/lt8.jpg'> </div>"+
                                        "<div class='outmarg col-sm-6 col-md-6 col-lg-6 col-xl-6'> <img class='imgserviunico' onclick='igs(this.id,2)' id='lt9' src='images/servicios/lt9.jpg'> </div>"+
                                        "<div class='outmarg col-sm-6 col-md-6 col-lg-6 col-xl-6'> <img class='imgserviunico' onclick='igs(this.id,2)' id='lt10' src='images/servicios/lt10.jpg'> </div>"+
                                    "</div>"+
                                "</div>"+
                                "<div class='col-sm-12 col-md-12 col-lg-5 col-xl-5'>"+
                                    "<div id='infoservicio' class='row'>"+
                                        "<div class='col-sm-12 col-md-12 col-lg-12 col-xl-12' id='tituloserv'>"+
                                            "<h4>"+texto+"</h4>"+
                                        "</div>"+
                                        "<div class='col-sm-12 col-md-12 col-lg-12 col-xl-12 text-justify' id='infoser'>"+
                                            "<h6><b>Materiales:</b>  <br> SUBLIMACIÓN EN DIFERENTES TIPOS DE TELA <br> (brillosa, mate y repelente al agua)</h6>"+
                                        "</div>"+
                                    "</div>"+
                                "</div>";
                $('#unicoservi').html(imagenes);
                $('#slc6').css({"border-bottom":"3px solid #FFFF00", "font-weight":"bold"});
                $ventana_ancho = $(window).width();
                if ($ventana_ancho < 1024) {
                    //alert("es un dispositivo movil");
                    $('#seleccion').css({"float":"none"});
                    $('.informacion').animate({ scrollTop: 9999 }, 2000);
                }
            }if(str == "VOLUMÉTRICOS"){
                $('#slc1').css({"border-bottom":"", "font-weight":""});
                $('#slc2').css({"border-bottom":"", "font-weight":""});
                $('#slc3').css({"border-bottom":"", "font-weight":""});
                $('#slc4').css({"border-bottom":"", "font-weight":""});
                $('#slc5').css({"border-bottom":"", "font-weight":""});
                $('#slc6').css({"border-bottom":"", "font-weight":""});
                $('#slc8').css({"border-bottom":"", "font-weight":""});
                $('#slc9').css({"border-bottom":"", "font-weight":""});
                $('#slc0').css({"border-bottom":"", "font-weight":""});
                $('#galerias').css({ "display": "none" });
                var texto = $('#slc7').attr('value');
                var imagenes = "<div class='col-sm-12 col-md-12 col-lg-7 col-xl-7'>"+
                                    "<div id='fotosdservi' class='row'>"+
                                        "<div class='outmarg col-sm-6 col-md-6 col-lg-6 col-xl-6'> <img class='imgserviunico' onclick='igs(this.id,2)' id='vol' src='images/servicios/vol.jpg'> </div>"+
                                        "<div class='outmarg col-sm-6 col-md-6 col-lg-6 col-xl-6'> <img class='imgserviunico' onclick='igs(this.id,2)' id='vol2z' src='images/servicios/vol2.jpg'> </div>"+
                                        "<div class='outmarg col-sm-6 col-md-6 col-lg-6 col-xl-6'> <img class='imgserviunico' onclick='igs(this.id,2)' id='vol3' src='images/servicios/vol3.jpg'> </div>"+
                                        "<div class='outmarg col-sm-6 col-md-6 col-lg-6 col-xl-6'> <img class='imgserviunico' onclick='igs(this.id,2)' id='vol4' src='images/servicios/vol4.jpg'> </div>"+
                                        "<div class='outmarg col-sm-6 col-md-6 col-lg-6 col-xl-6'> <img class='imgserviunico' onclick='igs(this.id,2)' id='vol5' src='images/servicios/vol5.jpg'> </div>"+
                                        "<div class='outmarg col-sm-6 col-md-6 col-lg-6 col-xl-6'> <img class='imgserviunico' onclick='igs(this.id,2)' id='vol6' src='images/servicios/vol6.jpg'> </div>"+
                                        "<div class='outmarg col-sm-6 col-md-6 col-lg-6 col-xl-6'> <img class='imgserviunico' onclick='igs(this.id,2)' id='vol7' src='images/servicios/vol7.jpg'> </div>"+
                                        "<div class='outmarg col-sm-6 col-md-6 col-lg-6 col-xl-6'> <img class='imgserviunico' onclick='igs(this.id,2)' id='vol8' src='images/servicios/vol8.jpg'> </div>"+
                                    "</div>"+
                                "</div>"+
                                "<div class='col-sm-12 col-md-12 col-lg-5 col-xl-5'>"+
                                    "<div id='infoservicio' class='row'>"+
                                        "<div class='col-sm-12 col-md-12 col-lg-12 col-xl-12' id='tituloserv'>"+
                                            "<h4>"+texto+"</h4>"+
                                        "</div>"+
                                        "<div class='col-sm-12 col-md-12 col-lg-12 col-xl-12 text-justify' id='infoser'>"+
                                            "<h6><b> DISEÑO Y PRODUCCIÓN</b></h6>"+
                                        "</div>"+
                                    "</div>"+
                                "</div>";
                $('#unicoservi').html(imagenes);
                $('#slc7').css({"border-bottom":"3px solid #00ffff", "font-weight":"bold"});
                $ventana_ancho = $(window).width();
                if ($ventana_ancho < 1024) {
                    //alert("es un dispositivo movil");
                    $('#seleccion').css({"float":"none"});
                    $('.informacion').animate({ scrollTop: 9999 }, 2000);
                }
            }if(str == "PLAYERAS"){
                $('#galerias').css({ "display": "none" });
                $('#slc1').css({"border-bottom":"", "font-weight":""});
                $('#slc2').css({"border-bottom":"", "font-weight":""});
                $('#slc3').css({"border-bottom":"", "font-weight":""});
                $('#slc4').css({"border-bottom":"", "font-weight":""});
                $('#slc5').css({"border-bottom":"", "font-weight":""});
                $('#slc6').css({"border-bottom":"", "font-weight":""});
                $('#slc7').css({"border-bottom":"", "font-weight":""});
                $('#slc9').css({"border-bottom":"", "font-weight":""});
                $('#slc0').css({"border-bottom":"", "font-weight":""});
                var texto = $('#slc8').attr('value');
                var imagenes = "<div class='col-sm-12 col-md-12 col-lg-7 col-xl-7'>"+
                                    "<div id='fotosdservi' class='row'>"+
                                        "<div class='outmarg col-sm-6 col-md-6 col-lg-6 col-xl-6'> <img class='imgserviunico' onclick='igs(this.id,2)' id='playeraz' src='images/servicios/playeraz.jpg'> </div>"+
                                        "<div class='outmarg col-sm-6 col-md-6 col-lg-6 col-xl-6'> <img class='imgserviunico' onclick='igs(this.id,2)' id='playera3' src='images/servicios/playera3.jpg'> </div>"+
                                        "<div class='outmarg col-sm-6 col-md-6 col-lg-6 col-xl-6'> <img class='imgserviunico' onclick='igs(this.id,2)' id='playera4' src='images/servicios/playera4.jpg'> </div>"+
                                        "<div class='outmarg col-sm-6 col-md-6 col-lg-6 col-xl-6'> <img class='imgserviunico' onclick='igs(this.id,2)' id='playera5' src='images/servicios/playera5.jpg'> </div>"+
                                    "</div>"+
                                "</div>"+
                                "<div class='col-sm-12 col-md-12 col-lg-5 col-xl-5'>"+
                                    "<div id='infoservicio' class='row'>"+
                                        "<div class='col-sm-12 col-md-12 col-lg-12 col-xl-12' id='tituloserv'>"+
                                            "<h4>"+texto+"</h4>"+
                                        "</div>"+
                                        "<div class='col-sm-12 col-md-12 col-lg-12 col-xl-12 text-justify' id='infoser'>"+
                                            "<h6><b>Materiales:</b>  <br> PLAYERAS DE CUALQUIER TIPO DE SERIGRAFIA Y VINIL TEXTIL <br> (brillosa, mate y repelente al agua)</h6>"+
                                        "</div>"+
                                    "</div>"+
                                "</div>";
                $('#unicoservi').html(imagenes);
                $('#slc8').css({"border-bottom":"3px solid #FF00FF", "font-weight":"bold"});
                $ventana_ancho = $(window).width();
                if ($ventana_ancho < 1024) {
                    //alert("es un dispositivo movil");
                    $('#seleccion').css({"float":"none"});
                    $('.informacion').animate({ scrollTop: 9999 }, 2000);
                }
            }if(str == "IMPRESIÓN DIRECTA"){
                $('#slc1').css({"border-bottom":"", "font-weight":""});
                $('#slc2').css({"border-bottom":"", "font-weight":""});
                $('#slc3').css({"border-bottom":"", "font-weight":""});
                $('#slc4').css({"border-bottom":"", "font-weight":""});
                $('#slc5').css({"border-bottom":"", "font-weight":""});
                $('#slc6').css({"border-bottom":"", "font-weight":""});
                $('#slc7').css({"border-bottom":"", "font-weight":""});
                $('#slc8').css({"border-bottom":"", "font-weight":""});
                $('#slc0').css({"border-bottom":"", "font-weight":""});
                $('#galerias').css({ "display": "none" });
                var texto = $('#slc9').attr('value');
                var imagenes = "<div class='col-sm-12 col-md-12 col-lg-7 col-xl-7'>"+
                                    "<div id='fotosdservi' class='row'>"+
                                        "<div class='outmarg col-sm-6 col-md-6 col-lg-6 col-xl-6'> <img class='imgserviunico' onclick='igs(this.id,2)' id='id' src='images/servicios/id.jpg'> </div>"+
                                        "<div class='outmarg col-sm-6 col-md-6 col-lg-6 col-xl-6'> <img class='imgserviunico' onclick='igs(this.id,2)' id='id2' src='images/servicios/id2.jpg'> </div>"+
                                        "<div class='outmarg col-sm-6 col-md-6 col-lg-6 col-xl-6'> <img class='imgserviunico' onclick='igs(this.id,2)' id='id3' src='images/servicios/id3.jpg'> </div>"+
                                        "<div class='outmarg col-sm-6 col-md-6 col-lg-6 col-xl-6'> <img class='imgserviunico' onclick='igs(this.id,2)' id='id4' src='images/servicios/id4.jpg'> </div>"+
                                    "</div>"+
                                "</div>"+
                                "<div class='col-sm-12 col-md-12 col-lg-5 col-xl-5'>"+
                                    "<div id='infoservicio' class='row'>"+
                                        "<div class='col-sm-12 col-md-12 col-lg-12 col-xl-12' id='tituloserv'>"+
                                            "<h4>"+texto+"</h4>"+
                                        "</div>"+
                                        "<div class='col-sm-12 col-md-12 col-lg-12 col-xl-12 text-justify' id='infoser'>"+
                                            "<h6><b>Materiales:</b>  <br>SUSTRATOS RIGIDOS <br> (PVC, acrilico, vidrio, estireno, foamboard, coroplast, madera, MDF impreso)</h6>"+
                                        "</div>"+
                                    "</div>"+
                                "</div>";
                $('#unicoservi').html(imagenes);
                $('#slc9').css({"border-bottom":"3px solid #FFFF00", "font-weight":"bold"});
                $ventana_ancho = $(window).width();
                if ($ventana_ancho < 1024) {
                    //alert("es un dispositivo movil");
                    $('#seleccion').css({"float":"none"});
                    $('.informacion').animate({ scrollTop: 9999 }, 2000);
                }
            }if(str == "INSTALACIONES"){
                $('#slc1').css({"border-bottom":"", "font-weight":""});
                $('#slc2').css({"border-bottom":"", "font-weight":""});
                $('#slc3').css({"border-bottom":"", "font-weight":""});
                $('#slc4').css({"border-bottom":"", "font-weight":""});
                $('#slc5').css({"border-bottom":"", "font-weight":""});
                $('#slc6').css({"border-bottom":"", "font-weight":""});
                $('#slc7').css({"border-bottom":"", "font-weight":""});
                $('#slc8').css({"border-bottom":"", "font-weight":""});
                $('#slc9').css({"border-bottom":"", "font-weight":""});
                $('#galerias').css({ "display": "none" });
                var texto = $('#slc0').attr('value');
                var imagenes = "<div class='col-sm-12 col-md-12 col-lg-7 col-xl-7'>"+
                                    "<div id='fotosdservi' class='row'>"+
                                        "<div class='outmarg col-sm-6 col-md-6 col-lg-6 col-xl-6'> <img class='imgserviunico' onclick='igs(this.id,2)' id='in' src='images/servicios/in.jpg'> </div>"+
                                        "<div class='outmarg col-sm-6 col-md-6 col-lg-6 col-xl-6'> <img class='imgserviunico' onclick='igs(this.id,2)' id='in2' src='images/servicios/in2.jpg'> </div>"+
                                        "<div class='outmarg col-sm-6 col-md-6 col-lg-6 col-xl-6'> <img class='imgserviunico' onclick='igs(this.id,2)' id='in3' src='images/servicios/in3.jpg'> </div>"+
                                        "<div class='outmarg col-sm-6 col-md-6 col-lg-6 col-xl-6'> <img class='imgserviunico' onclick='igs(this.id,2)' id='in4' src='images/servicios/in4.jpg'> </div>"+
                                        "<div class='outmarg col-sm-6 col-md-6 col-lg-6 col-xl-6'> <img class='imgserviunico' onclick='igs(this.id,2)' id='in5' src='images/servicios/in5.jpg'> </div>"+
                                        "<div class='outmarg col-sm-6 col-md-6 col-lg-6 col-xl-6'> <img class='imgserviunico' onclick='igs(this.id,2)' id='in6' src='images/servicios/in6.jpg'> </div>"+
                                    "</div>"+
                                "</div>"+
                                "<div class='col-sm-12 col-md-12 col-lg-5 col-xl-5'>"+
                                    "<div id='infoservicio' class='row'>"+
                                        "<div class='col-sm-12 col-md-12 col-lg-12 col-xl-12 text-center' id='tituloserv'>"+
                                            "<h4>"+texto+"</h4>"+
                                        "</div>"+
                                        "<div class='col-sm-12 col-md-12 col-lg-12 col-xl-12 text-justify' id='infoser'>"+
                                            "<h6><b>En cualquier lugar, con cualquier material</b></h6>"+
                                        "</div>"+
                                    "</div>"+
                                "</div>";
                $('#unicoservi').html(imagenes);
                $('#slc0').css({"border-bottom":"3px solid #00ffff", "font-weight":"bold"});
                $ventana_ancho = $(window).width();
                if ($ventana_ancho < 1024) {
                    //alert("es un dispositivo movil");
                    $('#seleccion').css({"float":"none"});
                    $('.informacion').animate({ scrollTop: 9999 }, 2000);
                }
            }
        });        
    })
    .trigger( "change" );

    $('#senema').click(function () {
        var contenido = $('#cuerpo').val();
        var envia = $('#mail').val();
        //alert("envia el correo: "+envia+" el texto:"+contenido);

        $.ajax({
            method: 'POST',
            url: 'correo.php',
            data: {'cuerpo':contenido, 'remi':envia},
        })
        .done(function( msg ) {
            //alert( "Data Saved: " + msg );
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
                "<div class='col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12'> <div class='row'>" +
                    "<div class='div-sm-6 col-md-6 col-lg-6 col-xl-6'>" +
                        "<img onclick=\"atr("+proce+",\'"+img+"\')\" id='at' src='images/flech.png'> </div>"  +
                    "<div class='div-sm-6 col-md-6 col-lg-6 col-xl-6'>" +
                        "<img onclick=\"sig("+proce+",\'"+img+"\')\" id='ad' src='images/flecha.png'> </div>" +
                "</div> </div>"+
            "</div>";

        modal.classList.add(tipo);

        tipo = tipo;
    }if(modo == 'vertical'){
        modal.innerHTML = "<button onclick='cerrar()' id='cierra' class='bmodal col-sm-12 col-md-12 col-lg-12 col-xl-12'><H1>" + textoBtn + "</H1></button>" +
            "<div class='col-sm-12 col-md-12 col-lg-12 col-xl-12'>" +
                "<div class='col-sm-12 col-md-12 col-lg-12 col-xl-12'>" +
                    "<img class='imgmodal modalvert' id='imgind' src='images/servicios/"+img+"'> </div>"+
                "<div class='col-sm-12 col-md-12 col-lg-12 col-xl-12'>" +
                    "<p id='piefoto'>"+ parrafo +"</p> </div>"+
                    "<div class='col-sm-12 col-md-12 col-lg-12 col-xl-12'> <div class='row'>" +
                    "<div class='div-sm-6 col-md-6 col-lg-6 col-xl-6'>" +
                        "<img onclick=\"atr("+proce+",\'"+img+"\')\" id='at' src='images/flech.png'> </div>"  +
                    "<div class='div-sm-6 col-md-6 col-lg-6 col-xl-6'>" +
                        "<img onclick=\"sig("+proce+",\'"+img+"\')\" id='ad' src='images/flecha.png'> </div>" +
                "</div> </div>"+
            "</div>";

        modal.classList.add(tipo);

        tipo = tipo;
    }
}

function sig(proce, url){
    //alert("este es el valor de donde viene la pagina"+proce);
    arrarInicial =['formato.jpg','recort.jpg','sd.jpg','vinil.jpg','tela.jpg','id.jpg','vol.jpg','lt.jpg','in.jpg','formato2.jpg','recort2.jpg','sd2.jpg','vinil1.jpg','tela2z.jpg','id2.jpg','playeraz.jpg','vol2z.jpg','lt2.jpg','in2.jpg','formato3.jpg','vinil2.jpg','recort3.jpg','sd3.jpg','vinil3.jpg','tela3.jpg','playera3.jpg','vol3.jpg','lt3.jpg','in3.jpg','formato4.jpg','sd4z.jpg','vinil4.jpg','tela4.jpg','id3.jpg','recort4.jpg','vol4.jpg','in4.jpg','lt4.jpg','formato5.jpg','playera4.jpg','recort5z.jpg','tela5z.jpg','sd5z.jpg','vinil5.jpg','lt5.jpg','i5.jpg','vol5.jpg','formato6z.jpg','id4.jpg','playera5.jpg','recort6.jpg','tela6.jpg','sd6z.jpg','vinil6.jpg','lt6.jpg','vol6.jpg','playera6z.jpg','i6.jpg','formato7.jpg','tela7z.jpg','recort7.jpg','sd7.jpg','vinil7.jpg','vol7.jpg','lt7.jpg'];
    final = 63;
    
    if(proce == 1){
        verurl = sessionStorage.getItem("ulrm");
        for(i=0; i<= final; i ++){
            if(verurl == arrarInicial[i]){
                //npm.jsalert("YA LA ENCONTRO");
                if(i != final){
                    //alert("de aqui vengo"+verurl+ " esta es la imagen a la cual va a pasar images/servicios/"+arrarInicial[i+1])
                    newimg = arrarInicial[i+1];
                    //alert("este es el que va a deshacer"+newimg);3
                    c = newimg.length;
                    vz = newimg.split("");3
                    //alert("tiene la z o no?"+vz[c-5]);
                    if(vz[c-5] == 'z' && newimg != "playeraz.jpg"){
                        //alert("si tiene z el que sigue");
                        document.getElementById("imgind").classList.remove("modalhz");
                        document.getElementById("imgind").classList.add("modalvert");
                        document.getElementById("imgind").src = "images/servicios/"+arrarInicial[i+1];
                        nueva = arrarInicial[i+1];
                    }else{
                        //alert("no tiene z el que sigue");
                        document.getElementById("imgind").classList.remove("modalvert");
                        document.getElementById("imgind").classList.add("modalhz");
                        document.getElementById("imgind").src = "images/servicios/"+arrarInicial[i+1];
                        nueva = arrarInicial[i+1];
                    }
                    
                    
                }                
            }
        }            
        //alert(nueva);
        sessionStorage.setItem("ulrm", nueva);
        
    }if (proce == 2){
        /* alert("es la segunda seccion"); */
        verurl = sessionStorage.getItem("ulrm");
        //Descompones 
        desfr = verurl.split("");
        // =========== FORMATO ============
        if(desfr[0] == "f" && desfr[1] == "o"){
            //alert("entre al formato, este es el valor de verurl: "+verurl);
            //Arrayserv de cada uno 
            Arrayserv = ['formato.jpg','formato2.jpg','formato3.jpg','formato4.jpg','formato5.jpg','formato6z.jpg','formato7.jpg','formato8.jpg',];
            final=9; //con cantidad de elementos
            for(i=0; i< final; i ++){
                if(verurl == Arrayserv[i]){
                    //alert("la encontro");
                    if(i != final){ 
                        //alert("de aqui vengo"+verurl+ " esta es la imagen a la cual va a pasar images/servicios/"+arrarInicial[i+1])
                        newimg = Arrayserv[i+1];
                        //alert("este es el que va a deshacer"+newimg);
                        c = newimg.length;
                        vz = newimg.split("");
                        //alert("tiene la z o no?"+vz[c-5]);
                        if(vz[c-5] == 'z' && newimg != "playeraz.jpg"){
                            //alert("si tiene z el que sigue");
                            document.getElementById("imgind").classList.remove("modalhz");
                            document.getElementById("imgind").classList.add("modalvert");
                            document.getElementById("imgind").src = "images/servicios/"+Arrayserv[i+1];
                            nueva = Arrayserv[i+1];
                        }else{
                            //alert("no tiene z el que sigue");
                            document.getElementById("imgind").classList.remove("modalvert");
                            document.getElementById("imgind").classList.add("modalhz");
                            document.getElementById("imgind").src = "images/servicios/"+Arrayserv[i+1];
                            nueva = Arrayserv[i+1];
                        }
                    } 
                }
            }
            //alert(nueva);
            sessionStorage.setItem("ulrm", nueva);
        }
        // =========== IMPRESION DIRECTA ============
        if(desfr[0] == "i" && desfr[1] == "d"){
            //alert("entre al impresion directa, este es el valor de verurl: "+verurl);
            //Arrayserv de cada uno 
            Arrayserv = ['id.jpg','id2.jpg','id3.jpg','id4.jpg'];
            final=4; //con cantidad de elementos
            for(i=0; i< final; i ++){
                if(verurl == Arrayserv[i]){
                    //alert("la encontro");
                    if(i != final){ 
                        //alert("de aqui vengo"+verurl+ " esta es la imagen a la cual va a pasar images/servicios/"+Arrayserv[i+1])
                        newimg = Arrayserv[i+1];
                       //alert("este es el que va a deshacer"+newimg);
                        c = newimg.length;
                        vz = newimg.split("");
                        //alert("tiene la z o no?"+vz[c-5]);
                        if(vz[c-5] == 'z' && newimg != "playeraz.jpg"){
                            //alert("si tiene z el que sigue");
                            document.getElementById("imgind").classList.remove("modalhz");
                            document.getElementById("imgind").classList.add("modalvert");
                            document.getElementById("imgind").src = "images/servicios/"+Arrayserv[i+1];
                            nueva = Arrayserv[i+1];
                        }else{
                            //alert("no tiene z el que sigue");
                            document.getElementById("imgind").classList.remove("modalvert");
                            document.getElementById("imgind").classList.add("modalhz");
                            document.getElementById("imgind").src = "images/servicios/"+Arrayserv[i+1];
                            nueva = Arrayserv[i+1];
                        }
                    } 
                }
            }
            //alert(nueva);
            sessionStorage.setItem("ulrm", nueva);
        } 
        // =========== INSTALACIONES ============
        if(desfr[0] == "i" && desfr[1] == "n"){
            //alert("entre al formato, este es el valor de verurl: "+verurl);
            //Arrayserv de cada uno 
            Arrayserv = ['in.jpg','in2.jpg','in3.jpg','in4.jpg','in5.jpg','in6.jpg'];
            final=6; //con cantidad de elementos
            for(i=0; i< final; i ++){
                if(verurl == Arrayserv[i]){
                    //alert("la encontro");
                    if(i != final){ 
                        //alert("de aqui vengo"+verurl+ " esta es la imagen a la cual va a pasar images/servicios/"+Arrayserv[i+1])
                        newimg = Arrayserv[i+1];
                        //alert("este es el que va a deshacer"+newimg);
                        c = newimg.length;
                        vz = newimg.split("");
                        //alert("tiene la z o no?"+vz[c-5]);
                        if(vz[c-5] == 'z' && newimg != "playeraz.jpg"){
                            //alert("si tiene z el que sigue");
                            document.getElementById("imgind").classList.remove("modalhz");
                            document.getElementById("imgind").classList.add("modalvert");
                            document.getElementById("imgind").src = "images/servicios/"+Arrayserv[i+1];
                            nueva = Arrayserv[i+1];
                        }else{
                            //alert("no tiene z el que sigue");
                            document.getElementById("imgind").classList.remove("modalvert");
                            document.getElementById("imgind").classList.add("modalhz");
                            document.getElementById("imgind").src = "images/servicios/"+Arrayserv[i+1];
                            nueva = Arrayserv[i+1];
                        }
                    } 
                }
            }
            //alert(nueva);
            sessionStorage.setItem("ulrm", nueva);
        }
        // =========== LETREROS ============
        if(desfr[0] == "l" && desfr[1] == "t"){
            //alert("entre al formato, este es el valor de verurl: "+verurl);
            //Arrayserv de cada uno 
            Arrayserv = ['lt.jpg','lt2.jpg','lt3.jpg','lt4.jpg','lt5.jpg','lt6.jpg','lt7.jpg','lt8.jpg','lt9.jpg','lt10.jpg','lt11.jpg','lt12.jpg'];
            final=12; //con cantidad de elementos
            for(i=0; i< final; i ++){
                if(verurl == Arrayserv[i]){
                    //alert("la encontro");
                    if(i != final){ 
                        //alert("de aqui vengo"+verurl+ " esta es la imagen a la cual va a pasar images/servicios/"+Arrayserv[i+1])
                        newimg = Arrayserv[i+1];
                        //alert("este es el que va a deshacer"+newimg);
                        c = newimg.length;
                        vz = newimg.split("");
                        //alert("tiene la z o no?"+vz[c-5]);
                        if(vz[c-5] == 'z' && newimg != "playeraz.jpg"){
                           //alert("si tiene z el que sigue");
                            document.getElementById("imgind").classList.remove("modalhz");
                            document.getElementById("imgind").classList.add("modalvert");
                            document.getElementById("imgind").src = "images/servicios/"+Arrayserv[i+1];
                            nueva = Arrayserv[i+1];
                        }else{
                            //alert("no tiene z el que sigue");
                            document.getElementById("imgind").classList.remove("modalvert");
                            document.getElementById("imgind").classList.add("modalhz");
                            document.getElementById("imgind").src = "images/servicios/"+Arrayserv[i+1];
                            nueva = Arrayserv[i+1];
                        }
                    } 
                }
            }
            //alert(nueva);
            sessionStorage.setItem("ulrm", nueva);
        } 
        // =========== CAMISAS ============
        if(desfr[0] == "p" && desfr[1] == "l"){
            //alert("entre al formato, este es el valor de verurl: "+verurl);
            //Arrayserv de cada uno 
            Arrayserv = ['playeraz.jpg','playera3.jpg','playera4.jpg','formato5.jpg','playera6z.jpg'];
            final=6; //con cantidad de elementos
            for(i=0; i< final; i ++){
                if(verurl == Arrayserv[i]){
                    //alert("la encontro");
                    if(i != final){ 
                        //alert("de aqui vengo"+verurl+ " esta es la imagen a la cual va a pasar images/servicios/"+Arrayserv[i+1])
                        newimg = Arrayserv[i+1];
                        //alert("este es el que va a deshacer"+newimg);
                        c = newimg.length;
                        vz = newimg.split("");
                        //alert("tiene la z o no?"+vz[c-5]);
                        if(vz[c-5] == 'z' && newimg != "playeraz.jpg"){
                            //alert("si tiene z el que sigue");
                            document.getElementById("imgind").classList.remove("modalhz");
                            document.getElementById("imgind").classList.add("modalvert");
                            document.getElementById("imgind").src = "images/servicios/"+Arrayserv[i+1];
                            nueva = Arrayserv[i+1];
                        }else{
                            //alert("no tiene z el que sigue");
                            document.getElementById("imgind").classList.remove("modalvert");
                            document.getElementById("imgind").classList.add("modalhz");
                            document.getElementById("imgind").src = "images/servicios/"+Arrayserv[i+1];
                            nueva = Arrayserv[i+1];
                        }
                    } 
                }
            }
            //alert(nueva);
            sessionStorage.setItem("ulrm", nueva);
        } 
        // =========== VINIL RECORTE ============
        if(desfr[0] == "r" && desfr[1] == "e"){
            //alert("entre al formato, este es el valor de verurl: "+verurl);
            //Arrayserv de cada uno 
            Arrayserv = ['recort.jpg','recort2.jpg','recort3.jpg','recort4z.jpg','recort5z.jpg','recort6.jpg','recort7.jpg','recort8.jpg','recort9.jpg','recort10.jpg'];
            final=10; //con cantidad de elementos
            for(i=0; i< final; i ++){
                if(verurl == Arrayserv[i]){
                    //alert("la encontro");
                    if(i != final){ 
                        //alert("de aqui vengo"+verurl+ " esta es la imagen a la cual va a pasar images/servicios/"+Arrayserv[i+1])
                        newimg = Arrayserv[i+1];
                        //alert("este es el que va a deshacer"+newimg);
                        c = newimg.length;
                        vz = newimg.split("");
                       //alert("tiene la z o no?"+vz[c-5]);
                        if(vz[c-5] == 'z' && newimg != "playeraz.jpg"){
                            //alert("si tiene z el que sigue");
                            document.getElementById("imgind").classList.remove("modalhz");
                            document.getElementById("imgind").classList.add("modalvert");
                            document.getElementById("imgind").src = "images/servicios/"+Arrayserv[i+1];
                            nueva = Arrayserv[i+1];
                        }else{
                            //alert("no tiene z el que sigue");
                            document.getElementById("imgind").classList.remove("modalvert");
                            document.getElementById("imgind").classList.add("modalhz");
                            document.getElementById("imgind").src = "images/servicios/"+Arrayserv[i+1];
                            nueva = Arrayserv[i+1];
                        }
                    } 
                }
            }
            //alert(nueva);
            sessionStorage.setItem("ulrm", nueva);
        } 
        // =========== STANDISPLAY============
        if(desfr[0] == "s" && desfr[1] == "d"){
            //alert("entre al formato, este es el valor de verurl: "+verurl);
            //Arrayserv de cada uno 
            Arrayserv = ['sd.jpg','sd2.jpg','sd3.jpg','sd4z.jpg','sd5z.jpg','sd6z.jpg','sd7.jpg','sd8.jpg','sd9.jpg','sd10.jpg','sd11.jpg','sd12z.jpg'];
            final=12; //con cantidad de elementos
            for(i=0; i< final; i ++){
                if(verurl == Arrayserv[i]){
                    //lert("la encontro");
                    if(i != final){
                        //alert("de aqui vengo"+verurl+ " esta es la imagen a la cual va a pasar images/servicios/"+Arrayserv[i+1])
                        newimg = Arrayserv[i+1];
                        //alert("este es el que va a deshacer"+newimg);
                        c = newimg.length;
                        vz = newimg.split("");
                        //alert("tiene la z o no?"+vz[c-5]);
                        if(vz[c-5] == 'z' && newimg != "playeraz.jpg"){
                            //alert("si tiene z el que sigue");
                            document.getElementById("imgind").classList.remove("modalhz");
                            document.getElementById("imgind").classList.add("modalvert");
                            document.getElementById("imgind").src = "images/servicios/"+Arrayserv[i+1];
                            nueva = Arrayserv[i+1];
                        }else{
                            //alert("no tiene z el que sigue");
                            document.getElementById("imgind").classList.remove("modalvert");
                            document.getElementById("imgind").classList.add("modalhz");
                            document.getElementById("imgind").src = "images/servicios/"+Arrayserv[i+1];
                            nueva = Arrayserv[i+1];
                        }
                    } 
                }
            }
            //alert(nueva);
            sessionStorage.setItem("ulrm", nueva);
        } 
        // =========== TELA ============
        if(desfr[0] == "t" && desfr[1] == "e"){
            //alert("entre al formato, este es el valor de verurl: "+verurl);
            //Arrayserv de cada uno 
            Arrayserv = ['tela.jpg','tela2z.jpg','tela3.jpg','tela4.jpg','tela5z.jpg','tela6.jpg'];
            final=7; //con cantidad de elementos
            for(i=0; i< final; i ++){
                if(verurl == Arrayserv[i]){
                    //alert("la encontro");
                    if(i != final){ 
                        //alert("de aqui vengo"+verurl+ " esta es la imagen a la cual va a pasar images/servicios/"+Arrayserv[i+1])
                        newimg = Arrayserv[i+1];
                        //alert("este es el que va a deshacer"+newimg);
                        c = newimg.length;
                        vz = newimg.split("");
                        //alert("tiene la z o no?"+vz[c-5]);
                        if(vz[c-5] == 'z' && newimg != "playeraz.jpg"){
                            //alert("si tiene z el que sigue");
                            document.getElementById("imgind").classList.remove("modalhz");
                            document.getElementById("imgind").classList.add("modalvert");
                            document.getElementById("imgind").src = "images/servicios/"+Arrayserv[i+1];
                            nueva = Arrayserv[i+1];
                        }else{
                            //alert("no tiene z el que sigue");
                            document.getElementById("imgind").classList.remove("modalvert");
                            document.getElementById("imgind").classList.add("modalhz");
                            document.getElementById("imgind").src = "images/servicios/"+Arrayserv[i+1];
                            nueva = Arrayserv[i+1];
                        }
                    } 
                }
            }
            //alert(nueva);
            sessionStorage.setItem("ulrm", nueva);
        } 
        // =========== VINIL ============
        if(desfr[0] == "v" && desfr[1] == "i"){
            //alert("entre al formato, este es el valor de verurl: "+verurl);
            //Arrayserv de cada uno 
            Arrayserv = ['vinil.jpg','vinil1.jpg','vinil2.jpg','vinil3.jpg','vinil4.jpg','vinil5.jpg','vinil6.jpg','vinil7.jpg','vinil8.jpg','vinil9.jpg','vinil10.jpg','vinil11.jpg'];
            final=12; //con cantidad de elementos
            for(i=0; i< final; i ++){
                if(verurl == Arrayserv[i]){
                    //alert("la encontro");
                    if(i != final){ 
                        //alert("de aqui vengo"+verurl+ " esta es la imagen a la cual va a pasar images/servicios/"+Arrayserv[i+1])
                        newimg = Arrayserv[i+1];
                        //alert("este es el que va a deshacer"+newimg);
                        c = newimg.length;
                        vz = newimg.split("");
                        //alert("tiene la z o no?"+vz[c-5]);
                        if(vz[c-5] == 'z' && newimg != "playeraz.jpg"){
                            //alert("si tiene z el que sigue");
                            document.getElementById("imgind").classList.remove("modalhz");
                            document.getElementById("imgind").classList.add("modalvert");
                            document.getElementById("imgind").src = "images/servicios/"+Arrayserv[i+1];
                            nueva = Arrayserv[i+1];
                        }else{
                            //alert("no tiene z el que sigue");
                            document.getElementById("imgind").classList.remove("modalvert");
                            document.getElementById("imgind").classList.add("modalhz");
                            document.getElementById("imgind").src = "images/servicios/"+Arrayserv[i+1];
                            nueva = Arrayserv[i+1];
                        }
                    } 
                }
            }
            //alert(nueva);
            sessionStorage.setItem("ulrm", nueva);
        } 
        // =========== VOLUMETRICO ============
        if(desfr[0] == "v" && desfr[1] == "o"){
            //alert("entre al formato, este es el valor de verurl: "+verurl);
            //Arrayserv de cada uno 
            Arrayserv = ['vol.jpg','vol2z.jpg','vol3.jpg','vol4.jpg','vol5.jpg','vol6.jpg','vol7.jpg','vol8.jpg'];
            final=10; //con cantidad de elementos
            for(i=0; i< final; i ++){
                if(verurl == Arrayserv[i]){
                    //alert("la encontro");
                    if(i != final){ 
                        //alert("de aqui vengo"+verurl+ " esta es la imagen a la cual va a pasar images/servicios/"+Arrayserv[i+1])
                        newimg = Arrayserv[i+1];
                        //alert("este es el que va a deshacer"+newimg);
                        c = newimg.length;
                        vz = newimg.split("");
                        //alert("tiene la z o no?"+vz[c-5]);
                        if(vz[c-5] == 'z' && newimg != "playeraz.jpg"){
                            //alert("si tiene z el que sigue");
                            document.getElementById("imgind").classList.remove("modalhz");
                            document.getElementById("imgind").classList.add("modalvert");
                            document.getElementById("imgind").src = "images/servicios/"+Arrayserv[i+1];
                            nueva = Arrayserv[i+1];
                        }else{
                            //alert("no tiene z el que sigue");
                            document.getElementById("imgind").classList.remove("modalvert");
                            document.getElementById("imgind").classList.add("modalhz");
                            document.getElementById("imgind").src = "images/servicios/"+Arrayserv[i+1];
                            nueva = Arrayserv[i+1];
                        }
                    } 
                }
            }
            //alert(nueva);
            sessionStorage.setItem("ulrm", nueva);
        }         
    }
    // document.getElementById("img").src="image/"+cars[1]+".png"
} 
function atr(proce, url){
    arrarInicial =['formato.jpg','recort.jpg','sd.jpg','vinil.jpg','tela.jpg','id.jpg','vol.jpg','lt.jpg','in.jpg','formato2.jpg','recort2.jpg','sd2.jpg','vinil1.jpg','tela2z.jpg','id2.jpg','playeraz.jpg','vol2z.jpg','lt2.jpg','in2.jpg','formato3.jpg','vinil2.jpg','recort3.jpg','sd3.jpg','vinil3.jpg','tela3.jpg','playera3.jpg','vol3.jpg','lt3.jpg','in3.jpg','formato4.jpg','sd4z.jpg','vinil4.jpg','tela4.jpg','id3.jpg','recort4.jpg','vol4.jpg','in4.jpg','lt4.jpg','formato5.jpg','playera4.jpg','recort5z.jpg','tela5z.jpg','sd5z.jpg','vinil5.jpg','lt5.jpg','i5.jpg','vol5.jpg','formato6z.jpg','id4.jpg','playera5.jpg','recort6.jpg','tela6.jpg','sd6z.jpg','vinil6.jpg','lt6.jpg','vol6.jpg','playera6z.jpg','i6.jpg','formato7.jpg','tela7z.jpg','recort7.jpg','sd7.jpg','vinil7.jpg','vol7.jpg','lt7.jpg'];
    final = 63;
    
    if(proce == 1){
        verurl = sessionStorage.getItem("ulrm");
        for(i=0; i<= final; i ++){
            if(verurl == arrarInicial[i]){
                //alert("YA LA ENCONTRO");
                if(i != 0){
                    //alert("de aqui vengo"+verurl+ " esta es la imagen a la cual va a pasar images/servicios/"+arrarInicial[i-1])
                    newimg = arrarInicial[i-1];
                    //alert("este es el que va a deshacer"+newimg);
                    c = newimg.length;
                    vz = newimg.split("");
                    //alert("tiene la z o no?"+vz[c-5]);
                    if(vz[c-5] == 'z' && newimg != "playeraz.jpg"){
                        //alert("si tiene z el que sigue");
                        document.getElementById("imgind").classList.remove("modalhz");
                        document.getElementById("imgind").classList.add("modalvert");
                        document.getElementById("imgind").src = "images/servicios/"+arrarInicial[i-1];
                        nueva = arrarInicial[i-1];
                    }else{
                        //alert("no tiene z el que sigue");
                        document.getElementById("imgind").classList.remove("modalvert");
                        document.getElementById("imgind").classList.add("modalhz");
                        document.getElementById("imgind").src = "images/servicios/"+arrarInicial[i-1];
                        nueva = arrarInicial[i-1];
                    }
                }                
            }
        }            
        //alert(nueva);
        sessionStorage.setItem("ulrm", nueva);
    }if (proce == 2){
        //alert("es la segunda seccion");
        verurl = sessionStorage.getItem("ulrm");
        //Descompones 
        desfr = verurl.split("");
        // =========== FORMATO ============
        if(desfr[0] == "f" && desfr[1] == "o"){
            //alert("entre al formato, este es el valor de verurl: "+verurl);
            //Arrayserv de cada uno 
            Arrayserv = ['formato.jpg','formato2.jpg','formato3.jpg','formato4.jpg','formato5.jpg','formato6z.jpg','formato7.jpg','formato8.jpg'];
            final=9; //con cantidad de elementos
            for(i=0; i< final; i ++){
                if(verurl == Arrayserv[i]){
                    //alert("la encontro");
                    if(i != final){ 
                        //alert("de aqui vengo"+verurl+ " esta es la imagen a la cual va a pasar images/servicios/"+Arrayserv[i-1])
                        newimg = Arrayserv[i-1];
                        //alert("este es el que va a deshacer"+newimg);
                        c = newimg.length;
                        vz = newimg.split("");
                        //alert("tiene la z o no?"+vz[c-5]);
                        if(vz[c-5] == 'z' && newimg != "playeraz.jpg"){
                            //alert("si tiene z el que sigue");
                            document.getElementById("imgind").classList.remove("modalhz");
                            document.getElementById("imgind").classList.add("modalvert");
                            document.getElementById("imgind").src = "images/servicios/"+Arrayserv[i-1];
                            nueva = Arrayserv[i-1];
                        }else{
                            //alert("no tiene z el que sigue");
                            document.getElementById("imgind").classList.remove("modalvert");
                            document.getElementById("imgind").classList.add("modalhz");
                            document.getElementById("imgind").src = "images/servicios/"+Arrayserv[i-1];
                            nueva = Arrayserv[i-1];
                        }
                    } 
                }
            }
            //alert(nueva);
            sessionStorage.setItem("ulrm", nueva);
        }
        // =========== IMPRESION DIRECTA ============
        if(desfr[0] == "i" && desfr[1] == "d"){
            //alert("entre al impresion directa, este es el valor de verurl: "+verurl);
            //Arrayserv de cada uno 
            Arrayserv = ['id.jpg','id2.jpg','id3.jpg','id4.jpg'];
            final=4; //con cantidad de elementos
            for(i=0; i< final; i ++){
                if(verurl == Arrayserv[i]){
                    //alert("la encontro");
                    if(i != final){ 
                        //alert("de aqui vengo"+verurl+ " esta es la imagen a la cual va a pasar images/servicios/"+Arrayserv[i-1])
                        newimg = Arrayserv[i-1];
                        //alert("este es el que va a deshacer"+newimg);
                        c = newimg.length;
                        vz = newimg.split("");
                        //alert("tiene la z o no?"+vz[c-5]);
                        if(vz[c-5] == 'z' && newimg != "playeraz.jpg"){
                            //alert("si tiene z el que sigue");
                            document.getElementById("imgind").classList.remove("modalhz");
                            document.getElementById("imgind").classList.add("modalvert");
                            document.getElementById("imgind").src = "images/servicios/"+Arrayserv[i-1];
                            nueva = Arrayserv[i-1];
                        }else{
                            //alert("no tiene z el que sigue");
                            document.getElementById("imgind").classList.remove("modalvert");
                            document.getElementById("imgind").classList.add("modalhz");
                            document.getElementById("imgind").src = "images/servicios/"+Arrayserv[i-1];
                            nueva = Arrayserv[i-1];
                        }
                    } 
                }
            }
            //alert(nueva);
            sessionStorage.setItem("ulrm", nueva);
        } 
        // =========== INSTALACIONES ============
        if(desfr[0] == "i" && desfr[1] == "n"){
            //alert("entre al formato, este es el valor de verurl: "+verurl);
            //Arrayserv de cada uno 
            Arrayserv = ['in.jpg','in2.jpg','in3.jpg','in4.jpg','in5.jpg','in6.jpg'];
            final=6; //con cantidad de elementos
            for(i=0; i< final; i ++){
                if(verurl == Arrayserv[i]){
                    //alert("la encontro");
                    if(i != final){ 
                        //alert("de aqui vengo"+verurl+ " esta es la imagen a la cual va a pasar images/servicios/"+Arrayserv[i-1])
                        newimg = Arrayserv[i-1];
                        //alert("este es el que va a deshacer"+newimg);
                        c = newimg.length;
                        vz = newimg.split("");
                        //alert("tiene la z o no?"+vz[c-5]);
                        if(vz[c-5] == 'z' && newimg != "playeraz.jpg"){
                            //alert("si tiene z el que sigue");
                            document.getElementById("imgind").classList.remove("modalhz");
                            document.getElementById("imgind").classList.add("modalvert");
                            document.getElementById("imgind").src = "images/servicios/"+Arrayserv[i-1];
                            nueva = Arrayserv[i-1];
                        }else{
                            //alert("no tiene z el que sigue");
                            document.getElementById("imgind").classList.remove("modalvert");
                            document.getElementById("imgind").classList.add("modalhz");
                            document.getElementById("imgind").src = "images/servicios/"+Arrayserv[i-1];
                            nueva = Arrayserv[i-1];
                        }
                    } 
                }
            }
            //alert(nueva);
            sessionStorage.setItem("ulrm", nueva);
        }
        // =========== LETREROS ============
        if(desfr[0] == "l" && desfr[1] == "t"){
            //alert("entre al formato, este es el valor de verurl: "+verurl);
            //Arrayserv de cada uno 
            Arrayserv = ['lt.jpg','lt2.jpg','lt3.jpg','lt4.jpg','lt5.jpg','lt6.jpg','lt7.jpg','lt8.jpg','lt9.jpg','lt10.jpg','lt11.jpg','lt12.jpg'];
            final=12; //con cantidad de elementos
            for(i=0; i< final; i ++){
                if(verurl == Arrayserv[i]){
                    //alert("la encontro");
                    if(i != final){ 
                        //alert("de aqui vengo"+verurl+ " esta es la imagen a la cual va a pasar images/servicios/"+Arrayserv[i-1])
                        newimg = Arrayserv[i-1];
                        //alert("este es el que va a deshacer"+newimg);
                        c = newimg.length;
                        vz = newimg.split("");
                        //alert("tiene la z o no?"+vz[c-5]);
                        if(vz[c-5] == 'z' && newimg != "playeraz.jpg"){
                            //alert("si tiene z el que sigue");
                            document.getElementById("imgind").classList.remove("modalhz");
                            document.getElementById("imgind").classList.add("modalvert");
                            document.getElementById("imgind").src = "images/servicios/"+Arrayserv[i-1];
                            nueva = Arrayserv[i-1];
                        }else{
                            //alert("no tiene z el que sigue");
                            document.getElementById("imgind").classList.remove("modalvert");
                            document.getElementById("imgind").classList.add("modalhz");
                            document.getElementById("imgind").src = "images/servicios/"+Arrayserv[i-1];
                            nueva = Arrayserv[i-1];
                        }
                    } 
                }
            }
            //alert(nueva);
            sessionStorage.setItem("ulrm", nueva);
        } 
        // =========== CAMISAS ============
        if(desfr[0] == "p" && desfr[1] == "l"){
            //alert("entre al formato, este es el valor de verurl: "+verurl);
            //Arrayserv de cada uno 
            Arrayserv = ['playeraz.jpg','playera3.jpg','playera4.jpg','playera5.jpg'];
            final=6; //con cantidad de elementos
            for(i=0; i< final; i ++){
                if(verurl == Arrayserv[i]){
                    //alert("la encontro");
                    if(i != final){ 
                        //alert("de aqui vengo"+verurl+ " esta es la imagen a la cual va a pasar images/servicios/"+Arrayserv[i-1])
                        newimg = Arrayserv[i-1];
                        //alert("este es el que va a deshacer"+newimg);
                        c = newimg.length;
                        vz = newimg.split("");
                        //alert("tiene la z o no?"+vz[c-5]);
                        if(vz[c-5] == 'z' && newimg != "playeraz.jpg"){
                            //alert("si tiene z el que sigue");
                            document.getElementById("imgind").classList.remove("modalhz");
                            document.getElementById("imgind").classList.add("modalvert");
                            document.getElementById("imgind").src = "images/servicios/"+Arrayserv[i-1];
                            nueva = Arrayserv[i-1];
                        }else{
                            //alert("no tiene z el que sigue");
                            document.getElementById("imgind").classList.remove("modalvert");
                            document.getElementById("imgind").classList.add("modalhz");
                            document.getElementById("imgind").src = "images/servicios/"+Arrayserv[i-1];
                            nueva = Arrayserv[i-1];
                        }
                    } 
                }
            }
            //alert(nueva);
            sessionStorage.setItem("ulrm", nueva);
        } 
        // =========== VINIL RECORTE ============
        if(desfr[0] == "r" && desfr[1] == "e"){
            //alert("entre al formato, este es el valor de verurl: "+verurl);
            //Arrayserv de cada uno 
            Arrayserv = ['recort.jpg','recort2.jpg','recort3.jpg','recort4z.jpg','recort5z.jpg','recort6.jpg','recort7.jpg','recort8.jpg','recort9.jpg','recort10.jpg'];
            final=10; //con cantidad de elementos
            for(i=0; i< final; i ++){
                if(verurl == Arrayserv[i]){
                    //alert("la encontro");
                    if(i != final){ 
                        //alert("de aqui vengo"+verurl+ " esta es la imagen a la cual va a pasar images/servicios/"+Arrayserv[i-1])
                        newimg = Arrayserv[i-1];
                        //alert("este es el que va a deshacer"+newimg);
                        c = newimg.length;
                        vz = newimg.split("");
                        //alert("tiene la z o no?"+vz[c-5]);
                        if(vz[c-5] == 'z' && newimg != "playeraz.jpg"){
                            //alert("si tiene z el que sigue");
                            document.getElementById("imgind").classList.remove("modalhz");
                            document.getElementById("imgind").classList.add("modalvert");
                            document.getElementById("imgind").src = "images/servicios/"+Arrayserv[i-1];
                            nueva = Arrayserv[i-1];
                        }else{
                            //alert("no tiene z el que sigue");
                            document.getElementById("imgind").classList.remove("modalvert");
                            document.getElementById("imgind").classList.add("modalhz");
                            document.getElementById("imgind").src = "images/servicios/"+Arrayserv[i-1];
                            nueva = Arrayserv[i-1];
                        }
                    } 
                }
            }
            //alert(nueva);
            sessionStorage.setItem("ulrm", nueva);
        } 
        // =========== STANDISPLAY============
        if(desfr[0] == "s" && desfr[1] == "d"){
            //alert("entre al formato, este es el valor de verurl: "+verurl);
            //Arrayserv de cada uno 
            Arrayserv = ['sd.jpg','sd2.jpg','sd3.jpg','sd4z.jpg','sd5z.jpg','sd6z.jpg','sd7.jpg','sd8.jpg','sd9.jpg','sd10.jpg','sd11.jpg','sd12z.jpg'];
            final=12; //con cantidad de elementos
            for(i=0; i< final; i ++){
                if(verurl == Arrayserv[i]){
                    //alert("la encontro");
                    if(i != final){
                       //alert("de aqui vengo"+verurl+ " esta es la imagen a la cual va a pasar images/servicios/"+Arrayserv[i-1])
                        newimg = Arrayserv[i-1];
                        //alert("este es el que va a deshacer"+newimg);
                        c = newimg.length;
                        vz = newimg.split("");
                        //alert("tiene la z o no?"+vz[c-5]);
                        if(vz[c-5] == 'z' && newimg != "playeraz.jpg"){
                            //alert("si tiene z el que sigue");
                            document.getElementById("imgind").classList.remove("modalhz");
                            document.getElementById("imgind").classList.add("modalvert");
                            document.getElementById("imgind").src = "images/servicios/"+Arrayserv[i-1];
                            nueva = Arrayserv[i-1];
                        }else{
                            //alert("no tiene z el que sigue");
                            document.getElementById("imgind").classList.remove("modalvert");
                            document.getElementById("imgind").classList.add("modalhz");
                            document.getElementById("imgind").src = "images/servicios/"+Arrayserv[i-1];
                            nueva = Arrayserv[i-1];
                        }
                    } 
                }
            }
            //alert(nueva);
            sessionStorage.setItem("ulrm", nueva);
        } 
        // =========== TELA ============
        if(desfr[0] == "t" && desfr[1] == "e"){
            //alert("entre al formato, este es el valor de verurl: "+verurl);
            //Arrayserv de cada uno 
            Arrayserv = ['tela.jpg','tela2z.jpg','tela3.jpg','tela4.jpg','tela5z.jpg','tela6.jpg'];
            final=7; //con cantidad de elementos
            for(i=0; i< final; i ++){
                if(verurl == Arrayserv[i]){
                    //alert("la encontro");
                    if(i != final){ 
                        //alert("de aqui vengo"+verurl+ " esta es la imagen a la cual va a pasar images/servicios/"+Arrayserv[i-1])
                        newimg = Arrayserv[i-1];
                        //alert("este es el que va a deshacer"+newimg);
                        c = newimg.length;
                        vz = newimg.split("");
                        //alert("tiene la z o no?"+vz[c-5]);
                        if(vz[c-5] == 'z' && newimg != "playeraz.jpg"){
                            //alert("si tiene z el que sigue");
                            document.getElementById("imgind").classList.remove("modalhz");
                            document.getElementById("imgind").classList.add("modalvert");
                            document.getElementById("imgind").src = "images/servicios/"+Arrayserv[i-1];
                            nueva = Arrayserv[i-1];
                        }else{
                            //alert("no tiene z el que sigue");
                            document.getElementById("imgind").classList.remove("modalvert");
                            document.getElementById("imgind").classList.add("modalhz");
                            document.getElementById("imgind").src = "images/servicios/"+Arrayserv[i-1];
                            nueva = Arrayserv[i-1];
                        }
                    } 
                }
            }
            //alert(nueva);
            sessionStorage.setItem("ulrm", nueva);
        } 
        // =========== VINIL ============
        if(desfr[0] == "v" && desfr[1] == "i"){
            //alert("entre al formato, este es el valor de verurl: "+verurl);
            //Arrayserv de cada uno 
            Arrayserv = ['vinil.jpg','vinil1.jpg','vinil2.jpg','vinil3.jpg','vinil4.jpg','vinil5.jpg','vinil6.jpg','vinil7.jpg','vinil8.jpg','vinil9.jpg','vinil10.jpg','vinil11.jpg'];
            final=12; //con cantidad de elementos
            for(i=0; i< final; i ++){
                if(verurl == Arrayserv[i]){
                    //alert("la encontro");
                    if(i != final){ 
                        //alert("de aqui vengo"+verurl+ " esta es la imagen a la cual va a pasar images/servicios/"+Arrayserv[i-1])
                        newimg = Arrayserv[i-1];
                        //alert("este es el que va a deshacer"+newimg);
                        c = newimg.length;
                        vz = newimg.split("");
                        //alert("tiene la z o no?"+vz[c-5]);
                        if(vz[c-5] == 'z' && newimg != "playeraz.jpg"){
                            //alert("si tiene z el que sigue");
                            document.getElementById("imgind").classList.remove("modalhz");
                            document.getElementById("imgind").classList.add("modalvert");
                            document.getElementById("imgind").src = "images/servicios/"+Arrayserv[i-1];
                            nueva = Arrayserv[i-1];
                        }else{
                            //alert("no tiene z el que sigue");
                            document.getElementById("imgind").classList.remove("modalvert");
                            document.getElementById("imgind").classList.add("modalhz");
                            document.getElementById("imgind").src = "images/servicios/"+Arrayserv[i-1];
                            nueva = Arrayserv[i-1];
                        }
                    } 
                }
            }
            //alert(nueva);
            sessionStorage.setItem("ulrm", nueva);
        } 
        // =========== VOLUMETRICO ============
        if(desfr[0] == "v" && desfr[1] == "o"){
            //alert("entre al formato, este es el valor de verurl: "+verurl);
            //Arrayserv de cada uno 
            Arrayserv = ['vol.jpg','vol2z.jpg','vol3.jpg','vol4.jpg','vol5.jpg','vol6.jpg','vol7.jpg','vol8.jpg'];
            final=10; //con cantidad de elementos
            for(i=0; i< final; i ++){
                if(verurl == Arrayserv[i]){
                    //alert("la encontro");
                    if(i != final){ 
                        //alert("de aqui vengo"+verurl+ " esta es la imagen a la cual va a pasar images/servicios/"+Arrayserv[i-1])
                        newimg = Arrayserv[i-1];
                        //alert("este es el que va a deshacer"+newimg);
                        c = newimg.length;
                        vz = newimg.split("");
                        //alert("tiene la z o no?"+vz[c-5]);
                        if(vz[c-5] == 'z' && newimg != "playeraz.jpg"){
                            //alert("si tiene z el que sigue");
                            document.getElementById("imgind").classList.remove("modalhz");
                            document.getElementById("imgind").classList.add("modalvert");
                            document.getElementById("imgind").src = "images/servicios/"+Arrayserv[i-1];
                            nueva = Arrayserv[i-1];
                        }else{
                            //alert("no tiene z el que sigue");
                            document.getElementById("imgind").classList.remove("modalvert");
                            document.getElementById("imgind").classList.add("modalhz");
                            document.getElementById("imgind").src = "images/servicios/"+Arrayserv[i-1];
                            nueva = Arrayserv[i-1];
                        }
                    } 
                }
            }
            //alert(nueva);
            sessionStorage.setItem("ulrm", nueva);
        } 
    }
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
