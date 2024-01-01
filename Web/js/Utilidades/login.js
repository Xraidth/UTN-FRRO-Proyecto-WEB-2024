    

    const btnIngreso = document.getElementById('btnIngreso');
    const txtUsuario = document.getElementById('txtUsuario');
    const txtClave = document.getElementById('txtClave');
    const loginForm =  document.getElementById('loginForm');


    
    
    document.addEventListener('DOMContentLoaded', function() {
        checkLocal()||checkSesion() ? window.location.href = './main.html': txtUsuario.focus();
        
        
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
        
        if (usu != undefined && usu!=null) {
            guardarSesion(usu);
            window.location.href = './main.html';
        }
        else{
            let txtNotif;
            if(txtUsuario.value=="" && txtClave.value=="")
            {
                
                txtNotif = "Debe completar ambos campos para continuar"
            }
            else{
                txtNotif = "Usuario o contraseña incorrectos!"
            }

                
            notificar(txtNotif);
                
        }
    });

    function buscaUsuario(usu, clave)
    {
        
        return usuarios.find(x=>x.Usuario === usu && x.Clave === clave);

    }

   

    

    
  