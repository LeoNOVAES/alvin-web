import './App.css';
import Routes from './routes'
import { Store } from './redux/store'
import { Provider } from 'react-redux'  

function App() {
  return (
    <Provider store={Store}>
      <Routes />
    </Provider>
  );
}

export default App;
