"use client";
import { useState } from "react";
import styles from "./page.module.css";

export default function Page() {
  const [number, setNumber] = useState(0);

  return (
    <div>
      <h1>誤:{number}</h1>
      <button
        onClick={() => {
          setNumber(number + 1);
          setNumber(number + 1);
          setNumber(number + 1);
        }}
      >
        +1
      </button>
      <h1>正:{number}</h1>
      <button
        onClick={() => {
          setNumber((n) => n + 1);
          setNumber((n) => n + 1);
          setNumber((n) => n + 1);
        }}
      >
        +3
      </button>
      <div className={styles.daily}>Daily Note for 20250407</div>
    </div>
  );
}
