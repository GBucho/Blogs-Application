// import React from "react";
// import { useTranslation } from "react-i18next";

// export const Write: React.FC = () => {
//   const { t } = useTranslation();

//   return (
//     <section>
//       <p className="text-left  bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white py-12 px-10 md:text-center">
//         {t("author-description")}
//       </p>
//     </section>
//   );
// };

// export default Write;

import { useAtom } from "jotai";
import { Input } from "../components/ui/input";
import { supabase } from "../supabase";
import { Controller, useForm } from "react-hook-form";
import { userAtom } from "../store/auth";

type BlogsListCreateValues = {
  title: string;
  description: string;
  image_file: null | File;
};

const BlogsListFilterDefaultValues = {
  title: "",
  description: "",
  image_file: null,
};

const Write = () => {
  const [user] = useAtom(userAtom);
  const { control, handleSubmit } = useForm<BlogsListCreateValues>({
    defaultValues: BlogsListFilterDefaultValues,
  });
  const onSubmit = (formValues: BlogsListCreateValues) => {
    if (formValues?.image_file) {
      supabase.storage
        .from("blogs_images")
        .upload(formValues?.image_file?.name, formValues?.image_file)
        .then((res) => {
          // profiles ის ცხრილს ხედავს და Blog ების ცხრილი ვერ დავანახე :/
          supabase.from("Blogs").insert({
            title: formValues.title,
            description: formValues.description,
            image_url: res.data?.fullPath,
            user_id: user?.user?.id,
          });
          console.log("upload file responce: ", res.data?.fullPath);
        });
    }
  };

  return (
    <div className="flex flex-col items-center justify-center gap-y-4">
      <div className="flex w-96 flex-col items-center gap-y-4 mt-2">
        <Controller
          name="title"
          control={control}
          render={({ field: { value, onChange } }) => {
            return (
              <Input
                onChange={onChange}
                value={value}
                placeholder="Title"
                className="border border-black"
              />
            );
          }}
        />

        <Controller
          name="description"
          control={control}
          render={({ field: { value, onChange } }) => {
            return (
              <Input
                onChange={onChange}
                value={value}
                placeholder="Description"
                className="border border-black"
              />
            );
          }}
        />

        <Controller
          name="image_file"
          control={control}
          render={({ field: { onChange } }) => {
            return (
              <Input
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  onChange(file);
                }}
                type="file"
                placeholder="File"
                className="border border-black"
              />
            );
          }}
        />
      </div>
      <button type="submit" onClick={handleSubmit(onSubmit)}>
        Creata Blog
      </button>
    </div>
  );
};

export default Write;
