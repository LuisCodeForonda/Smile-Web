(function(){
    var actualizarHora = function(){
        var fecha = new Date();
        var hora = fecha.getHours();
        var minuto = fecha.getMinutes();
        var segundos = fecha.getSeconds();
    
        
        var pHora = document.getElementById('hora');
        var pMinuto = document.getElementById('minuto');
        var pSegundo = document.getElementById('segundo');
        var amPm = document.getElementById('ampm');

        if(segundos < 10){
            segundos = "0"+segundos;
        }
        if(minuto < 10){
            minuto = "0"+minuto;
        }
        

        if(hora >= 12){
            amPm.textContent = "PM"
        }else{
            amPm.textContent = "AM"
        }

        pHora.textContent = hora;
        pMinuto.textContent = minuto;
        pSegundo.textContent = segundos;
    }
    actualizarHora();
    var intervalo = setInterval(actualizarHora, 1000);
}())