import './App.css';
import { Provider } from 'react-redux';
import { store } from './store/store';
import UsersPage from './components/UsersPage';

const App = () => (
  <Provider store={store}>
    <UsersPage />
  </Provider>
);

export default App;
