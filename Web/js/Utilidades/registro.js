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
const btnRegistro = document.getElementById('btnRegistro');
const ddTipoUsuario = document.getElementById('ddTipoUsuario');
btnRegistro.addEventListener('click', (e) => {
    e.preventDefault();

   /*
    txtUsuario.value==""||validaUsuario(txtUsuario.value)||notificar("Usuario ya existente");
    txtClave.value==""||validarClave(txtClave.value)||notificar("Clave incorrecta");   
    txtEmail.value==""||validarEmail(txtEmail.value)||notificar("Email invalido");
    txtNombre.value==""||validarNombre(txtNombre.value)||notificar("Nombre invalido");
    dtpFechaNac.value==""||validarFecha(dtpFechaNac.value)|| notificar("Fecha de nacimiento incorrecta debe tener de 13 a 100 años");  
    */

  

 

    //usuarios.push(new Usuario(null, '1', null, null, null, null, null, null, null));
    

});


  const validaUsuario = nom_usu => !usuarios.find(x => x.Usuario === nom_usu);
  const validarClave = clave => clave.length == 8
  function validarEmail(email) { const regexEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/; return regexEmail.test(email); }
  function validarNombre(nom){const regexNom = /^(?!^\d+$)[a-zA-Z0-9_]{3,20}$/; return regexNom.test(nom);}
  
  function validarFecha(dtpFechaNac){ 
    let hoy = new Date();
    let fechaNac = new Date(dtpFechaNac);
    let diferenciaMS = hoy.getTime() - fechaNac.getTime();
    let edad = Math.trunc(diferenciaMS / (1000 * 60 * 60 * 24 *365.25));
    if(edad>=13 && edad<=100 ) {return true} else{ return false}
  }

  function validarTel(){}

  function validarCalle(){}
  function validarCalleNro(){}
  function validarTipoUsu(){}



  txtTel.addEventListener('input', (e)=>{
    e.preventDefault();

    const regexTel = /[^\d-]/g; 
    if (regexTel.test(txtTel.value)) {
    txtTel.value = txtTel.value.replace(regexTel, '');}


    if(txtTel.value.length==3||txtTel.value.length==7){
      txtTel.value = txtTel.value + "-";
    }
    if(txtTel.value.length>=12){
      txtTel.value  = txtTel.value.slice(0, 12);
    }

   
    

  });