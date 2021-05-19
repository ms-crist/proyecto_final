function button(){
    alert('Hizo click en botón enviar');
}

/* function hacerclick(){
    document.getElementsByTagName('input')[3].onclick = button;
}

window.onload = hacerclick; */

var datos =[];
function agregadatos(){
    var datospersonales = new Object () ;
    var nombre = document.getElementById('campo_nombre').value;
    var apellido1 = document.getElementById('campo_apellido_paterno').value;
    var apellido2 = document.getElementById('campo_apellido_materno').value;
    var correo = document.getElementById('campo_correo').value;
    var telefono = document.getElementById('campo_telefono').value;
    var direccion = document.getElementById('campo_direccion').value;


    datospersonales['campo_nombre'] = nombre ;
    datospersonales['campo_apellido_paterno'] =apellido1;
    datospersonales['campo_apellido_materno'] =apellido2;
    datospersonales['campo_correo'] =correo;
    datospersonales['campo_telefono'] = telefono;
    datospersonales['campo_direccion'] = direccion;


    datos.push(datospersonales);

    console.log(datos);
}

