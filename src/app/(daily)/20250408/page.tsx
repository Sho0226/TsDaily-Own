import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Posts from "./components/Posts";
import styles from "./page.module.css";

export default function Page() {
  const queryClient = new QueryClient();
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <Posts />
      </QueryClientProvider>
      <div className={styles.daily}>Daily Note for 20250408</div>
    </div>
  );
}
