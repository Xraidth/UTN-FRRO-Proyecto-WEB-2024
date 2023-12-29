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

    
    txtUsuario.value==""||validaUsuario(txtUsuario.value)||notificar("Usuario ya existente");
    txtClave.value==""||validarClave(txtClave.value)||notificar("Clave incorrecta");
    
    //usuarios.push(new Usuario(null, '1', null, null, null, null, null, null, null));
    

});


  const validaUsuario = nom_usu => !usuarios.find(x => x.Usuario === nom_usu);
  const validarClave = clave => clave.length == 3
  function validarEmail(email) {const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
   return regexEmail.test(email); }
  function validarNombre(){}
  function validarFecha(){}
  function validarTel(){}
  function validarCalle(){}
  function validarCalleNro(){}
  function validarTipoUsu(){}
