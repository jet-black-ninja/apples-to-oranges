import { StoreContextProvider } from "./Context";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.tsx";

function App() {

  return (
    <StoreContextProvider>
      <Navbar />
      <Outlet />
    </StoreContextProvider>
  )
}

export default App;