import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import { Banner } from "@/components";
import { createMetadata } from "@/core/seo/metadata";
import type { BlogPost } from "@/features/blogs/types";
import { getBlogById, getBlogsList } from "@/features/blogs/api";
import { Link } from "@/core/i18n/navigation";
import { FaRegCalendarAlt, FaArrowLeft } from "react-icons/fa";
import BlogsSection from "@/features/blogs/components/BlogsSection";

const RECENT_COUNT = 3;

type Params = { id: string; locale: string; slug: string };

async function getOtherPosts(
  locale: string,
  currentId: number
): Promise<BlogPost[]> {
  const list = await getBlogsList(locale).catch(() => []);
  return list.filter((p) => p.id !== currentId).slice(0, RECENT_COUNT);
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
      <Banner dynamicTitle="Bloq" />
      <div className="container">
        <div className="pt-8 md:pt-12" />
        <div className="w-full aspect-[21/9] min-h-[220px] md:min-h-[280px] relative bg-slate-200 dark:bg-zinc-800">
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
          <div className="container px-4 lg:px-6">
            <Link
              href="/blogs"
              className="inline-flex items-center gap-2 text-primary font-medium hover:underline mb-6"
            >
              <FaArrowLeft className="w-4 h-4" aria-hidden />
              Bloqlara qayıt
            </Link>
            <article className="max-w-5xl">
              <h1 className="text-2xl lg:text-3xl font-bold text-[#232323] dark:text-primary mb-3">
                {post.title}
              </h1>
              <p className="flex items-center gap-2 text-secondary text-sm mb-6">
                <FaRegCalendarAlt className="text-primary" aria-hidden />
                {post.date}
              </p>
              {post.description ? (
                <p className="text-secondary text-lg mb-6">{post.description}</p>
              ) : null}
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
