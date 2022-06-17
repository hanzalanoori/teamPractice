import logo from "./logo.svg";
import "./App.css";
import Login from "./pages/login";
import AppRouter from "./config/router/approuter";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <AppRouter />
    </div>
  );
}

export default App;
