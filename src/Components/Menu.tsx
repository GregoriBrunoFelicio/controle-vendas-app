import { Link, Outlet } from "react-router-dom"
import styled from "styled-components"

export const Menu = () => {
    return <>
        <MenuContainer>
            <Link to="/">Compras</Link>
            <Link to="/clientes">Clientes</Link>
        </MenuContainer>
        <Outlet />
    </>
}


const MenuContainer = styled.ul`
    background-color:red;
    heigth: 80px;
`

