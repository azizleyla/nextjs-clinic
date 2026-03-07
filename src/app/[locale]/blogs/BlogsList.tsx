import { BlogItem, Pagination } from "@/components";
import type { BlogPost } from "@/features/blogs/types";

type BlogsListProps = {
  posts: BlogPost[];
  currentPage: number;
  totalPages: number;
};

export default function BlogsList({
  posts,
  currentPage,
  totalPages,
}: BlogsListProps) {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <BlogItem post={post} key={post.id} />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        basePath="/blogs"
        ariaLabel="Bloq səhifələri"
      />
    </>
  );
}
