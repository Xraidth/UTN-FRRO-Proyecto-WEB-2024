function notificar(txtNotif){
const div_custom_mensaje = document.createElement('div');
const txt_custom_mensaje = document.createElement('div');
div_custom_mensaje.className ='toast-custom-div';
txt_custom_mensaje.className ='toast-custom-txt';
txt_custom_mensaje.textContent =txtNotif;
div_custom_mensaje.appendChild(txt_custom_mensaje);
Toastify({
    node: div_custom_mensaje,
    duration: 3000,
    gravity: "bottom",
    position: "center",
    style: {
        background: "linear-gradient(to top, #FE0300, #FE0221)"
        
    },
    className: 'toast-custom-ntf',
    stopOnFocus: false
}).showToast();
}