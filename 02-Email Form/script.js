document.addEventListener('DOMContentLoaded', () =>{
    

    const email = document.querySelector('#email')
    const subject = document.querySelector('#subject')
    const message = document.querySelector('#message')

    const btnSend = document.querySelector('#btnSend');

    const form = document.querySelector('#form')
    const btnAnim = document.querySelector('#btnAnim');
    const msgEnv = document.querySelector('#mensajeEnviado');
    
    const mail = {
        email: '',
        subject: '',
        message: '',
    }

    validarBtnSend();


    //Validar campo email

    email.addEventListener('blur', (e) => {

        const regex =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
        resultado = regex.test(e.target.value);
        console.log(resultado);

        if (resultado == false) {
            email.nextElementSibling.textContent = 'Por favor, ingresá un email valido'
        }else{
            email.nextElementSibling.textContent = ''
        }
    })

    email.addEventListener('input', (e) =>{
        email.nextElementSibling.textContent = '';
        mail.email = e.target.value;
        validarBtnSend();
    })

    

    //Validar campo Subject

    subject.addEventListener('blur', (e) => {
        
        if (e.srcElement.value == '') {
            subject.nextElementSibling.textContent = 'Este campo no puede estar vacio, por favor completalo'
        }else{
            subject.nextElementSibling.textContent = ''
        }
       
    })

    subject.addEventListener('input', (e) =>{
        subject.nextElementSibling.textContent = '';
        mail.subject = e.target.value
        validarBtnSend();
    })


    //Validar campo Message

    message.addEventListener('blur', (e) => {
        
        if (e.srcElement.value == '') {
            message.nextElementSibling.textContent = 'Este campo no puede estar vacio, por favor completalo'
        }else{
            message.nextElementSibling.textContent = ''
        }
       
    })

    message.addEventListener('input', (e) =>{
        message.nextElementSibling.textContent = '';
        mail.message = e.target.value
        validarBtnSend();
    })

    //Desactivar y habilitar boton Send

    function validarBtnSend() {

        let msg = {
            email: mail.email,
            subject: mail.subject,
            message: mail.message
        };

        if (msg.email != '' && msg.subject != '' && msg.message != '') {
            btnSend.disabled = false;
            btnSend.classList.remove('bg-opacity-20')
            btnSend.classList.add('hover:bg-primary/90')
        }else{
            btnSend.disabled = true;
            btnSend.classList.add('bg-opacity-20')
            btnSend.classList.remove('hover:bg-primary/90')
        }

        

        
    }

    //Click al boton de envio

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        btnAnim.classList.remove('hidden');

        setInterval(() => {
            btnAnim.classList.add('hidden');
            msgEnv.textContent = 'Mensaje enviado con exito';
            msgEnv.classList.add('bg-green-500', 'text-white', 'text-center', 'block')
            mensajeEnviado();
            form.reset();
            mail.email = '';
            mail.subject = '';
            mail.message = '';
        }, 3000);
    })

    function mensajeEnviado() {
        setTimeout(() => {
            msgEnv.textContent = '';
        }, 3000);
    }



})