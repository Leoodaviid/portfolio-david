import { motion, useAnimationControls } from "framer-motion";
import { ReactNode, useState } from "react";

interface TextProps {
  children: ReactNode;
}
const TextMotion = ({ children }: TextProps) => {
  const controls = useAnimationControls();
  const [isPlaying, setIsPlaying] = useState(false);
  const variants = {
    hover: { color: "#f50057" },
  };

  const rubberBand = () => {
    controls.start({
      transform: [
        "scale3d(1,1,1)",
        "scale3d(1.4,.55,1)",
        "scale3d(.75,1.25,1)",
        "scale3d(1.25,.85,1)",
        "scale3d(.9,1.05,1)",
        "scalle3d(1,1,1)",
      ],
    });
    setIsPlaying(true);
  };

  return (
    <motion.span
      animate={controls}
      whileHover={variants.hover}
      onMouseOver={() => {
        if (!isPlaying) rubberBand();
      }}
      onAnimationComplete={() => setIsPlaying(false)}
    >
      {children}
    </motion.span>
  );
};

export default TextMotion;
