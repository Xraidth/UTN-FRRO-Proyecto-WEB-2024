
    const btnIngreso = document.getElementById('btnIngreso');
    const txtUsuario = document.getElementById('txtUsuario');
    const txtClave = document.getElementById('txtClave');
    const loginForm =  document.getElementById('loginForm');

    
    
    
    



    window.addEventListener('load', function() {  
        txtUsuario.focus();
      });

    loginForm.addEventListener('keydown', (e)=>{

        if(e.key=='Enter'){
            e.preventDefault();
            btnIngreso.click();
        }
    });

    txtClave.addEventListener('keydown', (e)=>{

        if(e.key=='Tab'){
            e.preventDefault();
            btnIngreso.focus();
        }
    });

    btnIngreso.addEventListener('click', (e) => {
        e.preventDefault();
        const usu = buscaUsuario(txtUsuario.value, txtClave.value);
        if (usu != undefined) {
            guardarSesion(usu);
            window.location.href = './main.html';
        }
        else{alert("Contraseña incorrecta!");}
    });

    function buscaUsuario(usu, clave)
    {
        return usuarios.find(x=>x.usuario === usu && x.clave === clave);

    }

    function guardarSesion(usu){
        sessionStorage.setItem('usuario', JSON.stringify(usu));
    }

    
