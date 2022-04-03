import React, { useEffect, useMemo, useState } from 'react';

const useOnScreen = (ref: React.RefObject<Element>, rootMargin?: string) => {
  const [isIntersecting, setIntersecting] = useState(false);

  const observer = useMemo(() => new IntersectionObserver(
    ([entry]) => setIntersecting(entry.isIntersecting),
    { rootMargin }
  ), []);

  useEffect(() => {
    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    }
  }, []);

  return isIntersecting;
}

export default useOnScreen;