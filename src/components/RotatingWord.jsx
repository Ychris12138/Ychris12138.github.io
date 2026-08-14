import { useEffect, useState } from "react";

/**
 * 轮播词：按间隔循环切换显示，配合 CSS 的 wordIn 动画。
 */
export default function RotatingWord({ words = [], interval = 2600 }) {
  const [i, setI] = useState(0);

  useEffect(() => {
    if (words.length < 2) return;
    const id = setInterval(
      () => setI((v) => (v + 1) % words.length),
      interval
    );
    return () => clearInterval(id);
  }, [words.length, interval]);

  if (!words.length) return null;

  return (
    <span key={i} className="rot-word">
      {words[i]}
    </span>
  );
}
