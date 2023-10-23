function calcularTiempo(){
    let tiempo = new Date();/* date para tiempo*/

    let hora = tiempo.getHours(); /*obtener hora . minutos y segundos e el sistema local*/
    let minuto = tiempo.getMinutes();
    let segundo = tiempo.getSeconds();

    var am_pm = hora >= 12 ? " p.m." : " a.m."; /*si hora es mayor igual a 12 pon pm y si es menor pues ya sabe ;D*/
    if (hora > 12){
        hora -=12;
    }
        
    hora = hora < 10 ? "0" + hora : hora; /* si es menor a 10 (2 dijitos ponga un 0)*/
    minuto = minuto < 10 ? "0" + minuto : minuto;
    segundo = segundo < 10 ? "0" + segundo : segundo;

    let pantalla = hora + ":" + minuto + ":" + segundo + am_pm;
    let relojdigital = document.querySelector(".digital"); 
    relojdigital.innerHTML=pantalla

}
setInterval(calcularTiempo,1000)/*actualice cada 1000 mili segundos*/