import { generateSlug } from "@/utils/slug";
import { Link } from "@/core/i18n/navigation";
import { FaRegCalendarAlt, FaArrowRight } from "react-icons/fa";
import type { BlogPost } from "@/features/blogs/types";

type BlogItemProps = {
  post: BlogPost;
};

export default function BlogItem({ post }: BlogItemProps) {
  const slug = generateSlug(post.title);

  return (
    <Link href={`/blogs/${slug}/${post.id}`} className="block h-full">
      <div className="rounded-xl h-full flex flex-col cursor-pointer group shadow-sm hover:shadow-md border border-slate-100 dark:border-zinc-800 bg-white dark:bg-zinc-900 overflow-hidden transition-shadow duration-300">
        <div className="relative aspect-[4/3] overflow-hidden shrink-0 bg-slate-100 dark:bg-zinc-800">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div className="p-4 flex flex-col gap-2 flex-1 min-h-0">
          <h3 className="font-semibold text-base dark:text-primary text-secondary line-clamp-2">
            {post.title}
          </h3>
          <p className="leading-relaxed line-clamp-2 text-sm text-primary_bold flex-1">
            {post.description}
          </p>
          <div className="flex text-sm justify-between items-center pt-3 mt-auto border-t border-slate-200 dark:border-zinc-700">
            <span className="flex gap-2 items-center font-semibold text-primary transition-colors duration-300 group-hover:text-primary">
              Ətraflı oxu
              <FaArrowRight className="mt-0.5 text-sm" />
            </span>

            <span className="flex items-center font-semibold gap-2 text-primary">
              <FaRegCalendarAlt className="text-primary" />
              {post.date}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}

