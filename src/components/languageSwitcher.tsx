import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  return (
    <select
      onChange={(e) => i18n.changeLanguage(e.target.value)}
      value={i18n.language}
      className="p-2 bg-gray-200 dark:bg-gray-700 rounded"
    >
      <option value="en">English</option>
      <option value="ka">ქართული</option>
    </select>
  );
};

export default LanguageSwitcher;
