"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Posts from "./components/Posts";
import styles from "./page.module.css";
import { useState } from "react";
import Post from "./components/Post";

export default function Page() {
  const queryClient = new QueryClient();
  const [postId, setPostId] = useState(-1);
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        {postId !== -1 ? (
          <Post postId={postId} setPostId={setPostId} />
        ) : (
          <Posts setPostId={setPostId} />
        )}
      </QueryClientProvider>
      <div className={styles.daily}>Daily Note for 20250408</div>
    </div>
  );
}
