import React from "react";
import { useTranslation } from "react-i18next";

export const Write: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <section>
        <p className="text-left  bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white py-12 px-10 md:text-center">
          {t("write-page.lang-version")}
        </p>
      </section>
    </>
  );
};
