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

const apiUrlUsuario = '/Usuarios.json';

function altaUsuario(usu){
    fetch(apiUrlUsuario,{
    method:'POST',
    headers:{
        'Content-Type':'application/json',
    },
    body:JSON.stringify(usu)
    })
    .then(response => {response.json();})
    .then(data => {console.log('Respuesta POST:', data);})
    .catch(error => console.error('Error en POST:', error));
    
}



async function getAllUsuarios(){
    
    const json = await fetch(apiUrlUsuario).then(response => response.json())
     
     
     let aux = json.map(
                 x => new Usuario(
                 x.Usuario, 
                 x.Clave,
                 x.Email,
                 x.Nombre,
                 x.Apellido,
                 x.FechaNac,
                 x.Telefono,
                 x.Dni,
                 x.TipoUsuario));
    return aux;
      
    
     
     
 }


function getOneUsuario (nom_usu){
    const dir = apiUrlUsuario + new URLSearchParams({Usuario:nom_usu})
    fetch(dir)
    .then(response => response.json())
    .then(data => console.log('Respuesta GET (one):', data))
    .catch(error => console.error('Error en GET(one):', error));
}

function updateUsuario(usu, id){
fetch(apiUrlUsuario+'?Usuario='+ id, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(usu),
  })
    .then(response => response.json())
    .then(data => console.log('Respuesta PUT:', data))
    .catch(error => console.error('Error en PUT:', error));
}
function deleteUsuario(id){
    
    fetch(apiUrlUsuario +'?Usuario='+ id,{
        method:'DELETE',
        headers:{
            'Content-Type':'application/json'
        },
    })
    .then(response => response.json())
    .then(data => console.log('Respuesta DELETE:', data))
    .catch(error => console.error('Error en DELETE:', error));
    
}