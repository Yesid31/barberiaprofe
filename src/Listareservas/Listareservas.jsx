import { useState, useEffect } from "react"
import { consultarReservas } from "../services/servicioReserva"
export function ListarReservas() {
    //Configuro mis variables de estado
    //Esta La Uso Para Almacenar los datos que lleguen del api
    const [reservas, setReserva] = useState(null)
    const [carga, setCarga] = useState(true)

    //programo el useEffect Para Garanrizar que llamare 
    //al servicio solo cuando cargue mi componente 
    useEffect(function(){},[
        consultarReservas().then(function(respuestaDelBack){
            console.log(respuestaDelBack)
            setReserva(respuestaDelBack.reservas)
            setCarga(false)
        })

    ])
    //Programo interfaz para mostarr
    if(carga){
        return(
        <>
            <br /> <br /> <br />
        <h1>Estoy Cargando...</h1>
        </>
        )

    }else{
        
        return( <><br /> <br /> <br />
    <div className="container">
        <div className="row row-col-1 row-col-md-4 g-3">
            {
                reservas.map(function(reserva){
                    return (
                        <div className="col">
                            <div className="card h-100 shadow">
                                <h5>Cliente:{reserva.nombre}</h5>
                                <p>contacto:{reserva.telefono}</p>
                                <p>fecha:{reserva.dia}</p>
                                <p>hora:{reserva.hora}</p>
                                

                            </div>
                        </div>
                    )
                })
            }
            
        </div>
    </div>
        </>)
       
    

    }
    

}

