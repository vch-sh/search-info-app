import { Provider } from 'react-redux';
import store from './redux/store';
import Users from './components/Users';
import styles from './App.module.scss';

function App() {
  return (
    <Provider store={store}>
      <div className={styles.app}>
        <h1>Search Info App</h1>
          <Users />
      </div>
    </Provider>
  );
}

export default App;
