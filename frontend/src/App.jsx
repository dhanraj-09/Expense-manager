
import './App.css'
import {BrowserRouter as Router, Routes, Route, useLocation} from "react-router-dom";
import Dashboard from "./pages/Dashboard.jsx";
import Logout from "./pages/Logout.jsx";
import Wallet from "./pages/Wallet.jsx";
import Summary from "./pages/Summary.jsx";
import Accounts from "./pages/Accounts.jsx";
import Layout from "./components/Layout.jsx";
import Landing from "./pages/Landing.jsx";
import SaveMoney from "./pages/SaveMoney.jsx";
import Login from "./pages/Login.jsx";

function App()
{

  return(
    <div>
      <Router>
          <Routes>
              <Route path={"/"} element={<Landing></Landing>}></Route>
              <Route path={"/login"} element={<Login></Login>}></Route>
              <Route element={<Layout></Layout>}>
                  <Route path={"/dashboard"} element={<Dashboard></Dashboard>}></Route>
                  <Route path={"/accounts"} element={<Accounts></Accounts>}></Route>
                  <Route path={"/save-my-money"} element={<SaveMoney></SaveMoney>}></Route>
                  <Route path={"/summary"} element={<Summary></Summary>}></Route>
                  <Route path={"/wallet"} element={<Wallet></Wallet>}></Route>
                  <Route path={"/logout"} element={<Logout></Logout>}></Route>
              </Route>
          </Routes>
      </Router>
    </div>
  )
}

export default App
