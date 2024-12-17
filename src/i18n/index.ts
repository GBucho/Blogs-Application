import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import { initReactI18next } from "react-i18next";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      ka: {
        translation: {
          // "nav-home": "მთავარი",
          // "nav-write": "წერა",
          // "nav-about": "ჩვენს შესახებ",
          // "sign-in-btn": "შესვლა",
          // "log-out-btn": "გასვლა",

          "author-description": "ლორემ იპსუმ დოლორი",

          "form-name": "სახელი",
          "form-email": "იმეილი",
          "form-password": "პაროლი",
          "form-repeat-password": "გაიმეორეთ პაროლი",
          "form-have-an-account": "უკვე გააქვთ ექაუნთი?",
          "form-sign-in": "შესვლა",
          "form-submit-btn": "გაგზავნა",
          "form-forgot-password": "პაროლი დაგავიწყდათ?",
          "form-sign-up": "დარეგისტრირება",
          "form-dont-have-an-account": "არ გაქვთ ექაუნთი?",

          "email-required": "იმეილი აუცილებელია",
          "email-pattern-message": "იმეილი არასწორი ფორმატი",
          "email-min-length-message":
            "ემაილი უნდა შეიცავდეს მინიმუმ 5 სიმბოლოს",
          "email-max-length-message": "იმეილი ვერ იქნება 100 სიმბოლოზე მეტი",

          "password-required": "პაროლი აუცილებელია",
          "password-pattern-message": "პაროლის არასწორი ფორმატი",
          "password-min-length-message":
            "პაროლი უნდა შეიცავდეს მინიმუმ 8 სიმბოლოს",
          "password-max-length-message": "პაროლი ვერ იქნება 25 სიმბოლოზე მეტი",

          "name-required": "იმეილი აუცილებელია",
        },
      },
      en: {
        translation: {
          // "nav-home": "home",
          // "nav-write": "write",
          // "nav-about": "about",
          // "sign-in-btn": "Sign in",
          // "log-out-btn": "Log out",

          "author-description": "lorem ipsum dolor",

          "form-name": "Name",
          "form-email": "E-mail",
          "form-password": "Password",
          "form-repeat-password": "Repeat Password",
          "form-have-an-account": "Already have an account?",
          "form-sign-in": "Sign In",
          "form-submit-btn": "Submit",
          "form-forgot-password": "Forgot password?",
          "form-sign-up": "Sign up",
          "form-dont-have-an-account": "Don't have an account?",

          "email-required": "Email is crucial",
          "email-pattern-message": "Invalid email format",
          "email-min-length-message":
            "Email must contain at least 5 characters",
          "email-max-length-message": "Email cannot exceed 100 characters",

          "password-required": "Password is crucial",
          "password-pattern-message": "Invalid password format",
          "password-min-length-message":
            "password must contain at least 8 characters",
          "password-max-length-message": "password cannot exceed 25 characters",

          "name-required": "Name is required",
        },
      },
    },
    lng: "ka",
    fallbackLng: "en",

    interpolation: {
      escapeValue: false,
    },
  });
