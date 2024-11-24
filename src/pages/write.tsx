import React from "react";
import { useTranslation } from "react-i18next";

export const Write: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section>
      <p className="text-left md:text-center">{t("write-page.lang-version")}</p>
    </section>
  );
};
