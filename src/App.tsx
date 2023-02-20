import Routes from "./Routes";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { StyleGlobal } from "./styles/global";
import { Theme } from "./styles/Theme";
import { Normalize } from "styled-normalize";

function App() {
  return (
    <Theme>
      <Routes />
      <StyleGlobal />
      <Normalize />
    </Theme>
  );
}

export default App;
