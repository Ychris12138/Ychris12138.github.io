import { useEffect, useRef, useState } from "react";

/**
 * 滚动渐入容器：元素进入视口时执行上移淡入动画。
 * delay 用于列表交错动画（单位 ms）。
 */
export default function Reveal({ children, delay = 0, y = 26, className = "" }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${visible ? "is-visible" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms`, "--reveal-y": `${y}px` }}
    >
      {children}
    </div>
  );
}
