import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import configureAppStore from "../store/configureStore";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import routes from "../utils/routes";
import { AuthProvider } from "./components/Auth/AuthProvider";
import SideDrawer from "./components/SideDrawer/SideDrawer";

const store = configureAppStore();

function App() {
  return (
    <div className="app">
      <Provider store={store}>
        <AuthProvider>
          <BrowserRouter>
            <Header />
            <SideDrawer />
            <Routes>
              {routes.map((route, index) => (
                <Route key={index} path={route.path} element={route.element} />
              ))}
            </Routes>
            <Footer />
          </BrowserRouter>
        </AuthProvider>
      </Provider>
    </div>
  );
}

export default App;
