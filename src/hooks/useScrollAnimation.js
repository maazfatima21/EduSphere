import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const useScrollAnimation = () => {
  const location = useLocation();

  useEffect(() => {
    const elements = document.querySelectorAll(".scroll-animate");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -50px 0px"
      }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [location]); 
};

export default useScrollAnimation;
