import { useState } from "react";
import styles from "./page.module.css";

export default function Page() {
  const [text, setText] = useState("");
  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
    </div>
  );

  return <div className={styles.daily}>Daily Note for 20250405</div>;
}
