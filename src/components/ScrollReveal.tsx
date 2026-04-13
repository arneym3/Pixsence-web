import { useIntersection } from '@/hooks/useIntersection';
import { cn } from '@/lib/utils';
import type { ReactNode } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  threshold?: number;
}

export function ScrollReveal({ 
  children, 
  className, 
  delay = 0,
  threshold = 0.1 
}: ScrollRevealProps) {
  const { ref, isIntersecting } = useIntersection<HTMLDivElement>({ 
    threshold,
    triggerOnce: true 
  });

  return (
    <div
      ref={ref}
      className={cn(
        'scroll-reveal',
        isIntersecting && 'visible',
        className
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
