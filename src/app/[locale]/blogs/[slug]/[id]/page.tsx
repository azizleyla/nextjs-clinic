import { notFound } from "next/navigation";
import Image from "next/image";
import { Banner } from "@/components";
import { createMetadata } from "@/core/seo/metadata";
import { blogPosts } from "@/features/blogs/constants/blogs";
import type { BlogPost } from "@/features/blogs/types";
import { generateSlug } from "@/utils/slug";
import { Link } from "@/core/i18n/navigation";
import { FaRegCalendarAlt, FaArrowLeft } from "react-icons/fa";

const RECENT_COUNT = 3;

type Params = { id: string; locale: string; slug: string };

function getRecentPosts(currentId: number): BlogPost[] {
  return blogPosts
    .filter((p) => p.id !== currentId)
    .slice(0, RECENT_COUNT);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}) {
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

  const recentPosts = getRecentPosts(post.id);

  return (
    <>
      <Banner dynamicTitle="Bloq" />
      <section className="pb-12">
        <div className="container px-4 lg:px-6">
          <Link
            href="/blogs"
            className="inline-flex items-center gap-2 text-primary font-medium hover:underline mb-6"
          >
            <FaArrowLeft className="w-4 h-4" aria-hidden />
            Bloqlara qayıt
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
            {/* Sol: məqalə – şəkil yuxarıda, mətn aşağıda */}
            <article className="lg:col-span-2">
              <div className="rounded-xl overflow-hidden mb-6 shadow-custom-gray">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={800}
                  height={450}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>
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

            {/* Sağ: Son bloqlar */}
            <aside className="lg:col-span-1">
              <div className="sticky top-24 rounded-xl border border-[#dee2e6] dark:border-gray-700 bg-white dark:bg-gray-900 shadow-custom-gray p-6">
                <h2 className="text-xl font-bold text-[#232323] dark:text-primary mb-4 pb-2 border-b border-[#b1b8ed] dark:border-gray-600">
                  Son bloqlar
                </h2>
                <ul className="space-y-4">
                  {recentPosts.map((p) => {
                    const postSlug = generateSlug(p.title);
                    return (
                      <li key={p.id}>
                        <Link
                          href={`/blogs/${postSlug}/${p.id}`}
                          className="group flex gap-3 items-start"
                        >
                          <span className="flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800">
                            <Image
                              src={p.image}
                              alt=""
                              width={64}
                              height={64}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                            />
                          </span>
                          <span className="flex-1 min-w-0">
                            <span className="font-medium text-[#232323] dark:text-primary line-clamp-2 group-hover:underline">
                              {p.title}
                            </span>
                            <span className="text-xs text-secondary mt-0.5 block">
                              {p.date}
                            </span>
                          </span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
                <Link
                  href="/blogs"
                  className="mt-5 inline-flex items-center justify-center w-full py-2.5 rounded-lg border-2 border-primary text-primary font-semibold hover:bg-primary hover:text-white transition"
                >
                  Bütün bloqlar
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
