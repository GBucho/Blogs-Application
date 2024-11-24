// import { Card } from "../components/ui/card";
import React from "react";
import { useTranslation } from "react-i18next";

const AboutPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section>
      <p className="text-left md:text-center">
        {t("about-page.lang-version")}{" "}
      </p>
    </section>
  );
};

export default AboutPage;
