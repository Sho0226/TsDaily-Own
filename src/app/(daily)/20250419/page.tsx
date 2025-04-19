"use client";
import { useState } from "react";
import styles from "./page.module.css";

export default function Page() {
  const [count, setCount] = useState(0);
  const handleDecrement = () => {
    setCount(count - 1);
  };
  const handleInclement = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <div className={styles.daily}>Daily Note for 20250419</div>
      {/* bad */}
      {/* <button data-testid="decrement-button" onClick={() => handleDecrement()}> */}
      <button data-testid="decrement-button" onClick={handleDecrement}>
        -
      </button>
      {/* bad */}
      {/* <button data-testid="increment-button" onClick={() => handleInclement()}> */}
      <button data-testid="increment-button" onClick={handleInclement}>
        +
      </button>
      <p>clicked: {count}</p>
    </div>
  );
}
