let btnSubmit1 = document.getElementById("btnValidar");

btnSubmit1.addEventListener("click", function(e){ 
    e.preventDefault();
    let nombre = document.getElementById("Nombre");
    let correoe = document.getElementById("correo");
    let valorcorreo = document.getElementById("correo").value;
    let campoMensaje = document.getElementById("campoMensaje");
    let formulario = document.getElementById("formulario");    

    //VALIDACIONES DE FORMULARIO
    const flag = {
        nombre: false,
        correoe: false,
        campoMensaje: false
    }

    //validación de nombre
    nombre.classList.remove("is-invalid");
    nombre.classList.add("is-valid");
    if ((nombre.value.length >= 3) && (nombre.value.length < 20) && !(nombre.value.trim() == "") && (nombre.value[0] != " ")) {
        nombre.classList.add("is-valid"); 
        flag.nombre = true
    }
    else{  
        nombre.classList.add("is-invalid");
        flag.nombre = false
    }

    for (let i = 0; i < nombre.value.length; i++) {
        console.log(nombre.value.charAt(i));
    
                console.log(nombre.value.charAt(i));
                console.log(nombre.value.charCodeAt(i));
                if((
                
                    (nombre.value.toUpperCase().charCodeAt(i)<65)
                    || //condición or
                    (nombre.value.toUpperCase().charCodeAt(i)>90)
                ) && ((nombre.value.toUpperCase().charCodeAt(i)!=32)) //espacio
                &&((nombre.value.toUpperCase().charCodeAt(i)!=193)) //Á el to uper fue para comparar tambien con las mayuculas
                &&((nombre.value.toUpperCase().charCodeAt(i)!=201)) //É
                &&((nombre.value.toUpperCase().charCodeAt(i)!=205)) //Í
                &&((nombre.value.toUpperCase().charCodeAt(i)!=211)) //Ó
                &&((nombre.value.toUpperCase().charCodeAt(i)!=218)) //Ú
                &&((nombre.value.toUpperCase().charCodeAt(i)!=209)) //Ñ

                ) {
                        nombre.classList.remove("is-valid");
                        nombre.classList.add("is-invalid");
                        flag.nombre = false
                        break;
                } //if
            }//for


    // Validación Mensaje
    if ((campoMensaje.value.length >= 3) && (campoMensaje.value.length <120) && !(campoMensaje.value.trim() == "") && (campoMensaje.value[0] != " ")) {
        campoMensaje.classList.remove("is-invalid");
        campoMensaje.classList.add("is-valid");
        flag.campoMensaje = true
    } else {
        campoMensaje.classList.remove("is-valid");
        campoMensaje.classList.add("is-invalid");
        flag.campoMensaje = false
    }

    //validación correo
    function validarCorreo (correo) {
        let expReg = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
        let verificar = expReg.test(correo);
        console.log(verificar)
        if(verificar){
            correoe.classList.remove("is-invalid");
            correoe.classList.add("is-valid");
            flag.correoe = true
        } else {
            correoe.classList.remove("is-valid");
            correoe.classList.add("is-invalid");
            flag.correoe = false
        }
    }
    validarCorreo(valorcorreo);

    //ALERTA GENERAL
    if (flag.nombre && flag.campoMensaje && flag.correoe){
         //---------------------CORREO------------------------------------------
    function sendEmail(){
    let Body = 
    '¡Hola! '+nombre.value+' esta interesado en contactarte.<br><br>'+
    'Nombre: '+nombre.value+'<br>Correo electrónico: '+correoe.value+'<br>Mensaje: '+campoMensaje.value;
          Email.send({
              Host : "smtp.elasticemail.com",
              Username : "bgspacompany@gmail.com",
              Password : "DD76DC61EDD1EC165A9B8D27BE92A40E263A",
              To : 'ing.barajas.perez@gmail.com', 
              From : 'bgspacompany@gmail.com',  
              Subject : "ALGUIÉN REVISÓ TU PORTAFOLIO",
              Body : Body
          }).then(
            message => {
              if(message=='OK'){
                AlertDistribuidorS();
              }else{
                console.error(message);
                AlertDistribuidorE();
              }
            }
            
          );
      }//function
      console.log(sendEmail());
///--------------------------------------------------------------------
        formulario.reset();
        nombre.classList.remove("is-valid")
        correoe.classList.remove("is-valid")
        campoMensaje.classList.remove("is-valid")
    } else {
        AlertDistribuidorW(); 
    }//else

});//btnsubmit

//--------ALERTAS DISTRIBUIDOR, EN FUNCION CORREO------------
const AlertDistribuidorS = () => {
    Swal.fire({
        position: 'center',
        color: '#0D0D0D',
        background: '#D9D9D9',
        icon: 'success',
        title: 'Thank you!',
        text: 'Your message has been sent successfully.',
        confirmButtonText: 'Ok',
        confirmButtonColor: '#73221A',
        showConfirmButton: true,
        showCloseButton: true,
        //toast: true
      }) 
  };

  const AlertDistribuidorW = () => {
    Swal.fire({
        position: 'center',
        color: '#0D0D0D',
        background: '#D9D9D9',
        icon: 'warning',
        title: 'Warning!',
        text: 'Check that all fields are have filled out correctly.',
        confirmButtonText: 'Ok',
        confirmButtonColor: '#73221A',
        showConfirmButton: true,
        showCloseButton: true,
        //toast: true
      }) 
        
  };

  const AlertDistribuidorE = () => {
    Swal.fire({
        position: 'center',
        color: '#0D0D0D',
        background: '#D9D9D9',
        icon: 'error',
        title: 'Sorry, there was an error sending the message.',
        text: 'Try again.',
        confirmButtonText: 'Ok',
        confirmButtonColor: '#73221A',
        showConfirmButton: true,
        showCloseButton: true,
        //toast: true
      }) 
        
  };