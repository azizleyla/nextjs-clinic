import { Banner } from "@/components";
import { apiClient } from "@/lib/apiClient";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaCalendarAlt, FaRegCalendarAlt } from "react-icons/fa";

export async function BlogDetail({ params }) {
  const { id } = params;
  const blog = await apiClient.get(`api/blogs/${id}`);

  return (
    <>
      <Banner title="Blog detail" />
      <div className="container ">
        <div className="flex flex-col gap-4 pt-32 lg:flex-row">
          <div className="w-full lg:w-8/12">
            <div>
              <Image
                width="700"
                height="500"
                alt={blog.title}
                src={`${blog?.image}`}
              />
            </div>
            <h2 className="font-bold text-2xl lg:text-3xl my-4">
              {blog?.title}
            </h2>
            <ul>
              <li className="text-primary font-semibold text-xs flex items-center gap-2">
                <FaRegCalendarAlt />
                Jan 03, 2022
              </li>
            </ul>
            <div className="text-secondary my-3  text-sm leading-relaxed flex flex-col gap-4">
              <p>{blog?.description}</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Quis ipsum suspendisse ultrices gravida.
              </p>
            </div>
          </div>
          <div className="w-full lg:w-4/12">
            <h3 className="font-semibold text-lg mb-6">Son məqalələr</h3>
            <div className="flex flex-col gap-5 mb-10">
              <div>
                <div className="flex gap-2 items-center">
                  <Image
                    alt={blog?.title}
                    src={blog.image}
                    width="100"
                    height="100"
                  />
                  <div>
                    <Link
                      href={blog.title}
                      className="text-sm hover:text-primary font-medium"
                    >
                      {blog.title}
                    </Link>
                    <ul>
                      <li className="text-primary text-xs flex items-center gap-2">
                        <FaRegCalendarAlt />
                        Jan 03, 2022
                      </li>{" "}
                    </ul>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex gap-2 items-center">
                  <Image
                    alt={blog?.title}
                    src={blog.image}
                    width="100"
                    height="100"
                  />
                  <div>
                    <Link
                      href={blog.title}
                      className="text-sm hover:text-primary  font-medium"
                    >
                      {blog.title}
                    </Link>
                    <ul>
                      <li className="text-primary text-xs flex items-center gap-2">
                        <FaRegCalendarAlt />
                        Jan 03, 2022
                      </li>{" "}
                    </ul>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex gap-2 items-center">
                  <Image
                    alt={blog?.title}
                    src={blog.image}
                    width="100"
                    height="100"
                  />
                  <div>
                    <Link
                      href={blog.title}
                      className="text-sm hover:text-primary  font-medium"
                    >
                      {blog.title}
                    </Link>
                    <ul>
                      <li className="text-primary text-xs flex items-center gap-2">
                        <FaRegCalendarAlt />
                        Jan 03, 2022
                      </li>{" "}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-6">Bölmələr</h3>
              <ul className="flex flex-row flex-wrap gap-2">
                <li className="py-3 px-6 hover:bg-secondary font-medium cursor-pointer hover:text-white bg-[#e5e5e5] text-sm rounded-lg text-secondary">
                  <Link href="/blog/">Dental</Link>
                </li>
                <li className="py-3 px-6 font-medium hover:bg-secondary hover:text-white cursor-pointer bg-[#e5e5e5] text-sm rounded-lg text-secondary">
                  <Link href="/blog/">Health</Link>
                </li>
                <li className="py-3 px-6 font-medium hover:bg-secondary hover:text-white cursor-pointer bg-[#e5e5e5] text-sm rounded-lg text-secondary">
                  <Link href="/blog/">Child</Link>
                </li>
                <li className="py-3 px-6 font-medium hover:bg-secondary hover:text-white cursor-pointer bg-[#e5e5e5] text-sm rounded-lg text-secondary">
                  <Link href="/blog/">Medicine</Link>
                </li>
                <li className="py-3 px-6 font-medium hover:bg-secondary hover:text-white cursor-pointer bg-[#e5e5e5] text-sm rounded-lg text-secondary">
                  <Link href="/blog/">Caveti</Link>
                </li>
                <li className="py-3 px-6 font-medium  hover:bg-secondary hover:text-white cursor-pointer bg-[#e5e5e5] text-sm rounded-lg text-secondary">
                  <Link href="/blog/">AIDS</Link>
                </li>
                <li className="py-3 px-6 font-medium hover:bg-secondary hover:text-white cursor-pointer bg-[#e5e5e5] text-sm rounded-lg text-secondary">
                  <Link href="/blog/">Dental</Link>
                </li>
                <li className="py-3 px-6 font-medium hover:bg-secondary hover:text-white cursor-pointer bg-[#e5e5e5] text-sm rounded-lg text-secondary">
                  <Link href="/blog/">Health</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BlogDetail;
