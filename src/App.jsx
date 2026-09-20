import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/configureStore";
import "./App.css";
import Footer from "./components/app/shell/Footer";
import Header from "./components/app/shell/Header";
import routes from "./routes";
import { AuthProvider } from "./components/auth/AuthProvider";
import SideDrawer from "./components/app/shell/SideDrawer";

const AUTH_ROUTES = ["/signin", "/signup"];

function AppShell({ children }) {
  const location = useLocation();
  const isAuthPage = AUTH_ROUTES.includes(location.pathname);

  if (isAuthPage) {
    return <>{children}</>;
  }

  return (
    <>
      <Header />
      <SideDrawer />
      {children}
      <Footer />
    </>
  );
}

function App() {
  return (
    <div className="app">
      <Provider store={store}>
        <AuthProvider>
          <BrowserRouter>
            <AppShell>
              <Routes>
                {routes.map((route, index) => (
                  <Route
                    key={index}
                    path={route.path}
                    element={route.element}
                  />
                ))}
              </Routes>
            </AppShell>
          </BrowserRouter>
        </AuthProvider>
      </Provider>
    </div>
  );
}

export default App;
