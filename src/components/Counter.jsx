import { useEffect, useRef, useState } from "react";

/**
 * 数字滚动计数：进入视口后从 0 缓动计数到目标值。
 * 支持 "300+" 这类带后缀的写法。
 */
export default function Counter({ value, duration = 1500 }) {
  const m = /^(\d+)(.*)$/.exec(String(value));
  const target = m ? parseInt(m[1], 10) : 0;
  const suffix = m ? m[2] : String(value);

  const [n, setN] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setN(target);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started.current) return;
        started.current = true;
        const t0 = performance.now();
        const tick = (now) => {
          const p = Math.min(1, (now - t0) / duration);
          const eased = 1 - Math.pow(1 - p, 3);
          setN(Math.round(target * eased));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
        io.disconnect();
      },
      { threshold: 0.5 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [target, duration]);

  return (
    <span ref={ref}>
      {n}
      {suffix}
    </span>
  );
}
