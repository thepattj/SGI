$(document).ready(function(){
	$("#carouselExampleControls").carousel();
});

function pmodal(id) {// Datos para que el modal se cree
	if(id == 1){ verModal('grande', 'Chilaquiles', 'X', 'Platillo Preparado con tortillas previamente sazonadas con la salsa que el comensal selecciono, con una guarnición de Pollo o Huevo al gusto.');
	}else if(id == 2){ verModal('grande', 'Avena', 'X', 'Un Platillo con los ingredientes mas frescos y selectos, con un sabor Gourmet-casero.'); 
	}else if(id == 3){ verModal('grande', 'Crepa Desayuno', 'X', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime repellendus quos dicta.'); 
	}else if(id == 4){ verModal('grande', 'Enfrijoladas', 'X', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime repellendus quos dicta.'); 
	}else if(id == 5){ verModal('grande', 'Timbal, Nopal y Panela', 'X', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime repellendus quos dicta.'); 
	}else if(id == 6){ verModal('grande', 'Pancakes', 'X', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime repellendus quos dicta.'); 
	}else if(id == 7){ verModal('grande', 'Crepa Vegetariana', 'X', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime repellendus quos dicta.'); 
	}else if(id == 8){ verModal('grande', 'Claras de Huevo', 'X', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime repellendus quos dicta.'); 
	}else if(id == 9){ verModal('grande', 'Pan Frances - French Toast', 'X', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime repellendus quos dicta.'); 
	}else if(id == 10){ verModal('grande', 'Gluten Free Banana Pan Cakes', 'X', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime repellendus quos dicta.'); 
	}else if(id == 11){ verModal('grande', 'Huevos Salsa Chipotle', 'X', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime repellendus quos dicta.'); 
	}else if(id == 12){ verModal('grande', 'Plato de frutas', 'X', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime repellendus quos dicta.'); 
	}
}

function verModal(tipo, texto, textoBtn, parrafo) { //MODAL DE ALERTA
    bgNegro = document.getElementById('bg-negro');
    modal = document.getElementById('modal');

    bgNegro.classList.add('verModal');
    modal.classList.add('verModal');

    if (tipo == 'chico') {
        parrafo = ""
    } else {
        parrafo = parrafo;
    }

    modal.innerHTML =  "<button onclick='cerrar()' class='col-xs-1 col-sm-1 col-md-1 col-lg-1 col-xl-1 menta'>" + textoBtn + "</button>"+
        "<div class='cmodal col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12'> <h1>" + texto + "</h1> </div> " +
        "<div class='cmodal col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12'> <p>" + parrafo + "</p> </div>" +
        "<div class='cmodal col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12'> <img id='modalimg' src='images/platillo/sarten3.jpg'> </div>";

    modal.classList.add(tipo);

    tipo = tipo;
}

function menus(tipom){
    if(tipom == 'menu'){
        menuhamb('chicom', 'Nosotros', 'Menu', 'Ubicacion');
    }if(tipom == "menun"){
        menunos('chicom');    
    }
    /*cerrarm();*/
}
function menuhamb(tipo, opc1, opc2, opc3){
    bgBlanco = document.getElementById('bg-blanco');
    modalm = document.getElementById('menuh');

    bgBlanco.classList.add('vermenuh');
    modalm.classList.add('vermenuh');

    if (tipo == 'chicom') {
        parrafo = ""
    } else {
        parrafo = parrafo;
    }

    modalm.innerHTML =  
        "<div class='cmodal col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12' onclick='cerrarm()'><a href='#us'>  <h4>" + opc1 + "</h4> </a></div> "+
        "<div class='cmodal col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12' onclick='cerrarm()'><a href='menu.php'> <h4>" + opc2 + "</h4> </a> </div> "+
        "<div class='cmodal col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12' onclick='cerrarm()'><a href='#here'> <h4>" + opc3 + "</h4> </a> </div> ";

    modalm.classList.add(tipo);

    tipo = tipo;
}

function menunos(tipo){
    bgBlanco = document.getElementById('bg-blanco');
    modalm = document.getElementById('menugpo');

    bgBlanco.classList.add('vermenugpo');
    modalm.classList.add('vermenugpo');

    if (tipo == 'chicom') {
        parrafo = ""
    } else {
        parrafo = parrafo;
    }

    modalm.innerHTML =  
        "<div class='cmodal col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12' onclick='cerrarm()'><a href='#us'>The bakery </a></div> "+
        "<div class='cmodal col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12' onclick='cerrarm()'><a href='menu.php'>Moo House</a> </div> "+
        "<div class='cmodal col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12' onclick='cerrarm()'><a href='#here'>Oink House</a> </div> "+
        "<div class='cmodal col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12' onclick='cerrarm()'><a href='#here'>Brioche Brasserie</a> </div> ";

    modalm.classList.add(tipo);

    tipo = tipo; 
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

function cerrarm() { //BOTON QUE SE CREA
    bgBlanco.classList.remove('vermenuh');
    modalm.classList.remove('vermenuh');

    if (modalm.classList.contains('chico')) {
        modalm.classList.remove('chico');
    } else {
        modalm.classList.remove('grande');
    }
}