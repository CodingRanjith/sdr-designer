import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import logoImg from "@/assets/su_logo.png";
// import * as THREE from "three"; // Uncomment if you want to add 3D particles/logo

interface Intro3DProps {
  onFinish: () => void;
}

const Intro3D: React.FC<Intro3DProps> = ({ onFinish }) => {
  const textRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  // const threeRef = useRef<HTMLDivElement>(null); // For Three.js canvas

  useEffect(() => {
    // GSAP timeline for intro
    const tl = gsap.timeline({
      defaults: { ease: "power3.inOut" },
      onComplete: () => {
        // Exit animation after a delay
        gsap.to([textRef.current, logoRef.current], {
          opacity: 0,
          scale: 0.8,
          duration: 0.7,
          onComplete: onFinish,
        });
      },
    });
    tl.fromTo(
      textRef.current,
      { opacity: 0, scale: 0.5, filter: "blur(12px)", textShadow: "0 0 32px #fff" },
      { opacity: 1, scale: 1.5, filter: "blur(0px)", duration: 1.1, textShadow: "0 0 64px #fff" }
    )
      .to(textRef.current, { scale: 1, textShadow: "0 0 16px #fff" }, "+=0.2")
      .fromTo(
        logoRef.current,
        { opacity: 0, scale: 0.5, filter: "blur(16px)", boxShadow: "0 0 64px #0ff" },
        { opacity: 1, scale: 1.2, filter: "blur(0px)", duration: 1, boxShadow: "0 0 128px #0ff" },
        "-=0.7"
      )
      .to(logoRef.current, { scale: 1, boxShadow: "0 0 32px #0ff" }, "+=0.2");
    // Optionally, add Three.js particles here
    // ...
  }, [onFinish]);

  return (
  <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center">
      <div
        ref={textRef}
        className="text-5xl md:text-8xl font-black gradient-text mb-8"
        style={{ textShadow: "0 0 32px #fff, 0 0 64px #0ff" }}
      >
        Surender B
      </div>
      <div
        ref={logoRef}
        className="flex items-center justify-center"
        style={{ boxShadow: "0 0 64px #0ff" }}
      >
        <img src={logoImg} alt="SDR Logo" className="w-32 h-32 md:w-48 md:h-48 object-contain drop-shadow-lg" />
      </div>
      {/* <div ref={threeRef} className="absolute inset-0 pointer-events-none" /> */}
    </div>
  );
};

export default Intro3D;
