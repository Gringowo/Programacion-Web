document.querySelector('#dolar').addEventListener('click', function(){
    obtenerDatos();


})

function obtenerDatos(){
    
    let url = `https://mindicador.cl/api`;


    const api = new XMLHttpRequest();
    api.open('GET', url, true);
    api.send();

    api.onreadystatechange = function(){

        if(this.status == 200 && this.readyState == 4){

            let datos = JSON.parse(this.responseText);
            console.log(datos.serie);
            let resultado = document.querySelector('#resultado');
            resultado.innerHTML = '';


            for(let item of datos.serie){
                resultado.innerHTML += `<li>${item.valor}</li>`
                
            }
             
        }
    }



     
}
