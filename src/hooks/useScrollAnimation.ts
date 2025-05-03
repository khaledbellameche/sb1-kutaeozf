import { useEffect } from 'react';

interface ScrollAnimationOptions {
  threshold?: number;
  root?: Element | null;
  rootMargin?: string;
}

const useScrollAnimation = (options: ScrollAnimationOptions = {}) => {
  useEffect(() => {
    const animatedElements = document.querySelectorAll('[data-aos]');
    
    if (animatedElements.length === 0) return;
    
    const defaultOptions = {
      threshold: 0.1,
      root: null,
      rootMargin: '0px',
      ...options
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const element = entry.target as HTMLElement;
          const animationName = element.dataset.aos;
          const duration = element.dataset.aosDuration || '1000';
          const delay = element.dataset.aosDelay || '0';
          
          element.style.animationDuration = `${duration}ms`;
          element.style.animationDelay = `${delay}ms`;
          element.classList.add(animationName as string, 'aos-animate');
          
          // Unobserve after animation is applied to avoid reapplying
          observer.unobserve(element);
        }
      });
    }, defaultOptions);
    
    animatedElements.forEach((element) => {
      observer.observe(element);
    });
    
    return () => {
      if (animatedElements.length > 0) {
        animatedElements.forEach((element) => {
          observer.unobserve(element);
        });
      }
    };
  }, [options]);
};

export default useScrollAnimation;