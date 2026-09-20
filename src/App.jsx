import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/configureStore";
import Footer from "./components/app/shell/Footer";
import Header from "./components/app/shell/Header";
import routes from "./routes";
import { AuthProvider } from "./components/auth/AuthProvider";
import SideDrawer from "./components/app/shell/SideDrawer";
import "./App.scss";

function AppShell({ children }) {
  const location = useLocation();
  const isAuthPage = ["/signin", "/signup"].includes(location.pathname);

  if (isAuthPage) {
    return <div className="app-plain">{children}</div>;
  }

  return (
    <div className="app">
      <Header />
      <SideDrawer />
      {children}
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Provider store={store}>
      <AuthProvider>
        <BrowserRouter>
          <AppShell>
            <Routes>
              {routes.map((route, index) => (
                <Route key={index} path={route.path} element={route.element} />
              ))}
            </Routes>
          </AppShell>
        </BrowserRouter>
      </AuthProvider>
    </Provider>
  );
}

export default App;
