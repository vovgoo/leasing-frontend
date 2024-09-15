import { Route, Routes, useLocation } from "react-router-dom";
import MainPage from "./pages/MainPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

function App() {

  const location = useLocation();

  const isAuthPage = location.pathname === '/login' || location.pathname === '/register';

  return (
    <div className={`App flex flex-col ${isAuthPage ? 'h-dvh' : ''}`}>
        <Header location={location}/>
        <Routes>
          <Route path="/" element={<MainPage/>}/>
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="/register" element={<RegisterPage/>}/>
        </Routes>
        {!isAuthPage && <Footer />}
    </div>
  );
}

export default App;
