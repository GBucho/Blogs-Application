import React from "react";
import { useTranslation } from "react-i18next";

export const Write: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section>
      <p className="text-left  bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white py-12 px-10 md:text-center">
        {t("author-description")}
      </p>
    </section>
  );
};

export default Write;

// import { Controller, useForm } from "react-hook-form";

// type FormValues = {
//   email: string;
//   password: string;
// };

// const QuestionForm = () => {
//   const { control, handleSubmit } = useForm<FormValues>({
//     defaultValues: { email: "", password: "" },
//   });
//   const onSubmit = (fieldValues: any) => {
//     console.log(fieldValues);
//   };

//   return (
//     <div className="flex flex-col items-center justify-center gap-y-4">
//       <label>Email</label>
//       <Controller
//         name="email"
//         control={control}
//         render={({ field: { value, onChange }, fieldState: { error } }) => {
//           console.log(error);

//           return (
//             <input
//               onChange={onChange}
//               value={value}
//               className="border border-black"
//             />
//           );
//         }}
//       />

//       <label>Password</label>
//       <Controller
//         name="password"
//         control={control}
//         render={({ field: { value, onChange } }) => {
//           return (
//             <input
//               onChange={onChange}
//               value={value}
//               type="password"
//               className="border border-black"
//             />
//           );
//         }}
//       />

//       <button type="submit" onClick={handleSubmit(onSubmit)}>
//         Submit
//       </button>
//     </div>
//   );
// };

// export default QuestionForm;
