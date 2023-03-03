import "./App.css";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <Navbar />
      <Main />
    </Provider>
  );
}

export default App;