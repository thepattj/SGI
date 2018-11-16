<?php
    $remitente = $_POST['remi'];
    $correo = $_POST['cuerpo'];

    $asunto = "Información para el contacto";
    $destinatario = "jdej261@gmail.com";
    $desde = "From:".$remitente;

    //echo "ya llegue aqui!";
    mail($destinatario, $asunto, $correo, $desde);
?>