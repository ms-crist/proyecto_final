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
    var correo = document.getElementById('campo_correo').value;
    var telefono = document.getElementById('campo_telefono').value;
    var direccion = document.getElementById('campo_direccion').value;
    var mensaje_text = document.getElementById('campo-mensaje').value;


    datospersonales['campo_nombre'] = nombre ;
    datospersonales['campo_correo'] =correo;
    datospersonales['campo_telefono'] = telefono;
    datospersonales['campo_direccion'] = direccion;
    datospersonales['campo-mensaje'] = mensaje_text;


    datos.push(datospersonales);

    console.log(datos);
}

