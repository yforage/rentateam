import React, { useEffect, useMemo, useState } from 'react';

export default function useOnScreen(ref: React.RefObject<Element>) {
  const [isIntersecting, setIntersecting] = useState(false);

  const observer = useMemo(() => new IntersectionObserver(
    ([entry]) => setIntersecting(entry.isIntersecting),
  ), [ref]);

  useEffect(() => {
    ref.current && observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return isIntersecting;
}
