import { Outlet } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";
import MusicPlayer from "../../components/MusicPlayer/MusicPlayer";
import { Container, Content } from "./styles";

const Main = () => {
  return (
    <Container>
      <Sidebar />
      <Content>
        <MusicPlayer />
        <Outlet />
      </Content>
    </Container>
  );
};

export default Main;
