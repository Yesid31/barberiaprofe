import { Route, Routes } from "react-router-dom"
import { ListarReservas } from "../Listareservas/Listareservas"

import { Home } from '../Home/Home'
import { Menu } from "../shared/Menu/Menu"

export function Rutas() {
    return (
        <>
            <Menu/>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/reservas" element={<ListarReservas />} />
            </Routes>

        </>

    )
}