
function Validardatos(){
    let datos = new Object () ;
    var nombre = document.getElementById('campo_nombre').value;
    var correo = document.getElementById('campo_correo').value;
    var telefono = document.getElementById('campo_telefono').value;
    var direccion = document.getElementById('campo_direccion').value;
    var descripcion = document.getElementById('campo_mensaje').value;


    //Evaluamos nombre si está correcto 

    if(nombre.length < 5){
        document.getElementById("msgNombre").innerText = "El nombre debe de tener al menos 5 caracteres";
    }else{
        document.getElementById("msgNombre").innerText = "";
        datos["nombre"] = nombre;
    }

    //Evaluamos correo si está correcto

    if(correo.length > 0){
        var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if (regex.test(correo)){
            document.getElementById("msgCorreo").innerText = "";
        }else{
            document.getElementById("msgCorreo").innerText = "Ingrese un correo válido.";
            datos["correo"] = correo;
        }
        }else{
            document.getElementById("msgCorreo").innerText = "El correo es obligatorio";
        }

        //EVALUO SI EL TELEFONO ES CORRECTO EN CHILE SON 9 DIGITOS
        //ADEMÁS DEL NUMERO DE CARACTERES EVALUA QUE SEAN SOLO NUMEROS LOS QUE SE INGRESAN

        if(telefono.length < 9){
            document.getElementById("msgTel").innerText = "El telefono es invalido";
        }else{
            document.getElementById("msgTel").innerText = "";
            datos["telefono"] = telefono;
        }

//EVALUAMOS QUE EL CAMPO DE DIRECCION TENGA MÁS DE 5 CARACTERES

if(direccion.length < 5){
    document.getElementById("msgText").innerText = "La dirección debe de tener al menos 5 caracteres";
}else{
    document.getElementById("msgText").innerText = "";
    datos["direccion"] = direccion;
}

//Evaluo el campo de descripción
if(descripcion.length <= 0){
    document.getElementById("MsgDescripcion").innerText = "El mensaje es obligatorio";
}else{
    document.getElementById("MsgDescripcion").innerText = "";
    datos["descripcion"] = descripcion;
}
console.log(datos);
}

