

let listaEventos = [{"id":2,"nome":"Evento 02","data":"2019-05-27","created_at":"2019-05-28T00:44:12.048Z","updated_at":"2019-05-28T00:44:12.048Z"},{"id":1,"nome":"Evento 01","data":"2019-05-17","created_at":"2019-05-28T00:43:58.684Z","updated_at":"2019-05-28T00:44:39.774Z"},{"id":3,"nome":"Evento 03","data":"2019-06-06","created_at":"2019-05-28T00:44:52.568Z","updated_at":"2019-05-28T00:44:52.568Z"},{"id":4,"nome":"Evento 04","data":"2019-06-08","created_at":"2019-05-28T00:44:59.654Z","updated_at":"2019-05-28T00:44:59.654Z"},{"id":5,"nome":"Evento 05","data":"2019-06-18","created_at":"2019-05-28T00:45:05.587Z","updated_at":"2019-05-28T00:45:05.587Z"}];





function filtrar() {
    const data = document.getElementById('data').value;
    console.log(data);
    
    
    let listaEventosFiltrada = document.getElementById("listaEventosFiltrada");
    console.log(listaEventosFiltrada);

    let li = document.createElement("li");
    li.innerHTML = data;
    listaEventosFiltrada.appendChild(li);



}

let listaEventos = document.getElementById("listaEventos");
console.log(listaEventos);