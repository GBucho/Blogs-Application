// // import React from "react";
// // import { useTranslation } from "react-i18next";

// // export const Write: React.FC = () => {
// //   const { t } = useTranslation();

// //   return (
// //     <section>
// //       <p className="text-left  bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white py-12 px-10 md:text-center">
// //         {t("author-description")}
// //       </p>
// //     </section>
// //   );
// // };

// // export default Write;

import { supabase } from "../supabase";
import { useEffect, useState } from "react";
import CreateBlogForm from "./createBlogs/CreateBlogs";
import { Input } from "../components/ui/input";
import { useSearchParams } from "react-router-dom";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import qs from "qs";
import useDebounce from "./hooks/debounce";

dayjs.extend(relativeTime);

type SingleBlog = {
  title: string;
  description: string;
  id: number;
  image_url: string;
  user_id: string;
  created_at: string;
};

const Blogs = () => {
  const [blogs, setBlogs] = useState<SingleBlog[]>([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchText, setSearchText] = useState(
    searchParams.get("searchText") || ""
  );
  const debouncedSearchText = useDebounce(searchText, 500);

  useEffect(() => {
    const query = qs.stringify({ searchText: debouncedSearchText });
    setSearchParams(query);

    supabase
      .from("Blogs")
      .select("*")
      .like("title", `%${debouncedSearchText}%`)
      .throwOnError()
      .then((res) => {
        const blogsList = res.data as unknown as SingleBlog[];
        setBlogs(blogsList);
      });
  }, [debouncedSearchText, setSearchParams]);

  return (
    <div>
      <CreateBlogForm />
      <div className="flex justify-center items-center gap-x-4 my-4">
        <Input
          onChange={(e) => setSearchText(e.target.value)}
          value={searchText}
          placeholder="Search blogs"
          className="border border-black"
        />
      </div>
      <div className="flex flex-col gap-y-10 px-32">
        {blogs.map((blog) => {
          const blogImageUrl = blog.image_url
            ? `${import.meta.env.VITE_SUPABASE_BLOG_IMAGES_STORAGE_URL}/${blog.image_url}`
            : "";

          const formattedDate =
            dayjs().diff(blog.created_at, "day") < 1
              ? dayjs(blog.created_at).fromNow()
              : dayjs(blog.created_at).format("HH:mm - DD/MM/YYYY");

          return (
            <div
              key={blog.id}
              className="flex flex-col gap-y-4 p-6 border border-gray-400"
            >
              <div>
                <img
                  className="border border-black"
                  src={blogImageUrl}
                  alt={blog.title}
                />
              </div>
              <div className="text-lg font-bold">{blog.title}</div>
              <div className="text-sm text-gray-600">{formattedDate}</div>
              <div>{blog.description}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Blogs;
