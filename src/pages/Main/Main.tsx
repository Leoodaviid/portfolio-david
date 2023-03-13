import { Outlet } from "react-router-dom";
import { Container, Content } from "./styles";
import Sidebar from "../../components/Sidebar/Sidebar";
import MusicPlayer from "../../components/MusicPlayer/MusicPlayer";

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
