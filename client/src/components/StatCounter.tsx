import { useEffect, useState } from 'react';

interface StatCounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  label: string;
}

export default function StatCounter({ end, duration = 2000, suffix = '', label }: StatCounterProps) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (hasAnimated) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const steps = 60;
          const increment = end / steps;
          const stepDuration = duration / steps;
          let current = 0;

          const timer = setInterval(() => {
            current += increment;
            if (current >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, stepDuration);

          return () => clearInterval(timer);
        }
      },
      { threshold: 0.5 }
    );

    const element = document.getElementById(`stat-${label}`);
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, [end, duration, hasAnimated, label]);

  return (
    <div id={`stat-${label}`} className="text-center" data-testid={`stat-${label.toLowerCase().replace(/\s+/g, '-')}`}>
      <div className="text-5xl md:text-6xl font-bold text-[#1bc195] mb-3">
        {count.toLocaleString()}{suffix}
      </div>
      <div className="text-lg text-white/80">
        {label}
      </div>
    </div>
  );
}
