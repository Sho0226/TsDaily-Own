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
          onConfirm={() => console.log("Confirmed")}
          onCancel={() => console.log("Cancelled")}
        />
      </div>
    </div>
  );
}
