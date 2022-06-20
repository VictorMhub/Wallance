import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Wallet from "./Pages/Wallet";
import Login from "./Pages/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Wallet />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
