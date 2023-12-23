
    const btnIngreso = document.getElementById('btnIngreso');
    const txtUsuario = document.getElementById('txtUsuario');
    const txtClave = document.getElementById('txtClave');
    const loginForm =  document.getElementById('loginForm');

    const usuarios = [];

    usuarios.push(new Usuario('1', '1'), new Usuario('2', '2'), new Usuario('3', '3'), new Usuario('admin', 'admin'), new Usuario('alumno', 'alumno'), new Usuario('profesor', 'profesor'));
    
    
    



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

        if (buscaUsuario(txtUsuario.value, txtClave.value)!= undefined) {
            window.location.href = './main.html';
        }
        else{alert("Contraseña incorrecta!");}
    });

    function buscaUsuario(usu, clave)
    {
        return usuarios.find(x=>x.usuario === usu && x.clave === clave);

    }


    
