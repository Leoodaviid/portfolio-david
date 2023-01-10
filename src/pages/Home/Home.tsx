import Sidebar from "../../components/Aside/Aside";
import MusicPlayer from "../../components/MusicPlayer/MusicPlayer";
import SectionHome from "../../components/SectionHome/sectionHome";

const Home = () => {
  return (
    <main>
      <MusicPlayer />
      <Sidebar />
      <SectionHome />
    </main>
  );
};

export default Home;
