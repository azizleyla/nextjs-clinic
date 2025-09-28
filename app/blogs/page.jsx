import BlogItem from "@/components/sections/blogs/BlogItem";
import Banner from "@/components/ui/components/banner";
import Button from "@/components/ui/components/button";
import { blogPosts } from "@/constants/blogs";
import React from "react";

const Blogs = () => {
  return (
    <>
      <Banner title="Bloqlar" />
      <section>
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <BlogItem post={post} key={post.id} />
            ))}
          </div>
          <div className="flex justify-center items-center my-10">
            <Button variant="outline_primary" label="Daha çox"></Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blogs;
