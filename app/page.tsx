"use client";
import Navbar from "@components/Navbar/Navbar";
import ListLessons from "@components/ListLessons/ListLessons";
import { useState } from "react";

export type lessonName = 'typescript' | 'next' | ''

const Home = () => {

  const [lesson, setLesson] = useState<lessonName>('')

    const handleClickCategoryLessons = (lesson: lessonName) => {
      setLesson(lesson)
    };

  return (
    <>
      <Navbar lesson={lesson} handleClickCategoryLessons={handleClickCategoryLessons}/>
      {lesson === "typescript" && <ListLessons lesson={lesson}/>}
      {lesson === "next" && <ListLessons lesson={lesson}/>}
    </>
  );
};

export default Home;
