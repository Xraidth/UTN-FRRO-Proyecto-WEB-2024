const main_main_tbody = document.getElementById('main_main_tbody');
const main_footer_tbody = document.getElementById('main_footer_tbody');
const btnAgregar = document.getElementById('btnAgregar');
const btnModificar = document.getElementById('btnModificar');
const btnBorrar = document.getElementById('btnBorrar');
const btnConsultar = document.getElementById('btnConsultar');
const main_main_tr = document.getElementById('main_main_tr');

window.addEventListener('load', function() { 
    cargarUsuario();
    cargarColumnas();
    cargarTabla();
});

function cargarTabla(){
    main_main_tbody.innerHTML = "";
    if (usuarios.length > 0) {
        usuarios.forEach((usu, index) => {
            main_main_tbody.appendChild(crearFila(usu, index));
        });
    }

    cargarResumen();
}

function cargarColumnas(){
    
    
    if (usuarios.length > 0){
        for (const u in usuarios[0]) {
            const nueva_columna = document.createElement('th');
            nueva_columna.textContent = u;
            main_main_tr.appendChild(nueva_columna);
        }
    }
    const final_columna = document.createElement('th');
    main_main_tr.appendChild(final_columna);


}

function crearFila(usu, index){
    const fila = document.createElement('tr');

    const nroFila = document.createElement('td');
    nroFila.innerHTML = (++index).toString();
    nroFila.className = 'text-center bg-secondary text-white'
    fila.appendChild(nroFila);

    for (const u in usu) {
        if (usu.hasOwnProperty(u)) {
            const celda = document.createElement('td');
            celda.className = 'text-center'
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


btnAgregar.addEventListener('click', () =>{ window.location.href = './registro.html'});
btnModificar.addEventListener('click', () =>{console.log('boton mod apretado');});
btnBorrar.addEventListener('click', () =>{console.log('boton borrar apretado');});
btnConsultar.addEventListener('click', () =>{console.log('boton consultar apretado');});


function cargarResumen(){
    main_footer_tbody.innerHTML="";
    cargarTotal();
    
}

function cargarTotal(){
    const filaCantTotal = document.createElement('tr');
    const celdaCantTotal = document.createElement('td');
    const celdaCantValorTotal= document.createElement('td');
    celdaCantValorTotal.textContent = usuarios.length.toString();
    celdaCantTotal.textContent = 'Total:';
    celdaCantValorTotal.className = 'p-2';
    filaCantTotal.appendChild(celdaCantTotal);
    filaCantTotal.appendChild(celdaCantValorTotal);
    main_footer_tbody.appendChild(filaCantTotal);
}



const nav_div_usuario = document.getElementById("nav_div_usuario");
const nav_img_flechita = document.getElementById("nav_img_flechita");
const nav_div_op_usuario = document.getElementById("nav_div_op_usuario");


nav_div_usuario.addEventListener('click', ()=>{
nav_img_flechita.classList.toggle("rotar-90");
nav_div_op_usuario.classList.toggle("mostrar_nav_div_op");

const nav_div_li_cerrar_sesion = document.getElementById('nav_div_li_cerrar_sesion');
nav_div_li_cerrar_sesion.addEventListener('click', () =>{ 
    cerrarSesion();
    window.location.href = './index.html'});
});

