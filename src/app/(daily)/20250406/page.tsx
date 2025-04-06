"use client";

import { useReducer } from "react";
import styles from "./page.module.css";
export default function Page() {
  const [count, dispatch] = useReducer(reducer, 0);

  function reducer(state: number, action: { type: string }) {
    switch (action.type) {
      case "increment":
        return state + 1;
      case "decrement":
        return state - 1;
      default:
        return state;
    }
  }

  return (
    <div>
      <div className={styles.daily}>Daily Note for 20250406</div>
      <p>カウント：{count}</p>
      <button
        onClick={() => {
          dispatch({ type: "increment" });
        }}
      >
        増やす
      </button>
      <button
        onClick={() => {
          dispatch({ type: "decrement" });
        }}
      >
        減らす
      </button>
    </div>
  );
}
