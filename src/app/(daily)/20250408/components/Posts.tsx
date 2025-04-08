import { QueryClient, useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";

const queryClient = new QueryClient();

const Posts = ({
  setPostId,
}: {
  setPostId: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const { data, status } = useQuery({
    queryKey: ["posts"],
    queryFn: async () => {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      return data;
    },
  });

  if (status === "error") {
    return "エラーが発生しました";
  }

  return (
    <div>
      <h1>ポスト一覧</h1>
      <div>
        {status === "pending" ? (
          <>読み込み中...</>
        ) : (
          <>
            {data?.map((post: any) => (
              <p key={post.id}>
                <a
                  href="#"
                  onClick={() => setPostId(post.id)}
                  style={
                    queryClient.getQueriesData(["posts", post.id])
                      ? { color: "red" }
                      : {}
                  }
                >
                  {post.title}
                </a>
              </p>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default Posts;
