import React from "react";
// import BlogImage from "../features/blog/components/BlogImage/BlogImage";
// import BlogList from "../features/blog/components/BlogList/BlogList";
// import BlogCard from "../features/blog/components/BlogCard/BlogCard";
import * as Blog from "../features/blog/components/index";

const BlogPage = () => {
  return (
    <div>
      <Blog.BlogImage />
      <Blog.BlogList />
      <Blog.BlogCard />
    </div>
  );
};

export default BlogPage;
