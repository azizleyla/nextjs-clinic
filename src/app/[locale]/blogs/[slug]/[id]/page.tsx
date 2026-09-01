import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import { createMetadata } from "@/core/seo/metadata";
import type { BlogPost } from "@/features/blogs/types";
import { getBlogById, getBlogsList } from "@/features/blogs/api";
import { Link } from "@/core/i18n/navigation";
import { FaRegCalendarAlt, FaArrowLeft } from "react-icons/fa";
import BlogsSection from "@/features/blogs/components/BlogsSection";
import Breadcrumb from "@/shared/ui/breadcrumb/Breadcrumb";

// Slayderin (home-dakı kimi) həqiqətən sürüşməsi üçün 3 sütundan çox post
// lazımdır — ona görə daha çox gətirib göstəririk.
const RECENT_COUNT = 8;

type Params = { id: string; locale: string; slug: string };

async function getOtherPosts(
  locale: string,
  currentId: number,
): Promise<BlogPost[]> {
  const { posts } = await getBlogsList(locale, 12, 1).catch(() => ({
    posts: [] as BlogPost[],
    totalPages: 0,
    currentPage: 1,
    totalElements: 0,
  }));
  return posts.filter((p) => p.id !== currentId).slice(0, RECENT_COUNT);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { id, locale } = await params;
  const post = await getBlogById(id, locale).catch(() => null);
  if (!post) return {};
  return createMetadata({
    title: post.title,
    description: post.description,
    path: `/blogs/${post.slug}/${post.id}`,
    image: post.image,
    keywords: ["Bloq", "Sağlamlıq", post.title, ...post.tags],
    locale,
  });
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { id, slug, locale } = await params;
  const post = await getBlogById(id, locale).catch(() => null);
  if (!post) notFound();

  if (slug !== post.slug) notFound();

  const otherPosts = await getOtherPosts(locale, post.id);

  return (
    <>
      <div className="container">
        <Breadcrumb
          className="pt-6"
          items={[
            { label: "Əsas", href: "/" },
            { label: "Bloqlar", href: "/blogs" },
            { label: post.title },
          ]}
        />
        <div className="pt-5 md:pt-7" />
        <div className="w-full aspect-[21/9] min-h-[220px] md:min-h-[280px] relative bg-sage/20 dark:bg-zinc-800 rounded-3xl overflow-hidden ring-1 ring-sand shadow-xl shadow-forest/10">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </div>

        <section className="pb-12">
          <div className="container px-2 lg:px-6">
            <article className="max-w-5xl">
              <p className="mt-8 mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-clay">
                <FaRegCalendarAlt aria-hidden />
                {post.date}
              </p>
              <h1 className="font-heading text-xl md:text-2xl lg:text-3xl font-semibold leading-[1.22] tracking-tight text-ink mb-6">
                {post.title}
              </h1>

              <div
                className="prose prose-lg max-w-full text-secondary leading-relaxed blog-content overflow-hidden"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </article>
          </div>
        </section>
      </div>

      {otherPosts.length > 0 ? (
        <BlogsSection posts={otherPosts} title="Digər bloqlar" />
      ) : null}
    </>
  );
}
