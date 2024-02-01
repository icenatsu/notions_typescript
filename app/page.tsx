"use client";
import Navbar from "@components/Navbar";
import ListLessons from "@components/ListLessons";
import { useState } from "react";
// import Test from "@/test";

export type lessonName = "typescript" | "next" | "fetch" | "";

const Home = () => {
  const [lesson, setLesson] = useState<lessonName>("");

  const handleClickCategoryLessons = (lesson: lessonName) => {
    setLesson(lesson);
  };

  return (
    <>
      <header>
        <Navbar handleClickCategoryLessons={handleClickCategoryLessons} />
      </header>
      <main>
        {lesson === "typescript" && <ListLessons lesson={lesson} />}
        {lesson === "next" && <ListLessons lesson={lesson} />}
        {lesson === "fetch" && <ListLessons lesson={lesson} />}
        {/* <Test/> */}
      </main>
      <footer className="text-center w-full text-sm fixed bottom-0">
        @Design by ice
      </footer>
    </>
  );
};

export default Home;
