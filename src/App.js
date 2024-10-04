import { Route, Routes, useLocation } from "react-router-dom";
import MainPage from "./pages/MainPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import UserPersonal from "./pages/UserPersonal";
import OrderDetails from "./pages/OrderDetails";
import { AuthProvider } from "./AuthProvider";
import SupportPage from "./pages/SupportPage";
import ContactsPage from "./pages/ContactsPage";
import CarInfoPage from "./pages/CarInfoPage";
import SearchPage from "./pages/SearchPage";

function App() {

  const location = useLocation();

  const isAuthPage = location.pathname === '/login' || location.pathname === '/register';

  return (
    <AuthProvider>
      <div className={`App flex flex-col ${isAuthPage ? 'h-dvh' : ''}`}>
          <Header location={location}/>
          <Routes>
            <Route path="/" element={<MainPage/>}/>
            <Route path="/login" element={<LoginPage/>}/>
            <Route path="/register" element={<RegisterPage/>}/>
            <Route path="/personal" element={<UserPersonal/>}/>
            <Route path="/order/:id" element={<OrderDetails/>}/>
            <Route path="/support" element={<SupportPage/>}/>
            <Route path="/contacts" element={<ContactsPage/>}/>
            <Route path="/car/:id" element={<CarInfoPage/>}/>
            <Route path="/search" element={<SearchPage/>}/>
          </Routes>
          {!isAuthPage && <Footer />}
      </div>
    </AuthProvider>
  );
}

export default App;
