document.addEventListener('DOMContentLoaded', function () {

    const formulario = document.getElementById('formulario');
    const inputs = document.querySelectorAll('#formulario input'); /*Accedemos a todos los inputs dentro del formulario en un arreglo. */

    const expresiones = {
        usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
        nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
        password: /^.{4,12}$/, // 4 a 12 digitos.
        correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        telefono: /^\d{7,14}$/ // 7 a 14 numeros.
    } /*OBJETO QUE SE LLAMA "EXPPRESIONES" Y DENTRO TIENE VARIAS PROPIEDADES "usuario,nombre,password,etc" */

    const email = document.getElementById("inputEmail4");
    const password = document.getElementById("inputPassword4");
    const address = document.getElementById("inputAddress");
    const city = document.getElementById("inputCity");
    const postal = document.getElementById("inputZip");
    const form = document.getElementById('formulario');
    const parrafo = document.getElementById('warnings');
    /*EMAIL */
    const alertemail = document.getElementById('alertemail');
    const alertemail2 = document.getElementById('alertemail2');
    const alertemail3 = document.getElementById('alertemail3');

    /*PASSWORD ALERT */
    const alertpassword = document.getElementById('alertpassword');
    const alertpassword2 = document.getElementById('alertpassword2');
    const alertpassword3 = document.getElementById('alertpassword3');

    /*ADDRESS ALERT */
    const alertaddress = document.getElementById('alertaddress');
    const alertaddress2 = document.getElementById('alertaddress2');
    const alertaddress3 = document.getElementById('alertaddress3');

    /*CITY ALERT */
    const alertcity = document.getElementById('alertcity');
    const alertcity2 = document.getElementById('alertcity2');
    const alertcity3 = document.getElementById('alertcity3');

    /*POSTAL ALERT */
    const alertpostal = document.getElementById('alertpostal');
    const alertpostal2 = document.getElementById('alertpostal2');
    const alertpostal3 = document.getElementById('alertpostal3');
    const alert2 = document.getElementById('alert2');



    form.addEventListener("submit", e => {
        e.preventDefault()
        let expReg = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
        if (!expReg.test(email.value)) {
            alertemail.classList.remove('d-none');
            alertemail.innerText = '*El correo no cumple con expresiones regulares';
            console.log("hola correo")
        } else {
            console.log("ELSE CORREO")
            alertemail.classList.add('d-none');

        }
        if (email.value.length < 6) {
            /*Correo corto */
            alertemail2.classList.remove('d-none');
            alertemail2.innerText = '*El correo es menor a 6 caracteres';
        }else{
            alertemail2.classList.add('d-none');
        }
        if (email.value === '') {
            alertemail3.classList.remove('d-none');
            alertemail3.innerText = '*Campo Correo Vacío';
        }
        else {
            alertemail3.classList.add('d-none');
        }
        /*VALIDACION PASSWORD*/
        let expRegpass = /^.{4,12}$/;
        if (!expRegpass.test(password.value)) {
            alertpassword.classList.remove('d-none');
            alertpassword.innerText = '*La password no cumple con expresiones regulares';
            console.log("EXPRESION REGULAR PASSWORD")
        } else {
            alertpassword.classList.add('d-none');

        }
        if (password.value.length < 6) {
            /*Correo corto */
            alertpassword2.classList.remove('d-none');
            alertpassword2.innerText = '*La password es menor a 6 caracteres'
        }else{
            alertpassword2.classList.add('d-none');
        }
        if (password.value === '') {
            alertpassword3.classList.remove('d-none');
            alertpassword3.innerText = '*Campo Password Vacío';
        }
        else {
            alertpassword3.classList.add('d-none');
            console.log("asddd")
        }

        /*VALIDACION DIRECCION */
        let expRegdireccion = /^[a-zA-ZÀ-ÿ\s]{1,40}$/;
        if (!expRegdireccion.test(address.value)) {
            alertaddress.classList.remove('d-none');
            alertaddress.innerText = '*La direccion no cumple con expresiones regulares';
            console.log("EXPRESION REGULAR direccion")
        } else {
            alertaddress.classList.add('d-none');

        }
        if (address.value.length < 6) {
            /*Correo corto */
            alertaddress2.classList.remove('d-none');
            alertaddress2.innerText = '*La direccion es menor a 6 caracteres'
        }
        if (address.value.length > 6) {
            alertaddress2.classList.add('d-none');
        }
        if (address.value === '') {
            alertaddress3.classList.remove('d-none');
            alertaddress3.innerText = '*Campo address Vacío';
        }
        else {
            alertaddress3.classList.add('d-none');
        }
        /*VALIDACION CIUDAD */
        let expRegciudad = /^[a-zA-ZÀ-ÿ\s]{1,40}$/;
        if (!expRegciudad.test(city.value)) {
            alertcity.classList.remove('d-none');
            alertcity.innerText = '*La Ciudad no cumple con expresiones regulares';
            console.log("EXPRESION REGULAR ciudad")
        } else {
            alertcity.classList.add('d-none');

        }
        if (city.value.length < 6) {
            /*Correo corto */
            alertcity2.classList.remove('d-none');
            alertcity2.innerText = '*La ciudad es menor a 6 caracteres'
        }else{
            alertcity2.classList.add('d-none');
        }
        if (city.value === '') {
            alertcity3.classList.remove('d-none');
            alertcity3.innerText = '*Campo ciudad Vacío';
        }
        else {
            alertcity3.classList.add('d-none');
        }
        /*VALIDACION CODIGO POSTAL */
        let expRegcodigo = /^\d{7,14}$/;
        if (!expRegcodigo.test(postal.value)) {
            alertpostal.classList.remove('d-none');
            alertpostal.innerText = '*El codigo postal no cumple con expresiones regulares';
            console.log("EXPRESION REGULAR postal")
        } else {
            alertpostal.classList.add('d-none');

        }
        if (postal.value.length < 6) {
            /*Correo corto */
            alertpostal2.classList.remove('d-none');
            alertpostal2.innerText = '*El codigo postal es menor a 6 caracteres'
        }else{
            alertpostal2.classList.add('d-none');
        }
        
        if (postal.value === '') {
            alertpostal3.classList.remove('d-none');
            alertpostal3.innerText = '*Campo Codigo postal Vacío';
        }
        else {
            alertpostal3.classList.add('d-none');
        }
    });








})



