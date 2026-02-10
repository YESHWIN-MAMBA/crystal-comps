import { useState } from "react";

export default function QuantitySelector({ min = 1, max = 20, onChange }) {
  const [qty, setQty] = useState(2);

  const set = (v) => {
    const next = Math.max(min, Math.min(max, v));
    setQty(next);
    onChange?.(next);
  };

  return (
    <div className="qty">
      <button
        className="iconBtn"
        onClick={() => set(qty - 1)}
        aria-label="Decrease"
      >
        −
      </button>
      <div className="qtyVal">{qty}</div>
      <button
        className="iconBtn"
        onClick={() => set(qty + 1)}
        aria-label="Increase"
      >
        +
      </button>
    </div>
  );
}
