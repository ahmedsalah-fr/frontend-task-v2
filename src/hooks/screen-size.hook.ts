import { useState, useEffect } from "react";

const useScreenSize = (
  mobileBreakpoint = 743,
  tabletMinWidth = 744,
  tabletMaxWidth = 1279
) => {
  const [isMobile, setIsMobile] = useState(
    window.innerWidth <= mobileBreakpoint
  );
  const [isTablet, setIsTablet] = useState(
    window.innerWidth >= tabletMinWidth && window.innerWidth <= tabletMaxWidth
  );

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= mobileBreakpoint);
      setIsTablet(
        window.innerWidth >= tabletMinWidth &&
          window.innerWidth <= tabletMaxWidth
      );
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [mobileBreakpoint, tabletMinWidth, tabletMaxWidth]);

  return { isMobile, isTablet };
};

export default useScreenSize;
