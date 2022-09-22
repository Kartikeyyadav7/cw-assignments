import './App.css';
import CardView from './components/CardView';
import { Provider } from "react-redux";
import store from "./redux/store";


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CardView />
      </div>
    </Provider>
  );
}

export default App;
