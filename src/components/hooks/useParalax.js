import { useEffect, useRef } from "react";

function useParallax(speed = 0.5) {
  const ref = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const scrollY = window.scrollY;
        ref.current.style.backgroundPositionY = `${scrollY * speed}px`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [speed]);

  return ref;
}

export default useParallax;
