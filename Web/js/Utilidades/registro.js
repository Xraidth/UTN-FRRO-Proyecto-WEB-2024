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

    

    if(validarRegistro()){
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
      ));
      //Tirar un POST de usuario ACA
      usuarioActual() ? window.location.href = './main.html' : window.location.href = './index.html';
    }
    else{}
    
    
});


  function validarRegistro()
  {
   
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



  txtTel.addEventListener('input', (e)=>{
    e.preventDefault();

    const regexTel = /[^\d-]/g; 
    if (regexTel.test(txtTel.value)) {
    txtTel.value = txtTel.value.replace(regexTel, '');}


    if(txtTel.value.length==3||txtTel.value.length==7){
      txtTel.value = txtTel.value + "-";
    }

    if(txtTel.value.length==12){
      txtTel.value = txtTel.value.slice(0, 3)+"-"+ txtTel.value.slice(4,7)+"-"+ txtTel.value.slice(8, 13)
    }
    

    if(txtTel.value.length>=12){
      txtTel.value  = txtTel.value.slice(0, 12);
    }
  });


  txtDni.addEventListener('input', (e)=>{
    e.preventDefault();
    const regexDni = /[^\d]/g; 
    if (regexDni.test(txtDni.value)) {
      txtDni.value = txtDni.value.replace(regexDni, '');}
    if(txtDni.value.length>=8){txtDni.value  = txtDni.value.slice(0, 8);}
  });

  
  txtNro.addEventListener('input', (e)=>{
    e.preventDefault();
    const regexCalleNro = /[^\d]/g; 
    if (regexCalleNro.test(txtNro.value)) {
      txtNro.value = txtNro.value.replace(regexCalleNro, '');}
    if(txtNro.value.length>=4){txtNro.value  = txtNro.value.slice(0, 4);}
  });