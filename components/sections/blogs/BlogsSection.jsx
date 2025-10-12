import Button from "@/components/ui/common/button";
import SectionTitle from "@/components/ui/shared/title/SectionTitle";
import React from "react";
import BlogItem from "./BlogItem";
import { apiClient } from "@/lib/apiClient";

export default async function BlogsSection() {
  const blogs = await apiClient.get("api/blogs");

  return (
    <section>
      <div className="container">
        <SectionTitle title="Bloqlar" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.slice(0, 3).map((post) => (
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
