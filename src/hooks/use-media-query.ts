import { useState, useEffect } from "react";

export const useMediaQuery = (query: string): boolean => {
  const getMatches = (q: string): boolean => {
    // Prevents SSR issues
    if (typeof window !== "undefined") {
      return window.matchMedia(q).matches;
    }
    return false;
  };

  const [matches, setMatches] = useState<boolean>(getMatches(query));

  useEffect(() => {
    const handleChange = () => {
      setMatches(getMatches(query));
    };

    const mediaQuery: MediaQueryList = window.matchMedia(query);

    setMatches(mediaQuery.matches);

    // Triggered at the first client-side load and if query changes
    handleChange();

    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, [query]);

  return matches;
};
