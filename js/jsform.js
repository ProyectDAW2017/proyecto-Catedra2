function validar(){
    
    
    var nombre, correo, telefono, clave, pais, consulta;
    
   nombre = document.getElementById("nombre").value;
    telefono = document.getElementById("telefono").value;
    correo = document.getElementById("correo").value;
    clave = document.getElementById("clave").value;
    pais = document.getElementById("pais").value;
    consulta = document.getElementById("mensaje").value;
    
if (nombre === "" || telefono === "" || correo === "" || clave ==="" || pais === "" || consulta === ""){
        alert("Todos los Campos son Obligatorios");
    
        return false;
 }
    else if(nombre.length > 30){
    alert("El Nombre es muy Largo");
    
         
return false;
}
     else if(telefono.length >12){
            alert("Limite de Numero alcanzado, El telefono es muy largo ");
         return false;
}
      else if(correo.length >50){
            alert("Limite de Caracteres Alcanzado, El correo es muy largo ");
          return false;
}
    else if(clave.length >30){
            
        alert("Limite de caracteres Alcanzado, La contraseña es muy larga");
    
        return false;
            }
     else if(pais.length >10){
            alert("Limite de Caracteres Alcanzado, Pais es muy largo ");
          return false;
} else if(consulta.length >1000){
    alert("Limite de Caracteres Alcanzado,El mensaje es muy Largo");
    
    return false;
}
    

 
} //FIn de funcion validar

function colorerror(obj){  // funcion para colorear un input vacio
        
if(obj.value===""){
    
    obj.className='error';
   }else{
       obj.className='input1';
   }
        
}// fin de funcion colorerror
function colorsolucion(elemnt){ // funcion para colorear un input cuando detecte una tecla
    
    if (elemnt.value.length >=1){
        elemnt.className='solucion';
        
    }else{
         elemnt.className='input1';
    }
     
        
}//fin de funcion solucion


//Expreciones Regulares
function valemail(valor){
    
    if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(valor)){
       
        return (true);
    }else{
        alert("la Direccion de Correo es Incorrecta");
        return (false);
    }
}

function valtelefono(tel1){
    
    
    if(/^([0-9\+\s\+\-])+$/.test(tel1)){
       
         return (true);
       }else {
          alert("Solo numeros")
           return false;
           }
       }




function cargareventos(){
   
   /*document.getElementById("mostrar-tabla").addEventListener("click", mostrartabla,false);*/
    document.getElementById("enviar").addEventListener("click",guardar,false);

}
function reset(){
    
    var nombrein = document.getElementById("nombre");
    
    nombrein = "";
}
 




    




