import Link from "next/link";
import React from "react";
import { FaLongArrowAltRight, FaRegCalendarAlt } from "react-icons/fa";
import { MdArrowRightAlt } from "react-icons/md";
import { HiOutlineArrowLongRight } from "react-icons/hi2";

const BlogItem = ({ post }) => {
  return (
    <Link href={post.link}>
      <div className="rounded-lg h-full cursor-pointer group shadow-custom-gray bg-white">
        <div className="overflow-hidden">
          <img
            src={post.image}
            alt={post.title}
            className="rounded-xl w-full group-hover:scale-110 transition-all duration-500 ease-in"
          />
        </div>
        <div className="py-6 px-4 flex-grow flex flex-col gap-2">
          <h3 className="font-semibold text-base lg:text-md text-[#232323]">
            {post.title}
          </h3>
          <p className="leading-relaxed line-clamp-3 text-base text-secondary">
            {post.description}
          </p>
          <div className="flex text-[15px] justify-between pt-5 border-t border-[#b1b8ed]">
            <button className="flex gap-2 items-center font-semibold text-primary transition-colors duration-300 group hover:text-[#232323]">
              Ətraflı oxu
              <HiOutlineArrowLongRight className="mt-1 text-md transition-colors duration-300 group-hover:text-[#232323]" />
            </button>

            <span className="flex items-center font-semibold gap-2 text-primary">
              <FaRegCalendarAlt className="text-primary" />
              {post.date}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogItem;
