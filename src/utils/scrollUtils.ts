import { useState, useEffect, RefObject } from 'react';

// Scroll to top utility hook
export const useScrollToTop = (
  containerRef: RefObject<HTMLElement>, 
  threshold: number = 100
): { showScrollTop: boolean; scrollToTop: () => void } => {
  const [showScrollTop, setShowScrollTop] = useState<boolean>(false);

  const scrollToTop = (): void => {
    if (containerRef.current) {
      containerRef.current.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    const handleScroll = (): void => {
      if (containerRef.current) {
        const scrollTop = containerRef.current.scrollTop;
        setShowScrollTop(scrollTop > threshold);
      }
    };

    const containerElement = containerRef.current;
    if (containerElement) {
      containerElement.addEventListener('scroll', handleScroll);
      return () => containerElement.removeEventListener('scroll', handleScroll);
    }
  }, [containerRef, threshold]);

  return { showScrollTop, scrollToTop };
};