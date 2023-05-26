export async function consultarReservas(){
    //1.URL DEL SERVICIO
    const URI="http://pruegaapi20231.vercel.app/buscarReservas"

    //2.Configurar La Peticion eDe Envio 
    const PETICION={
        method:"GET",//GET POST PUT DELETE
       // headers:{}, //DATOS DE CONTROL *****
        //body:""//POST PUT *****

    }

    //3.Siempre Devo Comunicarme Con El Back (Comunicarme con El Servicio)
    //FETCH 
     let respuestaDelServidor=await fetch(URI,PETICION)
     let datosConsultados=await respuestaDelServidor.json()
    return datosConsultados


}