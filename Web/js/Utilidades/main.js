const main_main_tbody = document.getElementById('main_main_tbody');

window.addEventListener('load', function() {  
    cargarTabla();
});

function cargarTabla(){
    main_main_tbody.innerHTML = "";
    if (usuarios.length > 0) {
        usuarios.forEach((usu, index) => {
            main_main_tbody.appendChild(crearFila(usu, index));
        });
    }
}

function crearFila(usu, index){
    const fila = document.createElement('tr');

    const nroFila = document.createElement('td');
    nroFila.innerHTML = (++index).toString();
    fila.appendChild(nroFila);

    for (const u in usu) {
        if (usu.hasOwnProperty(u)) {
            const celda = document.createElement('td');
            celda.innerHTML = usu[u].toString(); 
            fila.appendChild(celda);
        }
    }

    const btnFila = document.createElement('td');
    const btnBorrado = document.createElement('button');
    const imgbtnBorrado = document.createElement('img');
    
    btnBorrado.className = 'btn btn-danger btnBorrado';

    btnBorrado.addEventListener('click', (e) => {eliminarFila(usu);});

    imgbtnBorrado.src = './Imagenes/eliminar.png';
    imgbtnBorrado.className = 'imgbtnBorrado';
    btnBorrado.appendChild(imgbtnBorrado);

    btnFila.appendChild(btnBorrado);
    fila.appendChild(btnFila);


    return fila;
}
function eliminarFila(usu){
    const nroUsu = usuarios.indexOf(usu);
    usuarios.splice(nroUsu, 1);
    cargarTabla();        
}

