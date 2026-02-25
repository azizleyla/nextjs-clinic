import { Banner, BlogItem, Button } from "@/components";
import { createMetadata } from "@/core/seo/metadata";
import { blogPosts } from "@/features/blogs/constants/blogs";
import type { BlogPost } from "@/features/blogs/types";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: PageProps) {
  const resolvedParams = await params;
  const { locale } = resolvedParams;
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

export default function Blogs() {
  return (
    <>
      <Banner pageKey="BlogPage" />
      <section>
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post: BlogPost) => (
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
}
