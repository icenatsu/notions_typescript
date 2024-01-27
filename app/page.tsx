"use client";
import Navbar from "@components/Navbar/Navbar";
import ListLessons from "@components/ListLessons/ListLessons";
import { useState } from "react";

export type lessonName = 'typescript' | 'next' | ''

const Home = () => {

  const [lesson, setLesson] = useState<lessonName>('')
    console.log(lesson);
    
  return (
    <>
      <Navbar lesson={lesson} setLesson={setLesson}/>
      {lesson === "typescript" && <ListLessons/>}
    </>
  );
};

export default Home;
