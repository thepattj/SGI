$(document).ready(function(){
    $('#icons').click(function() {
        //alert("ESTE ES EL BOTON DE MENU");
        verModal('grande', 'INICIO','NOSOTROS','SERVICIOS','GALERIA','CONTACTO', 'X', 'Platillo Preparado con tortillas previamente sazonadas con la salsa que el comensal selecciono, con una guarnición de Pollo o Huevo al gusto.');
    });

    $('#logo').click(function() {
        $(location).attr('href','index.php');
    });


    $('#slc1').click(function(){
        var texto = $('#slc1').attr('value');
        $('#title').html(texto);
        var desc = "Tipos de materiales:<br><b>MDF, triplay, trovicel, coroplast, foamboard, lámina, microalambre, aluminio</b>";
        $('#descrip').html(desc);
    });
    $('#slc2').click(function(){
        var texto = $('#slc2').attr('value');
        $('#title').html(texto);
        var desc = "Tipos de materiales:<br><b>Autoadherible (mate, blanco, transparente, microperforado)<br> Electroestático (blanco, transparente)</b>";
        $('#descrip').html(desc);
    });
    $('#slc3').click(function(){
        var texto = $('#slc3').attr('value');
        $('#title').html(texto);
        var desc = "Tipos de materiales:<br><b>Autoadherible (mate, blanco, transparente, microperforado)<br> Electroestático (blanco, transparente)</b>";
        $('#descrip').html(desc);
    });
    $('#slc4').click(function(){
        var texto = $('#slc4').attr('value');
        $('#title').html(texto);
        var desc = "Tipos de materiales:<br><b>Autoadherible (mate, blanco, transparente, microperforado)<br> Electroestático (blanco, transparente)</b>";
        $('#descrip').html(desc);
    });
    $('#slc5').click(function(){
        var texto = $('#slc5').attr('value');
        $('#title').html(texto);
        var desc = "Tipos de materiales:<br><b>Tela Plack art y Ten cloth<br> Acabados: Dobladillo perimental, jaretas, hule para perfil de aluminio.</b>";
        $('#descrip').html(desc);
    });
    $('#slc6').click(function(){
        var texto = $('#slc6').attr('value');
        $('#title').html(texto);
        var desc = "Tipos de materiales:<br><b>Vinil Impresión a gran formato<br>Estireno, coroplast, trovicel, foamboard , MDF</b>";
        $('#descrip').html(desc);
    });
});

function verModal(tipo, texto, texto2, texto3, texto4, texto5, textoBtn, parrafo) { //MODAL DE ALERTA
    bgNegro = document.getElementById('bg-negro');
    modal = document.getElementById('modal');

    bgNegro.classList.add('verModal');
    modal.classList.add('verModal');

    if (tipo == 'chico') {
        parrafo = ""
    } else {
        parrafo = parrafo;
    }

    modal.innerHTML =  "<button onclick='cerrar()' id='cierra' class='bmodal col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12'><H1>" + textoBtn + "</H1></button>"+
        "<div class='cmodal col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12'>"+
            "<div onclick='seccion(this.id)' id='index' class='title col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12'>"+
                "<h1 class='tmodal'>" + texto + "</h1></div>"+
            "<div onclick='seccion(this.id)' id='us' class='title col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12'>"+
                "<h1 class='tmodal'>" + texto2 + "</h1></div>"+
            "<div onclick='seccion(this.id)' id='serv' class='title col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12'>"+
                "<h1 class='tmodal'>" + texto3 + "</h1></div>"+
            "<div onclick='seccion(this.id)' id='gale' class='title col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12'>"+
                "<h1 class='tmodal'>" + texto4 + "</h1></div>"+
            "<div onclick='seccion(this.id)' id='contact' class='title col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12'>"+
                "<h1 class='tmodal'>" + texto5 + "</h1></div>"+
        "</div>";

    modal.classList.add(tipo);

    tipo = tipo;
}

function seccion(pagina){
    dir = pagina+".php"
    //alert(dir);
    window.location.href = dir;
}

function cerrar() { //BOTON QUE SE CREA
    bgNegro.classList.remove('verModal');
    modal.classList.remove('verModal');

    if (modal.classList.contains('chico')) {
        modal.classList.remove('chico');
    } else {
        modal.classList.remove('grande');
    }
}