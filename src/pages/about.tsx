// import React from "react";
// import { useTranslation } from "react-i18next";

// const AboutPage: React.FC = () => {
//   const { t } = useTranslation();

//   return (
//     <section>
//       <p className="text-left md:text-center">
//         {t("about-page.lang-version")}{" "}
//       </p>
//     </section>
//   );
// };

// export default AboutPage;

import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";

export default function AboutPage() {
  return (
    <div className="flex flex-col items-center bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white py-12 px-6">
      <div className="absolute top-4 right-4"></div>

      <div className="text-center max-w-3xl mb-16">
        <h1 className="text-4xl font-bold mb-4">About bitBlogs</h1>
        <p className="text-lg">
          Empowering tech enthusiasts to share knowledge and inspire innovation.
        </p>
      </div>

      <section className="max-w-4xl mb-16 text-center">
        <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
        <p className="text-gray-700 dark:text-gray-300">
          At bitBlogs, we believe in the power of shared knowledge. Our mission
          is to create a platform where tech enthusiasts, developers, and
          innovators can come together to share ideas, learn from each other,
          and push the boundaries of what's possible in the world of technology.
        </p>
      </section>

      <section className="max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <Card className="bg-white dark:bg-gray-800 text-center">
          <CardHeader>
            <CardTitle className="text-blue-500 text-lg">
              Rich Content
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 dark:text-gray-300">
              Access a wide range of articles, tutorials, and insights on the
              latest tech trends and best practices.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-white dark:bg-gray-800 text-center">
          <CardHeader>
            <CardTitle className="text-blue-500 text-lg">
              Vibrant Community
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 dark:text-gray-300">
              Connect with like-minded individuals, share your knowledge, and
              grow your professional network.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-white dark:bg-gray-800 text-center">
          <CardHeader>
            <CardTitle className="text-blue-500 text-lg">
              Cutting-edge Topics
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 dark:text-gray-300">
              Stay ahead of the curve with content covering emerging
              technologies and innovative solutions.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Story Section */}
      <section className="max-w-4xl mb-16 text-center">
        <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
        <p className="text-gray-700 dark:text-gray-300">
          Founded in 2023, bitBlogs started as a small project by a group of
          passionate developers who wanted to create a space for sharing their
          experiences and learning from others. What began as a simple blog
          quickly grew into a thriving community of tech enthusiasts from all
          around the world.
        </p>
        <p className="text-gray-700 dark:text-gray-300 mt-4">
          Today, bitBlogs is proud to be a leading platform for
          technology-focused content, fostering innovation and collaboration in
          the ever-evolving world of tech.
        </p>
      </section>

      <div className="text-center">
        <h2 className="text-2xl font-semibold mb-4">Join Us on Our Journey</h2>
        <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mb-6">
          Whether you're a seasoned developer, a curious beginner, or somewhere
          in between, there's a place for you at bitBlogs. Let's shape the
          future of technology together.
        </p>
        <Button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3">
          Get Started Today
        </Button>
      </div>
    </div>
  );
}
