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
    lblUsuario.textContent = usu['usuario'];
    }

function cerrarSesion(){
    sessionStorage.removeItem("usuario");

}