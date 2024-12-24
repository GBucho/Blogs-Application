import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { userAtom } from "../../store/auth";
import { supabase } from "../../supabase";
import { useAtom } from "jotai";
import { Controller, useForm } from "react-hook-form";

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

const CreateBlogForm = () => {
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
      <Button onClick={handleSubmit(onSubmit)}>Create Blog</Button>
    </div>
  );
};
export default CreateBlogForm;
