class Usuario {
    constructor(usu, clave){
        this.usuario = usu;
        this.clave =clave;
    }
}

const usuarios = [];
usuarios.push(
new Usuario('1', '1'), 
new Usuario('2', '2'), 
new Usuario('3', '3'),  
new Usuario('admin', 'admin'), 
new Usuario('alumno', 'alumno'), 
new Usuario('profesor', 'profesor')
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