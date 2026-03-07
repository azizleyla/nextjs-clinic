import { Banner } from "@/components";
import { createMetadata } from "@/core/seo/metadata";
import {
  getPaginatedPosts,
  DEFAULT_BLOGS_PER_PAGE,
} from "@/features/blogs/constants/blogs";
import BlogsList from "./BlogsList";

type PageProps = {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ page?: string }>;
};

export async function generateMetadata({ params }: PageProps) {
  const { locale } = await params;
  return createMetadata({
    title: "Bloqlar",
    description:
      "Tibbi məsləhətlər, sağlamlıq xəbərləri və faydalı bloqlar.",
    path: "/blogs",
    image: "/images/blog1.jpg",
    keywords: ["Bloqlar", "Sağlamlıq", "Məsləhətlər"],
    locale,
  });
}

export default async function Blogs({ searchParams }: PageProps) {
  const params = await searchParams;
  const page = Math.max(1, parseInt(params?.page || "1", 10) || 1);
  const { posts, totalPages, currentPage } = getPaginatedPosts(
    page,
    DEFAULT_BLOGS_PER_PAGE
  );

  return (
    <>
      <Banner pageKey="BlogPage" />
      <section>
        <div className="container">
          <BlogsList
            posts={posts}
            currentPage={currentPage}
            totalPages={totalPages}
          />
        </div>
      </section>
    </>
  );
}
