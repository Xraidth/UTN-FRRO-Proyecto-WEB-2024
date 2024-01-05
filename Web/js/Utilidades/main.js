const main_main_tbody = document.getElementById('main_main_tbody');
const main_footer_tbody = document.getElementById('main_footer_tbody');
const btnAgregar = document.getElementById('btnAgregar');
const btnModificar = document.getElementById('btnModificar');
const btnBorrar = document.getElementById('btnBorrar');
const btnConsultar = document.getElementById('btnConsultar');
const main_main_tr = document.getElementById('main_main_tr');
const pillsTab = document.getElementById('pills-tab');

const txtUsuario = document.getElementById('txtUsuario');
const txtClave= document.getElementById('txtClave');
const txtEmail= document.getElementById('txtEmail');
const txtNombre= document.getElementById('txtNombre');
const txtApellido= document.getElementById('txtApellido');
const dtpFechaNac= document.getElementById('dtpFechaNac');
const txtTel= document.getElementById('txtTel');
const txtDni= document.getElementById('txtDni');
const txtCalle= document.getElementById('txtCalle');
const txtNro= document.getElementById('txtNro');
const ddTipoUsuario = document.getElementById('ddTipoUsuario');



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
        btnBorrado.addEventListener('click', (e) => {editarFila(obj,objetos[obj_util])});
        imgbtn.className = 'imgbtn';
        }
    if(index ==0){
            btnBorrado.className = 'btn btn-success btnBorrado';
            btnBorrado.addEventListener('click', (e) => {consultarFila(obj)});
            imgbtn.className = 'imgbtn';
            }
    btnBorrado.appendChild(imgbtn);
    btnFila.appendChild(btnBorrado);
    fila.appendChild(btnFila);
    });
   


    return fila;
}



function editarFila(obj, objetos) {
  const mainTxtHtmlAdd = [
    '<input type="txt" class="swal2-input" placeholder="Usuario" id="txtUsuario">' +
    '<input type="password" class="swal2-input" placeholder="Contraseña" id="txtClave">' +
    '<input type="email" class="swal2-input" placeholder="Email" id="txtEmail">' +
    '<input type="txt" class="swal2-input" placeholder="Nombre" id="txtNombre">' +
    '<input type="txt" class="swal2-input" placeholder="Apellido" id="txtApellido">' +
    '<div class="d-flex flex-column align-items-center mt-4">' +
    '<label class="font-weight-bold text-dark">Fecha de Nacimiento:</label>' +
    '<input type="date" class="swal2-input" id="dtpFechaNac"></div>' +
    '<input type="txt" class="swal2-input" placeholder="Teléfono" id="txtTel">' +
    '<input type="txt" class="swal2-input" placeholder="DNI" id="txtDni">' +
    '<input type="txt" class="swal2-input" placeholder="Calle" id="txtCalle">' +
    '<input type="txt" class="swal2-input" placeholder="Nro" id="txtNro">' +
    '<div class="d-flex flex-column align-items-center mt-4">' +
    '<label for="ddTipoUsuario" class="font-weight-bold text-dark">Seleccione un Tipo de usuario:</label>' +
    '<select class="form-control w-50 mt-4" id="ddTipoUsuario">' +
    '<option>Administrador</option>' +
    '<option>Profesor</option>' +
    '<option>Alumno</option>' +
    '</select></div>',
    '<input type="txt" class="swal2-input" placeholder="Nombre" id="txtNomMat">' +
    '<input type="txt" class="swal2-input" placeholder="Descripción" id="txtDescMat">'
  ];

  Swal.fire({
    title: 'Formulario',
    html: mainTxtHtmlAdd[obj_util],
    confirmButtonText: 'Agregar',
    showCancelButton: true,
    cancelButtonText: 'Cancelar',
    allowOutsideClick: true,
    didOpen: () => {
      if (obj_util == 0) {
        const txtUsuario = document.getElementById('txtUsuario');
        const txtClave= document.getElementById('txtClave');
        const txtEmail= document.getElementById('txtEmail');
        const txtNombre= document.getElementById('txtNombre');
        const txtApellido= document.getElementById('txtApellido');
        const dtpFechaNac= document.getElementById('dtpFechaNac');
        const txtTel= document.getElementById('txtTel');
        const txtDni= document.getElementById('txtDni');
        const txtCalle= document.getElementById('txtCalle');
        const txtNro= document.getElementById('txtNro');
        const ddTipoUsuario = document.getElementById('ddTipoUsuario');
        
        txtUsuario.value = obj['Usuario'];
        txtClave.value = obj['Clave'];
        txtEmail.value = obj['Email'];
        txtNombre.value = obj['Nombre'];
        txtApellido.value = obj['Apellido'];
        
        txtTel.value = obj['Telefono'];
        txtDni.value = obj['Dni'];
        if(obj['Direccion']){
        partes= obj['Direccion'].split(" ");	
        
        txtCalle.value = partes[0];
        txtNro.value = partes[1];
      }
    }
      if(obj_util==1){
        
        const txtNomMat = document.getElementById('txtNomMat');
        const txtDescMat= document.getElementById('txtDescMat');
        
        
        txtNomMat.value = obj['nombre'];
        txtDescMat.value = obj['descripcion'];
       
      }
       

      
    },
    preConfirm: () => {

      switch (obj_util) {
        case 0:
          return validar_el_Usuario(1, obj, objetos);
        case 1:
          return validar_la_materia(1, obj, objetos);
        default:
          notificar("Error, póngase en contacto con un administrador");
          
      }
      
    }
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: "Modificado!",
        text: "Todo listo",
        icon: "success"
      });

      
        
    }

  
  });
}

