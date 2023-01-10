import { useState, useRef } from "react";
import { FaSoundcloud } from "react-icons/fa";
import MyMusic from "../../assets/audio/Eminem.mp3";
import { HeaderStyle } from "./styles";

const MusicPlayer = () => {
  const [player, setPlayer] = useState(true);

  const audioPlayer = useRef<any>();

  const soundTrack = () => {
    setPlayer(!player);
    if (player) {
      audioPlayer.current.play();
    } else {
      audioPlayer.current.pause();
    }
  };

  return (
    <>
      <HeaderStyle>
        <div className="music">
          <div id="sound">
            <audio ref={audioPlayer} id="myAudio">
              <source src={MyMusic} />
            </audio>
            <i
              className={`fab fa-soundcloud ${
                player ? "soundCloud" : "soundCloudActive"
              }`}
            >
              <FaSoundcloud />
            </i>
            <span>Sound</span>
            <div className="on-off">
              <span
                onClick={soundTrack}
                className={` ${player ? "off" : "on"} `}
              >
                {player ? "Off" : " On"}
              </span>
            </div>
          </div>
        </div>
      </HeaderStyle>
    </>
  );
};

export default MusicPlayer;
