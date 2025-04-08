import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { Dispatch, SetStateAction } from "react";

const Post = ({
  postId,
  setPostId,
}: {
  postId: number;
  setPostId: Dispatch<SetStateAction<number>>;
}) => {
  const { data, status } = useQuery({
    queryKey: ["post", "postId"],
    queryFn: async () => {
      const { data } = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${postId}`
      );
      return data;
    },
    enabled: !!postId,
  });
  return (
    <div>
      <div>
        <a href="" onClick={() => setPostId(postId)}>
          戻る
        </a>
      </div>
      {status === "pending" ? (
        <>読み込み中...</>
      ) : (
        <>
          <h1>{data.title}</h1>
          <div>
            <p>{data.body}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default Post;
