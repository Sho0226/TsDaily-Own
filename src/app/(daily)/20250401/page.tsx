"use client";

import { UserRegistrationDialog } from "./components/UserRegisterationDialog";
import styles from "./page.module.css";

export default function Page() {
  return (
    <div className={styles.container}>
      <div className={styles.daily}>Daily Note for 20250401</div>
      <div className={styles.dialog}>
        <UserRegistrationDialog
          isOpen={true}
          userName="Sho"
          onConfirm={() => alert("Confirmed")}
          onCancel={() => alert("Cancelled")}
          text="This is my daily"
        />
      </div>
    </div>
  );
}
