

    const btnIngreso = document.getElementById('btnIngreso');
    const txtUsuario = document.getElementById('txtUsuario');
    const txtClave = document.getElementById('txtClave');
    const loginForm =  document.getElementById('loginForm');

    const div2_s2_grid = document.getElementById('div2_s2_grid');
    const dir_imagenes = [
        "Imagenes/students1.jpg",
        "Imagenes/students2.jpg",
        "Imagenes/students3.jpg",
        "Imagenes/students4.jpg"
      ];
    
    
    document.addEventListener('DOMContentLoaded', function() {
        
        cargarImagenes();
        checkLocal()||checkSesion() ? window.location.href = './main.html': txtUsuario.focus(); 
        
    });

   

  
    
    
    function cargarImagenes(){
        
        
        for (let index = 0; index < 4; index++) {
            const img_log = document.createElement('img'); 
            img_log.classList.add('img__div');
            img_log.src = dir_imagenes[index]
            div2_s2_grid.appendChild(img_log)
        }
    }
    const intervalID = setInterval(myCallback,20000);
    let i_mov = 0;

    function myCallback() {
        const img_dom = div2_s2_grid.querySelectorAll('img');
        const totalImages = 4;


        setTimeout(() => {
            for (let i = 0; i < totalImages; i++) {
                img_dom[i].classList.add('image-transition');
                img_dom[i].style.opacity = 0;
            }
        }, 800);

        setTimeout(() => {
            for (let i = 0; i < totalImages; i++) {
                const index = (i_mov + i) % totalImages;
                
                img_dom[i].src = dir_imagenes[index];
            }
            }, 1800);

        setTimeout(() => {
            for (let i = 0; i < totalImages; i++) {
                img_dom[i].style.opacity = 1; 
            }
        }, 1900);

        i_mov = (i_mov + 1) % totalImages;
    }
    



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

    btnIngreso.addEventListener('click', async (e) => {
        e.preventDefault();
        const usu = await buscaUsuario(txtUsuario.value, txtClave.value);
        
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
        
    }
    );

   async function buscaUsuario(usu, clave)
    {
        const usuarios = await getAllUsuarios();
        return usuarios.find(x=>x.Usuario === usu && x.Clave === clave);
        
   }

  

    
const nextButton = document.getElementById('nextButton');

function clickNextButton() {
        nextButton.click();
}
const btn_next_interval = setInterval(clickNextButton, 8000);
    
  