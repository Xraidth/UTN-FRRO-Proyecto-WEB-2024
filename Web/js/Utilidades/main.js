const main_main_tbody = document.getElementById('main_main_tbody');
const main_footer_tbody = document.getElementById('main_footer_tbody');
const btnAgregar = document.getElementById('btnAgregar');
const btnModificar = document.getElementById('btnModificar');
const btnBorrar = document.getElementById('btnBorrar');
const btnConsultar = document.getElementById('btnConsultar');
const main_main_tr = document.getElementById('main_main_tr');
const pillsTab = document.getElementById('pills-tab');




let objetos = [usuarios,materias]; 
let obj_util;

document.addEventListener('DOMContentLoaded', function() { 
    
    obj_util = 0;
    cargarUsuario();
    cargarMenuBotones();
    cargarTablaCompleta(objetos[obj_util]);
    
});

function cargarTablaCompleta(objetos){
    VaciarTabla();
    if(objetos){
    cargarColumnas(objetos);
    cargarTabla(objetos);
    }
    else{Swal.fire("Tabla vacia");}
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
    if(obj!=null && objetos.length!=0){
    const nroObj = objetos.indexOf(obj);
    objetos.splice(nroObj, 1);
    cargarTabla(objetos);        
}

}


btnAgregar.addEventListener('click', () =>{  
   
    let main_txt_html_add = 
        [(' <input type="txt" class="swal2-input" placeholder="Usuario">' +
          '<input  type="password" class="swal2-input" placeholder="Constraseña">'+
          ' <input type="email" class="swal2-input" placeholder="Email">' +
          '<input  type="txt" class="swal2-input" placeholder="Nombre">'+
          ' <input type="txt" class="swal2-input" placeholder="Apellido">' +
          '<div class="d-flex flex-column align-items-center mt-4">'+
          '<lavel class="font-weight-bold text-dark">Fecha de Nacimiento:</lavel>'+
          '<input  type="date" class="swal2-input"></div>'+
          ' <input type="txt" class="swal2-input" placeholder="Telefono">' +
          '<input  type="txt" class="swal2-input" placeholder="Dni">'+
          '<input  type="txt" class="swal2-input" placeholder="Direccion">'+
          '<div class="d-flex flex-column align-items-center mt-4">'+
          '<label for="exampleSelect" class="font-weight-bold text-dark">Seleccione un Tipo de usuario:</label>'+
          '<select class="form-control w-50 mt-4" id="exampleSelect">'+
          '<option>Administrador</option>'+
          '<option>Profesor</option>'+
          '<option>Alumno</option>'+
          '</select></div>'
          
          ),
          (' <input type="txt" class="swal2-input" placeholder="Nombre">' +
          '<input  type="txt" class="swal2-input" placeholder="Descripción">')]


    Swal.fire({
        title: 'Formulario',
        html: main_txt_html_add[obj_util],
        confirmButtonText: 'Agregar',
        showCancelButton: true,
        cancelButtonText: 'Cancelar',
        preConfirm: () => {
          const input1 = document.getElementById('input1').value;
          const input2 = document.getElementById('input2').value;
          
          // Aquí puedes realizar acciones con los valores de los inputs
          /*console.log('Input 1:', input1);
          console.log('Input 2:', input2);*/
        }
      });
      
    
  });
btnBorrar.addEventListener('click', () =>{
    
    if(objetos.length !=0){
    console.log(objetos);
    if(objetos[obj_util][0]!=undefined){
    let nom_A_eliminar =objetos[obj_util][0].getObjName();
    Swal.fire({
        title: "Esta seguro que deseas <b>Eliminar</b> todo el contenido de <b>"+ nom_A_eliminar + "</b>?",
        text: "No podrás revertir esto!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        cancelButtonText: "Cancelar",
        confirmButtonText: "Si, Eliminar!"
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "Eliminado!",
            text: "Todo el conenido de  "+nom_A_eliminar+" ha sido eliminado.",
            icon: "success"
          });
          objetos.splice(obj_util,1);
          VaciarTabla();
          cargarMenuBotones();
          obj_util = 0;
          cargarTablaCompleta(objetos[0]);
          
        }
      });} else{Swal.fire("Tabla vacia");}
    }
    else{Swal.fire("Tabla vacia");}
    
    

    
});
btnConsultar.addEventListener('click', () =>{
    Swal.fire({
        title: "<strong>Información general</strong>",
        icon: "info",
        html: `
          Para <b>más detalles</b>, ir a
          <a href="./ayuda.html">ayuda</a>,
          no dudes en consultar!!
        `,
        showCloseButton: true,
        focusConfirm: false,
        
        
      });
});


function cargarResumen(){
    main_footer_tbody.innerHTML="";
    cargarTotal();
    
}

function cargarTotal(){
    const filaCantTotal = document.createElement('tr');
if(objetos[obj_util].length!=[]&& objetos[obj_util]!=null && objetos[obj_util]!=undefined ){
    const celdaCantTotal = document.createElement('td');
    const celdaCantValorTotal= document.createElement('td');
    celdaCantValorTotal.textContent = (objetos[obj_util]).length.toString();
    celdaCantTotal.textContent = 'Total:';
    celdaCantValorTotal.className = 'p-2';
    filaCantTotal.appendChild(celdaCantTotal);
    filaCantTotal.appendChild(celdaCantValorTotal);
    main_footer_tbody.appendChild(filaCantTotal);
}}




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
    pillsTab.innerHTML = "";
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


function VaciarTabla(){
    main_footer_tbody.innerHTML ="";
    main_main_tbody.innerHTML = "";
    main_main_tr.innerHTML ="";
}

