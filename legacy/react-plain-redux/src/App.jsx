import { Provider } from 'react-redux';
import { store } from './store/store';
import UsersContainer from './containers/UsersContainer';
import PostsContainer from './containers/PostsContainer';
import CommentsContainer from './containers/CommentsContainer';
import './App.css';

const App = () => (
  <Provider store={store}>
    <UsersContainer />
    <PostsContainer />
    <CommentsContainer />
  </Provider>
);

export default App;
