import { useEffect, useRef, useState } from "react";

export function useSectionTimeline(sectionIds) {
  const [timeline, setTimeline] = useState(0); // 0..(n-1)
  const target = useRef(0);
  const topsRef = useRef([]);

  useEffect(() => {
    const computeTops = () => {
      const tops = sectionIds.map((id) => {
        const el = document.getElementById(id);
        if (!el) return 0;
        const rect = el.getBoundingClientRect();
        // rect.top is viewport-based, add current scrollY to make it document-based
        return rect.top + window.scrollY;
      });

      // Ensure strictly increasing to avoid division weirdness
      for (let i = 1; i < tops.length; i++) {
        if (tops[i] <= tops[i - 1]) tops[i] = tops[i - 1] + 1;
      }

      topsRef.current = tops;
    };

    const onScroll = () => {
      const y = window.scrollY;
      const tops = topsRef.current;
      if (!tops.length) return;

      // Find section index i where tops[i] <= y < tops[i+1]
      let i = 0;
      for (; i < tops.length - 1; i++) {
        if (y < tops[i + 1]) break;
      }

      const start = tops[i];
      const end = tops[i + 1] ?? start + window.innerHeight;
      const denom = Math.max(1, end - start);
      const t = Math.min(1, Math.max(0, (y - start) / denom));

      target.current = i + t; // float timeline
    };

    computeTops();
    onScroll();

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", computeTops);

    // In case fonts/images shift layout shortly after load
    const late = setTimeout(computeTops, 300);

    let raf = 0;
    const tick = () => {
      setTimeline((p) => p + (target.current - p) * 0.1); // smoothing
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", computeTops);
      clearTimeout(late);
      cancelAnimationFrame(raf);
    };
  }, [sectionIds]);

  return timeline;
}
