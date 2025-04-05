"use client";

import { useState } from "react";
import styles from "./page.module.css";

export default function Page() {
  const [text, setText] = useState("");
  return (
    <div>
      <div className={styles.daily}>Daily Note for 20250405</div>
      <input
        type="text"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <div>入力値:{text}</div>
    </div>
  );
}
