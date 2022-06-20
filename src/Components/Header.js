import React, { useContext } from "react";
import MyContext from "../Context/Context";

const Header = () => {
    const { login } = useContext(MyContext);
    const { userName } = login;
    return (
        <h2>Bem vindo { userName }</h2>
    )
}

export default Header;