document.addEventListener('DOMContentLoaded', function(){

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
    const alert = document.getElementById('alert');
    const alert2 = document.getElementById('alert2');



    form.addEventListener("submit", e => {
        e.preventDefault()
        let expReg = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
        if (!expReg.test(email.value)) {
            alert2.classList.remove('d-none');
            alert2.innerText = '*El correo no cumple con expresiones regulares';
            console.log("EXPRESION REGULARRRRRRRRRRRRR")
        } else{
            alert2.classList.add('d-none');

        }
        if (email.value.length < 6) {
            /*Correo corto */
            console.log("sigo aqui jaja")
            alert.classList.remove('d-none');
            alert.innerText = '*El correo es menor a 6 caracteres';
        }
        if (email.value.length > 6) {
            alert.classList.add('d-none');
        }
        if (email.value ==='') {
            alert.classList.remove('d-none');
            alert.innerText = '*Campo Correo Vacío';
        }
        else {
            console.log("else ")
        }
            /*VALIDACION PASSWORD*/
            let expRegpass = /^.{4,12}$/;
            if (!expRegpass.test(password.value)) {
                alert2.classList.remove('d-none');
                alert2.innerText = '*La password no cumple con expresiones regulares';
                console.log("EXPRESION REGULAR PASSWORD")
            } else{
                alert2.classList.add('d-none');
    
            }
            if (email.value.length < 6) {
                /*Correo corto */
                alert.classList.remove('d-none');
                alert.innerText = '*La password es menor a 6 caracteres'
            }
            if (email.value.length > 6) {
                alert.classList.add('d-none');
            }
            if (email.value ==='') {
                alert.classList.remove('d-none');
                alert.innerText = '*Campo Password Vacío';
            }
            else {
                console.log("else ")
            }

            /*VALIDACION DIRECCION */
            let expRegdireccion = /^[a-zA-ZÀ-ÿ\s]{1,40}$/;
            if (!expRegdireccion.test(address.value)) {
                alert2.classList.remove('d-none');
                alert2.innerText = '*La direccion no cumple con expresiones regulares';
                console.log("EXPRESION REGULAR direccion")
            } else{
                alert2.classList.add('d-none');
    
            }
            if (email.value.length < 6) {
                /*Correo corto */
                alert.classList.remove('d-none');
                alert.innerText = '*La direccion es menor a 6 caracteres'
            }
            if (email.value.length > 6) {
                alert.classList.add('d-none');
            }
            if (email.value ==='') {
                alert.classList.remove('d-none');
                alert.innerText = '*Campo Password Vacío';
            }
            else {
                console.log("else ")
            }
            /*VALIDACION CIUDAD */
            let expRegciudad = /^[a-zA-ZÀ-ÿ\s]{1,40}$/;
            if (!expRegciudad.test(city.value)) {
                alert2.classList.remove('d-none');
                alert2.innerText = '*La Ciudad no cumple con expresiones regulares';
                console.log("EXPRESION REGULAR ciudad")
            } else{
                alert2.classList.add('d-none');
    
            }
            if (email.value.length < 6) {
                /*Correo corto */
                alert.classList.remove('d-none');
                alert.innerText = '*La ciudad es menor a 6 caracteres'
            }
            if (email.value.length > 6) {
                alert.classList.add('d-none');
            }
            if (email.value ==='') {
                alert.classList.remove('d-none');
                alert.innerText = '*Campo ciudad Vacío';
            }
            else {
                console.log("else ")
            }
            /*VALIDACION CODIGO POSTAL */
            let expRegcodigo = /^\d{7,14}$/;
            if (!expRegcodigo.test(postal.value)) {
                alert2.classList.remove('d-none');
                alert2.innerText = '*El codigo postal no cumple con expresiones regulares';
                console.log("EXPRESION REGULAR postal")
            } else{
                alert2.classList.add('d-none');
    
            }
            if (email.value.length < 6) {
                /*Correo corto */
                alert.classList.remove('d-none');
                alert.innerText = '*El codigo postal es menor a 6 caracteres'
            }
            if (email.value.length > 6) {
                alert.classList.add('d-none');
            }
            if (email.value ==='') {
                alert.classList.remove('d-none');
                alert.innerText = '*Campo Codigo postal Vacío';
            }
            else {
                console.log("else ")
            }
    });
    







})



