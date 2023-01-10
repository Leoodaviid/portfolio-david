import Routes from "./Routes";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { StyleGlobal } from "./global";

function App() {
  return (
    <div className="App">
      <StyleGlobal />
      <Routes />
    </div>
  );
}

export default App;