function modificarFila(obj, obj_mod, objetos){
 
  const index = objetos.findIndex(item => item === obj);
  if(index!=null || index!=undefined){
  objetos[index] = obj_mod;
  
  }
  cargarTabla(objetos);     
}



function eliminarFila(obj, objetos){
    if(obj!=null && objetos.length!=0){
    const nroObj = objetos.indexOf(obj);
    objetos.splice(nroObj, 1);
    cargarTabla(objetos);        
}
}
function consultarFila(obj){
  if (obj){
    const obj_div_txt = document.createElement('div');
    obj_div_txt.classList.add('d-flex','flex-column','align-items-center', 'overflow-y-auto', 'justify-content-between');
    
    for (const o in obj) {
      const obj_div_txt_rw = document.createElement('div');
      obj_div_txt_rw.classList.add('d-flex','flex-row', 'align-content-start');
      
      const obj_lbl_txt_nom = document.createElement('div');
      obj_lbl_txt_nom.textContent = o+":";
      obj_lbl_txt_nom.classList.add('text-end', 'text-dark',"m-3");

      const obj_lbl_txt_val = document.createElement('b');
      obj_lbl_txt_val.classList.add('text-dark','m-3'); 
      if(obj[o])
      obj_lbl_txt_val.textContent = obj[o];
      else {
        obj_lbl_txt_val.textContent = "No asignado";}

      
      obj_div_txt_rw.appendChild(obj_lbl_txt_nom);
      obj_div_txt_rw.appendChild(obj_lbl_txt_val);  
      obj_div_txt.appendChild(obj_div_txt_rw);
      }

    Swal.fire({
      title: 'Informacion',
      html: obj_div_txt,
      confirmButtonText: 'Ok',
      allowOutsideClick: true,
    });

}
}


