import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import { Banner } from "@/components";
import { createMetadata } from "@/core/seo/metadata";
import { blogPosts } from "@/features/blogs/constants/blogs";
import type { BlogPost } from "@/features/blogs/types";
import { generateSlug } from "@/utils/slug";
import { Link } from "@/core/i18n/navigation";
import { FaRegCalendarAlt, FaArrowLeft } from "react-icons/fa";
import BlogsSection from "@/features/blogs/components/BlogsSection";

const RECENT_COUNT = 3;

type Params = { id: string; locale: string; slug: string };

function getOtherPosts(currentId: number): BlogPost[] {
  return blogPosts
    .filter((p) => p.id !== currentId)
    .slice(0, RECENT_COUNT);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { id, locale } = await params;
  const post = blogPosts.find((p) => String(p.id) === id);
  if (!post) return {};
  return createMetadata({
    title: post.title,
    description: post.description,
    path: `/blogs/${generateSlug(post.title)}/${post.id}`,
    image: post.image,
    keywords: ["Bloq", "Sağlamlıq", post.title],
    locale,
  });
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { id, slug } = await params;
  const post = blogPosts.find((p) => String(p.id) === id);
  if (!post) notFound();

  const expectedSlug = generateSlug(post.title);
  if (slug !== expectedSlug) notFound();

  const otherPosts = getOtherPosts(post.id);

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
          <article className="max-w-3xl">
            <h1 className="text-2xl lg:text-3xl font-bold text-[#232323] dark:text-primary mb-3">
              {post.title}
            </h1>
            <p className="flex items-center gap-2 text-secondary text-sm mb-6">
              <FaRegCalendarAlt className="text-primary" aria-hidden />
              {post.date}
            </p>
            <div className="prose prose-lg max-w-none text-secondary leading-relaxed">
              <p>{post.description}</p>
            </div>
          </article>
        </div>
      </section>
      </div>

      {otherPosts.length > 0 && (
        <BlogsSection posts={otherPosts} title="Digər bloqlar" />
      )}
    </>
  );
}
