import { useRef, useEffect } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";

interface TextBoxProps {
  icon?: React.ReactNode; // For passing React icons
  imageUrl?: string; // For passing image URLs
  text: string;
}

function TextBox({ icon, imageUrl, text }: TextBoxProps) {
  const viewportWidth = typeof window !== "undefined" ? window.innerWidth : 0;
  const centerX = viewportWidth / 3 + 60;

  const targetRef1 = useRef(null);

  const isInView = useInView(targetRef1, {
    margin: "-50% 0px -50% 0px",
  });

  useEffect(() => {
    console.log("Element is in view:", isInView);
  }, [isInView]);

  const { scrollYProgress: scrollYProgress1 } = useScroll({
    target: targetRef1,
    offset: ["start end", "end start"],
  });

  const scale1 = useTransform(
    scrollYProgress1,
    [0, 0.3, 0.5, 0.7, 1],
    [1, 1.2, 2.5, 1.2, 1]
  );

  const x1 = useTransform(
    scrollYProgress1,
    [0, 0.3, 0.5, 0.7, 1],
    [0, 0, centerX, 0, 0]
  );

  const opacity = useTransform(
    scrollYProgress1,
    [0, 0.35, 0.5, 0.65, 1],
    [0, 0, 1, 0, 0]
  );

  const iconOpacity = useTransform(
    scrollYProgress1,
    [0, 0.3, 0.35, 0.65, 0.7, 1],
    [1, 1, 0, 0, 1, 1]
  );

  return (
    <motion.div
      ref={targetRef1}
      className="bg-emerald-950 sticky w-60 h-40 rounded-lg flex items-center justify-center"
      style={{ scale: scale1, x: x1 }}
    >
      <motion.div className="icon-text-container flex items-center">
        {!isInView && (
          <motion.div
            className="icon-container w-44 h-24  flex items-center justify-center"
            style={{ opacity: iconOpacity }}
          >
            {icon ||
              (imageUrl && (
                <img
                  src={imageUrl}
                  alt="Icon"
                  className="w-full h-full object-contain rounded-lg"
                />
              ))}
          </motion.div>
        )}

        {isInView && (
          <motion.p
            className="text-white text-center"
            style={{ opacity: opacity }}
          >
            {text}
          </motion.p>
        )}
      </motion.div>
    </motion.div>
  );
}

export default TextBox;
