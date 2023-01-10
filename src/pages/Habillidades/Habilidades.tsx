import React from "react";
import Sidebar from "../../components/Aside/Aside";
import MusicPlayer from "../../components/MusicPlayer/MusicPlayer";
import SectionHabilidades from "../../components/SectionHabilidades/SectionHabilidades";

const Habilidades = () => {
  return (
    <div>
      <MusicPlayer />
      <Sidebar />
      <SectionHabilidades />
    </div>
  );
};

export default Habilidades;
