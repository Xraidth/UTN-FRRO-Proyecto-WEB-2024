const main_main_tbody = document.getElementById('main_main_tbody');
const main_footer_tbody = document.getElementById('main_footer_tbody');
const btnAgregar = document.getElementById('btnAgregar');
const btnModificar = document.getElementById('btnModificar');
const btnBorrar = document.getElementById('btnBorrar');
const btnConsultar = document.getElementById('btnConsultar');
const main_main_tr = document.getElementById('main_main_tr');
const pillsTab = document.getElementById('pills-tab');




let objetos = [usuarios, materias]; 
let obj_util;

document.addEventListener('DOMContentLoaded', function() { 
    
    obj_util = 0;
    cargarUsuario();
    cargarMenuBotones();
    cargarTablaCompleta(objetos[obj_util]);
    
});

function cargarTablaCompleta(objetos){
    cargarColumnas(objetos);
    cargarTabla(objetos);
}

function cargarTabla(objetos){
    main_main_tbody.innerHTML = "";
    if (objetos.length > 0) {
        objetos.forEach((obj, index) => {
            main_main_tbody.appendChild(crearFila(obj, index));
        });
    }

    cargarResumen();
}

function cargarColumnas(objetos){
    
    main_main_tr.innerHTML="";

    const principio_columna = document.createElement('th');
    principio_columna.textContent ="#"
    main_main_tr.appendChild(principio_columna);

    if (objetos.length > 0){
        for (const o in objetos[0]) {
            const nueva_columna = document.createElement('th');
            nueva_columna.textContent = o;
            main_main_tr.appendChild(nueva_columna);
        }
    }
    for (let index = 0; index < 3; index++) {
        
        const final_columna = document.createElement('th');
        main_main_tr.appendChild(final_columna);
    }


}

function crearFila(obj, index){
    const fila = document.createElement('tr');

    const nroFila = document.createElement('td');
    nroFila.innerHTML = (++index).toString();
    nroFila.className = 'text-center bg-secondary text-white'
    fila.appendChild(nroFila);

    for (const o in obj) {
        if (obj.hasOwnProperty(o)) {
            const celda = document.createElement('td');
            celda.className = 'text-center'
            if(obj[o]!=null){
                celda.innerHTML = obj[o].toString();
            } 
            else{
                celda.innerHTML = "";
                }
            fila.appendChild(celda);
        }
    }

    const dirBtnEditCelda = ['./Imagenes/info.png', './Imagenes/edit.png', './Imagenes/eliminar.png'];

    dirBtnEditCelda.forEach((dir_img, index) => {
        const btnFila = document.createElement('td');
    const btnBorrado = document.createElement('button');
    const imgbtn = document.createElement('img');
    imgbtn.src = dir_img;
        
    if(index ==2){
    btnBorrado.className = 'btn btn-danger btnBorrado';
    btnBorrado.addEventListener('click', (e) => {eliminarFila(obj, objetos[obj_util]);});
    imgbtn.className = 'imgbtn';
    }
    if(index ==1){
        btnBorrado.className = 'btn btn-warning btnBorrado';
        btnBorrado.addEventListener('click', (e) => {console.log("Usted apreto edit")});
        imgbtn.className = 'imgbtn';
        }
    if(index ==0){
            btnBorrado.className = 'btn btn-success btnBorrado';
            btnBorrado.addEventListener('click', (e) => {console.log("Usted apreto info")});
            imgbtn.className = 'imgbtn';
            }
    btnBorrado.appendChild(imgbtn);
    btnFila.appendChild(btnBorrado);
    fila.appendChild(btnFila);
    });
   


    return fila;
}
function eliminarFila(obj, objetos){
    const nroObj = objetos.indexOf(obj);
    objetos.splice(nroObj, 1);
    cargarTabla(objetos);        
}


btnAgregar.addEventListener('click', () =>{ window.location.href = './registro.html'});
btnBorrar.addEventListener('click', () =>{
    
    objetos.splice(obj_util,1);
    
});
btnConsultar.addEventListener('click', () =>{
    Swal.fire({
        title: "<strong>Información general</strong>",
        icon: "info",
        html: `
          Para <b>más detalles</b>, ir a
          <a href="#">ayuda</a>,
          no dudes en consultar!!
        `,
        showCloseButton: true,
        showCancelButton: true,
        focusConfirm: false,
        
      });
});


function cargarResumen(){
    main_footer_tbody.innerHTML="";
    cargarTotal();
    
}

function cargarTotal(){
    const filaCantTotal = document.createElement('tr');
    const celdaCantTotal = document.createElement('td');
    const celdaCantValorTotal= document.createElement('td');
    celdaCantValorTotal.textContent = objetos[obj_util].length.toString();
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

function cargarMenuBotones()
{
    
    objetos.forEach((obj,index) => {
        if(obj){
            
            
        if(index==0){
            pillsTab.innerHTML += '<li class="nav-item" role="presentation"> <button class="nav-link w-100 custom-btn-main active" data-bs-toggle="pill" data-bs-target="#pills" type="button" role="tab" aria-controls="pills" id="btn'+obj[0].getObjName()+'" aria-selected="true">'+obj[0].getObjName()+'</button>   </li>';
        }
        else{
            
            pillsTab.innerHTML += '<li class="nav-item" role="presentation"> <button class="nav-link w-100 custom-btn-main" data-bs-toggle="pill" data-bs-target="#pills" type="button" role="tab" aria-controls="pills" aria-selected="false" id="btn'+obj[0].getObjName()+'">'+ obj[0].getObjName() + '</button>   </li>';
        }
        }
    });

  let pill_botones = pillsTab.querySelectorAll('button');
   pill_botones.forEach((b,index) => {
     b.addEventListener('click',(e)=>{
        e.preventDefault
       obj_util = index; 
       cargarTablaCompleta(objetos[obj_util]);
     })
  });

}


    

