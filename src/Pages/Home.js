import React, { useContext } from "react";
import MyContext from "../Context/Context";

const Home = () => {
    const { login } = useContext(MyContext);
    const { userName } = login;
    return (
        <h1>Bem vindo { userName }</h1>
    )
}

export default Home;