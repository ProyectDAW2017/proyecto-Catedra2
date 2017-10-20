window.onload = function() {
  document.getElementById("enviar").onclick = validacion;
}
	
function validacion() {
	nombre();
	correo();
	nacionalidad();
	mensaje();

	
}

function nombre() { //exprecion regular para el campo nombre
	var valiNombre;
    var inpri=document.getElementById('oculto1');
    var imprimir = "";
    
    //variable para la exprecion regular
	var nombre = document.getElementById('nombre').value;

	valiNombre = /^[A-Za-z]+\s[A-Za-z]+$/;

	if (nombre === "") {
		imprimir +="*Error Campo Nombre Obligatorio <p></p>" ;
     
        inpri.innerHTML = imprimir;
		return false;
	
    }

	else if (!valiNombre.test(nombre)) {
		imprimir +="*!!!Error, Solo se aceptan letras en el campo nombre<p></p>";
         inpri.innerHTML = imprimir;
		return true;
	}
} // fin nombre

function correo() { //exprecion regular para el campo corro
	var valiCorreo; //variable para la exprecion regular
var  inpri=document.getElementById('oculto2');
    var imprimir = "";
    
	var correo = document.getElementById('correo').value;

	valiCorreo = /^\w+@[hotmail||gmail||yahoo].+[com||es]+$/;

	if (correo === "") {
		imprimir +="*es obligatorio llenar el campo correo*<p></p>" ;
        inpri.innerHTML = imprimir;
		return false;
	}

	else if (!valiCorreo.test(correo)) {
		alert("!!!Error, El correo ingresado no es valido");
		return false;
	}
}

function nacionalidad() { //exprecion regular para el campo nacionalidad
	var valipais; //variable para la exprecion regular
	var nacionalidad = document.getElementById('pais').value;
var  inpri=document.getElementById('oculto3');
    var imprimir = "";
	

	if (nacionalidad === "") {
		imprimir +="*Es Obligatorio llenar el campo Pais*<p></p>" ;
        inpri.innerHTML = imprimir;
		return false;
	}	
}

function mensaje() { //exprecion regular para el campo mensajeria
	var valipais; //variable para la exprecion regular
	var mensajeria = document.getElementById('mensaje').value;
var  inpri=document.getElementById('oculto3');
    var imprimir = "";
	

	if (mensajeria === "") {
		imprimir +="*Es Obligatorio llenar el campo Mensajeria*<p></p>" ;
        inpri.innerHTML = imprimir;
		return false;
	}	
}

