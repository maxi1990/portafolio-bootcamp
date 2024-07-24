const formulario = document.querySelector('#formulario');
const btnEnviar = document.querySelector('#btnEnviar')
const btnCargando = document.querySelector('#btnCargando')
const toast = document.querySelector('.toast')


formulario.addEventListener('submit',(e)=>{
      
    e.preventDefault();


    const datos = new FormData(formulario);

    datos.get('emailCampo')
    datos.get('checkCampo')
    datos.get('nombreCampo')


    btnEnviar.classList.add('d-none')
    btnCargando.classList.remove('d-none')

    window.setTimeout(()=>{

        btnEnviar.classList.remove('d-none');
        btnCargando.classList.add('d-none')

        const eventoToast = new bootstrap.Toast(toast)
        eventoToast.show()

    },3000)

    formulario.reset();

})