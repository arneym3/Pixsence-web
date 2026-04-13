import { useCountUp } from '@/hooks/useCountUp';
import { useIntersection } from '@/hooks/useIntersection';

interface AnimatedNumberProps {
  value: number;
  duration?: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
}

export function AnimatedNumber({
  value,
  duration = 1500,
  decimals = 0,
  prefix = '',
  suffix = '',
  className = '',
}: AnimatedNumberProps) {
  const { ref, isIntersecting } = useIntersection<HTMLSpanElement>({
    threshold: 0.3,
    triggerOnce: true,
  });

  const count = useCountUp({
    end: value,
    duration,
    decimals,
    enabled: isIntersecting,
  });

  return (
    <span ref={ref} className={`font-mono ${className}`}>
      {prefix}{count}{suffix}
    </span>
  );
}
