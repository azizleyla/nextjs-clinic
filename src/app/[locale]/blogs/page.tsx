import { createMetadata } from "@/core/seo/metadata";
import { DEFAULT_BLOGS_PER_PAGE } from "@/features/blogs/constants/blogs";
import { getBlogsList } from "@/features/blogs/api";
import BlogsList from "./BlogsList";
import SectionTitle from "@/shared/ui/typography/SectionTitle";

type PageProps = {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ page?: string }>;
};

export async function generateMetadata({ params }: PageProps) {
  const { locale } = await params;
  return createMetadata({
    title: "Bloqlar",
    description: "Tibbi məsləhətlər, sağlamlıq xəbərləri və faydalı bloqlar.",
    path: "/blogs",
    image: "/images/blog1.jpg",
    keywords: ["Bloqlar", "Sağlamlıq", "Məsləhətlər"],
    locale,
  });
}

export default async function Blogs({ params, searchParams }: PageProps) {
  const { locale } = await params;
  const query = await searchParams;
  const page = Math.max(1, parseInt(query?.page || "1", 10) || 1);
  const data = await getBlogsList(locale, DEFAULT_BLOGS_PER_PAGE, page);
  const posts = data.posts;
  return (
    <section className="pt-8 md:pt-10">
      <div className="container">
        <SectionTitle subtitle="Sağlamlıq bloqu" title="Bloqlar" />
        <BlogsList
          posts={posts}
          currentPage={data?.currentPage}
          totalPages={data?.totalPages}
        />
      </div>
    </section>
  );
}
