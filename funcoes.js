

let eventos = [

];

function filtrar() {
    const data = document.getElementById('data').value;
    console.log(data);

    let eventosFiltrados = [];

    eventos.forEach(evento =>{
        if(evento.data === data){
            eventosFiltrados.push(evento);
        }
    })

    let listaEventosFiltrada = document.getElementById("listaEventosFiltrada");
    listaEventosFiltrada.innerHTML = '';

    eventosFiltrados.forEach(evento=>{
        let listaEventosFiltrada = document.getElementById("listaEventosFiltrada");
        let li = document.createElement("li");
        li.innerHTML = evento.nome + ' ' + evento.data;
        listaEventosFiltrada.appendChild(li);
    })
}
console.log(listaEventos);


let atualizar=()=>{
    eventos.forEach(evento => {
        let listaEventos = document.getElementById("listaEventos");
        let li = document.createElement("li");
        li.innerHTML = evento.nome + ' ' + evento.data;
        listaEventos.appendChild(li)
    })  
}




const url = 'http:192.168.25.160:3000/eventos';
    fetch(url,{
        method:'GET',
        headers:{
            'Authorization':'aaa',
            'Content-Type' : 'application/json'


        }
    })
   .then(response=>{
       return response.json();
   })
   .then(res=>{
       eventos = res;
       atualizar();
   }) 
   .catch(error=>{
        console.log(error)

   })

    