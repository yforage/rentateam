import React, { useEffect, useMemo, useState } from 'react';

const useOnScreen = (ref: React.RefObject<Element>, rootMargin?: string, appearOnce?: boolean) => {
  const [isIntersecting, setIntersecting] = useState(false);

  const observer = useMemo(() => new IntersectionObserver(
    ([entry]) => {
      setIntersecting(entry.isIntersecting);

      if (appearOnce && entry.isIntersecting) {
        observer.disconnect();
        return true;
      }
    },
    { rootMargin },
  ), []);

  useEffect(() => {
    if (ref.current) observer.observe(ref.current);
    return () => {
      observer.disconnect();
    }
  }, []);

  return isIntersecting;
}

export default useOnScreen;