btnAgregar.addEventListener('click', () =>{  
   
    const main_select_html_add = 
    '<div class="d-flex flex-column align-items-center">'+
    '<label class="text-dark" for="mainAddSelect">Agregar:</label>'+
    '<select class="form-control w-50 mt-4" id="mainAddSelect" name="mainAddSelect">'+
    '<option value="0">Usuario</option>'+
    '<option value="1">Materia</option>'+
    '</select>'+
    '</div>';
    


    const main_txt_html_add = 
        [(' <input type="txt" class="swal2-input" placeholder="Usuario" id="txtUsuario">' +
          '<input  type="password" class="swal2-input" placeholder="Constraseña" id="txtClave">'+
          ' <input type="email" class="swal2-input" placeholder="Email" id="txtEmail">' +
          '<input  type="txt" class="swal2-input" placeholder="Nombre" id="txtNombre">'+
          ' <input type="txt" class="swal2-input" placeholder="Apellido" id="txtApellido">' +
          '<div class="d-flex flex-column align-items-center mt-4">'+
          '<lavel class="font-weight-bold text-dark">Fecha de Nacimiento:</lavel>'+
          '<input  type="date" class="swal2-input" id="dtpFechaNac" ></div>'+
          ' <input type="txt" class="swal2-input" placeholder="Telefono" id="txtTel">' +
          '<input  type="txt" class="swal2-input" placeholder="Dni" id="txtDni">'+
          '<input  type="txt" class="swal2-input" placeholder="Calle" id="txtCalle">'+
          '<input  type="txt" class="swal2-input" placeholder="Nro" id="txtNro">'+
          '<div class="d-flex flex-column align-items-center mt-4">'+
          '<label for="ddTipoUsuario" class="font-weight-bold text-dark">Seleccione un Tipo de usuario:</label>'+
          '<select class="form-control w-50 mt-4" id="ddTipoUsuario">'+
          '<option>Administrador</option>'+
          '<option>Profesor</option>'+
          '<option>Alumno</option>'+
          '</select></div>'
          
          ),
          (' <input type="txt" class="swal2-input" placeholder="Nombre" id="txtNomMat">' +
          '<input  type="txt" class="swal2-input" placeholder="Descripción" id="txtDescMat">')]
          

    Swal.fire({
        title: 'Formulario',
        html: main_select_html_add + main_txt_html_add[obj_util],
        confirmButtonText: 'Agregar',
        showCancelButton: true,
        cancelButtonText: 'Cancelar',
        allowOutsideClick: true,
        didOpen: () => {
          const mainAddSelect = document.getElementById('mainAddSelect');
          mainAddSelect.value = obj_util;
          
          mainAddSelect.addEventListener("change", (event) => {
            obj_util = mainAddSelect.value;
            console.log(obj_util + "   "+ mainAddSelect.value)
            cargarMenuBotones();
            cargarTablaCompleta(objetos[obj_util]);
            Swal.close();
            btnAgregar.click();
          });
          
            
        },
        preConfirm: () => {

          

            switch(obj_util) {
              case 0:
                return validar_el_Usuario(0, null, objetos[obj_util]);
              case 1:
                return validar_la_materia(0, null, objetos[obj_util]);
              default:
                
                notificar("Error pongase en contacto con un administrador");
            }
          }
        
        }).then((e)=>{
            
        if(e.isConfirmed){
                    Swal.fire({
                        title: "Agregado!",
                        text: "Todo listo",
                        icon: "success"
                        });
                    
                    }                      
        });
            
            
        
        });
 
function validar_la_materia(i,obj, objetos){
    const txtNomMat = document.getElementById('txtNomMat');
   const txtDescMat = document.getElementById('txtDescMat');
   if(i==0){
   materias.push(new Materia(txtNomMat.value, txtDescMat.value));
    }
    if(i==1){
      
    modificarFila(obj, new Materia(txtNomMat.value, txtDescMat.value), objetos);
    }
   cargarTablaCompleta(objetos);
   return true;
}

function validar_el_Usuario(i,obj, objetos)
{
    const txtUsuario = document.getElementById('txtUsuario');
    const txtClave= document.getElementById('txtClave');
    const txtEmail= document.getElementById('txtEmail');
    const txtNombre= document.getElementById('txtNombre');
    const txtApellido= document.getElementById('txtApellido');
    const dtpFechaNac= document.getElementById('dtpFechaNac');
    const txtTel= document.getElementById('txtTel');
    const txtDni= document.getElementById('txtDni');
    const txtCalle= document.getElementById('txtCalle');
    const txtNro= document.getElementById('txtNro');
    const ddTipoUsuario = document.getElementById('ddTipoUsuario');

    if(validarRegistro()){
      if(i==0){
    usuarios.push(new Usuario(
        txtUsuario.value, 
        txtClave.value, 
        txtEmail.value, 
        txtNombre.value, 
        txtApellido.value, 
        dtpFechaNac.value.toString(),
        txtTel.value,
        txtDni.value,
        txtCalle.value+" "+txtNro.value,
        ddTipoUsuario.value.toString()
        ));}
      if(i==1){
      modificarFila(obj, new Usuario(txtUsuario.value, txtClave.value, txtEmail.value, txtNombre.value, txtApellido.value, dtpFechaNac.value.toString(),txtTel.value, txtDni.value, txtCalle.value+" "+txtNro.value, ddTipoUsuario.value.toString()), objetos);
      }
      cargarTablaCompleta(objetos);
        return true;
}
else{return false;}
}

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






