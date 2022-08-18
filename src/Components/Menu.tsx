import { Link, Outlet } from "react-router-dom"

export const Menu = () => {
    return <>
        <Link to="/">Compras</Link>
        <Link to="/clientes">Clientes</Link>
        <Outlet />
    </>
}