import { useState } from "react";
import { ImageSkeleton } from "./styles";

interface ImageProps {
  src: string;
  alt: string;
}
const Image = ({ src, alt, ...props }: ImageProps) => {
  const [skeleton, setSkeleton] = useState(true);

  interface HandleLoadProps {
    target: any;
  }
  function handleLoad({ target }: HandleLoadProps) {
    setSkeleton(false);
    target.style.opacity = 1;
  }
  return (
    <ImageSkeleton>
      <div className="wrapper">
        {skeleton && <div className="skeleton"></div>}
        <img onLoad={handleLoad} src={src} alt={alt} {...props} />
      </div>
    </ImageSkeleton>
  );
};

export default Image;
