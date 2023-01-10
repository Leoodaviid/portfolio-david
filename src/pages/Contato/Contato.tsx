import React from "react";
import Sidebar from "../../components/Aside/Aside";
import MusicPlayer from "../../components/MusicPlayer/MusicPlayer";
import SectionContato from "../../components/SectionContato/sectionContato";

const Contato = () => {
  return (
    <div>
      <MusicPlayer />
      <Sidebar />
      <SectionContato />
    </div>
  );
};

export default Contato;
