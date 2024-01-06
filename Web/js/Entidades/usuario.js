const cbxSesion = document.getElementById('cbxSesion');

class Usuario {
    constructor(usu, clave, mail, nom, ape, fechaNac, tel, dni,dir, tpusu){
        this.Usuario = usu;
        this.Clave =clave;
        this.Email =mail;
        this.Nombre = nom;
        this.Apellido= ape;
        this.FechaNac = fechaNac;
        this.Telefono= tel;
        this.Dni = dni;
        this.Direccion =dir;
        this.TipoUsuario = tpusu;
    }
    getObjName(){
        return "Usuarios";
    }
    static getName(){
        return "Usuarios";
    }
}


  

const usuarios = [];
usuarios.push(
new Usuario('1', '1', null, null, null, null, null, null, null, null), 
new Usuario('2', '2', null, null, null, null, null, null, null, null), 
new Usuario('3', '3', null, null, null, null, null, null, null, null),  
new Usuario('admin', 'admin', null, null, null, null, null, null, null, null), 
new Usuario('alumno', 'alumno', null, null, null, null, null, null, null, null), 
new Usuario('profesor', 'profesor', null, null, null, null, null, null, null, null)
);

function usuarioActual(){
    return JSON.parse(sessionStorage.getItem('usuario'));
}

function cargarUsuario(){
    const lblUsuario = document.getElementById('nav_nombre_usuario');
    const usu = JSON.parse(sessionStorage.getItem('usuario'));
    lblUsuario.textContent = usu['Usuario'];
    }

function cerrarSesion(){
    if(JSON.parse(sessionStorage.getItem('usuario'))){sessionStorage.removeItem("usuario")};
    if(JSON.parse(localStorage.getItem('usuario'))){localStorage.removeItem("usuario");}
}

function guardarSesion(usu) {
    if (cbxSesion.checked) {
        
        localStorage.setItem('usuario', JSON.stringify(usu));
    } 
        
        sessionStorage.setItem('usuario', JSON.stringify(usu));
    
}


function checkLocal(){

    
    const usu = JSON.parse(localStorage.getItem('usuario'));
    
    
    if(usu){

        sessionStorage.setItem('usuario', JSON.stringify(usu));
        

        return true;
    }
    
    else{ return false;}
}

function checkSesion(){
    const usu = JSON.parse(sessionStorage.getItem('usuario'));
    if(usu){
        return true;
    }
    else{return false}
    
}

