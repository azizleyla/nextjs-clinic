import { Banner } from "@/components";
import { createMetadata } from "@/core/seo/metadata";
import { apiClient } from "@/core/api/apiClient";
import { DEFAULT_BLOGS_PER_PAGE } from "@/features/blogs/constants/blogs";
import type { BlogPost } from "@/features/blogs/types";
import BlogsList from "./BlogsList";

type PageProps = {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ page?: string }>;
};

type BlogsApiResponse = {
  data: BlogPost[];
  total: number;
  total_pages: number;
  current_page: number;
  per_page: number;
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
  const data = await apiClient.get<BlogsApiResponse>(
    `/api/blogs?page=${page}&per_page=${DEFAULT_BLOGS_PER_PAGE}`
  );

  return (
    <>
      <Banner pageKey="BlogPage" />
      <section>
        <div className="container">
          <BlogsList
            posts={data.data}
            currentPage={data.current_page}
            totalPages={data.total_pages}
          />
        </div>
      </section>
    </>
  );
}
