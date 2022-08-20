import { Link, Outlet } from "react-router-dom"
import styled from "styled-components"

export const Menu = () => {
    return <>
        <div className="navbar navbar-dark bg-dark col-12 mb-2">
            <div className="m-1">
                <Link className="navbar-brand" to="/">Compras</Link>
                <Link className="navbar-brand" to="/clientes">Clientes</Link>
            </div>
        </div>
        <Outlet />
    </>
}