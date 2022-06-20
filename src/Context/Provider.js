import { useState } from "react";
import MyContext from "./Context";

const Provider = ({ children }) => {
    const [login, setLogin ] = useState({
        userName: '',
        password: '',
    })
    const [expensives, setExpensives] = useState([])
    
    const context = {
        login,
        setLogin,
        expensives,
        setExpensives,
    }
    return(
        <MyContext.Provider value={ context }>
            { children }
        </MyContext.Provider>
    );
}

export default Provider;