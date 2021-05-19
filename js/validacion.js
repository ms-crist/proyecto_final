function ValidaNombre(){
    var campo = document.getElementById("campo_nombre").value;
    var mensaje = document.getElementById("msgNombre");

    if(campo.length < 5){
        mensaje.innerText = "El nombre debe de tener al menos 5 caracteres";
        mensaje.classList.remove("exito");
        mensaje.classList.add("error");
    }else{
        mensaje.innerText = "El nombre es correcto.";
        mensaje.classList.remove("error");
        mensaje.classList.add("exito");
    }
}

function ValidaApellido(){
    var campo = document.getElementById("campo_apellido_paterno").value;
    var mensaje = document.getElementById("msgApellido");

    if(campo.length < 5){
        mensaje.innerText = "El apellido debe de tener al menos 5 caracteres";
        mensaje.classList.remove("exito");
        mensaje.classList.add("error");
    }else{
        mensaje.innerText = "El apellido es correcto.";
        mensaje.classList.remove("error");
        mensaje.classList.add("exito");
    }
}

function ValidaApellido2(){
    var campo = document.getElementById("campo_apellido_materno").value;
    var mensaje = document.getElementById("msgApellido1");

    if(campo.length < 5){
        mensaje.innerText = "El apellido debe de tener al menos 5 caracteres";
        mensaje.classList.remove("exito");
        mensaje.classList.add("error");
    }else{
        mensaje.innerText = "El apellido es correcto.";
        mensaje.classList.remove("error");
        mensaje.classList.add("exito");
    }
}

function Validacorreo(){
    var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    var correo = document.getElementById("campo_correo").value;
    var mensaje = document.getElementById("msgCorreo");

    if(!regex.test(correo)){
        mensaje.innerText = "Ingrese un correo válido!";
        mensaje.classList.remove("exito");
        mensaje.classList.add("error");
    }else{
        mensaje.innerText = "El correo ingresado es correcto";
        mensaje.classList.remove("error");
        mensaje.classList.add("exito");
    }
}

function Validatel(){
    var campo = document.getElementById("campo_telefono").value;
    var mensaje = document.getElementById("msgTel");

    

   var patt=new RegExp("^[1-9]{9}$");
    if (patt.test(campo)){
        mensaje.innerText = "El teléfono es correcto.";
        mensaje.classList.remove("error");
        mensaje.classList.add("exito");
    } else {
        mensaje.innerText = "Debe contener solo números y nueve digitos";
        mensaje.classList.remove("exito");
        mensaje.classList.add("error");
    } 
    
}

function ValidaTexto(){
    var campo = document.getElementById("campo_direccion").value;
    var mensaje = document.getElementById("msgText");

    if(campo.length < 5){
        mensaje.innerText = "El mensaje debe tener al menos 5 caracteres";
        mensaje.classList.remove("exito");
        mensaje.classList.add("error");
    }else{
        mensaje.innerText = "El mensaje es correcto.";
        mensaje.classList.remove("error");
        mensaje.classList.add("exito");
    }
}