function validarRegistro()
{
const txtUsuario = document.getElementById('txtUsuario');
const txtClave= document.getElementById('txtClave');
const txtEmail= document.getElementById('txtEmail');
const txtNombre= document.getElementById('txtNombre');
const txtApellido= document.getElementById('txtApellido');
const dtpFechaNac= document.getElementById('dtpFechaNac');
const txtTel= document.getElementById('txtTel');
const txtDni= document.getElementById('txtDni');
const txtCalle= document.getElementById('txtCalle');
const txtNro= document.getElementById('txtNro');
const ddTipoUsuario = document.getElementById('ddTipoUsuario');
 
  if(
    txtUsuario.value==""||
  txtClave.value==""||
  txtEmail.value==""||
  txtNombre.value==""||
  dtpFechaNac.value==""||
  txtTel.value==""||
  txtCalle.value==""||
  txtDni.value==""||
  txtNro.value==""||
  ddTipoUsuario.value=="")
  {notificar("Debe completar todos los campos")}
    else{
  txtUsuario.value==""||validaUsuario(txtUsuario.value)||notificar("Usuario ya existente");
  txtClave.value==""||validarClave(txtClave.value)||notificar("Clave incorrecta");   
  txtEmail.value==""||validarEmail(txtEmail.value)||notificar("Email invalido");
  txtNombre.value==""||validarNombre(txtNombre.value)||notificar("Nombre invalido");
  dtpFechaNac.value==""||validarFecha(dtpFechaNac.value)|| notificar("Fecha de nacimiento incorrecta debe tener de 13 a 100 años");  
  txtTel.value==""||validarTel(txtTel.value)||notificar("Telefono invalido");
  txtCalle.value==""||validarCalle(txtCalle.value)||notificar("Calle invalida");
  txtDni.value==""||validarDni(txtDni.value)||notificar("DNI invalido");
  txtNro.value==""||validarCalleNro(txtNro.value)||notificar("Nro de calle invalido");
  ddTipoUsuario.value==""||validarTipoUsu(ddTipoUsuario.value)|| notificar("Ingrese un tipo de usuario valido");

  if(
    validaUsuario(txtUsuario.value)&&
    validarClave(txtClave.value)&&
    validarEmail(txtEmail.value)&&
    validarNombre(txtNombre.value)&&
    validarFecha(dtpFechaNac.value)&&
    validarTel(txtTel.value)&&
    validarCalle(txtCalle.value)&&
    validarDni(txtDni.value)&&
    validarCalleNro(txtNro.value)&&
    validarTipoUsu(ddTipoUsuario.value)
  ){
    return true;
  }    
  else{
    return false;
  }
  }
 
}


const validaUsuario = nom_usu => !usuarios.find(x => x.Usuario === nom_usu);
const validarClave = clave => clave.length < 8
function validarEmail(email) { const regexEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/; return regexEmail.test(email); }
function validarNombre(nom){ const regexNom = /^(?!^\d+$)[a-zA-Z0-9_]{3,20}$/; return regexNom.test(nom);}

function validarFecha(dtpFechaNac){ 
  let hoy = new Date();
  let fechaNac = new Date(dtpFechaNac);
  let diferenciaMS = hoy.getTime() - fechaNac.getTime();
  let edad = Math.trunc(diferenciaMS / (1000 * 60 * 60 * 24 *365.25));
  if(edad>=13 && edad<=100 ) {return true} else{ return false}
}

function validarTel(tel){ const regexTel = /^\d{3}-\d{3}-\d{4}$/; return regexTel.test(tel);}
function validarDni(dni){ const regexDni = /^\d{8}$/; return regexDni.test(dni);}
function validarCalle(calle){return calle.length < 50}
function validarCalleNro(nro){const regexCalleNro = /^\d{4}$/; return regexCalleNro.test(nro);}
function validarTipoUsu(tu){ return tu == "Administrador"||tu == "Alumno"||tu == "Profesor"}

