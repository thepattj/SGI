<?php
function correo(){
    $remitente = $_POST['remi'];
    $correo = $_POST['cuerpo'];

    $asunto = "Información para el contacto";
    $destinatario = "jdej261@gmail.com";
    $desde = "From:".$remitente;

    //echo "ya llegue aqui!";
    mail($destinatario, $asunto, $correo, $desde);
}

    function stand(){ ?>
        <div class='col-sm-12 col-md-12 col-lg-7 col-xl-7'>
                                    <div id='fotosdservi' class='row'>
                                        <div class='outmarg col-sm-6 col-md-6 col-lg-6 col-xl-6'> <img class='imgserviunico' onclick='igs(this.id,2)' id='sd' src='images/servicios/sd.jpg'> </div>
                                        <div class='outmarg col-sm-6 col-md-6 col-lg-6 col-xl-6'> <img class='imgserviunico' onclick='igs(this.id,2)' id='sd2' src='images/servicios/sd2.jpg'> </div>
                                        <div class='outmarg col-sm-6 col-md-6 col-lg-6 col-xl-6'> <img class='imgserviunico' onclick='igs(this.id,2)' id='sd3' src='images/servicios/sd3.jpg'> </div>
                                        <div class='outmarg col-sm-6 col-md-6 col-lg-6 col-xl-6'> <img class='imgserviunico' onclick='igs(this.id,2)' id='sd4z' src='images/servicios/sd4.jpg'> </div>
                                        <div class='outmarg col-sm-6 col-md-6 col-lg-6 col-xl-6'> <img class='imgserviunico' onclick='igs(this.id,2)' id='sd5z' src='images/servicios/sd5.jpg'> </div>
                                        <div class='outmarg col-sm-6 col-md-6 col-lg-6 col-xl-6'> <img class='imgserviunico' onclick='igs(this.id,2)' id='sd6z' src='images/servicios/sd6.jpg'> </div>
                                        <div class='outmarg col-sm-6 col-md-6 col-lg-6 col-xl-6'> <img class='imgserviunico' onclick='igs(this.id,2)' id='sd7' src='images/servicios/sd7.jpg'> </div>
                                        <div class='outmarg col-sm-6 col-md-6 col-lg-6 col-xl-6'> <img class='imgserviunico' onclick='igs(this.id,2)' id='sd8' src='images/servicios/sd8.jpg'> </div>
                                        <div class='outmarg col-sm-6 col-md-6 col-lg-6 col-xl-6'> <img class='imgserviunico' onclick='igs(this.id,2)' id='sd10' src='images/servicios/sd10.jpg'> </div>
                                        <div class='outmarg col-sm-6 col-md-6 col-lg-6 col-xl-6'> <img class='imgserviunico' onclick='igs(this.id,2)' id='sd11' src='images/servicios/sd11.jpg'> </div>
                                    </div>
                                </div>
                                <div class='col-sm-12 col-md-12 col-lg-5 col-xl-5'>
                                    <div id='infoservicio' class='row'>
                                        <div class='col-sm-12 col-md-12 col-lg-12 col-xl-12' id='tituloserv'>
                                            <h4>STANDS Y DISPLAYS</h4>
                                        </div>
                                        <div class='col-sm-12 col-md-12 col-lg-12 col-xl-12' id='infoser'>
                                            <h6><b> Materiales: <br> MDF, triplay, trovicel, coroplast, foamboard, lámina, microalambre, aluminio entre otros</b> </h6>
                                        </div>
                                    </div>
                                </div>
<?php 
    }
    function recorte(){ ?>
        <div class='col-sm-12 col-md-12 col-lg-7 col-xl-7'>
                                    <div id='fotosdservi' class='row'>
                                        <div class='outmarg col-sm-6 col-md-6 col-lg-6 col-xl-6'> <img class='imgserviunico' onclick='igs(this.id,2)' id='recort' src='images/servicios/recort.jpg'> </div>
                                        <div class='outmarg col-sm-6 col-md-6 col-lg-6 col-xl-6'> <img class='imgserviunico' onclick='igs(this.id,2)' id='recort2' src='images/servicios/recort2.jpg'> </div>
                                        <div class='outmarg col-sm-6 col-md-6 col-lg-6 col-xl-6'> <img class='imgserviunico' onclick='igs(this.id,2)' id='recort3' src='images/servicios/recort3.jpg'> </div>
                                        <div class='outmarg col-sm-6 col-md-6 col-lg-6 col-xl-6'> <img class='imgserviunico' onclick='igs(this.id,2)' id='recort4z' src='images/servicios/recort4.jpg'> </div>
                                        <div class='outmarg col-sm-6 col-md-6 col-lg-6 col-xl-6'> <img class='imgserviunico' onclick='igs(this.id,2)' id='recort5z' src='images/servicios/recort5.jpg'> </div>
                                        <div class='outmarg col-sm-6 col-md-6 col-lg-6 col-xl-6'> <img class='imgserviunico' onclick='igs(this.id,2)' id='recort6' src='images/servicios/recort6.jpg'> </div>
                                        <div class='outmarg col-sm-6 col-md-6 col-lg-6 col-xl-6'> <img class='imgserviunico' onclick='igs(this.id,2)' id='recort7' src='images/servicios/recort7.jpg'> </div>
                                        <div class='outmarg col-sm-6 col-md-6 col-lg-6 col-xl-6'> <img class='imgserviunico' onclick='igs(this.id,2)' id='recort8' src='images/servicios/recort8.jpg'> </div>
                                        <div class='outmarg col-sm-6 col-md-6 col-lg-6 col-xl-6'> <img class='imgserviunico' onclick='igs(this.id,2)' id='recort9' src='images/servicios/recort9.jpg'> </div>
                                        <div class='outmarg col-sm-6 col-md-6 col-lg-6 col-xl-6'> <img class='imgserviunico' onclick='igs(this.id,2)' id='recort10' src='images/servicios/recort10.jpg'> </div>
                                    </div>
                                </div>
                                <div class='col-sm-12 col-md-12 col-lg-5 col-xl-5'>
                                    <div id='infoservicio' class='row'>
                                        <div class='col-sm-12 col-md-12 col-lg-12 col-xl-12' id='tituloserv'>
                                            <h4>VINIL DE RECORTE</h4>
                                        </div>
                                        <div class='col-sm-12 col-md-12 col-lg-12 col-xl-12' id='infoser'>
                                            <h6><b>Materiales: <br> RECORTE </b> <br>(a uno o varios colores)<br><b>ESMERILADO </b> (recorte e impreso)</h6>
                                        </div>
                                    </div>
                                </div>
<?php
    }
    function vinil(){ ?>
        <div class='col-sm-12 col-md-12 col-lg-7 col-xl-7'>
                                    <div id='fotosdservi' class='row'>
                                        <div class='outmarg col-sm-6 col-md-6 col-lg-6 col-xl-6'> <img class='imgserviunico' onclick='igs(this.id,2)' id='vinil' src='images/servicios/vinil.jpg'> </div>
                                        <div class='outmarg col-sm-6 col-md-6 col-lg-6 col-xl-6'> <img class='imgserviunico' onclick='igs(this.id,2)' id='vinil1' src='images/servicios/vinil1.jpg'> </div>
                                        <div class='outmarg col-sm-6 col-md-6 col-lg-6 col-xl-6'> <img class='imgserviunico' onclick='igs(this.id,2)' id='vinil2' src='images/servicios/vinil2.jpg'> </div>
                                        <div class='outmarg col-sm-6 col-md-6 col-lg-6 col-xl-6'> <img class='imgserviunico' onclick='igs(this.id,2)' id='vinil3' src='images/servicios/vinil3.jpg'> </div>
                                        <div class='outmarg col-sm-6 col-md-6 col-lg-6 col-xl-6'> <img class='imgserviunico' onclick='igs(this.id,2)' id='vinil4' src='images/servicios/vinil4.jpg'> </div>
                                        <div class='outmarg col-sm-6 col-md-6 col-lg-6 col-xl-6'> <img class='imgserviunico' onclick='igs(this.id,2)' id='vinil5' src='images/servicios/vinil5.jpg'> </div>
                                        <div class='outmarg col-sm-6 col-md-6 col-lg-6 col-xl-6'> <img class='imgserviunico' onclick='igs(this.id,2)' id='vinil6' src='images/servicios/vinil6.jpg'> </div>
                                        <div class='outmarg col-sm-6 col-md-6 col-lg-6 col-xl-6'> <img class='imgserviunico' onclick='igs(this.id,2)' id='vinil7' src='images/servicios/vinil7.jpg'> </div>
                                        <div class='outmarg col-sm-6 col-md-6 col-lg-6 col-xl-6'> <img class='imgserviunico' onclick='igs(this.id,2)' id='vinil8' src='images/servicios/vinil8.jpg'> </div>
                                        <div class='outmarg col-sm-6 col-md-6 col-lg-6 col-xl-6'> <img class='imgserviunico' onclick='igs(this.id,2)' id='vinil9' src='images/servicios/vinil9.jpg'> </div>
                                    </div>
                                </div>
                                <div class='col-sm-12 col-md-12 col-lg-5 col-xl-5'>
                                    <div id='infoservicio' class='row'>
                                        <div class='col-sm-12 col-md-12 col-lg-12 col-xl-12' id='tituloserv'>
                                            <h4>AUTOS, VINIL Y ROTULACIÓN</h4>
                                        </div>
                                        <div class='col-sm-12 col-md-12 col-lg-12 col-xl-12' id='infoser'>
                                            <h6><b>Materiales: <br> WALL GRAPHIC <br> FLOOR GRAPHIC </b> <br><b>ELECTROESTÁTICO </b> (blanco, transparente)<br><b>AUTOADHERIBLE </b> (mate, blanco, covencional, con fondo gris o negro, microperforado)</h6>
                                        </div>
                                    </div>
                                </div>
<?php 
    }
    function gran(){ ?>
        <div class='col-sm-12 col-md-12 col-lg-7 col-xl-7'>
                                    <div id='fotosdservi' class='row'>
                                        <div class='outmarg col-sm-6 col-md-6 col-lg-6 col-xl-6'> <img class='imgserviunico' onclick='igs(this.id,2)' id='formato' src='images/servicios/formato.jpg'> </div>
                                        <div class='outmarg col-sm-6 col-md-6 col-lg-6 col-xl-6'> <img class='imgserviunico' onclick='igs(this.id,2)' id='formato2' src='images/servicios/formato2.jpg'> </div>
                                        <div class='outmarg col-sm-6 col-md-6 col-lg-6 col-xl-6'> <img class='imgserviunico' onclick='igs(this.id,2)' id='formato3' src='images/servicios/formato3.jpg'> </div>
                                        <div class='outmarg col-sm-6 col-md-6 col-lg-6 col-xl-6'> <img class='imgserviunico' onclick='igs(this.id,2)' id='formato4' src='images/servicios/formato4.jpg'> </div>
                                        <div class='outmarg col-sm-6 col-md-6 col-lg-6 col-xl-6'> <img class='imgserviunico' onclick='igs(this.id,2)' id='formato5' src='images/servicios/formato5.jpg'> </div>
                                        <div class='outmarg col-sm-6 col-md-6 col-lg-6 col-xl-6'> <img class='imgserviunico' onclick='igs(this.id,2)' id='formato6z' src='images/servicios/formato6.jpg'> </div>
                                        <div class='outmarg col-sm-6 col-md-6 col-lg-6 col-xl-6'> <img class='imgserviunico' onclick='igs(this.id,2)' id='formato7' src='images/servicios/formato7.jpg'> </div>
                                        <div class='outmarg col-sm-6 col-md-6 col-lg-6 col-xl-6'> <img class='imgserviunico' onclick='igs(this.id,2)' id='formato8z' src='images/servicios/formato8.jpg'> </div>
                                    </div>
                                </div>
                                <div class='col-sm-12 col-md-12 col-lg-5 col-xl-5'>
                                    <div id='infoservicio' class='row'>
                                        <div class='col-sm-12 col-md-12 col-lg-12 col-xl-12' id='tituloserv'>
                                            <h4>GRAN FORMATO</h4>
                                        </div>
                                        <div class='col-sm-12 col-md-12 col-lg-12 col-xl-12' id='infoser'>
                                            <h6><b>Materiales: <br> LONAS Tradicionales</b> (de 13 onzas) <b><br> APLICACIÓN DE LONAS</b> (en bastidores) <b><br> LONA BLACKLIGHT <br> LONA MESH <br> LONA BLACKOUT <br> LONA SOLIDA <br> PARA TOLDOS <br> VINIL </b> (blanco, con adhesivo gris o negro)</h6>
                                        </div>
                                    </div>
                                </div>
<?php
    }
    function tela(){ ?>
        <div class='col-sm-12 col-md-12 col-lg-7 col-xl-7'>
                                    <div id='fotosdservi' class='row'>
                                        <div class='outmarg col-sm-6 col-md-6 col-lg-6 col-xl-6'> <img class='imgserviunico' onclick='igs(this.id,2)' id='tela' src='images/servicios/tela.jpg'> </div>
                                        <div class='outmarg col-sm-6 col-md-6 col-lg-6 col-xl-6'> <img class='imgserviunico' onclick='igs(this.id,2)' id='tela2z' src='images/servicios/tela2.jpg'> </div>
                                        <div class='outmarg col-sm-6 col-md-6 col-lg-6 col-xl-6'> <img class='imgserviunico' onclick='igs(this.id,2)' id='tela3' src='images/servicios/tela3.jpg'> </div>
                                        <div class='outmarg col-sm-6 col-md-6 col-lg-6 col-xl-6'> <img class='imgserviunico' onclick='igs(this.id,2)' id='tela4' src='images/servicios/tela4.jpg'> </div>
                                        <div class='outmarg col-sm-6 col-md-6 col-lg-6 col-xl-6'> <img class='imgserviunico' onclick='igs(this.id,2)' id='tela5z' src='images/servicios/tela5.jpg'> </div>
                                        <div class='outmarg col-sm-6 col-md-6 col-lg-6 col-xl-6'> <img class='imgserviunico' onclick='igs(this.id,2)' id='tela6' src='images/servicios/tela6.jpg'> </div>
                                    </div>
                                </div>
                                <div class='col-sm-12 col-md-12 col-lg-5 col-xl-5'>
                                    <div id='infoservicio' class='row'>
                                        <div class='col-sm-12 col-md-12 col-lg-12 col-xl-12' id='tituloserv'>
                                            <h4>TELA</h4>
                                        </div>
                                        <div class='col-sm-12 col-md-12 col-lg-12 col-xl-12' id='infoser'>
                                            <h6><b>Materiales: <br> SUBLIMACIÓN EN DIFERENTES TIPOS DE TELA</b> <br> (brillosa, mate y repelente al agua)</h6>
                                        </div>
                                    </div>
                                </div>
<?php
    }
    function letrero(){ ?>
        <div class='col-sm-12 col-md-12 col-lg-7 col-xl-7'>
                                    <div id='fotosdservi' class='row'>
                                        <div class='outmarg col-sm-6 col-md-6 col-lg-6 col-xl-6'> <img class='imgserviunico' onclick='igs(this.id,2)' id='lt' src='images/servicios/lt.jpg'> </div>
                                        <div class='outmarg col-sm-6 col-md-6 col-lg-6 col-xl-6'> <img class='imgserviunico' onclick='igs(this.id,2)' id='lt2' src='images/servicios/lt2.jpg'> </div>
                                        <div class='outmarg col-sm-6 col-md-6 col-lg-6 col-xl-6'> <img class='imgserviunico' onclick='igs(this.id,2)' id='lt3' src='images/servicios/lt3.jpg'> </div>
                                        <div class='outmarg col-sm-6 col-md-6 col-lg-6 col-xl-6'> <img class='imgserviunico' onclick='igs(this.id,2)' id='lt4' src='images/servicios/lt4.jpg'> </div>
                                        <div class='outmarg col-sm-6 col-md-6 col-lg-6 col-xl-6'> <img class='imgserviunico' onclick='igs(this.id,2)' id='lt5' src='images/servicios/lt5.jpg'> </div>
                                        <div class='outmarg col-sm-6 col-md-6 col-lg-6 col-xl-6'> <img class='imgserviunico' onclick='igs(this.id,2)' id='lt6' src='images/servicios/lt6.jpg'> </div>
                                        <div class='outmarg col-sm-6 col-md-6 col-lg-6 col-xl-6'> <img class='imgserviunico' onclick='igs(this.id,2)' id='lt7' src='images/servicios/lt7.jpg'> </div>
                                        <div class='outmarg col-sm-6 col-md-6 col-lg-6 col-xl-6'> <img class='imgserviunico' onclick='igs(this.id,2)' id='lt8' src='images/servicios/lt8.jpg'> </div>
                                        <div class='outmarg col-sm-6 col-md-6 col-lg-6 col-xl-6'> <img class='imgserviunico' onclick='igs(this.id,2)' id='lt9' src='images/servicios/lt9.jpg'> </div>
                                        <div class='outmarg col-sm-6 col-md-6 col-lg-6 col-xl-6'> <img class='imgserviunico' onclick='igs(this.id,2)' id='lt10' src='images/servicios/lt10.jpg'> </div>
                                    </div>
                                </div>
                                <div class='col-sm-12 col-md-12 col-lg-5 col-xl-5'>
                                    <div id='infoservicio' class='row'>
                                        <div class='col-sm-12 col-md-12 col-lg-12 col-xl-12' id='tituloserv'>
                                            <h4>LETREROS EN 3D/CAJAS DE LUZ</h4>
                                        </div>
                                        <div class='col-sm-12 col-md-12 col-lg-12 col-xl-12' id='infoser'>
                                            <h6><b>Materiales: <br> SUBLIMACIÓN EN DIFERENTES TIPOS DE TELA</b> <br> (brillosa, mate y repelente al agua)</h6>
                                        </div>
                                    </div>
                                </div>
<?php
    }
    function volu(){ ?>
        <div class='col-sm-12 col-md-12 col-lg-7 col-xl-7'>
                                    <div id='fotosdservi' class='row'>
                                        <div class='outmarg col-sm-6 col-md-6 col-lg-6 col-xl-6'> <img class='imgserviunico' onclick='igs(this.id,2)' id='vol' src='images/servicios/vol.jpg'> </div>
                                        <div class='outmarg col-sm-6 col-md-6 col-lg-6 col-xl-6'> <img class='imgserviunico' onclick='igs(this.id,2)' id='vol2z' src='images/servicios/vol2.jpg'> </div>
                                        <div class='outmarg col-sm-6 col-md-6 col-lg-6 col-xl-6'> <img class='imgserviunico' onclick='igs(this.id,2)' id='vol3' src='images/servicios/vol3.jpg'> </div>
                                        <div class='outmarg col-sm-6 col-md-6 col-lg-6 col-xl-6'> <img class='imgserviunico' onclick='igs(this.id,2)' id='vol4' src='images/servicios/vol4.jpg'> </div>
                                        <div class='outmarg col-sm-6 col-md-6 col-lg-6 col-xl-6'> <img class='imgserviunico' onclick='igs(this.id,2)' id='vol5' src='images/servicios/vol5.jpg'> </div>
                                        <div class='outmarg col-sm-6 col-md-6 col-lg-6 col-xl-6'> <img class='imgserviunico' onclick='igs(this.id,2)' id='vol6' src='images/servicios/vol6.jpg'> </div>
                                        <div class='outmarg col-sm-6 col-md-6 col-lg-6 col-xl-6'> <img class='imgserviunico' onclick='igs(this.id,2)' id='vol7' src='images/servicios/vol7.jpg'> </div>
                                        <div class='outmarg col-sm-6 col-md-6 col-lg-6 col-xl-6'> <img class='imgserviunico' onclick='igs(this.id,2)' id='vol8' src='images/servicios/vol8.jpg'> </div>
                                    </div>
                                </div>
                                <div class='col-sm-12 col-md-12 col-lg-5 col-xl-5'>
                                    <div id='infoservicio' class='row'>
                                        <div class='col-sm-12 col-md-12 col-lg-12 col-xl-12' id='tituloserv'>
                                            <h4>VOLUMETRICOS</h4>
                                        </div>
                                        <div class='col-sm-12 col-md-12 col-lg-12 col-xl-12' id='infoser'>
                                            <h6><b> DISEÑO Y PRODUCCIÓN</b></h6>
                                        </div>
                                    </div>
                                </div>
<?php
    }
    function play(){ ?>
        <div class='col-sm-12 col-md-12 col-lg-7 col-xl-7'>
                                    <div id='fotosdservi' class='row'>
                                        <div class='outmarg col-sm-6 col-md-6 col-lg-6 col-xl-6'> <img class='imgserviunico' onclick='igs(this.id,2)' id='playeraz' src='images/servicios/playeraz.jpg'> </div>
                                        <div class='outmarg col-sm-6 col-md-6 col-lg-6 col-xl-6'> <img class='imgserviunico' onclick='igs(this.id,2)' id='playera3' src='images/servicios/playera3.jpg'> </div>
                                        <div class='outmarg col-sm-6 col-md-6 col-lg-6 col-xl-6'> <img class='imgserviunico' onclick='igs(this.id,2)' id='playera4' src='images/servicios/playera4.jpg'> </div>
                                        <div class='outmarg col-sm-6 col-md-6 col-lg-6 col-xl-6'> <img class='imgserviunico' onclick='igs(this.id,2)' id='playera5' src='images/servicios/playera5.jpg'> </div>
                                    </div>
                                </div>
                                <div class='col-sm-12 col-md-12 col-lg-5 col-xl-5'>
                                    <div id='infoservicio' class='row'>
                                        <div class='col-sm-12 col-md-12 col-lg-12 col-xl-12' id='tituloserv'>
                                            <h4>PLAYERAS</h4>
                                        </div>
                                        <div class='col-sm-12 col-md-12 col-lg-12 col-xl-12' id='infoser'>
                                            <h6><b>Materiales: <br> PLAYERAS DE CUALQUIER TIPO DE SERIGRAFIA Y VINIL TEXTIL</b> <br> (brillosa, mate y repelente al agua)</h6>
                                        </div>
                                    </div>
                                </div>
<?php
    }
    function impre(){ ?>
        <div class='col-sm-12 col-md-12 col-lg-7 col-xl-7'>
                                    <div id='fotosdservi' class='row'>
                                        <div class='outmarg col-sm-6 col-md-6 col-lg-6 col-xl-6'> <img class='imgserviunico' onclick='igs(this.id,2)' id='id' src='images/servicios/id.jpg'> </div>
                                        <div class='outmarg col-sm-6 col-md-6 col-lg-6 col-xl-6'> <img class='imgserviunico' onclick='igs(this.id,2)' id='id2' src='images/servicios/id2.jpg'> </div>
                                        <div class='outmarg col-sm-6 col-md-6 col-lg-6 col-xl-6'> <img class='imgserviunico' onclick='igs(this.id,2)' id='id3' src='images/servicios/id3.jpg'> </div>
                                        <div class='outmarg col-sm-6 col-md-6 col-lg-6 col-xl-6'> <img class='imgserviunico' onclick='igs(this.id,2)' id='id4' src='images/servicios/id4.jpg'> </div>
                                    </div>
                                </div>
                                <div class='col-sm-12 col-md-12 col-lg-5 col-xl-5'>
                                    <div id='infoservicio' class='row'>
                                        <div class='col-sm-12 col-md-12 col-lg-12 col-xl-12' id='tituloserv'>
                                            <h4>IMPRESIÓN DIRECTA</h4>
                                        </div>
                                        <div class='col-sm-12 col-md-12 col-lg-12 col-xl-12' id='infoser'>
                                            <h6><b>Materiales: <br>SUSTRATOS RIGIDOS</b> <br> (PVC, acrilico, vidrio, estireno, foamboard, coroplast, madera, MDF impreso)</h6>
                                        </div>
                                    </div>
                                </div>
<?php
    }function insta(){ ?>
        <div class='col-sm-12 col-md-12 col-lg-7 col-xl-7'>
                                    <div id='fotosdservi' class='row'>
                                        <div class='outmarg col-sm-6 col-md-6 col-lg-6 col-xl-6'> <img class='imgserviunico' onclick='igs(this.id,2)' id='in' src='images/servicios/in.jpg'> </div>
                                        <div class='outmarg col-sm-6 col-md-6 col-lg-6 col-xl-6'> <img class='imgserviunico' onclick='igs(this.id,2)' id='in2' src='images/servicios/in2.jpg'> </div>
                                        <div class='outmarg col-sm-6 col-md-6 col-lg-6 col-xl-6'> <img class='imgserviunico' onclick='igs(this.id,2)' id='in3' src='images/servicios/in3.jpg'> </div>
                                        <div class='outmarg col-sm-6 col-md-6 col-lg-6 col-xl-6'> <img class='imgserviunico' onclick='igs(this.id,2)' id='in4' src='images/servicios/in4.jpg'> </div>
                                        <div class='outmarg col-sm-6 col-md-6 col-lg-6 col-xl-6'> <img class='imgserviunico' onclick='igs(this.id,2)' id='in5' src='images/servicios/in5.jpg'> </div>
                                        <div class='outmarg col-sm-6 col-md-6 col-lg-6 col-xl-6'> <img class='imgserviunico' onclick='igs(this.id,2)' id='in6' src='images/servicios/in6.jpg'> </div>
                                    </div>
                                </div>
                                <div class='col-sm-12 col-md-12 col-lg-5 col-xl-5'>
                                    <div id='infoservicio' class='row'>
                                        <div class='col-sm-12 col-md-12 col-lg-12 col-xl-12' id='tituloserv'>
                                            <h4>INSTALACIÓN</h4>
                                        </div>
                                        <div class='col-sm-12 col-md-12 col-lg-12 col-xl-12' id='infoser'>
                                            <h6><b>En cualquier lugar, con cualquier material</b></h6>
                                        </div>
                                    </div>
                                </div>
<?php
    }
?>