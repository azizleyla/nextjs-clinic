import Button from "@/shared/ui/button";
import SectionTitle from "@/shared/ui/typography/SectionTitle";
import React from "react";
import BlogItem from "../../../features/blogs/components/BlogItem";
import { apiClient } from "@/core/api/apiClient";
import { blogPosts } from "@/features/blogs/constants/blogs";

export default async function BlogsSection() {
  // const blogs = await apiClient.get("api/blogs");

  return (
    <section>
      <div className="container">
        <SectionTitle title="Bloqlar" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.slice(0, 3).map((post) => (
            <BlogItem post={post} key={post.id} />
          ))}
        </div>
        <div className="all_btn-container">
          <Button
            href="/blogs"
            variant="outline_primary"
            label="Bütün bloqlar"
          />
        </div>
      </div>
    </section>
  );
}
