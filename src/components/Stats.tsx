import { useEffect, useState } from "react";

const Stats = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('stats');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const stats = [
    { number: 43, label: "Projects Completed", suffix: "+" },
    { number: 25, label: "Happy Clients", suffix: "+" },
    { number: 2, label: "Years Experience", suffix: "+" },
    { number: 100, label: "Satisfaction Rate", suffix: "%" },
  ];

  const CountUp = ({ end, suffix = "", duration = 2000 }: { end: number; suffix?: string; duration?: number }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!isVisible) return;

      let startTime: number;
      const startCount = 0;

      const updateCount = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = timestamp - startTime;
        const percentage = Math.min(progress / duration, 1);
        
        const easeOut = 1 - Math.pow(1 - percentage, 3);
        const currentCount = Math.floor(easeOut * (end - startCount) + startCount);
        
        setCount(currentCount);

        if (percentage < 1) {
          requestAnimationFrame(updateCount);
        }
      };

      requestAnimationFrame(updateCount);
    }, [isVisible, end, duration]);

    return <span>{count}{suffix}</span>;
  };

  return (
    <section id="stats" className="py-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="glass-card card-3d text-center p-8 animate-bounce-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-4xl md:text-5xl font-black gradient-text mb-2">
                <CountUp end={stat.number} suffix={stat.suffix} />
              </div>
              <p className="text-foreground/70 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;