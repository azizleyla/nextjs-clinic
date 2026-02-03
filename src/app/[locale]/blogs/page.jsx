import { Banner, BlogItem, Button } from "@/src/components";
import { blogPosts } from "@/src/utils/constants/blogs";
import React from "react";

export const metadata = {
  title: "Elmed Hospital | Bloqlar",
  description:
    "Elmed Hospital bloqları ilə tibbi məsləhətlər, sağlamlıq xəbərləri və faydalı məlumatlarla tanış olun.",
  keywords: ["Elmed Hospital", "Bloqlar"],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Elmed Hospital – Bloqlar",
    description:
      "Tibbi məsləhətlər, sağlamlıq xəbərləri və faydalı bloqlar Elmed Hospital-də.",
    url: "https://elmed-clinic.vercel.app/blogs",
    siteName: "Elmed Hospital",
    images: [
      {
        url: "https://elmed-clinic.vercel.app/images/blog1.jpg",
        width: 1200,
        height: 630,
        alt: "Elmed Hospital Bloqlar",
      },
    ],
    locale: "az_AZ",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Elmed Hospital – Bloqlar",
    description:
      "Elmed Hospital bloqları ilə tibbi məsləhətlər, sağlamlıq xəbərləri və faydalı məlumatlarla tanış olun.",
    images: ["https://elmed-clinic.vercel.app/images/blog1.jpg"],
  },
};

const Blogs = () => {
  return (
    <>
      <Banner pageKey="BlogPage" />
      <section>
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
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
};

export default Blogs;
