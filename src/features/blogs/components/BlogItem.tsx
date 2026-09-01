import { Link } from "@/core/i18n/navigation";
import { FaRegCalendarAlt, FaArrowRight } from "react-icons/fa";
import type { BlogPost } from "@/features/blogs/types";

type BlogItemProps = {
  post: BlogPost;
};

export default function BlogItem({ post }: BlogItemProps) {
  return (
    <Link href={`/blogs/${post.slug}/${post.id}`} className="block h-full">
      <div className="rounded-3xl h-full flex flex-col cursor-pointer group border border-sand dark:border-zinc-800 bg-paper dark:bg-zinc-900 overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-forest/10 hover:border-forest/20">
        <div className="relative aspect-[16/10] overflow-hidden shrink-0 bg-sage/20 dark:bg-zinc-800">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div className="p-5 flex flex-col gap-2 flex-1 min-h-0">
          <span className="flex items-center gap-2 text-xs font-semibold text-clay">
            <FaRegCalendarAlt />
            {post.date}
          </span>
          <h3 className="font-heading font-semibold text-base md:text-lg text-ink dark:text-white line-clamp-2 group-hover:text-forest transition-colors">
            {post.title}
          </h3>
          <p className="leading-relaxed line-clamp-2 text-sm text-primary_bold flex-1">
            {post.description}
          </p>
          <div className="flex text-sm items-center pt-4 mt-auto border-t border-sand dark:border-zinc-700">
            <span className="flex gap-2 items-center font-semibold text-forest">
              Ətraflı oxu
              <FaArrowRight className="mt-0.5 text-xs transition-transform group-hover:translate-x-1" />
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}

